<<<<<<< Updated upstream
// import Header from './components/Header';
// import Hero from './components/Hero';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import Articles from './components/Articles';
// import Footer from './components/Footer';
// import RegistrationForm from './components/User/RegistrationForm';
// import SignUpForm from "./components/User/SignUpForm";
import ServicesPage from "./components/model/ServicesPage";
//import SignInForm from "./components/User/SignInForm";
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Articles from './components/Articles';
import Footer from './components/Footer';
import RegistrationForm from './components/User/RegistrationForm';
import SignUpForm from "./components/User/SignUpForm";
import SignInForm from "./components/User/SignInForm";
>>>>>>> Stashed changes

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
<<<<<<< Updated upstream
    <div className="App">
      {
        // <RegistrationForm />
        // <SignUpForm />
      //<SignInForm />
      <ServicesPage />
      }
      {/* <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Articles />
      <Footer /> */}
    </div>
=======
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={
            <>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Hero />
              <AboutUs />
              <Services isLoggedIn={isLoggedIn} />
              <Articles />
              <Footer />
            </>
          } />

          {/* Route for Sign Up page */}
          <Route path="/signup" element={<SignUpForm />} />

          {/* Route for Sign In page, passing setIsLoggedIn to update login state */}
          <Route path="/signin" element={<SignInForm setIsLoggedIn={setIsLoggedIn} />} />

          {/* Additional routes as needed */}
        </Routes>
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
