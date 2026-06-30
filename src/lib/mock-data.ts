export type ContentType = "TEXT" | "FILE";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
}

export interface MockItemType {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  isSystem: boolean;
}

export interface MockTag {
  id: string;
  name: string;
}

export interface MockCollection {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  itemCount: number;
  updatedAt: string;
  dominantTypeId: string;
}

export interface MockItem {
  id: string;
  title: string;
  description: string;
  contentType: ContentType;
  content: string | null;
  url: string | null;
  fileUrl: string | null;
  fileName: string | null;
  language: string | null;
  isFavorite: boolean;
  isPinned: boolean;
  itemTypeId: string;
  tagIds: string[];
  collectionIds: string[];
  updatedAt: string;
}

// ─── User ────────────────────────────────────────────────────────────────────

export const MOCK_USER: MockUser = {
  id: "user_1",
  name: "Dev Stash",
  email: "test@gmail.com",
  image: null,
  isPro: false,
};

// ─── Item Types ──────────────────────────────────────────────────────────────

export const MOCK_ITEM_TYPES: MockItemType[] = [
  { id: "type_snippet", name: "Snippet", slug: "snippets", icon: "Code", color: "#3b82f6", isSystem: true },
  { id: "type_prompt", name: "Prompt", slug: "prompts", icon: "Sparkles", color: "#8b5cf6", isSystem: true },
  { id: "type_command", name: "Command", slug: "commands", icon: "Terminal", color: "#f97316", isSystem: true },
  { id: "type_note", name: "Note", slug: "notes", icon: "StickyNote", color: "#eab308", isSystem: true },
  { id: "type_link", name: "Link", slug: "links", icon: "Link", color: "#10b981", isSystem: true },
  { id: "type_file", name: "File", slug: "files", icon: "File", color: "#6b7280", isSystem: true },
  { id: "type_image", name: "Image", slug: "images", icon: "Image", color: "#ec4899", isSystem: true },
];

// ─── Tags ────────────────────────────────────────────────────────────────────

export const MOCK_TAGS: MockTag[] = [
  { id: "tag_react", name: "react" },
  { id: "tag_hooks", name: "hooks" },
  { id: "tag_performance", name: "performance" },
  { id: "tag_ai", name: "ai" },
  { id: "tag_review", name: "review" },
  { id: "tag_system", name: "system" },
  { id: "tag_git", name: "git" },
  { id: "tag_python", name: "python" },
  { id: "tag_css", name: "css" },
  { id: "tag_algorithms", name: "algorithms" },
];

// ─── Collections ─────────────────────────────────────────────────────────────

export const MOCK_COLLECTIONS: MockCollection[] = [
  {
    id: "col_react",
    name: "React Patterns",
    description: "Hooks, composition, and rendering tricks I reach for.",
    isFavorite: true,
    itemCount: 14,
    updatedAt: "2h ago",
    dominantTypeId: "type_snippet",
  },
  {
    id: "col_context",
    name: "Context Files",
    description: "Reusable context docs for AI coding sessions.",
    isFavorite: false,
    itemCount: 6,
    updatedAt: "1d ago",
    dominantTypeId: "type_file",
  },
  {
    id: "col_python",
    name: "Python Snippets",
    description: "Data wrangling, scripts, and CLI helpers.",
    isFavorite: true,
    itemCount: 21,
    updatedAt: "3d ago",
    dominantTypeId: "type_snippet",
  },
  {
    id: "col_prompts",
    name: "Prompt Library",
    description: "System prompts and optimized AI instructions.",
    isFavorite: false,
    itemCount: 18,
    updatedAt: "5h ago",
    dominantTypeId: "type_prompt",
  },
  {
    id: "col_shell",
    name: "Shell Toolkit",
    description: "Git, Docker, and shell one-liners.",
    isFavorite: false,
    itemCount: 9,
    updatedAt: "6d ago",
    dominantTypeId: "type_command",
  },
  {
    id: "col_interview",
    name: "Interview Prep",
    description: "Notes, algorithms, and links for the grind.",
    isFavorite: true,
    itemCount: 11,
    updatedAt: "1w ago",
    dominantTypeId: "type_note",
  },
];

// ─── Items ───────────────────────────────────────────────────────────────────

export const MOCK_ITEMS: MockItem[] = [
  {
    id: "item_debounce",
    title: "useDebounce hook",
    description: "Debounce any fast-changing value with a configurable delay.",
    contentType: "TEXT",
    content: `export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: "typescript",
    isFavorite: true,
    isPinned: true,
    itemTypeId: "type_snippet",
    tagIds: ["tag_react", "tag_hooks", "tag_performance"],
    collectionIds: ["col_react", "col_interview"],
    updatedAt: "2h ago",
  },
  {
    id: "item_reviewer",
    title: "Senior code reviewer",
    description: "System prompt that turns the model into a strict reviewer.",
    contentType: "TEXT",
    content: `You are a senior staff engineer. Review the code I provide with the mindset of a principal engineer who cares deeply about correctness, clarity, and long-term maintainability. Flag bugs, anti-patterns, and anything you'd block in a PR review.`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: false,
    isPinned: true,
    itemTypeId: "type_prompt",
    tagIds: ["tag_ai", "tag_review", "tag_system"],
    collectionIds: ["col_prompts"],
    updatedAt: "5h ago",
  },
  {
    id: "item_git_reset",
    title: "Reset local git branch to remote",
    description: "Hard reset the current branch to match origin.",
    contentType: "TEXT",
    content: "git fetch origin && git reset --hard origin/$(git branch --show-current)",
    url: null,
    fileUrl: null,
    fileName: null,
    language: "bash",
    isFavorite: true,
    isPinned: false,
    itemTypeId: "type_command",
    tagIds: ["tag_git"],
    collectionIds: ["col_shell"],
    updatedAt: "1d ago",
  },
  {
    id: "item_bigo",
    title: "Big-O cheat sheet",
    description: "Time complexity of common operations for interviews.",
    contentType: "TEXT",
    content: `| Structure      | Access | Search | Insert | Delete |
|----------------|--------|--------|--------|--------|
| Array          | O(1)   | O(n)   | O(n)   | O(n)   |
| Hash Table     | -      | O(1)   | O(1)   | O(1)   |
| Binary Search  | O(log n) | O(log n) | O(log n) | O(log n) |
| Linked List    | O(n)   | O(n)   | O(1)   | O(1)   |`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_note",
    tagIds: ["tag_algorithms"],
    collectionIds: ["col_interview"],
    updatedAt: "3d ago",
  },
  {
    id: "item_tailwind_docs",
    title: "Tailwind v4 docs",
    description: "Official reference for the new engine and CSS-first config.",
    contentType: "TEXT",
    content: null,
    url: "https://tailwindcss.com/docs",
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_link",
    tagIds: ["tag_css"],
    collectionIds: ["col_react"],
    updatedAt: "2h ago",
  },
  {
    id: "item_fetch_wrapper",
    title: "Typed fetch wrapper",
    description: "Generic fetch with error handling and JSON parsing.",
    contentType: "TEXT",
    content: `async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init)
  if (!res.ok) throw new Error(\`\${res.status} \${res.statusText}\`)
  return res.json() as Promise<T>
}`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: "typescript",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_snippet",
    tagIds: ["tag_react"],
    collectionIds: ["col_react", "col_python"],
    updatedAt: "4d ago",
  },
  {
    id: "item_docker_prune",
    title: "Docker full cleanup",
    description: "Remove all stopped containers, dangling images, and unused volumes.",
    contentType: "TEXT",
    content: "docker system prune -af --volumes",
    url: null,
    fileUrl: null,
    fileName: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_command",
    tagIds: ["tag_git"],
    collectionIds: ["col_shell"],
    updatedAt: "1w ago",
  },
];
