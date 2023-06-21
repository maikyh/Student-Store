import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} Miguel Angel Garza Carranza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
