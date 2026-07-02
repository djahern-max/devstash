import Link from "next/link";
import { LayoutGrid, Star } from "lucide-react";

import { ITEM_TYPE_ICONS } from "@/lib/icons";
import { MOCK_ITEM_TYPES, type MockCollection } from "@/lib/mock-data";

export function CollectionCard({ collection }: { collection: MockCollection }) {
  const type = MOCK_ITEM_TYPES.find((t) => t.id === collection.dominantTypeId);
  const Icon = type ? ITEM_TYPE_ICONS[type.icon] : LayoutGrid;
  const color = type?.color ?? "#6b7280";

  return (
    <Link
      href={`/collections/${collection.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20"
    >
      <div
        className="flex items-center justify-between p-4"
        style={{ backgroundColor: `${color}1a` }}
      >
        <span
          className="flex size-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}33`, color }}
        >
          <Icon className="size-4" />
        </span>
        {collection.isFavorite && (
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-semibold">{collection.name}</h3>
        <p className="line-clamp-1 text-xs text-muted-foreground">
          {collection.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1 text-xs text-muted-foreground">
          <span>{collection.itemCount} items</span>
          <span>{collection.updatedAt}</span>
        </div>
      </div>
    </Link>
  );
}
