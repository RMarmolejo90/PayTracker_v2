import React from 'react'
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='flex flex-col items-center justify-center font-bold text-2xl bg-zinc-900 text-blue-500 h-screen w-screen'>
            <h2 className='text-4xl'>OOPS!</h2>
            <p>Looks like something went wrong. </p>
        </div>
    )
}
