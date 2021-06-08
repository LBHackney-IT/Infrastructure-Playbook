module.exports = {
  title: "Hackney Infrastructure Playbook",
  tagline:
    "A guide on Hackney's cloud infrastructure architecture and automation",
  url: "https://lbhackney-it.github.io/Infrastructure-Playbook",
  baseUrl: "/Infrastructure-Playbook/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "Infrastructure-Playbook",
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Infrastructure Playbook",
      logo: {
        alt: "Infrastructure Playbook",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/Infrastructure-Playbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: '4a83a5c4eb60fa0e4dae66ff84553e02',
      indexName: 'hackney',
      placeholder: 'Search playbook'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};
