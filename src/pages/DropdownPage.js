import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {
    const [selection, setSelection] = useState()
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    const handleSelect = (option) => {
        setSelection(option)
    }


  return (
    <Dropdown options={options} value={selection?.label} onChange={handleSelect}/>
  )
}

export default DropdownPage