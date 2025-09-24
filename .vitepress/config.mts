import fs from 'node:fs'
import { defineConfig } from 'vitepress'

const __dirname = new URL('.', import.meta.url).pathname
const mamlLang = JSON.parse(fs.readFileSync(__dirname + '/maml.json', 'utf8'))

export default defineConfig({
  base: '/',
  cleanUrls: true,
  title: 'MAML',
  titleTemplate: ':title',
  description: 'Minimal Abstract Markup Language',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Spec',
        items: [
          { text: 'v0.1', link: '/spec/v0.1' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maml-dev/maml' },
    ],
    search: {
      provider: 'local',
    },
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'plastic'
    },
    shikiSetup(shiki) {
      shiki.loadLanguage(mamlLang)
    },
  },
})
