import { defineConfig } from "vitepress";

function getGuideSidebar() {
  return [
    {
      text: "Tooling",
      children: [
        { text: "Zsh", link: "/guide/zsh" },
        { text: "Yabai", link: "/guide/yabai" },
        { text: "Fish", link: "/guide/fish" },
      ],
    },
  ];
}

export default defineConfig({
  lang: "th-TH",
  title: "Setting",
  base: "/settings/",
  themeConfig: {
    nav: [{ text: "Guide", link: "/guide/zsh" }],
    sidebar: {
      "/guide/": getGuideSidebar(),
    },
  },
});
