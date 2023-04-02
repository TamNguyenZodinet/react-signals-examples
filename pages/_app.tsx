import { AppState, createAppState } from "@/src/app-state";
import "@/styles/globals.css";
import { useSignal } from "@preact/signals-react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const value = useSignal(createAppState());
  return (
    <AppState.Provider value={value.value}>
      <Component {...pageProps} />
    </AppState.Provider>
  );
}
