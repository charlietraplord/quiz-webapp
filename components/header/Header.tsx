"use client" 

import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';
import DarkmodeToggle from '@/components/darkMode/DarkmodeToggle';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Dashboard",
        url: "/dashboard/app",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
    
];

const Header = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">Anisa</Link>
            <div className={styles.links}>
                <DarkmodeToggle />
                {links.map(link => (
                    <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
                ))}
                <button className={styles.logout} onClick={() => console.log("Logged out")}>Logout</button>
            </div>
        </div>
    );
}

export default Header