/* eslint-disable @typescript-eslint/no-explicit-any */

interface ScopedVar<T = any> {
  text: any;
  value: T;
  [key: string]: any;
}

/* eslint-enable @typescript-eslint/no-explicit-any */

interface ScopedVars {
  [key: string]: ScopedVar;
}
