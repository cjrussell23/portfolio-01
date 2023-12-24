"use client";

import { FaMoon, FaSun } from 'react-icons/fa';
import { useLayoutEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" && window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    );

    useLayoutEffect(() => {
        window.onscroll = function () {
            const header = document.getElementById("header");
            if (window.scrollY > 50) {
                header.classList.remove("invisible");
            } else {
                header.classList.add("invisible");
            }
        };

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('dark');
            document.documentElement.classList.add('dark');
        }

        // const htmlElement = document.documentElement;
        // const observer = new MutationObserver(() => {
        //     const currentTheme = htmlElement.getAttribute('data-theme');
        //     setTheme(currentTheme);
        // });
        // observer.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });
        // return () => observer.disconnect(); // Cleanup on component unmount
    }, []);

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        newTheme === 'dark'
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }

    return (
        <button
            className={`btn flex items-center bg-text w-14 rounded-full text-text py-1 px-1
            ${theme === 'dark' ? 'justify-end'
                    : 'justify-start'
                }`}
            onClick={toggleTheme}
            id="theme-toggle"
        >
            {theme === 'light' ? (
                <FaSun className="w-6 h-6 bg-background rounded-full p-1" />
            ) : (
                <FaMoon className="w-6 h-6 bg-background rounded-full p-1" />
            )}
        </button>
    );
}
