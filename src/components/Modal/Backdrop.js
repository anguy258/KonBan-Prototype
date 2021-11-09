import React from 'react'
// import { motion } from 'framer-motion'

export default function Backdrop(props) {
    return (
        <div
            className="flex items-center justify-center absolute
            top-0 left-0 w-screen h-screen
            bg-black bg-opacity-70 dark:bg-opacity-80"
            onMouseDown={props.onClick}
        >
            {props.children}
        </div>
    )
}
