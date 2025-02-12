// websocket stuff
export {
  connectWebSocket,
  isWebSocketCloseEvent,
  WebSocket,
} from "https://deno.land/std@0.61.0/ws/mod.ts";

// deferred promises :)
export * from "https://deno.land/std@0.61.0/async/deferred.ts";

// colours
export * from "https://deno.land/std@0.61.0/fmt/colors.ts";

// Evt 
export { Evt } from "https://deno.land/x/evt@1.7.13/mod.ts";

export { use } from "https://raw.githubusercontent.com/michaelolof/typescript-mix/master/src/index.ts";