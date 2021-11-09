import React, {useState, useEffect} from 'react'

export default function SignBoardNav(props) {
    const [priorities, setPriorities] = useState({
        hi_cnt: 0,
        med_cnt: 0,
        lo_cnt: 0,
    })

    useEffect(()=> {
        let high = 0
        let med = 0
        let low = 0
        props.columns.forEach((col) => {
            col.cards.forEach((card) => {
                switch(card.priority) {
                    case "high":
                        ++high
                        break
                    case "medium":
                        ++med
                        break
                    case "low":
                        ++low
                        break
                    default:
                        high = -1
                        break
                }
            })
        })

        setPriorities({
            hi_cnt: high,
            med_cnt: med,
            lo_cnt: low
        })
    }, [props.columns])

    return (
        <div
            className="flex justify-between items-center
            bg-gray-600 !bg-opacity-60 dark:bg-black
            w-full h-12 px-4 rounded-t
            text-gray-300
            transition duration-300"
        >
            <div className="flex text-lg font-semibold">
                SignBoard
            </div>
            <div className="flex fill-current text-sm space-x-2 items-center">
                <svg className="text-red-700 h-[10px] w-[10px]">
                    <circle cx="5" cy="5" r="5"/>
                </svg>
                <span>{priorities.hi_cnt}</span>
                <svg className="text-yellow-500 h-[10px] w-[10px]">
                    <circle cx="5" cy="5" r="5" />  
                </svg>
                <span>{priorities.med_cnt}</span>
                <svg className="text-green-700 h-[10px] w-[10px]">
                    <circle cx="5" cy="5" r="5"/>  
                </svg>
                <span>{priorities.lo_cnt}</span>
                {/* <div className="w-0.5 h-6 bg-gray-300"/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button> */}
            </div>
        </div>
    )
}
