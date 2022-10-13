import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Yummy</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @yummy</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/atharv-diwan-239039184">
          <AiFillLinkedin />
        </a>
        <a href="https://instagram.com/_yash_wardhan_?igshid=YmMyMTA2M2Y=">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/T1u2s3h4">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
