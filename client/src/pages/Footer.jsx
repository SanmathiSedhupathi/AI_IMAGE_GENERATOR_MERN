import React from "react";
import "../footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <h2>🧠 AI Image Generator</h2>
        <p>
          Generate stunning images using text prompts with Stable Diffusion 3.5.
          Share, explore, and inspire in the community gallery.
        </p>
      </div>

      <div className="footer-links" style={{ textAlign: "center" }}>
        <p>Connect with us:</p>

        <a
          href="https://github.com/SanmathiSedhupathi"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
            alt="GitHub"
            width="35"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
            alt="LinkedIn"
            width="35"
          />
        </a>

        <a
          href="https://www.instagram.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            alt="Instagram"
            width="35"
          />
        </a>

        <p>© 2025 AI Image Generator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
