import React, {useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ClipBoardNav from './ClipBoardNav'
import ClipBoardCard from './ClipBoardCard'

export default function ClipBoard() {
    const [notes, setNotes] = useState([])

    const handleOnDragEnd = (result) => {
        if(!result.destination) return
        
        const newNotesList = Array.from(notes)
        const [reorderedNotes] = newNotesList.splice(result.source.index, 1)
        newNotesList.splice(result.destination.index, 0, reorderedNotes)

        setNotes(newNotesList)
    }

    return (
        <div className="flex flex-col w-3/12 lg:w-2/12 h-2/3 bg-gray-600 bg-opacity-25 dark:bg-gray-700 dark:bg-opacity-10 shadow-xl rounded transition duration-300">
            <ClipBoardNav
                notes={notes}
                setNotes={setNotes}
            />
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="notes">
                    {(provided) => (
                        <ul 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="h-5/6 overflow-y-auto scrollbar-sm mr-1.5"
                        >
                            {notes.map((note, index) => {
                                return (
                                    <Draggable
                                        key={note.id}
                                        draggableId={note.id}
                                        index={index}>
                                        {(provided) => (
                                            <ClipBoardCard
                                                dragProps={provided.draggableProps}
                                                dragHandleProps={provided.dragHandleProps}
                                                innerRef={provided.innerRef}
                                                id={note.id}
                                                content={note.content}
                                                notes={notes}
                                                setNotes={setNotes}
                                            />
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="m-2 text-gray-400">Total Notes: {notes.length}</div>
        </div>
    )
}
