import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <h2>Support</h2>
          <ul>
            <li>Help Centre</li>
            <li>Contact Us</li>
            <li>API Status</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h2>Info</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Invest</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <div>
            <ThemeToggle />
          </div>
          <p>Sign Up for Crypto News</p>
          <div>
            <form>
              <input type="email" placeholder="E-Mail" />
              <button>Sign Up</button>
            </form>
          </div>
          <div>
            <AiOutlineInstagram />
            <FaTiktok />
            <FaTwitter />
            <FaFacebookF />
            <FaGithub />
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
}

export default Footer;
