import React, {useEffect, useRef} from 'react'

export default function ClipBoardCard(props) {
    const newCard = useRef(null)

    const handleDeleteCard = () => {
        props.setNotes((props.notes.filter(element => element.id !== props.id)))
    }

    const handleInput = (e) => {
        props.setNotes(props.notes.map(element => element.id === props.id ? {...element, content: e.target.innerText} : element))
    }

    useEffect(() => {
        newCard.current.focus()
    }, [])

    return (
        <li
            ref={props.innerRef}
            {...props.dragProps}
            className="flex justify-between
            w-11/12 my-2 mx-auto p-3 pr-2 rounded
            bg-gray-200 dark:bg-[#16181c] dark:text-gray-300
            transition duration-300"
        >
            <div
                ref={newCard}
                contentEditable="true"
                spellCheck="false"
                className="w-5/6 outline-none font-sans"
                onInput={e => handleInput(e)}
                onBlur={e => handleInput(e)}
            />
            <button onClick={handleDeleteCard}>
                <svg 
                    className="h-5 w-5 rounded-full
                    transition duration-300
                    ease-in-out transform hover:scale-125
                    border-2 border-transparent
                    hover:border-green-600 dark:hover:border-green-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </button>
            <div
                {...props.dragHandleProps}
                className="w-0.5 pr-1 rounded bg-gray-700"
            />
        </li>
    )
}
