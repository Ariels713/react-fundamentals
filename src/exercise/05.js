// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const Box = (size, fontStyle = 'italic', color) => {
  const style = {
    backgroundColor: {color},
    fontStyle: {fontStyle},
  }
  const divClass = `box box--${size}`
  return (
    <div className={divClass} style={style}>
      small {color} box
    </div>
  )
}

function App() {
  return (
    <div>
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
      {Box('small', 'italic', 'lightblue')}
    </div>
  )
}

export default App

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )
