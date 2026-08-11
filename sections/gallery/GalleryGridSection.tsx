import React from "react";
import galleryData from "@/data/pages/gallery.json";

interface GalleryGridSectionProps {
  activeTag: string;
  setActiveTag: (tag: string) => void;
  visible: number;
  setVisible: (val: number) => void;
  shown: any[];
  setPreview: (item: any) => void;
  preview: any;
}

export function GalleryGridSection({
  activeTag,
  setActiveTag,
  visible,
  setVisible,
  shown,
  setPreview,
  preview,
}: GalleryGridSectionProps) {
  const { grid } = galleryData as any;
  const tags = grid?.tags || ["All", "Wedding", "Outdoor", "Warm lighting"];
  const loadMoreText = grid?.loadMoreText || "Load more events";

  return (
    <>
      <section id="gallery-browser" className="gallery-browser gallery-listing-only">
        <div className="editorial-section">
          <div className="filter-pills gallery-chip-bar">
            {tags.map((tag: string) => (
              <button
                className={activeTag === tag ? "active" : ""}
                onClick={() => {
                  setActiveTag(tag);
                  setVisible(8);
                }}
                key={tag}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="masonry-gallery gallery-event-grid">
            {shown.slice(0, visible).map((x) => (
              <article key={x.title}>
                <button className="gallery-image-button" onClick={() => setPreview(x)} aria-label={`Preview ${x.title}`}>
                  <img src={x.image} alt={x.title} />
                  <span>View image</span>
                </button>
                <div className="gallery-card-details">
                  <div className="gallery-card-tags">
                    {x.tags.map((tag: string) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="gallery-event-title" href={`/gallery-event-${x.slug}`}>
                    <h3>{x.title}</h3>
                  </a>
                  <b>{x.meta}</b>
                  <p>{x.details}</p>
                  <a className="gallery-view-action" href={`/gallery-event-${x.slug}`}>
                    View event details <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          {visible < shown.length && (
            <button className="load-more" onClick={() => setVisible(visible + 4)}>
              {loadMoreText}
            </button>
          )}
        </div>
      </section>
      {preview && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${preview.title} image preview`} onClick={() => setPreview(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setPreview(null)} aria-label="Close image preview">
              ×
            </button>
            <img src={preview.image} alt={preview.title} />
            <footer>
              <div>
                <b>{preview.title}</b>
                <span>{preview.meta}</span>
              </div>
              <a href={`/gallery-event-${preview.slug}`}>View event details →</a>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
