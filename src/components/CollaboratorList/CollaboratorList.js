import React from 'react'
import CollaboratorListNav from './CollaboratorListNav'
import CollaboratorListCard from './CollaboratorListCard'
import {v4 as uuidv4} from 'uuid'
import heythatsme from '../../assets/images/heythatsme.png'
import thatmyspaceguy from '../../assets/images/myspaceguy.png'

export default function CollaboratorList() {
    // const [collaborators, setCollaborators] = useState([
    const collaborators = [
        {
            id: uuidv4(),
            img: thatmyspaceguy,
            name: 'Thomas Anderson',
            username: 'thatmyspaceguy',
        },
        {
            id: uuidv4(),
            img: heythatsme,
            name: 'Alex Nguyen',
            username: 'alx-ngyen',
        }
    ]

    return (
        <div
            className="w-3/12 lg:w-2/12 h-1/2 rounded shadow-xl
            bg-gray-600 bg-opacity-25 dark:bg-gray-700 dark:bg-opacity-10
            transition duration-300"
        >
            <CollaboratorListNav/>
            <ul className="h-5/6 overflow-y-auto scrollbar-sm">
                {collaborators.map((collaborator) => {
                    return (
                        <CollaboratorListCard
                            collaborator={collaborator}
                            img={collaborator.img}
                            key={collaborator.id}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
