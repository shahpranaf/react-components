import React, { useState } from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go'

function Accordion({ items, isOpenByDefault=true }) {
    const [expandedIndex, setExpandedIndex] = useState(isOpenByDefault ? 0 : -1); // -1 for all closed

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>

        return <div key={index} >
            <div className="flex p-3 justify-between bg-gray-50 broder-b items-center cursor-pointer" onClick={() => setExpandedIndex(index)}>
                {item.label}
                {icon}
            </div>
            {isExpanded && <div className='border-b p-5'>{item.content}</div>}
        </div>
    })

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}

export default Accordion