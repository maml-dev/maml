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

