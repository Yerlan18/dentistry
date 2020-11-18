import Head from "next/dist/next-server/lib/head";
import React from "react";
import Submenu from "./Submenu";

function AdminLayout({children}) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>UDC/Admin</title>
            </Head>
            <div className="admin-wrapper">
                <Submenu/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default AdminLayout
