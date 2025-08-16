import { React } from 'react'
import './MainScreen.css'
import AmazingText from './AmazingText'
import { Typewriter } from 'react-simple-typewriter'
import { AmazingTexts, TypewriterTexts } from '../data/mainScreen.js'

export default function MainScreen() {
  return (
    <>
      <div className="main-block">
          <h1>Hi, I'm <span class="accent"> Alex Meca</span></h1>
          <h2>
            <span class="accent"> 
              <Typewriter words={TypewriterTexts} loop={0} cursor cursorStyle="|" /> 
            </span>
          </h2>
          <div className="click-for-more">
            <h2>Click for more</h2>
          </div>
      </div>
      <AmazingText texts={AmazingTexts}/>
    </>
  )
}