import { MOCK_COLLECTIONS, MOCK_ITEMS } from "@/lib/mock-data";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { ItemCard } from "@/components/dashboard/ItemCard";

export function DashboardMain() {
  const recentCollections = MOCK_COLLECTIONS.slice(0, 6);
  const pinnedItems = MOCK_ITEMS.filter((item) => item.isPinned);
  const recentItems = MOCK_ITEMS.slice(0, 10);

  return (
    <div className="space-y-8">
      <StatsCards />

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Recent collections
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      {pinnedItems.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Pinned items
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pinnedItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          Recent items
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
