import type { Metadata } from "next";
import Link from "next/link";

type ChallengeGroupId = "javascript" | "react-native";

type Challenge = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  summary: string;
  input: string;
  output: string;
  solution: string;
  checks: string[];
  tests: string;
};

type ChallengeGroup = {
  id: ChallengeGroupId;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  challenges: Challenge[];
};

const challengeGroups: ChallengeGroup[] = [
  {
    id: "javascript",
    label: "JavaScript",
    eyebrow: "Core coding rounds",
    title: "Five interview-standard JavaScript problems.",
    description:
      "These are strong screen-round and onsite-level prompts focused on closures, collections, recursion, caching, and complexity tradeoffs.",
    challenges: [
      {
        id: "debounce-function",
        title: "Debounce Function",
        difficulty: "Medium",
        summary:
          "Write debounce(fn, delay) so the wrapped function only runs after calls stop for the given delay.",
        input: `const log = debounce(console.log, 300);

log("A");
log("B");
log("C");`,
        output: `// after 300ms
C`,
        solution: `function debounce(fn, delay) {
  let timerId = null;

  return function debounced(...args) {
    const context = this;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const log = debounce(console.log, 300);

log("A");
log("B");
log("C");

// After 300ms, only "C" is printed.`,
        checks: [
          "The last call wins when multiple calls happen quickly.",
          "Arguments and this-context are preserved.",
          "The implementation works across repeated bursts of events."
        ],
        tests: "Closures, timers, function wrappers, and side-effect timing."
      },
      {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        summary:
          "Write groupAnagrams(words) that groups strings which are anagrams of each other.",
        input: `["eat", "tea", "tan", "ate", "nat", "bat"]`,
        output: `[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]`,
        solution: `function groupAnagrams(words) {
  const groups = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(word);
  }

  return Array.from(groups.values());
}

console.log(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);`,
        checks: [
          "Order inside each group does not matter.",
          "A hash key based on sorted characters is acceptable.",
          "Be ready to explain time complexity for sorting-based grouping."
        ],
        tests: "Hash maps, array transforms, and complexity analysis."
      },
      {
        id: "flatten-array",
        title: "Flatten Nested Array",
        difficulty: "Medium",
        summary:
          "Write flatten(arr) without using Array.prototype.flat(Infinity).",
        input: `[1, [2, [3, 4], 5], 6]`,
        output: `[1, 2, 3, 4, 5, 6]`,
        solution: `function flatten(arr) {
  const result = [];

  function walk(items) {
    for (const item of items) {
      if (Array.isArray(item)) {
        walk(item);
      } else {
        result.push(item);
      }
    }
  }

  walk(arr);
  return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6]));`,
        checks: [
          "Handle arbitrarily nested arrays.",
          "Recursive and iterative stack-based solutions are both valid.",
          "Avoid mutating the original input unless you state that choice."
        ],
        tests: "Recursion, stack simulation, and traversal order."
      },
      {
        id: "memoize-function",
        title: "Memoize Function",
        difficulty: "Medium",
        summary:
          "Write memoize(fn) for pure functions so repeated calls with the same arguments reuse cached results.",
        input: `let calls = 0;

const add = memoize((a, b) => {
  calls++;
  return a + b;
});

add(1, 2);
add(1, 2);`,
        output: `3
3
calls === 1`,
        solution: `function memoize(fn) {
  const cache = new Map();

  return function memoized(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

let calls = 0;

const add = memoize((a, b) => {
  calls++;
  return a + b;
});

console.log(add(1, 2));
console.log(add(1, 2));
console.log(calls);`,
        checks: [
          "Your cache key strategy should be explicit.",
          "Mention the limitation for non-serializable arguments.",
          "The function should not recompute for identical inputs."
        ],
        tests: "Caching, key generation, and function purity assumptions."
      },
      {
        id: "first-unique-char",
        title: "Find First Non-Repeating Character",
        difficulty: "Easy",
        summary:
          "Write firstUniqueChar(str) and return the first character that appears exactly once.",
        input: `"swiss"

"aabbcc"`,
        output: `"w"

null`,
        solution: `function firstUniqueChar(str) {
  const counts = new Map();

  for (const char of str) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (counts.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("aabbcc"));`,
        checks: [
          "The answer depends on original string order, not sorted order.",
          "A two-pass frequency map is the cleanest baseline solution.",
          "Return null when no unique character exists."
        ],
        tests: "Frequency counting, ordered traversal, and map usage."
      }
    ]
  },
  {
    id: "react-native",
    label: "React Native",
    eyebrow: "Product engineering rounds",
    title: "Four practical React Native implementation tasks.",
    description:
      "These mirror the kind of take-home or live-coding work used to judge state design, async handling, list performance, and user experience under pressure.",
    challenges: [
      {
        id: "searchable-user-list",
        title: "Searchable User List",
        difficulty: "Easy",
        summary:
          "Build a screen with a TextInput, a FlatList of users, and an empty state for no matches.",
        input: `users = [
  { id: "1", name: "Aman" },
  { id: "2", name: "Riya" },
  { id: "3", name: "Rahul" }
]
searchText = "ri"`,
        output: `[
  { id: "2", name: "Riya" }
]`,
        solution: `import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const USERS = [
  { id: "1", name: "Aman" },
  { id: "2", name: "Riya" },
  { id: "3", name: "Rahul" }
];

export default function SearchableUserList() {
  const [searchText, setSearchText] = useState("");

  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(searchText.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search users"
        style={styles.input}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.row}>{item.name}</Text>}
        ListEmptyComponent={<Text style={styles.empty}>No users found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12
  },
  row: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb"
  },
  empty: { padding: 12, color: "#6b7280" }
});`,
        checks: [
          "Search should be case-insensitive.",
          "Use keyExtractor for stable rows.",
          "Avoid unnecessary re-renders while typing."
        ],
        tests: "State updates, list rendering, filtering, and RN fundamentals."
      },
      {
        id: "paginated-api-list",
        title: "Paginated API List",
        difficulty: "Medium",
        summary:
          "Build a FlatList that fetches additional pages as the user scrolls.",
        input: `page1 = [{ id: "1" }, { id: "2" }]
page2 = [{ id: "3" }, { id: "4" }]`,
        output: `// after loading page 2
[
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" }
]`,
        solution: `import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

async function fetchPage(page) {
  const response = await fetch("https://example.com/items?page=" + page);

  if (!response.ok) {
    throw new Error("Failed to fetch page");
  }

  return response.json();
}

export default function PaginatedListScreen() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const loadPage = async (nextPage, replace = false) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchPage(nextPage);
      const nextItems = Array.isArray(data.items) ? data.items : [];

      setItems((current) =>
        replace ? nextItems : [...current, ...nextItems]
      );
      setPage(nextPage);
      setHasMore(Boolean(data.hasMore));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadPage(1, true);
  }, []);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadPage(page + 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadPage(1, true);
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Pressable style={styles.banner} onPress={() => loadPage(page, page === 1)}>
          <Text style={styles.bannerText}>Retry: {error}</Text>
        </Pressable>
      ) : null}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.row}>{item.id}</Text>}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={
          loading && items.length > 0 ? <ActivityIndicator /> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  banner: {
    backgroundColor: "#fee2e2",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12
  },
  bannerText: { color: "#991b1b", fontWeight: "600" },
  row: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb"
  }
});`,
        checks: [
          "Show a bottom loader while the next page is in flight.",
          "Prevent duplicate requests from repeated onEndReached calls.",
          "Handle error and retry states cleanly."
        ],
        tests: "Pagination, async control flow, race conditions, and UX state design."
      },
      {
        id: "otp-input",
        title: "OTP Input Component",
        difficulty: "Medium",
        summary:
          "Create a 4-digit OTP component with smart focus movement and paste handling.",
        input: `User types: 1, 2, 3, 4`,
        output: `OTP value = "1234"`,
        solution: `import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const OTP_LENGTH = 4;

export default function OTPInput() {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const inputs = useRef([]);

  const otpValue = useMemo(() => digits.join(""), [digits]);

  const focusInput = (index) => {
    const input = inputs.current[index];
    if (input) {
      input.focus();
    }
  };

  const updateDigits = (value, index) => {
    const sanitized = value.replace(/[^0-9]/g, "");

    if (!sanitized) {
      const next = [...digits];
      next[index] = "";
      setDigits(next);
      return;
    }

    if (sanitized.length > 1) {
      const next = [...digits];

      sanitized.slice(0, OTP_LENGTH).split("").forEach((char, offset) => {
        if (index + offset < OTP_LENGTH) {
          next[index + offset] = char;
        }
      });

      setDigits(next);
      focusInput(Math.min(index + sanitized.length, OTP_LENGTH - 1));
      return;
    }

    const next = [...digits];
    next[index] = sanitized;
    setDigits(next);

    if (index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyPress = (key, index) => {
    if (key === "Backspace" && !digits[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {digits.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputs.current[index] = ref;
            }}
            value={digit}
            onChangeText={(text) => updateDigits(text, index)}
            onKeyPress={({ nativeEvent }) =>
              handleKeyPress(nativeEvent.key, index)
            }
            keyboardType="number-pad"
            maxLength={OTP_LENGTH}
            style={styles.input}
          />
        ))}
      </View>

      <Text style={styles.value}>OTP value: {otpValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  row: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  input: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 14,
    textAlign: "center",
    fontSize: 24
  },
  value: { marginTop: 16, fontSize: 16, fontWeight: "600" }
});`,
        checks: [
          "Focus should move to the next box after valid input.",
          "Backspace should move to the previous field when appropriate.",
          "Pasting a full OTP should distribute values correctly."
        ],
        tests: "Refs, controlled inputs, event handling, and mobile UX details."
      },
      {
        id: "offline-todo",
        title: "Offline-Aware Todo Screen",
        difficulty: "Hard",
        summary:
          "Build a todo flow where users can create items offline and sync them once connectivity returns.",
        input: `Initial todos = []
User adds "Buy milk" while offline`,
        output: `[
  { id: "temp-1", title: "Buy milk", synced: false }
]

// after network restore
[
  { id: "101", title: "Buy milk", synced: true }
]`,
        solution: `import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const STORAGE_KEY = "offline-todos";

async function createTodoOnServer(todo) {
  const response = await fetch("https://example.com/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: todo.title })
  });

  if (!response.ok) {
    throw new Error("Failed to sync todo");
  }

  return response.json();
}

export default function OfflineTodoScreen() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored) {
        setTodos(JSON.parse(stored));
      }
    });

    const unsubscribe = NetInfo.addEventListener((state) => {
      const online = Boolean(state.isConnected);
      setIsOnline(online);

      if (online) {
        syncPendingTodos();
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: "temp-" + Date.now(),
      title: text.trim(),
      synced: false
    };

    setTodos((current) => [newTodo, ...current]);
    setText("");
  };

  const syncPendingTodos = async () => {
    const pending = todos.filter((todo) => !todo.synced);

    for (const todo of pending) {
      try {
        const saved = await createTodoOnServer(todo);

        setTodos((current) =>
          current.map((item) =>
            item.id === todo.id
              ? { ...item, id: saved.id, synced: true }
              : item
          )
        );
      } catch {
        break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {isOnline ? "Online" : "Offline"}
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Add a todo"
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>
              {item.synced ? "Synced" : "Pending sync"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  status: { marginBottom: 12, fontWeight: "700" },
  inputRow: { flexDirection: "row", gap: 12, marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  button: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center"
  },
  buttonText: { color: "#fff", fontWeight: "700" },
  row: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb"
  },
  title: { fontSize: 16, fontWeight: "600" },
  meta: { marginTop: 4, color: "#6b7280" }
});`,
        checks: [
          "Use optimistic state while offline.",
          "Persist queued work so it survives app restarts.",
          "Resolve temporary IDs when the server confirms sync."
        ],
        tests: "Offline state, persistence strategy, optimistic UI, and app architecture."
      }
    ]
  }
];

const standards = [
  "Clarify assumptions before writing code, especially around edge cases and invalid input.",
  "State time and space complexity clearly for JavaScript problems.",
  "In React Native, separate rendering, state management, and data-fetching concerns.",
  "Always handle loading, empty, and error states for user-facing screens.",
  "Prefer small functions, readable naming, and predictable state transitions.",
  "Call out tradeoffs explicitly when an interviewer asks for alternatives."
];

const practiceOrder = [
  "Debounce Function",
  "Group Anagrams",
  "Flatten Nested Array",
  "Searchable User List",
  "Paginated API List",
  "OTP Input Component",
  "Offline-Aware Todo Screen"
];

const totalChallenges = challengeGroups.reduce(
  (count, group) => count + group.challenges.length,
  0
);

const heroStats = [
  {
    label: "Coverage",
    value: `${totalChallenges} prompts`,
    detail: "From closure-heavy JavaScript rounds to product-grade React Native tasks."
  },
  {
    label: "Format",
    value: "Interview-ready",
    detail: "Each challenge includes example input, expected output, checks, and review signals."
  },
  {
    label: "Prep mode",
    value: "Progressive",
    detail: "Start with core data-structure and function design, then move into mobile state and UX work."
  }
] as const;

const groupThemes = {
  javascript: {
    badge: "border-cyan-300/30 bg-cyan-400/12 text-cyan-100",
    accent: "from-cyan-300/18 via-sky-400/10 to-transparent",
    chip: "border-cyan-300/25 bg-cyan-400/12 text-cyan-50 hover:border-cyan-200/40 hover:bg-cyan-400/18",
    spotlight: "bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_48%)]"
  },
  "react-native": {
    badge: "border-emerald-300/30 bg-emerald-400/12 text-emerald-100",
    accent: "from-emerald-300/18 via-teal-400/10 to-transparent",
    chip: "border-emerald-300/25 bg-emerald-400/12 text-emerald-50 hover:border-emerald-200/40 hover:bg-emerald-400/18",
    spotlight: "bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.18),transparent_48%)]"
  }
} as const;

function DifficultyPill({ difficulty }: { difficulty: Challenge["difficulty"] }) {
  const styles = {
    Easy: "border-emerald-300/30 bg-emerald-400/10 text-emerald-100",
    Medium: "border-amber-300/30 bg-amber-400/10 text-amber-100",
    Hard: "border-rose-300/30 bg-rose-400/10 text-rose-100"
  } as const;

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${styles[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}

function getGroupTheme(groupId: ChallengeGroup["id"]) {
  return groupThemes[groupId];
}

export const metadata: Metadata = {
  title: "RN + JavaScript Coding Challenges",
  description:
    "Interview-standard JavaScript and React Native coding challenges with inputs, outputs, and evaluation notes."
};

export default function RNJSCodingChallengesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-5 sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-4rem] h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-28 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-5">
        <section className="glass-panel relative overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(135deg,rgba(8,17,31,0.92),rgba(7,11,22,0.72))] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.14),transparent_28rem),radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.12),transparent_24rem)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.85fr)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-950/45 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
                React Native + JavaScript
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-slate-50 sm:text-5xl lg:text-6xl">
                Coding challenges built for real interview pressure.
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
                This page collects the JavaScript and React Native prompts from
                your prep list into one route with concrete inputs, expected
                outputs, and the evaluation criteria interviewers usually care
                about.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  Back to hub
                </Link>
                <a
                  href="#challenge-groups"
                  className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:border-cyan-300/40 hover:bg-cyan-400/25"
                >
                  Jump to challenges
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {challengeGroups.map((group) => {
                  const theme = getGroupTheme(group.id);

                  return (
                    <a
                      key={group.id}
                      href={`#${group.id}`}
                      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition ${theme.chip}`}
                    >
                      {group.label}
                    </a>
                  );
                })}
                <a
                  href="#prep-standards"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  Best standard
                </a>
                <a
                  href="#practice-order"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  Practice order
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                >
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-50 sm:text-3xl">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="challenge-groups"
          className="grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.75fr)]"
        >
          <div className="grid gap-5">
            {challengeGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className={`glass-panel relative overflow-hidden rounded-[32px] border border-white/12 p-6 sm:p-7 ${getGroupTheme(group.id).spotlight}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${getGroupTheme(group.id).accent}`}
                />
                <div className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                  {group.eyebrow}
                </div>
                <div className="relative mt-3 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      {group.label}
                    </div>
                    <h2 className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-slate-50">
                      {group.title}
                    </h2>
                  </div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                    {group.challenges.length} prompts
                  </div>
                </div>
                <p className="relative mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  {group.description}
                </p>

                <div className="relative mt-6 grid gap-5">
                  {group.challenges.map((challenge, index) => (
                    <article
                      key={challenge.id}
                      id={challenge.id}
                      className="group rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.74),rgba(2,6,23,0.52))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-[linear-gradient(180deg,rgba(2,6,23,0.82),rgba(2,6,23,0.58))] sm:p-6"
                    >
                      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-slate-100 shadow-[0_16px_36px_rgba(0,0,0,0.22)]">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.14em] text-slate-400">
                              {group.label}
                            </div>
                            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                              {challenge.title}
                            </h3>
                            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                              {challenge.summary}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href={`#${challenge.id}`}
                            className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300 transition hover:border-white/20 hover:bg-white/10"
                          >
                            Anchor
                          </a>
                          <DifficultyPill difficulty={challenge.difficulty} />
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 xl:grid-cols-2">
                        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                            Input
                          </div>
                          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words rounded-[20px] border border-cyan-300/10 bg-slate-950/80 p-4 font-mono text-[13px] leading-6 text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                            {challenge.input}
                          </pre>
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                          <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
                            Output
                          </div>
                          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words rounded-[20px] border border-emerald-300/10 bg-slate-950/80 p-4 font-mono text-[13px] leading-6 text-emerald-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                            {challenge.output}
                          </pre>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.9fr)]">
                        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                            Expected checks
                          </div>
                          <ul className="mt-3 grid gap-3 text-sm leading-7 text-slate-300">
                            {challenge.checks.map((item) => (
                              <li
                                key={item}
                                className="rounded-[18px] border border-white/10 bg-black/15 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                            What it tests
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-300">
                            {challenge.tests}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.52))] p-4">
                        <div className="inline-flex rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-fuchsia-100">
                          Full solution
                        </div>
                        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words rounded-[20px] border border-fuchsia-300/10 bg-slate-950/85 p-4 font-mono text-[13px] leading-6 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                          {challenge.solution}
                        </pre>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="grid gap-5 self-start lg:sticky lg:top-6">
            <section className="glass-panel rounded-[28px] border border-white/12 p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                Quick jump
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                Navigate the pack
              </h2>
              <div className="mt-4 grid gap-3">
                {challengeGroups.map((group) => {
                  const theme = getGroupTheme(group.id);

                  return (
                    <a
                      key={group.id}
                      href={`#${group.id}`}
                      className={`rounded-[18px] border px-4 py-3 text-sm font-medium transition ${theme.chip}`}
                    >
                      {group.label}
                    </a>
                  );
                })}
              </div>
            </section>

            <section
              id="prep-standards"
              className="glass-panel rounded-[28px] border border-white/12 p-6"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                Best standard
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                How to answer at a strong interview bar
              </h2>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
                {standards.map((standard) => (
                  <li
                    key={standard}
                    className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {standard}
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="practice-order"
              className="glass-panel rounded-[28px] border border-white/12 p-6"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                Practice round
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                Suggested order
              </h2>
              <ol className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
                {practiceOrder.map((item, index) => (
                  <li
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="mr-2 font-semibold text-slate-100">
                      {index + 1}.
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
