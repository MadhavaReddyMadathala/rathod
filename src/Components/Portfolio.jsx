/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Nature.jpg";

const imageAltText = "Nature";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Simple-Grocery-Store",
    description:
      "Welcome to the Simple Grocery Store project! This is a basic web application built using PHP that simulates a grocery store's online platform. Users can browse through various products, add them to their cart, and proceed to checkout.",
    url: "https://github.com/MadhavaReddyMadathala/Simple_Grocery_Store",
  },
  {
    title: "Tea-Leave-Disease-Prediction",
    description:
      "TeaLeafNet is crafted with the aim of providing an efficient, accurate, and scalable tool for identifying diseases affecting tea leaves. Leveraging state-of-the-art deep learning techniques, this model empowers farmers and researchers to swiftly diagnose and address issues, fostering healthier tea plants and bountiful harvests.",
    url: "https://github.com/MadhavaReddyMadathala/Tea-Leave-Disease-Prediction",
    },
  {
    title: "Legal-AI-Chatbot",
    description:
      "Legal-AI-Chatbot is an intelligent assistant designed to help legal professionals quickly access case laws and IPC sections, with a special focus on women's safety. Powered by AI, it streamlines legal research for faster decision-making.",
    url: "https://github.com/MadhavaReddyMadathala/Legal_AI_Chatbot",
    },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
