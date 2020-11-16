import Head from "next/head";
// import Link from "next/link";
import React from "react";
import { withTranslation } from '../i18n'
import Header from "./Header";
import Footer from "./Footer";

export function MainLayout({children}) {


    return (
        <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Union Dental Clinic</title>
        </Head>
        <div className="main-wrapper">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>

        </>
    )
}

export default withTranslation()(MainLayout)
