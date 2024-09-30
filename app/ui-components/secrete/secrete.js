"use client"

import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const Secret = ({ message }) => {
    return (
        <div
            className="flex justify-around items-center h-full w-full flex-col cursor-pointer hover:bg-gray-800 hover:underline hover:font-bold"
        >
            <FaQuestion className="w-full h-20"/>
            <div className="flex text-center font-mono">
                {message}
            </div>
        </div>
    );
};

export default Secret;
