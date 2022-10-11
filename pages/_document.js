import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preload"
                    href="/fonts/fonts.min.css"
                    as="style"
                />
                <link
                    rel="icon"
                    href="/logo.png"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body className="font-quicksand bg-custom-black text-custom-white antialiased tracking-wide text-sm overscroll-contain selection:bg-index-hero selection:text-white break-words scroll-smooth [word-break:break-word] [word-wrap:break-word]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default MyDocument;
