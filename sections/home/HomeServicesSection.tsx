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
          <div className="eyebrow">{servicesHeading.eyebrow}</div>
          <h2>{servicesHeading.title}</h2>
          <p>{servicesHeading.description}</p>
        </div>
        <a href={servicesHeading.link.href}>{servicesHeading.link.text}</a>
      </div>
      <div className="service-grid">
        {items.map((x: any) => (
          <article key={x.title}>
            <div style={{ position: "relative" }}>
              <img src={x.image} alt={x.title} style={{ width: "100%", height: "155px", objectFit: "cover" }} />
              <h3 style={{ position: "absolute", bottom: "10px", left: "12px", color: "#fff", margin: 0, fontSize: "16px", fontWeight: "800", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
                {x.title}
              </h3>
            </div>
            <div style={{ padding: "14px" }}>
              <small style={{ display: "block", fontSize: "11px", letterSpacing: "0.05em", color: "#71808c", fontWeight: "800", marginBottom: "8px" }}>
                {x.tag}
              </small>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px 0", fontSize: "12px", color: "#667885", lineHeight: "1.6" }}>
                {x.bullets && x.bullets.map((b: string, idx: number) => (
                  <li key={idx}>• {b}</li>
                ))}
              </ul>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <b style={{ fontSize: "14px", color: "#0d2e48" }}>{x.price}</b>
                <a href={x.href} style={{ color: "#dc5a46", fontWeight: "800", fontSize: "14px" }}>→</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
