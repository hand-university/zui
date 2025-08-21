/// <reference types="vite/client" />

export {}

declare global {
}

interface ImportMetaEnv {
  readonly MODE: 'development' | 'production'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
