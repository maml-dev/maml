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

  # Array of objects
  examples: [
    { name: "JSON", born: 2001 }
    { name: "MAML", born: 2025 }    
  ]

  notes: """
This is a multiline raw strings.
Keeps formatting as-is.
"""
}
```

## Rationale

JSON is the most popular _data-interchange_ format. But it isn't a very good _configuration_ language.

**MAML** keeps JSON’s simplicity and adds only the needed bits for a good configuration language:

1. Comments
2. Multiline raw strings
3. Optional commas
4. Optional key quotes

**MAML** is human-readable and _easy to parse_.

## FAQ

1. [What’s the difference between MAML and JSONC/JSON5?](https://github.com/maml-dev/maml/issues/1)
2. [Why not Zig-style multiline?](https://github.com/maml-dev/maml/issues/3)
3. [What about YAML?](https://github.com/maml-dev/maml/issues/6)

## Editor Support

* IntelliJ IDEA <br/>
  [maml-intellij-plugin](https://plugins.jetbrains.com/plugin/28634-maml) ([source](https://github.com/DavidSeptimus/maml-intellij-plugin)) <Badge type="tip" text="MAML v0.1" />

## Implementations

MAML is a brand-new language, so feel free to create new implementations following [the specification](/spec/v0.1).

* JavaScript <br/>
  [maml.js](https://github.com/maml-dev/maml.js) <Badge type="tip" text="MAML v0.1" />

* Python <br/>
  [maml-py](https://pypi.org/project/maml-py/) <Badge type="tip" text="MAML v0.1" />

* C <br/>
  [libmaml](https://github.com/lhearachel/libmaml) <Badge type="tip" text="MAML v0.1" />

* Java <br/>
  [maml-java](https://github.com/skanga/maml-java) <Badge type="tip" text="MAML v0.1" />

* Rust <br/>
  [maml-rs](https://github.com/maml-dev/maml-rs) [work in progress]

* PHP <br/>
  [maml-php](https://github.com/maml-dev/maml-php) [work in progress]

