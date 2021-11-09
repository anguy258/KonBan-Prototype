import React from 'react'
import Backdrop from './Backdrop'

export default function Modal(props) {
    const handleClose = () => {
        props.setIsModalOpen(false)
    }

    return (
        <Backdrop onClick={handleClose}>
            <div
                onMouseDown={e => e.stopPropagation()}
                className="w-2/3 max-h-2/3 md:w-1/2 lg:w-1/3 rounded-lg
                bg-gray-200 dark:bg-[#1c1e22] dark:text-gray-300"
            >
                <div
                    className="flex justify-between items-center
                    w-full h-16 px-5 rounded-t-lg
                    bg-gray-400 dark:bg-[#16181c] bg-opacity-60"
                >
                    <div className="font-semibold">{props.title}</div>
                    <svg
                        onClick={()=>handleClose()}
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2} d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                {props.children}
            </div>
        </Backdrop>
    )
}
