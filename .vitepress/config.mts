import fs from 'node:fs'
import { defineConfig } from 'vitepress'

const __dirname = new URL('.', import.meta.url).pathname
const mamlLang = JSON.parse(fs.readFileSync(__dirname + '/maml.json', 'utf8'))

const metrika = `
  (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104322826', 'ym');

    ym(104322826, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
`

export default defineConfig({
  base: '/',
  cleanUrls: true,
  title: 'MAML',
  titleTemplate: ':title',
  description: 'Minimal Abstract Markup Language',
  head: [
    ['script', {}, metrika],
  ],
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
    footer: {
      message: 'MAML is licensed under the <a href="/license">MIT License</a>.',
      copyright: 'Copyright © 2025 <a href="https://medv.io">Medvedev Anton</a>'
    }
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
