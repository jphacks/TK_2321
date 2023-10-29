import React, { useState } from 'react'

interface TableComponentProps {
  images?: ImageInfo[]
}

const TableComponent: React.FC<TableComponentProps> = ({ images = [] }) => {
  const rows = 15
  const cols = 15
  const [selectedCell, setSelectedCell] = useState<string | null>(null)

  const [specifiedImageUrls, setSpecifiedImageUrls] = useState<{
    [key: string]: string | undefined
  }>({
    '4-9': '/8r.jpeg',
    '3-8': '/11r.jpeg',
    '3-9': '/1r.jpeg',
    '3-6': '/deckUra.png',
    '1-9': '/poke_urar.jpg',
    '1-8': '/poke_urar.jpg',
    '1-7': '/poke_urar.jpg',
    '1-10': '/poke_urar.jpg',

    //ここから下
    '7-2': '/deckUra.png',
    '7-6': '/11r.jpeg',
    '7-5': '/1r.jpeg',
    '8-5': '/8r.jpeg',
    '10-5': '/6.jpeg',
    '11-5': '/13.jpeg',
    '11-4': '/12.jpeg',
    '13-5': '/pocke.png',
    '13-6': '/pocke.png',
    '13-4': '/pocke.png',
    '13-7': '/pocke.png',
    '13-3': '/pocke.png',
    '11-8': '/poke40.png',
  })

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setSelectedCell(`${rowIndex}-${colIndex}`)
  }

  const handleDrawClick = () => {
    setSpecifiedImageUrls((prevUrls) => ({
      ...prevUrls,
      '13-8': '/pocke.png',
    }))
  }

  const handleTrashClick = () => {
    if (specifiedImageUrls['10-5']) {
      const imageUrl = specifiedImageUrls['10-5']
      setSpecifiedImageUrls((prevUrls) => ({
        ...prevUrls,
        '10-1': imageUrl,
        '10-5': undefined,
      }))
    }
    setSelectedCell(null)
  }

  return (
    <div>
      <table>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  style={{
                    width: '80px',
                    height: '120px',
                    padding: '5px',
                    border: 'none',
                    boxSizing: 'border-box',
                    position: 'relative',
                  }}
                >
                  {specifiedImageUrls[`${rowIndex}-${colIndex}`] && (
                    <img
                      src={specifiedImageUrls[`${rowIndex}-${colIndex}`]}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    />
                  )}
                  {selectedCell === '10-5' &&
                    rowIndex === 10 &&
                    colIndex === 5 && (
                      <button
                        onClick={handleTrashClick}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                        }}
                      >
                        トラッシュ
                      </button>
                    )}
                  {selectedCell === '11-8' &&
                    rowIndex === 11 &&
                    colIndex === 8 && (
                      <button
                        onClick={handleDrawClick}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                        }}
                      >
                        ドロー
                      </button>
                    )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
