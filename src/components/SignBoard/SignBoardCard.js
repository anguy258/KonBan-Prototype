import React from 'react'

export default function SignBoardCard(props) {
    const setPriorityMarkerColor = () => {
        switch(props.data.priority) {
            case 'high':
                return <div className="w-1/4 h-1.5 rounded bg-red-800"/>
            case 'medium':
                return <div className="w-1/4 h-1.5 rounded bg-yellow-500"/>
            case 'low':
                return <div className="w-1/4 h-1.5 rounded bg-green-700"/>
            default:
                return <div className="w-1/4 h-1.5 rounded bg-black"/>
        }
    }

    const handleEditCard = () => {
        props.setCurrColumn(props.currColumn)
        props.setCurrCard(props.data)
        props.setIsEditCardModalOpen(true)
    }

    return (
        <li
            ref={props.innerRef}
            {...props.dragProps}
            {...props.dragHandleProps}
            onClick={handleEditCard}
            className="w-[95%] mx-auto my-2 
            rounded-sm shadow p-2 space-y-1
            bg-gray-200 dark:bg-[#1c1e22]
            dark:text-gray-300 break-words
            transition duration-300"
        >
            {setPriorityMarkerColor()}
            <div>
                {props.data.title}
            </div>
            <div className="text-xs text-gray-500">
                Due: {props.data.formattedDeadline}
            </div>
        </li>
    )
}
