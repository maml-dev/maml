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
    {
      name: "JSON", born: 2001
    }
    {
      name: "MAML", born: 2025
    }
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
5. Ordered key-value objects

**MAML** is human-readable and _easy to parse_.

## Editor Support

* IntelliJ IDEA <br/>
  [maml-intellij-plugin](https://plugins.jetbrains.com/plugin/28634-maml) ([source](https://github.com/DavidSeptimus/maml-intellij-plugin))

* VS Code <br/>
  [vscode-maml](https://marketplace.visualstudio.com/items?itemName=maml.vscode-maml) ([source](https://github.com/maml-dev/vscode-maml))

* Vim & Neovim <br/>
  [vim-maml](https://github.com/maml-dev/vim-maml)

* CodeMirror <br/>
  [codemirror-maml](https://github.com/maml-dev/codemirror-maml)

## Tools

* [mx](https://www.npmjs.com/package/mx) – a CLI tool for pretty printing and
  querying MAML files

## Implementations

Follow [the specification](/spec/v0.1) for creating new implementations.

* JavaScript <br/>
  [maml.js](https://github.com/maml-dev/maml.js) <Badge type="tip" text="MAML v0.1" /><br/>
  [maml-ast](https://github.com/maml-dev/maml-ast) <Badge type="tip" text="MAML v0.1" /><br/>

* Python <br/>
  [maml-py](https://pypi.org/project/maml-py/) <Badge type="tip" text="MAML v0.1" />

* C <br/>
  [libmaml](https://github.com/lhearachel/libmaml) <Badge type="tip" text="MAML v0.1" />

* Java <br/>
  [maml-java](https://github.com/skanga/maml-java) <Badge type="tip" text="MAML v0.1" />

* Rust <br/>
  [maml-rs](https://github.com/maml-dev/maml-rs) [work in progress]

* PHP <br/>
  [maml-php](https://github.com/maml-dev/maml-php) <Badge type="tip" text="MAML v0.1" />

* Grammar <br/>
  [maml-grammar](https://github.com/maml-dev/maml-grammar) <Badge type="tip" text="MAML v0.1" /> for TextMate,
  VitePress, Shiki, Linguist

## Projects Using MAML

* [google/zx](https://github.com/google/zx) – A tool for writing better scripts
* [Envi](https://envi.codecompose.dev) – Environment file management
* [Tachi Code](https://tachicode.dev) – Browser-native code editor

<sub>[Add your project too](https://github.com/maml-dev/maml/discussions/new?category=general&title=New%20project:%20)</sub>

## FAQ

1. [What’s the difference between MAML and JSONC/JSON5?](https://github.com/maml-dev/maml/issues/1)
2. [Why not Zig-style multiline?](https://github.com/maml-dev/maml/issues/3)
3. [What about YAML?](https://github.com/maml-dev/maml/issues/6)
