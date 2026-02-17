"use client";

import { useState } from "react";

type AccordionItem = {
  badge: string;
  badgeClass?: string;
  title: string;
  desc: string;
  content: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      {items.map((item, i) => (
        <div key={i} className="border-b border-border">
          <button
            className="w-full flex items-center gap-3 py-4 px-2 bg-transparent border-none text-text text-sm cursor-pointer text-left hover:text-accent transition-colors"
            onClick={() => toggle(i)}
          >
            {item.badge && (
              <span
                className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded text-[0.7rem] font-bold text-bg shrink-0 ${
                  item.badgeClass === "maint"
                    ? "bg-gradient-to-br from-[#38bdf8] to-[#7dd3fc]"
                    : item.badgeClass === "growth"
                    ? "bg-gradient-to-br from-accent to-[#38bdf8]"
                    : "bg-gradient-to-br from-accent to-[#5eead4]"
                }`}
              >
                {item.badge}
              </span>
            )}
            <strong className={`font-bold ${item.badge ? "min-w-[140px] max-md:min-w-0" : ""}`}>
              {item.title}
            </strong>
            {item.desc && <span className="text-text-muted text-xs">{item.desc}</span>}
            <span
              className={`ml-auto text-[0.7rem] text-text-dim shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`accordion-content px-2 text-text-muted text-sm leading-relaxed ${
              openIndex === i ? "open" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
