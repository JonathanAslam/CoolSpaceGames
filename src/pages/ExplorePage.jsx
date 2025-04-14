import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const games = [
    {
      name: "JohnnyGame",
      title: "Johnny's Adventure",
      description: "Join Johnny on an epic adventure through mysterious lands.",
      // image: "/assets/jonny-game.jpg",
      link: "/JohnnyGame",
    },
    {
      name: "DaneGame",
      title: "Dane's Challenge",
      description:
        "Test your skills in Dane's ultimate challenge. How long can you survive?",
      // image: "/assets/dane-game.jpg",
      link: "/DaneGame",
    },
    {
      name: "DatinSim",
      title: "Alien Attraction",
      description:
        "Do you have enough rizz to get a date?",
      // image: "/heart.png",
      link: "/DatingSim",
    },
  ];

  return (
    <div className="padding">
      <h1 className="text-primary center-align">Explore Games</h1>
      {/* flexbox allows the tiles to be even spaced */}
      <div className="grid flex-container">
        {games.map((game, index) => (
          <article key={index} className="padding grey6 white-text s6 flex-item">
            {/* <img className="" src={game.image} alt={game.title} /> */}
            <div className="padding grey-6">
              <h5>{game.title}</h5>
              <p>{game.description}</p>
              <nav>
                <Link to={game.link}>
                  <button className="primary">Play Now</button>
                </Link>
              </nav>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
