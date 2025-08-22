import { React } from 'react'

import { GridItems } from '../data/GridItems'
import GridItem from "./GridItem"
import useWindowWidth from '../hooks/useWindowWidth'
import { calculateGridLayout } from '../utils/GridLayout'

import './AdaptableGrid.css'

const COMPONENT_SIZE = 75
const GAP_SIZE = 20

export default function AdaptableGrid () {

    const windowWidth = useWindowWidth()
    const { rowSize, columnSize, columnItems, startItems } = calculateGridLayout(windowWidth, GridItems.length, COMPONENT_SIZE, GAP_SIZE)

    let x = 0
    return (
    <div className="adaptable-grid-container-horizontal">
      <div className="adaptable-grid-container">
        {[...Array(columnSize + 2)].map((_, i) => {
          const isBorderRow = i === 0 || i === columnSize + 1

          return (
            <div key={i} className="adaptable-grid-row" style={{ "--gap-size": `${GAP_SIZE}px` }}>

              {i % 2 === 1 && <div className="adaptable-grid-space" />}

              {[...Array(rowSize)].map((_, j) => {
                const itemPadding = (i === columnSize && columnSize%2 == 1) ? Math.ceil(columnItems - (GridItems.length+1 - x)) : 0

                const isBorderCol = j <= startItems + itemPadding || j >= rowSize - 2 - startItems + itemPadding
                const isEmpty = isBorderRow || isBorderCol || x >= GridItems.length
                const item = !isEmpty ? GridItems[x++] : null

                return (
                  <GridItem key={j} item={item} isEmpty={isEmpty} size={COMPONENT_SIZE} pos={x} column={i+1} maxColumn={columnSize}/>
                )
              })}

            </div>
          )
        })}
      </div>
    </div>
  )
}