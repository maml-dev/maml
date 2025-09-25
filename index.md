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

## Rationale

JSON is the most popular _data-interchange_ format. But it isn't a very good _configuration_ language.

**MAML** keeps JSON’s simplicity and adds only the needed bits for a good configuration language:

1. Comments
2. Multiline strings
3. Optional commas
4. Optional key quotes

**MAML** is human-readable and _easy to parse_.

## FAQ

1. [What’s the difference between MAML and JSONC/JSON5?](https://github.com/maml-dev/maml/issues/1)


## Implementations

MAML is a brand-new language, so feel free to create new implementations following [the specification](/spec/v0.1).

1. ...

