import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-4" id="foot" style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Notes App. Built with ❤️ using
          Spring Boot & React.
        </p>
      </div>
    </footer>
  );
}
