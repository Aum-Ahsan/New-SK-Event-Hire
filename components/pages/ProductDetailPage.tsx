import React, { useState } from "react";
import { PublicHeader } from "@/components/common/PublicHeader";
import { PublicFooter } from "@/components/common/PublicFooter";
import { ProductDetailBreadcrumbsSection } from "@/sections/product-detail/ProductDetailBreadcrumbsSection";
import { ProductDetailMainSection } from "@/sections/product-detail/ProductDetailMainSection";
import { ProductDetailTabsSection } from "@/sections/product-detail/ProductDetailTabsSection";
import { ProductDetailContentSection } from "@/sections/product-detail/ProductDetailContentSection";
import { ProductDetailRelatedSection } from "@/sections/product-detail/ProductDetailRelatedSection";

interface ProductDetailPageProps {
  slug: string;
  hireProducts: any[];
}

export function ProductDetailPage({ slug, hireProducts }: ProductDetailPageProps) {
  const p = hireProducts.find((x) => x.slug === slug) || hireProducts[0];
  const gallery = [p.image, "/images/hero-event.png", "/images/warehouse-team.png", "/images/tables-product.png", "/images/lighting-product.png"];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [zoomed, setZoomed] = useState(false);
  const [finish, setFinish] = useState("");
  const [cushion, setCushion] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(40);
  const [startDate, setStartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [checked, setChecked] = useState(false);
  const sameCategory = hireProducts.filter((x) => x.category === p.category && x.slug !== p.slug);
  const related = [...sameCategory, ...hireProducts.filter((x) => x.category !== p.category && x.slug !== p.slug)].slice(0, 10);
  const colourClass = `variant-${(finish || "none").toLowerCase()} size-${(size || "none").toLowerCase()} cushion-${(cushion || "none").toLowerCase()}`;
  const dayMs = 24 * 60 * 60 * 1000;
  const rentalDays = (startDate && returnDate) ? Math.max(1, Math.ceil((new Date(`${returnDate}T00:00:00`).getTime() - new Date(`${startDate}T00:00:00`).getTime()) / dayMs)) : 1;
  const baseDaily = p.category === "Chairs" ? 2 : Math.max(2, Number(p.price.replace(/[^0-9.]/g, "")) || 2);
  const finishMultiplier: Record<string, number> = { White: 1, Gold: 1.25, Black: 1.15, Red: 1.1, Blue: 1.1 };
  const sizeMultiplier: Record<string, number> = { Kids: 0.75, Small: 0.9, Standard: 1, Large: 1.25 };
  const cushionMultiplier: Record<string, number> = { White: 1, Ivory: 1.08, Black: 1.05, Red: 1.1, Blue: 1.1 };
  const unitDaily = baseDaily * (finishMultiplier[finish] || 1) * (sizeMultiplier[size] || 1) * (cushionMultiplier[cushion] || 1);
  const hireSubtotal = unitDaily * quantity * rentalDays;
  const bond = hireSubtotal >= 1000 ? 200 : hireSubtotal > 300 ? 100 : 50;
  const gst = hireSubtotal * 0.1;
  const total = hireSubtotal + bond + gst;

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="public-site approved-detail">
      <PublicHeader active="Hire Products" />
      <main>
        <ProductDetailBreadcrumbsSection category={p.category} name={p.name} />
        <ProductDetailMainSection
          p={p}
          gallery={gallery}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          zoomed={zoomed}
          setZoomed={setZoomed}
          colourClass={colourClass}
          finish={finish}
          setFinish={setFinish}
          size={size}
          setSize={setSize}
          cushion={cushion}
          setCushion={setCushion}
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          returnTime={returnTime}
          setReturnTime={setReturnTime}
          quantity={quantity}
          setQuantity={setQuantity}
          checked={checked}
          setChecked={setChecked}
          unitDaily={unitDaily}
          rentalDays={rentalDays}
          hireSubtotal={hireSubtotal}
          bond={bond}
          gst={gst}
          total={total}
        />
        <ProductDetailTabsSection scrollToSection={scrollToSection} />
        <ProductDetailContentSection p={p} />
        <ProductDetailRelatedSection related={related} hireProducts={hireProducts} />
      </main>
      <PublicFooter />
    </div>
  );
}
