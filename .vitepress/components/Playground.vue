<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const editorRef = ref(null)
const outputRef = ref(null)
const error = ref('')

const defaultMAML = `{
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
This is a multiline raw string.
Keeps formatting as-is.
"""
}`

let editorView = null
let outputView = null

onMounted(async () => {
  const { EditorView, basicSetup } = await import('codemirror')
  const { EditorState, Compartment } = await import('@codemirror/state')
  const { StreamLanguage } = await import('@codemirror/language')
  const { json } = await import('@codemirror/lang-json')
  const { oneDark } = await import('@codemirror/theme-one-dark')
  const maml = await import('maml.js')

  const themeCompartment = new Compartment()
  const outputThemeCompartment = new Compartment()

  function getTheme() {
    return isDark.value ? oneDark : EditorView.theme({})
  }

  const mamlLanguage = StreamLanguage.define({
    startState() {
      return { inRawString: false }
    },
    token(stream, state) {
      if (state.inRawString) {
        if (stream.match('"""')) {
          state.inRawString = false
          return 'string'
        }
        stream.skipToEnd()
        return 'string'
      }

      if (stream.eatSpace()) return null

      if (stream.eat('#')) {
        stream.skipToEnd()
        return 'lineComment'
      }

      if (stream.match('"""')) {
        state.inRawString = true
        return 'string'
      }

      if (stream.eat('"')) {
        while (!stream.eol()) {
          const ch = stream.next()
          if (ch === '"') return 'string'
          if (ch === '\\') stream.next()
        }
        return 'string'
      }

      if (stream.match(/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?(?=[\s,\]\}]|$)/)) {
        return 'number'
      }

      if (stream.match(/\b(?:true|false|null)\b/)) {
        return 'atom'
      }

      if (stream.match(/[A-Za-z_][A-Za-z0-9_-]*/)) {
        return 'variableName'
      }

      const ch = stream.next()
      if ('{}[],:'.includes(ch)) return 'punctuation'
      return null
    },
  })

  function parse(doc) {
    try {
      const result = maml.parse(doc)
      error.value = ''
      return JSON.stringify(result, null, 2)
    } catch (e) {
      error.value = e.message
      return ''
    }
  }

  function updateOutput(text) {
    if (!outputView) return
    outputView.dispatch({
      changes: { from: 0, to: outputView.state.doc.length, insert: text },
    })
  }

  editorView = new EditorView({
    state: EditorState.create({
      doc: defaultMAML,
      extensions: [
        basicSetup,
        mamlLanguage,
        themeCompartment.of(getTheme()),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            updateOutput(parse(update.state.doc.toString()))
          }
        }),
      ],
    }),
    parent: editorRef.value,
  })

  const initialOutput = parse(defaultMAML)

  outputView = new EditorView({
    state: EditorState.create({
      doc: initialOutput,
      extensions: [
        basicSetup,
        json(),
        EditorState.readOnly.of(true),
        outputThemeCompartment.of(getTheme()),
      ],
    }),
    parent: outputRef.value,
  })

  watch(isDark, () => {
    const theme = getTheme()
    editorView.dispatch({ effects: themeCompartment.reconfigure(theme) })
    outputView.dispatch({ effects: outputThemeCompartment.reconfigure(theme) })
  })
})

onUnmounted(() => {
  editorView?.destroy()
  outputView?.destroy()
})
</script>

<template>
  <div class="playground">
    <div class="playground-pane">
      <div class="playground-label">MAML</div>
      <div class="playground-editor" ref="editorRef"></div>
    </div>
    <div class="playground-pane">
      <div class="playground-label">JSON</div>
      <div class="playground-error" v-if="error">{{ error }}</div>
      <div class="playground-editor" ref="outputRef"></div>
    </div>
  </div>
</template>

<style scoped>
.playground {
  display: flex;
  gap: 1px;
  background: var(--vp-c-divider);
  height: calc(100vh - var(--vp-nav-height));
}

.playground-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--vp-c-bg);
}

.playground-label {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}

.playground-editor {
  flex: 1;
  overflow: auto;
}

.playground-editor :deep(.cm-editor) {
  height: 100%;
}

.playground-editor :deep(.cm-scroller) {
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
}

.playground-error {
  padding: 8px 16px;
  font-size: 13px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
  white-space: pre;
  overflow-x: auto;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .playground {
    flex-direction: column;
  }

  .playground-pane {
    height: 50%;
  }
}
</style>
