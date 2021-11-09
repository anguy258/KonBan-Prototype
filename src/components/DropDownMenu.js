import React from 'react'

export default function DropDownMenu(props) {
    return (
        <div className="absolute top-6 right-0 w-28 rounded bg-gray-400 shadow-lg px-1 py-1">
            {props.children}
        </div>
    )
}
