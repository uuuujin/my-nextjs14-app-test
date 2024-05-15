"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function Navigation(){
    const path = usePathname();
    const [cnt, setCnt] = useState(100);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "😄" : ""}
                </li>
                <li>
                    <Link href="/about">About</Link> {path === "/about" ? "😄" : ""}
                </li>
                <li>
                    <button onClick={() => setCnt(c => c + 100)} >{cnt}</button>
                </li>
            </ul>
        </nav>
    );
}