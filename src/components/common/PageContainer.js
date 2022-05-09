import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageContainer({ children, ...customMeta }) {

  const metaData = {
    title: "Josh Anthony - Full Stack Developer",
    description: `Full stack developer.`,
    image: "avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-900 h-screen">
        <Header meta={metaData} />
        <main className="w-full">
            {children}
        </main>
        <Footer />
    </div>
  );
}