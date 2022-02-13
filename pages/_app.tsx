import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
