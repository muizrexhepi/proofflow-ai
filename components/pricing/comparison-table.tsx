"use client";

import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    category: "Core Features",
    items: [
      {
        name: "Case Studies / Month",
        free: "1",
        starter: "5",
        pro: "20",
        agency: "50",
      },
      {
        name: "Interview Length Limit",
        free: "10 min",
        starter: "30 min",
        pro: "60 min",
        agency: "120 min",
      },
      {
        name: "AI Narrative Extraction",
        free: true,
        starter: true,
        pro: true,
        agency: true,
      },
      {
        name: "AI Social Posts",
        free: false,
        starter: false,
        pro: "3 / case",
        agency: "Unlimited",
      },
      {
        name: "Supabase Storage",
        free: "5 MB",
        starter: "50 MB",
        pro: "2 GB",
        agency: "5 GB",
      },
      {
        name: "SEO-friendly Title/Slug",
        free: false,
        starter: false,
        pro: true,
        agency: true,
      },
      { name: "Templates", free: "1", starter: "3", pro: "10", agency: "10" },
    ],
  },
  {
    category: "Team & Collaboration",
    items: [
      {
        name: "Team Seats",
        free: "1",
        starter: "1",
        pro: "5",
        agency: "Unlimited",
      },
      {
        name: "Analytics",
        free: "Basic",
        starter: "Basic",
        pro: "Full",
        agency: "Full",
      },
      {
        name: "Branding / Watermark",
        free: "Required",
        starter: "Removed",
        pro: "Removed",
        agency: "Removed",
      },
    ],
  },
  {
    category: "Processing & Support",
    items: [
      {
        name: "Priority Processing",
        free: "Standard",
        starter: "Standard",
        pro: "Standard",
        agency: "High",
      },
      {
        name: "Customer Support",
        free: "Email 48h",
        starter: "Email 24h",
        pro: "Priority 4h",
        agency: "Dedicated",
      },
    ],
  },
];

export function ComparisonTable() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const table = document.getElementById("comparison-table");
      if (table) {
        const rect = table.getBoundingClientRect();
        setIsSticky(rect.top <= 64);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="comparison-table" className="relative bg-background">
      <div
        className={`${isSticky ? "sticky top-16 z-40 bg-background border-b border-border/30" : ""} transition-all duration-200`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="grid grid-cols-5 text-center">
            <div className="text-left">
              <span className="text-lg font-semibold sr-only ">Features</span>
            </div>
            <div>
              <span className="text-lg font-semibold">Free</span>
            </div>
            <div>
              <span className="text-lg font-semibold">Starter</span>
            </div>
            <div className="bg-white/5">
              <span className="text-lg font-semibold">Pro</span>
            </div>
            <div>
              <span className="text-lg font-semibold">Agency</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="mb-6 text-lg font-semibold">{category.category}</h3>
            <div>
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="grid grid-cols-5 border-t border-border/50 text-sm hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center font-medium py-4">
                    {item.name}
                  </div>
                  <div className="flex items-center justify-center py-4">
                    {typeof item.free === "boolean" ? (
                      item.free ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{item.free}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center py-4">
                    {typeof item.starter === "boolean" ? (
                      item.starter ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40" />
                      )
                    ) : (
                      <span className="text-muted-foreground">
                        {item.starter}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center py-4 bg-white/5">
                    {typeof item.pro === "boolean" ? (
                      item.pro ? (
                        <Check className="h-5 w-5 text-blue-400" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{item.pro}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center py-4">
                    {typeof item.agency === "boolean" ? (
                      item.agency ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40" />
                      )
                    ) : (
                      <span className="text-muted-foreground">
                        {item.agency}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComparisonTable;
