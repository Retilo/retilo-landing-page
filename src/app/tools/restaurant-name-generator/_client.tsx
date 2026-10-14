"use client"

import { useState } from "react"

import { useTrack } from "@/hooks/use-track"
import { IconCopy, IconRefresh, IconCheck } from "@tabler/icons-react"

type Cuisine =
  | "indian"
  | "chinese"
  | "italian"
  | "continental"
  | "cafe"
  | "street"
  | "south-indian"
  | "seafood"

type Vibe = "fine-dining" | "casual" | "takeaway" | "family"

const CUISINE_LABELS: Record<Cuisine, string> = {
  indian: "Indian",
  "south-indian": "South Indian",
  chinese: "Chinese",
  italian: "Italian",
  continental: "Continental",
  cafe: "Café / Bakery",
  street: "Street Food",
  seafood: "Seafood",
}

const VIBE_LABELS: Record<Vibe, string> = {
  "fine-dining": "Fine Dining",
  casual: "Casual",
  takeaway: "Takeaway / Quick",
  family: "Family Style",
}

// Word banks per cuisine
const CUISINE_WORDS: Record<Cuisine, string[]> = {
  indian: [
    "Dhaba", "Zaika", "Rasoi", "Haveli", "Masala", "Tadka", "Mirchi",
    "Tandoor", "Chowk", "Bagaan", "Angan", "Dawat", "Utsav", "Swad",
    "Thali", "Bhavan", "Chulha", "Spice", "Saffron", "Haldi",
  ],
  "south-indian": [
    "Dosa", "Udupi", "Chettinad", "Kerala", "Nair's", "Andhra",
    "Idli", "Sambar", "Kongu", "Kodagu", "Oottupura", "Nalapaka",
    "Rasa", "Tiffin", "Banana Leaf", "Samayal", "Veedu", "Thinnai",
  ],
  chinese: [
    "Dragon", "Wok", "Lotus", "Panda", "Bamboo", "Phoenix",
    "Jade", "Golden", "Orient", "Silk", "Mandu", "Noodle House",
    "Dumpling", "Szechuan", "Mandarin", "Pearl", "Lantern",
  ],
  italian: [
    "Trattoria", "Osteria", "Cucina", "Forno", "Tavola", "Piccolo",
    "Bella", "Casa", "Villa", "La", "Il", "Rustico", "Pasta",
    "Piazza", "Dolce", "Sole", "Terra", "Al Dente",
  ],
  continental: [
    "Bistro", "Brasserie", "Table", "Kitchen", "Plate", "Fork",
    "Garden", "Pantry", "House", "Co.", "Bar & Grill", "Provisions",
    "The Larder", "Canteen", "Social",
  ],
  cafe: [
    "Brew", "Roast", "Perch", "Nook", "Corner", "Perk",
    "Grind", "Bean", "Crumbs", "Larder", "Knead", "Rise",
    "Toast", "Warm", "Drip", "Bloom", "Cozy", "Loft",
  ],
  street: [
    "Stall", "Cart", "Wala", "Corner", "Junction", "Tapri",
    "Thela", "Chaat", "Bhel", "Gali", "Mela", "Bazaar",
    "Khao", "Adda", "Nukkad", "Ramshackle",
  ],
  seafood: [
    "Tide", "Harbour", "Catch", "Pier", "Cove", "Reef",
    "Anchor", "Net", "Shore", "Bay", "Captain", "Wharf",
    "Prawn", "Pearl", "Brine", "Coastal",
  ],
}

const DESCRIPTORS = [
  "The", "Little", "Old", "New", "Urban", "Royal", "Grand",
  "Mama's", "Papa's", "Brother's", "Grandma's", "Original",
  "Authentic", "Famous", "Classic", "Modern", "Hidden", "Secret",
]

const SUFFIXES_BY_VIBE: Record<Vibe, string[]> = {
  "fine-dining": [
    "Brasserie", "& Co.", "House", "Table", "1901", "Studio",
    "Reserve", "Collective", "Atelier",
  ],
  casual: [
    "Kitchen", "Eatery", "Diner", "Spot", "Place", "Joint",
    "Stop", "Hub", "Den",
  ],
  takeaway: [
    "Express", "Quick", "Fast", "Box", "Go", "On The Go",
    "Xpress", "Flash", "2 Go",
  ],
  family: [
    "Family Kitchen", "Home", "Family Diner", "& Family",
    "Heritage", "Homestyle", "Home Kitchen",
  ],
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateNames(
  cuisine: Cuisine,
  vibe: Vibe,
  keyword: string
): string[] {
  const words = CUISINE_WORDS[cuisine]
  const suffixes = SUFFIXES_BY_VIBE[vibe]
  const kw = keyword.trim()

  const names: string[] = []
  const used = new Set<string>()

  function add(name: string) {
    const trimmed = name.trim()
    if (!used.has(trimmed)) {
      used.add(trimmed)
      names.push(trimmed)
    }
  }

  // Pattern 1: The [Descriptor] [Word]
  for (let i = 0; i < 3; i++) {
    add(`The ${pick(DESCRIPTORS).replace("The", "").trim()} ${pick(words)}`)
  }

  // Pattern 2: [Word] [Suffix]
  for (let i = 0; i < 3; i++) {
    add(`${pick(words)} ${pick(suffixes)}`)
  }

  // Pattern 3: [Descriptor] [Word]
  for (let i = 0; i < 2; i++) {
    const d = pick(DESCRIPTORS)
    add(`${d === "The" ? "The" : d} ${pick(words)}`)
  }

  // Pattern 4: keyword-based
  if (kw) {
    add(`${kw} ${pick(words)}`)
    add(`${pick(words)} by ${kw}`)
    add(`${kw}'s ${pick(words)} ${pick(suffixes)}`)
    add(`The ${kw} ${pick(words)}`)
  } else {
    add(`${pick(words)} & ${pick(words)}`)
    add(`${pick(DESCRIPTORS)} ${pick(words)} ${pick(suffixes)}`)
  }

  // Fill to 12
  while (names.length < 12) {
    const patterns = [
      () => `${pick(words)} ${pick(suffixes)}`,
      () => `The ${pick(words)}`,
      () => `${pick(DESCRIPTORS)} ${pick(words)}`,
    ]
    add(pick(patterns)())
  }

  return names.slice(0, 12)
}

export function NameGeneratorClient() {
  const track = useTrack()
  const [cuisine, setCuisine] = useState<Cuisine>("indian")
  const [vibe, setVibe] = useState<Vibe>("casual")
  const [keyword, setKeyword] = useState("")
  const [names, setNames] = useState<string[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  function generate() {
    setNames(generateNames(cuisine, vibe, keyword))
    track("tool_used", { tool: "restaurant-name-generator", cuisine, vibe })
  }

  async function copy(name: string) {
    await navigator.clipboard.writeText(name)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
        {/* Cuisine */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Cuisine Type
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.keys(CUISINE_LABELS) as Cuisine[]).map((c) => (
              <button
                key={c}
                onClick={() => setCuisine(c)}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                  cuisine === c
                    ? "bg-primary text-white"
                    : "border border-border bg-background hover:bg-accent"
                }`}
              >
                {CUISINE_LABELS[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Vibe */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Vibe / Format
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.keys(VIBE_LABELS) as Vibe[]).map((v) => (
              <button
                key={v}
                onClick={() => setVibe(v)}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                  vibe === v
                    ? "bg-primary text-white"
                    : "border border-border bg-background hover:bg-accent"
                }`}
              >
                {VIBE_LABELS[v]}
              </button>
            ))}
          </div>
        </div>

        {/* Keyword */}
        <div>
          <label className="block text-sm font-medium text-foreground">
            Keyword{" "}
            <span className="text-muted-foreground">(optional — city, name, theme)</span>
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. Hyderabad, Mehta, Rooftop"
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <button
          onClick={generate}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <IconRefresh className="h-4 w-4" />
          Generate Names
        </button>
      </div>

      {/* Results */}
      {names.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-foreground">
              12 name ideas for you
            </p>
            <button
              onClick={generate}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <IconRefresh className="h-3.5 w-3.5" />
              Regenerate
            </button>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {names.map((name) => (
              <div
                key={name}
                className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent/50"
              >
                <span className="text-sm font-medium text-foreground">
                  {name}
                </span>
                <button
                  onClick={() => copy(name)}
                  className="ml-2 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied === name ? (
                    <IconCheck className="h-4 w-4 text-green-500" />
                  ) : (
                    <IconCopy className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                  )}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Click the copy icon to copy any name. Hit Regenerate for fresh
            ideas.
          </p>
        </div>
      )}
    </div>
  )
}
