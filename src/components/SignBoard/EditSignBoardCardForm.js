import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function NewSignBoardCardForm(props) {
    const [title, setTitle] = useState(props.currCard.title)
    const [description, setDescription] = useState(props.currCard.description)
    const [priority, setPriority] = useState(props.currCard.priority)
    const [deadline, setDeadline] = useState(props.currCard.deadline)

    const handleEditCard = (e) => {
        e.preventDefault()
        
        let formattedDeadline = deadline.toLocaleString('en-US', {
            weekday: 'short',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }).replace(/,/g, '')

        let edittedCard = {...props.currCard,
            title: title,
            description: description,
            deadline: deadline,
            formattedDeadline: formattedDeadline,
            priority: priority
        }

        let newCards = props.currColumn.cards.map(card => card.id === props.currCard.id ? edittedCard : card)
        props.setCurrColumn({...props.currColumn, cards: newCards})
        props.setColumns(props.columns.map(column => column.id === props.currColumn.id ? {...column, cards: newCards} : column))
        props.setIsModalOpen(false)
    }

    const handleDeleteCard = (e) => {
        e.preventDefault()

        let newCards = props.currColumn.cards.filter(card => card.id !== props.currCard.id)
        props.setCurrColumn({...props.currColumn, cards: newCards})
        props.setColumns(props.columns.map(column => column.id === props.currColumn.id ? {...column, cards: newCards} : column))
        console.log(props.columns)

        props.setIsModalOpen(false)
    }

    return (
        <div className="flex flex-col space-y-3 p-9">
            <label>Card Title:</label>
            <input
                required
                type="text"
                placeholder={"Enter Card Title"}
                value={title}
                maxLength="250"
                spellCheck="false"
                onChange={(e) => setTitle(e.target.value)}
                className="w-5/12 p-1 rounded outline-none
                bg-gray-300 dark:bg-[#27292e]
                border dark:border-gray-700 focus:!border-gray-400"
            />
            <label>Card Description:</label>
            <textarea
                value={description}
                maxLength="750"
                spellCheck="false"
                onChange={(e) => setDescription(e.target.value)}
                className="w-2/3 h-40 p-1 resize-none rounded outline-none
                bg-gray-100 dark:bg-[#27292e]
                border dark:border-gray-700 focus:!border-gray-400
                scrollbar-sm"
            />
            <div className="relative space-y-3 h-16">
                <div>Deadline:</div>
                <DatePicker
                    showTimeSelect
                    selected={deadline}
                    dateFormat="EEE MM/dd @h:mmaa"
                    onChange={(date) => setDeadline(date)}
                    className="bg-gray-300 dark:bg-[#27292e] outline-none rounded p-1"
                />
            </div>
            <label>Priority Level:</label>
            <div className="space-y-2">
                <div className="space-x-2">
                    <input
                        type="radio"
                        name="priority"
                        id="high"
                        checked={priority === "high"}
                        onChange={()=>setPriority("high")}
                    />
                    <label htmlFor="high">High</label>
                </div>
                <div className="space-x-2">
                    <input
                        type="radio"
                        name="priority"
                        id="medium"
                        checked={priority === "medium"}
                        onChange={()=>setPriority("medium")}
                    />
                    <label htmlFor="medium">Medium</label>
                </div>
                <div className="space-x-2">
                    <input
                        type="radio"
                        name="priority"
                        id="low"
                        checked={priority === "low"}
                        onChange={()=>setPriority("low")}
                    />
                    <label htmlFor="low">Low</label>
                </div>
            </div>
            <div className="w-full flex justify-end space-x-4">
                <button onClick={(e) => handleDeleteCard(e)} className="w-1/4 py-2 bg-gray-300 dark:bg-red-900 rounded">Delete Card</button>
                <button onClick={(e) => handleEditCard(e)} className="w-1/4 py-2 bg-gray-400 dark:bg-green-800 rounded">Save Card</button>
            </div>
        </div>
    )
}