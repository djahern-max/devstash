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
  { id: "type_note", name: "Note", slug: "notes", icon: "StickyNote", color: "#fde047", isSystem: true },
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
  { id: "tag_system_prompt", name: "system-prompt" },
  { id: "tag_git", name: "git" },
  { id: "tag_cli", name: "cli" },
  { id: "tag_macos", name: "macos" },
  { id: "tag_interview", name: "interview" },
  { id: "tag_architecture", name: "architecture" },
  { id: "tag_css", name: "css" },
  { id: "tag_docs", name: "docs" },
  { id: "tag_fetch", name: "fetch" },
  { id: "tag_network", name: "network" },
  { id: "tag_learning", name: "learning" },
  { id: "tag_config", name: "config" },
  { id: "tag_context", name: "context" },
  { id: "tag_algorithms", name: "algorithms" },
];

// ─── Collections ─────────────────────────────────────────────────────────────

export const MOCK_COLLECTIONS: MockCollection[] = [
  {
    id: "col_react",
    name: "React Patterns",
    description: "Reusable hooks, components, and rendering tricks.",
    isFavorite: true,
    itemCount: 18,
    updatedAt: "2h ago",
    dominantTypeId: "type_snippet",
  },
  {
    id: "col_prompts",
    name: "AI Prompt Library",
    description: "System messages and prompts that actually work.",
    isFavorite: true,
    itemCount: 24,
    updatedAt: "5h ago",
    dominantTypeId: "type_prompt",
  },
  {
    id: "col_shell",
    name: "Shell & CLI",
    description: "Git, docker, and everyday terminal commands.",
    isFavorite: false,
    itemCount: 31,
    updatedAt: "Yesterday",
    dominantTypeId: "type_command",
  },
  {
    id: "col_interview",
    name: "Interview Prep",
    description: "Notes and patterns for the next loop.",
    isFavorite: false,
    itemCount: 12,
    updatedAt: "2d ago",
    dominantTypeId: "type_note",
  },
  {
    id: "col_reading",
    name: "Reading List",
    description: "Docs, blog posts, and references to revisit.",
    isFavorite: false,
    itemCount: 27,
    updatedAt: "3d ago",
    dominantTypeId: "type_link",
  },
  {
    id: "col_context",
    name: "Context Files",
    description: "Project context and boilerplate for agents.",
    isFavorite: false,
    itemCount: 9,
    updatedAt: "1w ago",
    dominantTypeId: "type_file",
  },
];

// ─── Items ───────────────────────────────────────────────────────────────────

export const MOCK_ITEMS: MockItem[] = [
  {
    id: "item_debounce",
    title: "useDebounce hook",
    description: "Debounce any fast-changing value with a delay.",
    contentType: "TEXT",
    content: `import { useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay = 300) {
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
    collectionIds: ["col_react"],
    updatedAt: "2h ago",
  },
  {
    id: "item_reviewer",
    title: "Senior code reviewer",
    description: "System prompt that turns the model into a strict reviewer.",
    contentType: "TEXT",
    content: `You are a senior staff engineer reviewing a pull request. Focus on correctness, edge cases, and readability. Reply with a bulleted list of concrete, actionable changes.`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: true,
    isPinned: true,
    itemTypeId: "type_prompt",
    tagIds: ["tag_ai", "tag_review", "tag_system_prompt"],
    collectionIds: ["col_prompts"],
    updatedAt: "5h ago",
  },
  {
    id: "item_squash_commits",
    title: "Squash last N commits",
    description: "Interactively rebase to combine recent commits.",
    contentType: "TEXT",
    content: "git rebase -i HEAD~3",
    url: null,
    fileUrl: null,
    fileName: null,
    language: "bash",
    isFavorite: false,
    isPinned: true,
    itemTypeId: "type_command",
    tagIds: ["tag_git", "tag_cli"],
    collectionIds: ["col_shell"],
    updatedAt: "Yesterday",
  },
  {
    id: "item_system_design",
    title: "System design cheatsheet",
    description: "Quick-reference framework for design interviews.",
    contentType: "TEXT",
    content: `# System Design

- Start with functional + non-functional requirements
- Estimate scale (QPS, storage, bandwidth)`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_note",
    tagIds: ["tag_interview", "tag_architecture"],
    collectionIds: ["col_interview"],
    updatedAt: "2d ago",
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
    isFavorite: true,
    isPinned: false,
    itemTypeId: "type_link",
    tagIds: ["tag_css", "tag_docs"],
    collectionIds: ["col_reading"],
    updatedAt: "3d ago",
  },
  {
    id: "item_kill_port",
    title: "Kill process on port",
    description: "Free up a port by killing whatever is listening on it.",
    contentType: "TEXT",
    content: "lsof -ti:3000 | xargs kill -9",
    url: null,
    fileUrl: null,
    fileName: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_command",
    tagIds: ["tag_cli", "tag_macos"],
    collectionIds: ["col_shell"],
    updatedAt: "3d ago",
  },
  {
    id: "item_fetch_retry",
    title: "Fetch with retry",
    description: "Retry a failed request with a fixed number of attempts.",
    contentType: "TEXT",
    content: `export async function fetchRetry(url: string, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url)
      return res
    } catch (err) {
      if (i === tries - 1) throw err
    }
  }
}`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: "typescript",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_snippet",
    tagIds: ["tag_fetch", "tag_network"],
    collectionIds: ["col_react"],
    updatedAt: "4d ago",
  },
  {
    id: "item_explain_mentor",
    title: "Explain like a mentor",
    description: "Prompt for a patient, step-by-step code walkthrough.",
    contentType: "TEXT",
    content: `Explain the following code as a patient mentor. Break it into small steps, define jargon, and end with one thing I should watch out for.`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_prompt",
    tagIds: ["tag_ai", "tag_learning"],
    collectionIds: ["col_prompts"],
    updatedAt: "5d ago",
  },
  {
    id: "item_next_config",
    title: "next.config context",
    description: "Baseline config shared across agent runs.",
    contentType: "FILE",
    content: null,
    url: null,
    fileUrl: "/mock-files/next.config.context.txt",
    fileName: "next.config.context.txt",
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_file",
    tagIds: ["tag_config", "tag_context"],
    collectionIds: ["col_context"],
    updatedAt: "1w ago",
  },
  {
    id: "item_binary_search",
    title: "Binary search template",
    description: "Iterative binary search you can adapt for interviews.",
    contentType: "TEXT",
    content: `function binarySearch(arr: number[], target: number) {
  let lo = 0
  let hi = arr.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (arr[mid] === target) return mid
    if (arr[mid] < target) lo = mid + 1
    else hi = mid - 1
  }
  return -1
}`,
    url: null,
    fileUrl: null,
    fileName: null,
    language: "typescript",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_snippet",
    tagIds: ["tag_algorithms", "tag_interview"],
    collectionIds: ["col_interview"],
    updatedAt: "6d ago",
  },
  {
    id: "item_prisma_docs",
    title: "Prisma docs",
    description: "Reference for schema, migrations, and the client API.",
    contentType: "TEXT",
    content: null,
    url: "https://www.prisma.io/docs",
    fileUrl: null,
    fileName: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_link",
    tagIds: ["tag_docs"],
    collectionIds: ["col_reading"],
    updatedAt: "6d ago",
  },
  {
    id: "item_docker_compose_reset",
    title: "Docker compose reset",
    description: "Tear down and rebuild local containers from scratch.",
    contentType: "TEXT",
    content: "docker compose down -v && docker compose up --build",
    url: null,
    fileUrl: null,
    fileName: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "type_command",
    tagIds: ["tag_git", "tag_cli"],
    collectionIds: ["col_shell"],
    updatedAt: "1w ago",
  },
];
