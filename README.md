# MAML — Minimal Abstract Markup Language

**MAML** is a minimal and efficient markup language designed to be straightforward to parse and easy to write.

---

## ✨ Why MAML?

* **Minimal** → No unnecessary symbols, noise, or quirks.
* **Readable** → Intuitive syntax that feels natural for humans.
* **Familiar** → Inspired by JSON, but with a modern twist.
* **Efficient** → Lightweight and fast, from small configs to massive APIs.
* **Extensible** → Scales across projects, tools, and environments.

---

## 🔍 Example


```maml
{
  project: "MAML"
  tags: [
    "minimal"
    "readable"
  ]

  # A simple nested object
  spec: {
    version: 1
    author: "Anton Medvedev"
  }

  # Array of objects with nested objects
  examples: [
    {
      json: {
        name: "JSON"
        born: 2001
      }
    }
  ]

  notes: """
This is a multiline strings.
Keeps formatting as-is.
"""
}
```

---

## ⚖️ MAML vs Others

| Feature           | JSON      | YAML      | TOML      | **MAML**     |
|-------------------|-----------|-----------|-----------|--------------|
| Human readability | ⚠️ Medium | ✅ High    | ✅ High    | ✅✅ Very High |
| Verbosity         | ❌ High    | ⚠️ Medium | ✅ Low     | ✅ Very Low   |
| Parsing speed     | ✅ Fast    | ⚠️ Medium | ✅ Fast    | ✅ Fast       |
| Learning curve    | ✅ Easy    | ❌ Tricky  | ⚠️ Medium | ✅ Easy       |

---

## 🌍 Philosophy

MAML follows one simple rule:
**Data should be effortless to write, read, and share.**

Whether you’re configuring apps, defining APIs, or structuring data at scale, MAML is here to make your workflow faster,
cleaner, and smarter.
