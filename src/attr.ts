import Registry from "./registry";

export declare function attr<K extends keyof Registry>(key: K): Registry[K];
