import React from "react";
import image from "../media/unnur-sg.jpg";

export default function About() {
  return (
    <main>
      <h1 className="pageName">Snyrtivöruverslunin Glæsibæ</h1>
      <div className="aboutPage">
        <div>
          <h3>Say hello to the owner</h3>
          <p>Unnur has owned Snytrivöruverslunin Glæsibæ for over 30 years.</p>
        </div>
        <img src={image} />
      </div>
    </main>
  );
}
