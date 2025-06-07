declare module "@glidejs/glide" {
  interface GlideOptions {
    type?: string;
    startAt?: number;
    perView?: number;
    focusAt?: number | string;
    gap?: number;
    autoplay?: number | boolean;
    hoverpause?: boolean;
    keyboard?: boolean;
    bound?: boolean;
    swipeThreshold?: number | boolean;
    dragThreshold?: number | boolean;
    perTouch?: number | boolean;
    touchRatio?: number;
    touchAngle?: number;
    animationDuration?: number;
    rewind?: boolean;
    rewindDuration?: number;
    animationTimingFunc?: string;
    direction?: "ltr" | "rtl";
    breakpoints?: Record<number, Partial<GlideOptions>>;
  }

  export default class Glide {
    constructor(selector: string | Element, options?: GlideOptions);
    mount(): this;
    destroy(): this;
    go(pattern: string): this;
    on(event: string, handler: Function): this;
    update(options: GlideOptions): this;
  }
}
