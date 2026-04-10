import React from "react";

const Footer = () => {
  return (
    <p className="my-2 text-center text-gray-500 text-sm">
      &copy; SniphHub {new Date().getFullYear()}
    </p>
  );
};

export default Footer;
