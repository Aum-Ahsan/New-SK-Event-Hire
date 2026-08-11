import React from "react";
import aboutData from "@/data/pages/about.json";

export function AboutStorySection() {
  const { story } = aboutData;
  return (
    <section className="about-story editorial-section">
      <div className="about-collage">
        <img src={story.images[0].src} alt={story.images[0].alt} />
        <img src={story.images[1].src} alt={story.images[1].alt} />
        <em>
          FROM WAREHOUSE
          <br />
          TO EVENT DAY
        </em>
      </div>
      <div>
        <span>{story.badge}</span>
        <h2>{story.title}</h2>
        {story.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <blockquote>
          <b>{story.quote}</b>
          <small>{story.quoteSmall}</small>
        </blockquote>
      </div>
    </section>
  );
}
