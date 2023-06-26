import React from 'react'
import Accordion from '../components/Accordion'

const items = [
    {
        'label': 'First item',
        "content": <b>This is first item</b>
    },
    {
        'label': 'Second item',
        "content": 'This is second item'
    },
    {
        'label': 'Third item',
        "content": 'This is third item'
    }
]

function AccordionPage() {
    return (
        <div className='accordionnComponent mb-5'>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage