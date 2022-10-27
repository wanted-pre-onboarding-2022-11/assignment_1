type Fn = (...args: any[]) => void | Promise<void>;

export default function debounce<T extends Fn>(callbackFn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  // eslint-disable-next-line
  return function <U>(this: U, ...args: Parameters<typeof callbackFn>) {
    // eslint-disable-next-line
    const context = this;
    if (typeof timer === "number") {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callbackFn.apply(context, args);
    }, delay);
  };
}
