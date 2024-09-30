'use client';

import React from 'react';
import Image from "next/image";

const Heading = ({title, job, name, className}) => {
    return (
        <div className={`p-4 ${className} flex flex-col justify-between`}>
            <div>
                <Image
                    className="rounded-full"
                    width={80}
                    height={80}
                    alt="Profile Picture"
                    src="/assets/110228289.png"
                />
            </div>
            <div>
                <h1 className="font-bold text-3xl">
                    {title}
                </h1>
            </div>
            <div>
                <p className="text-2xl">
                    {job}
                </p>
            </div>
            <div>
                <p className="text-4xl font-framer">
                    {name}
                </p>
            </div>
        </div>
    )
}

export default Heading;