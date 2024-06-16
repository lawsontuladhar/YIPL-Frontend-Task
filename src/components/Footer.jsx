function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-side-footer">
          <img
            src="../../assets/images/catalog-logo-white.png"
            alt="company-logo"
            className="company-logo"
          />

          <p className="company-description">
            We are a collaboration of non-government organisation and
            professionals working to ensure that government spending.
          </p>
          <div className="social-media-icon">
            <img src="../../assets/icons/twitter.png" alt="" />
            <img src="../../assets/icons/linkedin.png" alt="" />
            <img src="../../assets/icons/youtube.png" alt="" />
          </div>
        </div>

        <div className="right-side-footer">
          <div className="links">
            <h2>Links</h2>
            <a href="#Campaigns">Campaigns</a>
            <a href="#Resources">Resources</a>
            <a href="#News">News</a>
            <a href="#AboutUs">About Us</a>
          </div>
          <div className="resources">
            <h2>Resources</h2>
            <a href="#">Transparency Toolkit</a>
            <a href="#">Evidence</a>
            <a href="#">Best Practices</a>
            <a href="#AboutUs">About Us</a>
          </div>
          <div className="work-with-us">
            <h2>Work with us</h2>
            <a href="#ContactUs">Contact Us</a>
            <a href="#AboutUs">Join Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-line">
        <p>Terms and Conditions</p>
        <img src="../../assets/icons/cc.logo.large.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
