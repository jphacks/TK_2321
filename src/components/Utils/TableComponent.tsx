// eslint-disable-next-line
import React from 'react'
import { useState } from 'react'

interface ImageInfo {
  url: string
  // その他の画像情報があればここに追加します
}

interface TableComponentProps {
  images?: ImageInfo[]
}

const TableComponent: React.FC<TableComponentProps> = ({ images = [] }) => {
  const rows = 11
  const cols = 12

  const [selectedCell, setSelectedCell] = useState<string | null>(null)

  const [specifiedImageUrls, setSpecifiedImageUrls] = useState<{
    [key: string]: string | undefined
  }>({
    // 初期状態での特定のセルの画像
    '5-5': './1.jpeg',
  })

  // 各セルをクリックしたときのハンドラーです
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setSelectedCell(`${rowIndex}-${colIndex}`)
    // ここに各セルに対する処理を追加します
  }

  // トラッシュボタンがクリックされたときのハンドラーです
  const handleTrashClick = () => {
    // トラッシュに関する処理を追加します
    setSelectedCell(null)
  }

  // 山札からカードを引くときのハンドラーです
  const handleDrawClick = () => {
    // 山札からカードを引く処理を追加します
  }

  return (
    <div style={{ overflow: 'auto', width: '100%', height: '100vh' }}>

      <table>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) => {
                // 特定のフィールドに基づく条件をここに配置
                const isBenchField =
                  rowIndex === 9 && colIndex >= 4 && colIndex <= 8
                const isBattleField = rowIndex === 7 && colIndex === 6
                const isTrashField = rowIndex === 9 && colIndex === 11
                const isDeckField = rowIndex === 7 && colIndex === 11
                const isSideField =
                  rowIndex >= 7 && rowIndex <= 9 && colIndex === 1
                //
                const isCalledBenchField =
                  rowIndex === 1 && colIndex >= 4 && colIndex <= 8
                const isCalledBattleField = rowIndex === 3 && colIndex === 6
                const isCalledTrashField = rowIndex === 1 && colIndex === 1
                const isCalledDeckField = rowIndex === 3 && colIndex === 1
                const isCalledSideField =
                  rowIndex >= 1 && rowIndex <= 3 && colIndex === 11

                return (
                  <td
                    key={colIndex}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    style={{
                      width: '80px',
                      height: '120px',
                      padding: '5px',
                      border:
                        isBenchField ||
                        isBattleField ||
                        isTrashField ||
                        isDeckField ||
                        isSideField ||
                        isCalledBenchField ||
                        isCalledBattleField ||
                        isCalledTrashField ||
                        isCalledDeckField ||
                        isCalledSideField
                          ? '1px solid black'
                          : 'none',
                      boxSizing: 'border-box',
                      position: 'relative',
                      backgroundColor: isBattleField
                        ? 'lightblue'
                        : 'transparent',
                    }}
                  >
                    {/* ここに各セルのコンテンツを追加します */}
                  </td>
                )
              })}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
