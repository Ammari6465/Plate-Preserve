import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <style>
        {`
          :root {
            --bg-color: beige;
            --main-color: black;
            --font-color: #323232;
            --font-color-sub: #666;
          }

          .footer {
            background-color: var(--bg-color);
            color: var(--font-color);
            padding: 40px 0;
            text-align: center;
            border-top: 2px solid var(--main-color);
            box-shadow: 4px 4px var(--main-color);
            border-radius: 5px;
          }

          .footer-content {
            display: flex;
            justify-content: space-around;
            padding-bottom: 20px;
          }

          .footer-content h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            font-weight: 900; /* Bold weight */
          }

          .footer-content p {
            font-size: 1rem;
            margin: 5px 0;
            color: var(--font-color-sub);
          }

          .about-us, .contact-info {
            max-width: 400px;
          }

          .footer-bottom {
            border-top: 1px solid var(--main-color);
            padding-top: 10px;
            color: var(--font-color);
          }

          .footer-bottom p {
            font-size: 0.9rem;
            margin: 0;
          }

          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              align-items: center; /* Center align on mobile */
            }

            .about-us, .contact-info {
              margin-bottom: 20px;
            }
          }
        `}
      </style>
      <div className="footer-content">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            We are a non-profit organization focused on reducing food waste and redistributing surplus food to communities in need. 
            Our mission is to make the world more sustainable, one meal at a time.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: platepreserve@gmail.com</p>
          <p>Phone: +91 9920469169</p>
          <p>Insta:@plate_preserve</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Plate Preserve. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
