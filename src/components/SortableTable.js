import React from 'react'
import Table from './Table'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import useSort from './hooks/useSort';

function SortableTable(props) {
    const { config, data } = props;
    const {sortBy, sortOrder, setSortColumn, sortedData} = useSort(data, config)

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return <div><GoChevronUp /><GoChevronDown /></div>
        }

        if (sortOrder === null) {
            return 'both'
        } else if (sortOrder === 'asc') {
            return <GoChevronUp />
        } else if (sortOrder === 'desc') {
            return <GoChevronDown />
        }
    }

    const updatedConfig = config.map(col => {
        if (!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100 p-3" onClick={() => setSortColumn(col.label)}>
                    <div className='flex items-center'>
                        {getIcons(col.label, sortBy, sortOrder)}
                        {col.label}
                    </div>
                </th>
            )
        }
    })

    return (
        <Table {...props} config={updatedConfig} data={sortedData} />
    )
}

export default SortableTable