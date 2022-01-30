import { defineConfig } from 'vitepress'

function getGuideSidebar() {
  return [
    {
      text: 'Tooling',
      children: [
        { text: 'Yabai', link: '/guide/yabai' },
        { text: 'Fish', link: '/guide/fish' },
        { text: 'Zsh', link: '/guide/zsh' },
      ]
    },
  ]
}

export default defineConfig({
  lang: 'th-TH',
  title: 'Jungai Setting',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide', activeMatch: '^/$|^/guide/' },
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
    }
  }
})
