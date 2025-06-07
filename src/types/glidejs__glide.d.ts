declare module "@glidejs/glide" {
  interface GlideOptions {
    type?: string;
    startAt?: number;
    perView?: number;
    focusAt?: number | string;
    gap?: number;
    autoplay?: number | boolean;
    hoverpause?: boolean;
    bound?: boolean;
    animationDuration?: number;
    direction?: "ltr" | "rtl";
    breakpoints?: Record<number, Partial<GlideOptions>>;
  }

  export default class Glide {
    constructor(selector: string | Element, options?: GlideOptions);
    mount(): this;
    destroy(): this;
    go(pattern: string): this;
  }
}
