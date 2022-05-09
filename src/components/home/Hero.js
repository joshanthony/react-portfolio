import React from "react";
import Image from 'next/image';
import Profile from '../../assets/images/profilepic.jpg';

export default function Hero() {

    return (
        <div className="hero bg-gray-900 py-12 md:py-16">
            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto pt-10">
                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
                    <div className="hero-text col-span-10 lg:col-span-6 order-2 md:order-1">
                        <h1 className="font-bold text-4xl md:text-5xl max-w-2xl text-slate-100 leading-tight">
                            Hi, I&apos;m Josh Anthony,
                        </h1>
                        <h2 className="font-bold text-4xl md:text-5xl max-w-2xl text-slate-300 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                software developer
                            </span> from Brisbane, Australia
                        </h2>
                        <p className="text-slate-200 text-xl leading-relaxed mt-8">
                            I&apos;m a full-stack software developer with experience building digital products with technologies such as C# .NET, JavaScript, Python and more.
                            I&apos;m currently focused on building accessible, human-centered products at one of Australia&apos;s largest investment funds, serving 2+ million customers.
                        </p>
                        <a href="https://blog.joshanthony.net" className="inline-flex items-center h-14 px-8 mt-9 text-xl transition-colors duration-150 border border-blue-600 rounded-lg focus:shadow-outline bg-blue-600 text-slate-300 hover:text-slate-200 hover:bg-blue-700">
                            Read my blog
                        </a>
                        <a href="https://blog.joshanthony.net/contact/" className="inline-flex items-center h-14 px-8 mt-9 ml-3 text-xl transition-colors duration-150 border border-slate-300 hover:border-slate-100 rounded-lg bg-gray-900 text-slate-200 hover:text-slate-200">
                            Get in touch
                        </a>
                    </div>
                    <div className="text-white col-span-4 pb-9 md:pb-0 order-1 md:order-2 hidden lg:block">
                        <div className="about-image md:hover:rotate-2">
                            <Image alt="Profile picture" src={Profile} height="556px" layout="responsive" objectFit="contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}