import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
    children: JSX.Element;
    title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="autor" content="Fplanellas" />
                <meta name="description" content={`Info sobre el pokémon xxx ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Info sobre el ${title}`} />
                <meta
                    property="og:description"
                    content={`Esta es la página sobre ${title}`}
                />
                <meta
                    property="og:image"
                    content={`${origin}/_next/image?url=%2Fimg%2Fbanner.png&w=640&q=75`}
                />
            </Head>

            <Navbar />

            <main
                style={{
                    padding: "0 20px",
                }}
            >
                {children}
            </main>
        </>
    );
};
