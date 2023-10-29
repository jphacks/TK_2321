import React from 'react'

const TableComponent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <table style={{ borderCollapse: 'collapse' }}>
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 20 }).map((_, colIndex) => (
              <td
                key={colIndex}
                style={{
                  width: '20px',
                  height: '20px',
                  padding: '5px',
                  border: 'none',
                }}
              ></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  )
}

export default TableComponent
