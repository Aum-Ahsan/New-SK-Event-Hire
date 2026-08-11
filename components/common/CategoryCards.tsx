import React from "react";

export const categories = [
  ["Chairs","Ceremony, dining, cocktail and practical seating","/images/chairs-product.png","From $4.40"],
  ["Tables","Dining, banquet, cocktail and display tables","/images/tables-product.png","From $32"],
  ["Marquees","Clearspan structures, walls, flooring and climate","/images/marquee-product.png","From $2,950"],
  ["Lighting","Festoon, ambient, feature and practical lighting","/images/lighting-product.png","From $95"],
  ["Tableware","Plates, glassware, cutlery, linen and serviceware","/images/tableware-product.png","From $4.80 pp"],
  ["Décor","Backdrops, plinths, signage and styling pieces","/images/decor-product.png","From $45"],
  ["Flooring & staging","Dance floors, stages, ramps and carpet runners","/images/flooring-product.png","From $480"],
  ["Lounge & bar","Sofas, armchairs, stools, bars and coffee tables","/images/lounge-product.png","From $85"],
] as const;

export const eventTypes = [
  "Wedding or engagement",
  "Birthday or private party",
  "Corporate event",
  "Baby shower",
  "Bridal shower",
  "Graduation celebration",
  "Community event",
  "Cultural celebration",
  "School event",
  "Conference or seminar",
  "Product launch",
  "Gala dinner",
  "Festival or market",
  "Outdoor garden party",
  "Memorial or celebration of life"
];

export function CategoryCards({ limit }: { limit?: number }) {
  return <div className="public-card-grid">{categories.slice(0,limit || categories.length).map(x=><a className="public-product" href={`/products#${x[0].toLowerCase().replaceAll(" ","-")}`} key={x[0]}><img src={x[2]} alt={`${x[0]} available for event hire`}/><h3>{x[0]}</h3><p>{x[1]}</p><b>{x[3]}</b></a>)}</div>;
}
