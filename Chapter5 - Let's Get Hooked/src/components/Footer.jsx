import React from 'react';
import { FaRegHeart, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer">
        Created By
        <FaRegHeart/>
        <a href="https://www.linkedin.com/in/sumit-negi-38a554191/" target="_blank">
          Sumit Negi
        </a>
        <FaRegCopyright/>2023
        <strong>
          Satvik
        </strong>
      </div>
    );
  };

export default Footer