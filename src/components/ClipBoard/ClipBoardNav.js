import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function ClipBoardNav({notes, setNotes}) {
    const handleAddCard = () => {
        setNotes([...notes, {
            id: uuidv4(),
            content: '',
        }])
    }

    return (
        <div
            className="flex justify-between items-center
            w-full h-12 px-4 rounded-t 
            bg-gray-600 !bg-opacity-60 dark:bg-black
            text-gray-300 font-semibold"
        >
            Clipboard
            <button onClick={handleAddCard}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </button>
        </div>
    )
}
