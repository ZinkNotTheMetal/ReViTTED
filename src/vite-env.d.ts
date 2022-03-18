/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_VERSION: string
  // more env variables...
}

interface RuntimeConfiguration {
  API_URL: string
  // more runtime variables
}