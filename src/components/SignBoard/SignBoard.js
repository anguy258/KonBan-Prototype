import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import SignBoardNav from './SignBoardNav'
import SignBoardColumn from './SignBoardColumn'
import Modal from '../Modal/Modal'
import NewSignBoardCardForm from './NewSignBoardCardForm'
import EditSignBoardCardForm from './EditSignBoardCardForm'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function SignBoard() {
    const [columns, setColumns] = useState([])
    const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false)
    const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false)
    const [currColumn, setCurrColumn] = useState([])
    const [currCard, setCurrCard] = useState([])

    const handleAddColumn = async () => {
        setColumns([...columns, {
            id: uuidv4(),
            title: '',
            cards: [],
        }])
    }

    // const signboardContainer = document.getElementById("signboard-container")
    const handleHorizontalScrolling = (e) => {
        // e.preventDefault()
        // signboardContainer.scrollLeft += e.deltaY
    }

    const handleOnDragStart = (result) => {
        setCurrColumn(columns.filter(col => col.id === result.source.droppableId))
    }

    const handleOnDragEnd = (result) => {
        const {
            destination,
            source,
            type
        } = result

        if(!destination || source === destination) return

        if (type === "column") {
            console.log("IN HERE")
            let newColumnList = Array.from(columns)
            let [reorderedColumns] = newColumnList.splice(source.index, 1)
            newColumnList.splice(destination.index, 0, reorderedColumns)

            setColumns(newColumnList)
            return
        }
        else if (type === "cards") {
            if (source.droppableId === destination.droppableId) {
                let srcCol = columns.filter(col => col.id === source.droppableId)[0]
                let [reorderedCards] = srcCol.cards.splice(source.index, 1)
                srcCol.cards.splice(destination.index, 0, reorderedCards)

                setCurrColumn(srcCol)
                setColumns(columns.map(col => col.id === currColumn.id ? {...col, cards: srcCol.cards} : col))
                return
            }
            else if (source.droppableId !== destination.droppableId) {
                let srcCol = columns.filter(col => col.id === source.droppableId)[0]
                let dstCol = columns.filter(col => col.id === destination.droppableId)[0]

                let [movedCard] = srcCol.cards.splice(source.index, 1)
                dstCol.cards.splice(destination.index, 0, movedCard)

                setCurrColumn(dstCol)

                setColumns(columns.map((col) => {
                    if (col.id === srcCol.id) return {...col, cards: srcCol.cards}
                    else if (col.id === dstCol.id) return {...col, cards: dstCol.cards}
                    else return col
                }))
                return
            }
        }
        else return
    }

    return (
        <div
            className="flex flex-col 
            w-1/2 lg:w-8/12 h-full pb-2 rounded shadow-lg
            bg-gray-600 bg-opacity-25 dark:bg-gray-700 dark:bg-opacity-10 
            transition duration-300"
        >
            <SignBoardNav columns={columns}/>
            <DragDropContext
                onDragStart={handleOnDragStart}
                onDragEnd={handleOnDragEnd}
            >
                <Droppable
                    droppableId="columns-list"
                    type="column"
                    direction="horizontal"
                >
                    {(provided) => (
                        <ul
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            id="signboard-container"
                            onWheel={e => handleHorizontalScrolling(e)}
                            className="flex overflow-x-auto scrollbar-sm h-full w-full px-1 py-2"
                        >
                            {columns.map((column, index) => {
                                return (
                                    <Draggable
                                        key={column.id}
                                        draggableId={column.id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <SignBoardColumn
                                                innerRef={provided.innerRef}
                                                id={column.id}
                                                dragProps={provided.draggableProps}
                                                dragHandleProps={provided.dragHandleProps}
                                                columns={columns}
                                                setColumns={setColumns}
                                                currColumn={column}
                                                setCurrColumn={setCurrColumn}
                                                currCard={currCard}
                                                setCurrCard={setCurrCard}
                                                setIsNewCardModalOpen={setIsNewCardModalOpen}
                                                setIsEditCardModalOpen={setIsEditCardModalOpen}
                                            />
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                            <li
                                onClick={handleAddColumn}
                                className="flex flex-shrink-0 justify-center
                                h-8 w-[275px] mx-1 rounded cursor-pointer
                                bg-gray-300 bg-opacity-90 dark:bg-black dark:bg-opacity-30 
                                dark:text-gray-300
                                transition duration-300"
                            >
                                <svg
                                    className="h-5 w-5 my-auto
                                    hover:text-gray-700 dark:hover:text-white
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
                                        strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </li>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            {isNewCardModalOpen &&
                <Modal
                    title={`New Card Under "${currColumn.title}"`}
                    setIsModalOpen={setIsNewCardModalOpen}
                >
                    <NewSignBoardCardForm
                        columns={columns}
                        setColumns={setColumns}
                        currColumn={currColumn}
                        setCurrColumn={setCurrColumn}
                        setIsModalOpen={setIsNewCardModalOpen}
                    />
                </Modal>
            }
            {isEditCardModalOpen &&
                <Modal
                    title={`Card Under "${currColumn.title}"`}
                    setIsModalOpen={setIsEditCardModalOpen}
                >
                    <EditSignBoardCardForm
                        currCard={currCard}
                        setCurrCard={setCurrCard}
                        columns={columns}
                        setColumns={setColumns}
                        currColumn={currColumn}
                        setCurrColumn={setCurrColumn}
                        setIsModalOpen={setIsEditCardModalOpen}
                    />
                </Modal>
            }
        </div>
    )
}