const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists or create it
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Signup Controller
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token, isNewUser: !user.profileCompleted });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Complete Profile Controller with File Upload
const completeProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { 
      phone, dob, gender, address, specialization, licenseNumber, practiceLength, 
      affiliation, identificationType, identificationNumber, consentHealth, 
      consentDisclosure, agreePrivacyPolicy 
    } = req.body;

    const user = await User.findByIdAndUpdate(userId, {
      phone, dob, gender, address, specialization, licenseNumber, 
      practiceLength, affiliation, identificationType, identificationNumber, 
      consentHealth, consentDisclosure, agreePrivacyPolicy,
      file: req.file ? req.file.path : '', // Save file path if file is uploaded
      profileCompleted: true
    });

    res.json({ message: 'Profile completed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login, completeProfile, upload };
