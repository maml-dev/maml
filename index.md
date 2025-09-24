---
layout: home

hero:
  name: "MAML"
  tagline: "Minimal. Human-readable. Machine-parsable."
---

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
    {
      maml: {
        name: "MAML"
        born: 2025
      }
    }    
  ]

  notes: """
This is a multiline strings.
Keeps formatting as-is.
"""
}
```

**MAML** is a minimal configuration language: easy for humans to write and trivial for machines to parse. It keeps
JSON’s strictness and braces, adds only what helps—newline separators, raw triple-quoted multiline strings, and `#`
comments—defines ordered objects, and provides one clear spec so implementations agree.

## FAQ

1. [What's MAML different from JSONC and JSON5?](https://github.com/maml-dev/maml/issues/1)

