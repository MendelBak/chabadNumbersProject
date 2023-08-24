import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import { CSSProperties, useState } from 'react'

const defaultIconStyle: CSSProperties = {
  width: '100px',
  height: '100px'
}

const selectedIconStyle: CSSProperties = {
  fill: '#742c74',
  width: '100px',
  height: '100px',
  cursor: 'pointer'
}

type selectedIconChoice = 'up' | 'down' | 'none'

export default function BooleanPicker ({ question, updateResults }: {question, updateResults}) {
  console.log('BooleanPicker ~ question:', question)
  const [selectedIcon, setSelectedIcon] = useState<selectedIconChoice>(question.response || 'none')

  function handleClick (iconName) {
    setSelectedIcon(iconName)
    updateResults(iconName === 'up')
  }

  return (
    <><FiThumbsUp style={selectedIcon === 'up' ? selectedIconStyle : defaultIconStyle } onClick={() => handleClick('up')}/><FiThumbsDown style={selectedIcon === 'down' ? selectedIconStyle : defaultIconStyle} onClick={() => handleClick('down')} /></>
  )
}