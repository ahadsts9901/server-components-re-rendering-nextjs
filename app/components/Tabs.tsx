"use client"

import React, { Fragment, useState } from 'react'

const Tabs = ({ server_data }: any) => {
    const [tab, set_tab] = useState(1)

    const tabs = [
        { label: "tab 1", value: 1 },
        { label: "tab 2", value: 2 },
        { label: "tab 3", value: 3 },
        { label: "tab 4", value: 4 },
        { label: "tab 5", value: 5 },
    ]

    console.log("client component render")
    console.log("server_data", server_data)

    return (
        <Fragment>
            <div className='w-full p-4 flex justify-center items-center gap-2'>
                {
                    tabs?.map((t: any, i: number) => (
                        <div className={`py-2 px-4 cursor-pointer capitalize border border-black ${t?.value == tab ? "bg-gray-300" : ""}`}
                            onClick={() => set_tab(t?.value)} key={i}
                        >{t?.label}</div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center mt-4 text-xl'>Tab {tab}</div>
        </Fragment>
    )
}

export default Tabs