declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PASS:string
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
