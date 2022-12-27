/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly REPO_OWNER: string
  readonly REPO_NAME: string
  readonly BLOG_URL: string

  readonly GITHUB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
