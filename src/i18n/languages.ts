export const languages = {
  en: 'English',
  'zh-cn': '简体中文',
} as const

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.tags': 'Tags',

    'pinned.name': 'Pinned',

    'latest.posts.name': 'Latest Posts',
    'latest.posts.more': 'view all posts',

    'top.tags.name': 'Top Tags',
    'top.tags.more': 'view all tags',

    'footer.title': 'Get in Touch.',
    'footer.description':
      "If you'd like to explore more of my content, click on the social media links below or subscribe to my RSS feed.",

    'footer.copyright': 'Copyright © zhangyu1818',
    'footer.made.with': 'Made with Astro 🚀',

    'all.tags': 'All Tags',

    'posts.with.tag': 'Posts with the tag',

    'view.on.github': 'View on Github',
  },
  'zh-cn': {
    'nav.home': '首页',
    'nav.posts': '文章',
    'nav.tags': '标签',

    'pinned.name': '已固定',

    'latest.posts.name': '最新发布',
    'latest.posts.more': '查看全部文章',

    'top.tags.name': '热门标签',
    'top.tags.more': '查看全部标签',

    'footer.title': '联系我',
    'footer.description': '如果你想了解更多我的内容，请点击下面的社交媒体链接或订阅我的 RSS 源。',

    'footer.copyright': 'Copyright © zhangyu1818',
    'footer.made.with': 'Made with Astro 🚀',

    'all.tags': '全部标签',

    'posts.with.tag': '包含标签',

    'view.on.github': '在 Github 上查看',
  },
} as const

export const defaultLanguage = 'en'
