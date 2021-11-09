import React, {useState, useEffect, useRef} from 'react'
import DropDownMenu from '../DropDownMenu'
import SignBoardCard from './SignBoardCard'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export default function SignBoardColumn(props) {
    const clickOutsideRef = useRef(null)
    const newColumn = useRef(null)
    const [dropdown, setDropdown] = useState(false)

    const handleDeleteColumn = () => {
        props.setColumns((props.columns.filter(element => element.id !== props.currColumn.id)))
    }

    const handleAddCard = () => {
        props.setCurrColumn(props.currColumn)
        props.setIsNewCardModalOpen(true)
    }

    const handleUpdateTitle = (e) => {
        props.setColumns(props.columns.map(el => el.id === props.currColumn.id ? {...el, title: e.target.value} : el))
    }

    useEffect(() => {
        newColumn.current.focus()
    }, [newColumn])

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        function handleClickOutside(event) {
            if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target)) {
                setDropdown(false)
            }
        }
    }, [clickOutsideRef])

    return (
        <div
            {...props.dragProps}
            ref={props.innerRef}
            className="flex flex-shrink-0 flex-col mx-1 h-full w-[275px]"
        >
            <div
                {...props.dragHandleProps}
                className="flex justify-between items-center
                w-full py-1 px-2 rounded-t
                bg-gray-300 dark:bg-[#16181c]
                transition duration-300"
            >
                <input
                    ref={newColumn}
                    type="text"
                    placeholder="Column Title"
                    maxLength="40"
                    spellCheck="false"
                    onInput={e => handleUpdateTitle(e)}
                    onBlur={e => handleUpdateTitle(e)}
                    className="w-2/3 outline-none
                    bg-transparent overflow-ellipsis
                    dark:text-gray-300 font-semibold
                    placeholder-gray-400 dark:placeholder-gray-600"
                />
                <div className="relative flex items-center">
                    <svg
                        onClick={()=>handleAddCard()}
                        className="h-5 w-5
                        dark:text-gray-300 hover:text-gray-700
                        transition duration-300
                        transform ease-in-out hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    <svg
                        onClick={()=>setDropdown(!dropdown)}
                        className="h-4 w-4
                        dark:text-gray-300 hover:text-gray-700
                        transition duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                    {dropdown &&
                        <DropDownMenu>
                            <div
                                ref={clickOutsideRef}
                                onClick={() => handleDeleteColumn()}
                                className="rounded hover:text-gray-600 cursor-pointer select-none text-sm p-1"
                            >
                            Delete Column
                            </div>
                        </DropDownMenu>
                    }
                </div>
            </div>
            <Droppable
                droppableId={props.currColumn.id}
                type="cards"
                direction="vertical"
            >
                {(provided) => (
                    <ul
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex-grow-1
                        min-h-[6rem] max-h-full rounded-b
                        bg-gray-300 dark:bg-[#16181c]
                        overflow-y-auto scrollbar-sm
                        transition duration-300"
                    >
                        {props.currColumn.cards.map((card, index) => {
                            return (
                                <Draggable
                                    draggableId={card.id}
                                    key={card.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <SignBoardCard
                                            innerRef={provided.innerRef}
                                            dragProps={provided.draggableProps}
                                            dragHandleProps={provided.dragHandleProps}
                                            id={card.id}
                                            data={card}
                                            setCurrCard={props.setCurrCard}
                                            currColumn={props.currColumn}
                                            setCurrColumn={props.setCurrColumn}
                                            setIsEditCardModalOpen={props.setIsEditCardModalOpen}
                                        />
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    )
}
