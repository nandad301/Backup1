import React from "react"
import Navbar from "../components/layout/Navbar.js"
import Footer from "../components/layout/Footer.js"

const AboutPage = () => {
  return React.createElement(
    "div",
    { className: "min-h-screen bg-gray-50" },
    React.createElement(Navbar),

    React.createElement(
      "main",
      { className: "py-16" },
      React.createElement(
        "div",
        { className: "container mx-auto px-4 text-center" },
        React.createElement("h1", { className: "text-3xl font-bold text-gray-800 mb-4" }, "About ATRACE"),
        React.createElement("p", { className: "text-gray-600" }, "About page coming soon..."),
      ),
    ),

    React.createElement(Footer),
  )
}

export default AboutPage
