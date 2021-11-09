import React from 'react'

export default function CollaboratorListNav() {
    return (
        <div
            className="flex justify-between items-center
            w-full h-12 px-4 rounded-t
            bg-gray-600 !bg-opacity-60 dark:bg-black  
            text-gray-300 font-semibold 
            transition duration-300"
        >
            Collaborators
            {/* <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
            </button> */}
        </div>
    )
}
