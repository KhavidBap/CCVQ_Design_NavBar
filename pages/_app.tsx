import { AppProps } from "next/app";

import "../common/styles/main.css";
import { Layout } from "../common/components";

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
