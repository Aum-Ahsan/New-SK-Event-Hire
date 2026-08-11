import React from "react";
import contactData from "@/data/pages/contact.json";

export function ContactLocationSection() {
  const { location } = contactData;
  return (
    <section id="location" className="collection-band">
      <div className="collection-map real-map">
        <iframe
          title="Keilor Park collection location"
          loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=144.78%2C-37.76%2C144.91%2C-37.67&amp;layer=mapnik&amp;marker=-37.724%2C144.849"
        />
        <i>SK</i>
        <span>Keilor Park</span>
        <span>Melbourne CBD</span>
        <span>Airport</span>
      </div>
      <div>
        <span>{location.eyebrow}</span>
        <h2>{location.title}</h2>
        <article>
          <b>{location.cardTitle}</b>
          <small>{location.cardSubtitle}</small>
        </article>
        <div>
          {location.steps.map((x) => (
            <b key={x[0]}>
              <i>{x[0]}</i>
              {x[1]}
            </b>
          ))}
        </div>
        <a href={location.link.href}>{location.link.text}</a>
      </div>
    </section>
  );
}
