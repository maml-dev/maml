import { test } from 'vitest'
import path from 'node:path'
import { parseFile } from 'abnf'
import peggy from 'peggy'

async function generateParser(startRule = 'maml') {
  const __dirname = new URL('.', import.meta.url).pathname
  const rules = await parseFile(path.join(__dirname, 'maml.abnf'))
  const text = rules.toFormat()
  const doParse = peggy.generate(text, {startRule: 'maml'})?.parse
  if (!doParse) throw new Error('Parser generation failed')
  return (input) => {
    try {
      doParse(input, {grammarSource: 'input'})
    } catch (e) {
      if (typeof e.format === 'function') {
        throw new SyntaxError(e.format([
          {source: 'input', text: input},
        ]))
      } else {
        throw e
      }
    }
  }
}

test('simple', async () => {
  const parse = await generateParser()
  parse(`null`)
  parse(`true`)
  parse(`false`)
})

test('object', async () => {
  const parse = await generateParser()
  parse(`{"a":1,"b":2}`)
  parse(` { "a" : 1 , "b" : 2 } `)
  parse(`
    {
      a: 1
      b: 2
    }
  `)
  parse(`
    {
      a: 1,
      b: 2,
    }
  `)
})

test('object with comments', async () => {
  const parse = await generateParser()
  parse(`
  # before
  {}
  # after
  `)
  parse(`
    { # before
      a: 1 # after
      b: 2 # after
      # again
    } # after
  `)
})

test('array', async () => {
  const parse = await generateParser()
  parse(`[]`)
  parse(`[1,2,3]`)
  parse(`
    [
      1
      2
      3
    ]
  `)
  parse(`
    [
      1,
      2,
      3,
    ]
  `)
})

test('array with comments', async () => {
  const parse = await generateParser()
  parse(`
  # before
  []
  # after
  `)
  parse(`
    [ # before
      1 # after
      2 # after
      # before
      3 # after
      # again
    ] # after
  `)
})

test('string', async () => {
  const parse = await generateParser()
  parse(`""`)
  parse(`"a"`)

  // Testing multiline string is not possible,
  // as peggy parser does not support lookaheads.
})

