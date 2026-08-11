import React from "react";

interface HelpTopicsSectionProps {
  helpTopics: readonly any[];
  jump: (id: string) => void;
}

export function HelpTopicsSection({ helpTopics, jump }: HelpTopicsSectionProps) {
  return (
    <>
      <section className="help-topics help-width">
        <header>
          <span>START BY TOPIC</span>
          <h2>Browse help topics</h2>
          <p>Choose a topic to find the right guidance quickly.</p>
        </header>
        <div>
          {helpTopics.map((x, i) => (
            <button type="button" onClick={() => jump(x[2])} key={x[0]}>
              <i>{["▤", "◇", "▣", "▱", "↻", "$", "✎", "!", "♡"][i]}</i>
              <span>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
              </span>
              <em>＋</em>
            </button>
          ))}
        </div>
      </section>

      <section className="popular-help">
        <div className="help-width">
          <header>
            <span>POPULAR QUESTIONS</span>
            <h2>Frequently asked</h2>
            <p>Answers to the questions customers ask most often.</p>
          </header>
          <div>
            {[
              "What is the minimum hire period?",
              "Can I collect my order?",
              "What is the bond and when is it returned?",
              "Can I change quantities after booking?",
              "What if equipment is damaged?",
              "How do payments and refunds work?",
            ].map((q, i) => (
              <details open={i < 2} key={q}>
                <summary>
                  {q}
                  <b>＋</b>
                </summary>
                <p>
                  {i === 0
                    ? "Most items have a one-day minimum hire. Your quotation shows the exact hire window and any weekend arrangements."
                    : "Availability, timing, access and applicable charges are confirmed in your quotation or booking."}
                </p>
                <a href={i === 0 ? "/rental-terms" : "#booking-article"}>Read full answer →</a>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
