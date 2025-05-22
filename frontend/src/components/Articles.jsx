import './Articles.css';
import article1 from '/src/assets/article1.png'; 
import article2 from '/src/assets/article2.png';
import article3 from '/src/assets/article3.png';

const Articles = () => {
  return (
    <section id="articles" className="articles">
      <h2>Research Articles</h2>
      <p className="articles-description">
        Some research articles focused on the cutting-edge advancements in diabetic retinopathy detection and related fields.
      </p>
      <div className="article-list">
        <div className="article">
          <img src={article1} alt="Article 1" className="article-image" />
          <div className="article-tags">
            <span className="tag">Research</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>Understanding Diabetic Retinopathy</h3>
          <p>Highlight the role of interprofessional collaboration.</p>
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK560805/" className="read-more-link">Read more &gt;</a>
        </div>
        <div className="article">
          <img src={article2} alt="Article 2" className="article-image" />
          <div className="article-tags">
            <span className="tag">Innovation</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>The Future of Eye Health</h3>
          <p>An Overview on Mechanisms, Pathophysiology and Pharmacotherapy.</p>
          <a href="https://www.researchgate.net/publication/358609574_Diabetic_Retinopathy_An_Overview_on_Mechanisms_Pathophysiology_and_Pharmacotherapy" className="read-more-link">Read more &gt;</a>
        </div>
        <div className="article">
          <img src={article3} alt="Article 3" className="article-image" />
          <div className="article-tags">
            <span className="tag">Trends</span>
            <span className="read-time">5 min read</span>
          </div>
          <h3>Narrative review</h3>
          <p>Interdisciplinary approaches and future perspectives</p>
          <a href="https://bmjpublichealth.bmj.com/content/3/1/e001353" className="read-more-link">Read more &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
