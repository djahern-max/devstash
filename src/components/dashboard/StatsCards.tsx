import { FolderKanban, Heart, LayoutGrid, Star } from "lucide-react";

import { MOCK_COLLECTIONS, MOCK_ITEMS } from "@/lib/mock-data";

const STATS = [
  { label: "Items", icon: LayoutGrid, value: () => MOCK_ITEMS.length },
  { label: "Collections", icon: FolderKanban, value: () => MOCK_COLLECTIONS.length },
  {
    label: "Favorite items",
    icon: Star,
    value: () => MOCK_ITEMS.filter((item) => item.isFavorite).length,
  },
  {
    label: "Favorite collections",
    icon: Heart,
    value: () => MOCK_COLLECTIONS.filter((collection) => collection.isFavorite).length,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <stat.icon className="size-4" />
          </span>
          <div>
            <p className="text-lg leading-none font-semibold">{stat.value()}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
