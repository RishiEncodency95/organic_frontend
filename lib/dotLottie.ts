import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";

// The player's ~1.2 MB WASM runtime otherwise downloads from jsDelivr/unpkg on first use,
// which is what made the chatbot launcher animation appear late. Serve it from our own
// origin instead (public/dotlottie-player.wasm, re-copied from node_modules on postinstall
// so it always matches the installed player version).
setWasmUrl("/dotlottie-player.wasm");

export { DotLottieReact };
