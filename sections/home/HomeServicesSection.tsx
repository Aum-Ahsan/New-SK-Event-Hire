import React from "react";
import homeData from "@/data/pages/home.json";

export function HomeServicesSection() {
  const { servicesHeading, servicesList } = homeData as any;
  const items = servicesList || [
    {
      title: "Backyard Party",
      tag: "UP TO 30 GUESTS",
      price: "From $420",
      bullets: ["30 white chairs", "4 trestle tables", "Warm festoon lighting"],
      image: "/images/hero-event.png",
      href: "/packages"
    },
    {
      title: "Celebration Dinner",
      tag: "UP TO 50 GUESTS",
      price: "From $1,050",
      bullets: ["Padded chairs & tables", "Linen & tableware", "Glassware included"],
      image: "/images/tables-product.png",
      href: "/packages"
    },
    {
      title: "Outdoor Winter",
      tag: "UP TO 50 GUESTS",
      price: "From $2,450",
      bullets: ["6m x 6m marquee", "Tables and chairs", "3 heaters & warm lights"],
      image: "/images/marquee-product.png",
      href: "/packages"
    },
    {
      title: "Corporate Presentation",
      tag: "UP TO 80 GUESTS",
      price: "From $1,900",
      bullets: ["80 chairs", "Stage & lectern", "PA and microphone"],
      image: "/images/flooring-product.png",
      href: "/packages"
    }
  ];

  return (
    <section className="home-section warm">
      <div className="home-heading">
        <div>
          <div className="eyebrow">{servicesHeading?.eyebrow || "READY-MADE COMBINATIONS"}</div>
          <h2>{servicesHeading?.title || "A simpler way to hire"}</h2>
          <p>{servicesHeading?.description || "Start with a package and adjust every item to suit your event."}</p>
        </div>
        {servicesHeading?.link && (
          <a href={servicesHeading.link.href}>{servicesHeading.link.text}</a>
        )}
      </div>

      <div className="service-grid">
        {items.map((x: any) => (
          <article className="service-card-flush" key={x.title}>
            <div className="service-card-image-wrap">
              <img src={x.image} alt={x.title} className="service-card-img" />
              <h3 className="service-card-title">{x.title}</h3>
            </div>
            <div className="service-card-body">
              <small className="service-card-tag">{x.tag}</small>
              <ul className="service-card-bullets">
                {x.bullets && x.bullets.map((b: string, idx: number) => (
                  <li key={idx}>+ {b}</li>
                ))}
              </ul>
              <div className="service-card-footer">
                <b className="service-card-price">{x.price}</b>
                <a href={x.href || "/packages"} className="service-card-link">→</a >
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
