"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, LayoutGrid, Star, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ITEM_TYPE_ICONS } from "@/lib/icons";
import {
  MOCK_COLLECTIONS,
  MOCK_ITEM_TYPES,
  MOCK_USER,
  type MockCollection,
} from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PRIMARY_NAV = [
  { label: "All items", href: "/dashboard", icon: LayoutGrid },
  { label: "Recently used", href: "/recent", icon: History },
  { label: "Favorites", href: "/favorites", icon: Star },
];

const PRO_TYPE_SLUGS = new Set(["files", "images"]);

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const pathname = usePathname();
  const favoriteCollections = MOCK_COLLECTIONS.filter((c) => c.isFavorite);
  const recentCollections = MOCK_COLLECTIONS.filter((c) => !c.isFavorite).slice(0, 4);
  const initials = MOCK_USER.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full flex-col">
      <nav className="flex-1 space-y-6 overflow-y-auto p-3">
        <ul className="space-y-1">
          {PRIMARY_NAV.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href}
              collapsed={collapsed}
            />
          ))}
        </ul>

        <div>
          <SectionLabel collapsed={collapsed}>Types</SectionLabel>
          <ul className="space-y-1">
            {MOCK_ITEM_TYPES.map((type) => (
              <SidebarLink
                key={type.id}
                href={`/items/${type.slug}`}
                icon={ITEM_TYPE_ICONS[type.icon]}
                label={type.name}
                active={pathname === `/items/${type.slug}`}
                collapsed={collapsed}
                iconColor={type.color}
                badge={PRO_TYPE_SLUGS.has(type.slug) ? "PRO" : undefined}
              />
            ))}
          </ul>
        </div>

        {!collapsed && (
          <>
            {favoriteCollections.length > 0 && (
              <div>
                <SectionLabel collapsed={collapsed}>
                  Favorite collections
                </SectionLabel>
                <ul className="space-y-1">
                  {favoriteCollections.map((collection) => (
                    <CollectionLink key={collection.id} collection={collection} />
                  ))}
                </ul>
              </div>
            )}

            {recentCollections.length > 0 && (
              <div>
                <SectionLabel collapsed={collapsed}>
                  Recent collections
                </SectionLabel>
                <ul className="space-y-1">
                  {recentCollections.map((collection) => (
                    <CollectionLink key={collection.id} collection={collection} />
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </nav>

      <Separator />

      <div className={cn("flex items-center gap-2 p-3", collapsed && "justify-center")}>
        <Avatar>
          <AvatarImage src={MOCK_USER.image ?? undefined} alt={MOCK_USER.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{MOCK_USER.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {MOCK_USER.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionLabel({
  collapsed,
  children,
}: {
  collapsed: boolean;
  children: React.ReactNode;
}) {
  if (collapsed) return null;
  return (
    <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">
      {children}
    </p>
  );
}

function SidebarLink({
  href,
  icon: Icon,
  label,
  active,
  collapsed,
  iconColor,
  badge,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  active: boolean;
  collapsed: boolean;
  iconColor?: string;
  badge?: string;
}) {
  const className = cn(
    "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
    active && "bg-muted font-medium text-foreground",
    collapsed && "justify-center px-0"
  );

  const icon = (
    <Icon
      className="size-4 shrink-0"
      style={iconColor ? { color: iconColor } : undefined}
    />
  );

  if (!collapsed) {
    return (
      <li>
        <Link href={href} className={className}>
          {icon}
          <span className="truncate">{label}</span>
          {badge && (
            <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              {badge}
            </span>
          )}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Tooltip>
        <TooltipTrigger render={<Link href={href} className={className} />}>
          {icon}
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    </li>
  );
}

function CollectionLink({ collection }: { collection: MockCollection }) {
  return (
    <li>
      <Link
        href={`/collections/${collection.id}`}
        className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <span className="truncate">{collection.name}</span>
        <span className="shrink-0 text-xs">{collection.itemCount}</span>
      </Link>
    </li>
  );
}
