import "@styles/globals.css";
import "@src/icons/uicons-solid-rounded/css/uicons-solid-rounded.min.css";
import "@src/icons/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Layout from "./_layout";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
