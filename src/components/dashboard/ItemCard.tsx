import { Pin, Star } from "lucide-react";

import { ITEM_TYPE_ICONS } from "@/lib/icons";
import { MOCK_ITEM_TYPES, MOCK_TAGS, type MockItem } from "@/lib/mock-data";

export function ItemCard({ item }: { item: MockItem }) {
  const type = MOCK_ITEM_TYPES.find((t) => t.id === item.itemTypeId);
  const Icon = type ? ITEM_TYPE_ICONS[type.icon] : undefined;
  const tags = MOCK_TAGS.filter((tag) => item.tagIds.includes(tag.id));

  return (
    <div
      className="flex flex-col gap-2 rounded-xl border border-border border-l-4 bg-card p-4"
      style={{ borderLeftColor: type?.color }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: type?.color }}
        >
          {Icon && <Icon className="size-3.5" />}
          {type?.name}
        </span>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          {item.isPinned && <Pin className="size-3.5 fill-current" />}
          {item.isFavorite && (
            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
          )}
        </div>
      </div>

      <h3 className="text-sm font-semibold">{item.title}</h3>

      {item.content && (
        <pre className="line-clamp-3 overflow-hidden rounded-lg bg-muted/50 p-2 font-mono text-xs whitespace-pre-wrap text-muted-foreground">
          {item.content}
        </pre>
      )}
      {!item.content && item.url && (
        <p className="truncate text-xs text-muted-foreground">{item.url}</p>
      )}

      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag.id} className="text-xs text-muted-foreground">
              #{tag.name}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">
          {item.updatedAt}
        </span>
      </div>
    </div>
  );
}
