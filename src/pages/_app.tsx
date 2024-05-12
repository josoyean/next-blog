import Layout from "@/components/layout/Layout";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout></Layout>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
