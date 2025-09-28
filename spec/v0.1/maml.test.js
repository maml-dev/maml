import { test, describe, beforeAll } from 'vitest'
import path from 'node:path'
import { parseFile } from 'abnf'
import peggy from 'peggy'

const  allowedStartRules = ['maml']

async function generateParser() {
  const __dirname = new URL('.', import.meta.url).pathname
  const rules = await parseFile(path.join(__dirname, 'maml.abnf'))
  const text = rules.toFormat()
  const doParse = peggy.generate(text, { allowedStartRules })?.parse
  if (!doParse) throw new Error('Parser generation failed')
  return (input, startRule = 'maml') => {
    try {
      return doParse(input, { startRule, grammarSource: 'input' })
    } catch (e) {
      if (typeof e.format === 'function') {
        throw new SyntaxError(e.format([
          { source: 'input', text: input },
        ]))
      } else {
        throw e
      }
    }
  }
}

let parse

beforeAll(async () => {
  parse = await generateParser()
})

describe('MAML v0.1', () => {
  test('simple', () => {
    parse(`null`)
    parse(`true`)
    parse(`false`)
  })

  test('object', () => {
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

  test('object with comments', () => {
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

  test('array', () => {
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

  test('array with comments', () => {
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

  test('string', () => {
    parse(`""`)
    parse(`"a"`)

    // Testing multiline string is not possible,
    // as peggy parser does not support lookaheads.
  })
})
