export function calculateGridLayout(width, itemCount, componentSize, gapSize) {
  
  const rowSize = Math.ceil((width - 12) / (componentSize + gapSize))
  const usableComponents = rowSize - 3
  const columnSize = Math.max(Math.ceil(itemCount / usableComponents), 2)
  const columnItems = Math.ceil(itemCount / columnSize)
  const startItems = Math.floor((usableComponents - columnItems) / 2)

  return { rowSize, usableComponents, columnSize, columnItems, startItems };
}
