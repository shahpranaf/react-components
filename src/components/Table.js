import React, { Fragment } from 'react'

function Table({ data, config, keyFn }) {

  const renderedRows = data.map(rowData => {
    const renderedCells = config.map((col) => {
      return <td className="p-3" key={col.label}>{col.render(rowData)}</td>
    })
    return (
      <tr className='border-b' key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    )
  });

  const renderHeaders = config.map(col => {
    const renderHeader = col?.header ? <Fragment key={col.label}>{col?.header()}</Fragment>  : <th className="p-3" key={col.label} >{col.label}</th>
    return renderHeader;
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {renderHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table