import React from 'react'

export default function CollaboratorListCard(props) {
    return (
        <li
            className="flex justify-start
            w-11/12 my-2 mx-auto p-3 pr-2 space-x-3 rounded
            bg-gray-200 dark:bg-[#16181c] dark:text-gray-300
            transition duration-300"
        >
            <img
                src={props.img}
                alt={props.collaborator.name}
                className="h-10 w-10 rounded-full"
            />
            <div className="flex-col">
                <div className="font-bold">{props.collaborator.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-600">@{props.collaborator.username}</div>
            </div>
        </li>
    )
}
