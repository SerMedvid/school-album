"use client"

import Link from "next/link";
import {useState} from "react";
import {Drawer} from "rsuite";
import { Fade as Hamburger } from 'hamburger-react'
import classes from "./nav.module.css";

const links = [
    {
        label: 'Головна',
        path: '/'
    },
    {
        label: 'Учні',
        path: '/students'
    },
    {
        label: 'Вчителі',
        path: '/teachers'
    },
    {
        label: 'Творчість',
        path: '/art'
    },
]

const Nav = props => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false)

    return (
        <div className={classes.root}>
            <button
                onClick={() => setOpen(true)}
            >
                <Hamburger
                    toggled={open}
                    toggle={setOpen}
                    size={40}
                />
            </button>
            <Drawer
                style={{'--rs-bg-overlay': "0, 0, 0"}}
                className={`${classes.drawer} max-w-[100vw] bg-black bg-[url('/appx.png')]  bg-contain bg-no-repeat bg-top`}
                open={open} onClose={handleClose}
                size={"xs"}
                backdropClassName="backdrop-blur"
            >
                <Drawer.Body className="bg-[url('/smoke.png')] bg-contain bg-no-repeat bg-bottom bg-transparent	">
                    <nav className="mt-24">
                        <ul className="flex flex-col gap-y-12 text-3xl mix-blend-difference	">
                            {links.map(link => (
                                <Link
                                    key={link.label}
                                    href={link.path}
                                    onClick={handleClose}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </Drawer.Body>
            </Drawer>
        </div>
    )
}

export default Nav;