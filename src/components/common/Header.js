import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Header({ children, ...meta }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <link rel="icon" href="../../assets/images/favicon.png" sizes="32x32" />
                <link rel="icon" href="../../assets/images/favicon.png" sizes="192x192" />
                <link rel="apple-touch-icon" href="../../assets/images/favicon.png" />
                <meta name="msapplication-TileImage" content="../../assets/images/favicon.png" />
                <meta property="og:url" content={`https://joshanthony.net${router.asPath}`} />
                <link rel="canonical" href={`https://joshanthony.net${router.asPath}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@joshanthny" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={"../../assets/images/" + meta.image} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Josh Anthony" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={"../../assets/images/" + meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
        </>
        
    );
}