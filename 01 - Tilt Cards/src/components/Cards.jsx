import { React } from 'react'
import Tilt from "react-parallax-tilt";
import './Cards.css'
import { cardData } from '../data/CardsData.jsx'
import CardBg from '../assets/cardBg.jsx'

export default function Cards() {
    
    return (
    <div className="cards-container">
        {cardData.map(({ hoverColor, endColor, imgSrc, name }, index) => (
            <Tilt key={index}
            tiltReverse={true} 
            scale={1.15} 
            glareEnable={true} 
            glareMaxOpacity={0.15} 
            glareColor="white" 
            glarePosition="all" 
            glareBorderRadius="20px"
            >
                <div className="card">
                    <img className="icon" src={imgSrc} alt={`${name} icon`} />
                    <CardBg startColor={hoverColor} endColor={endColor} paintID={`paint${index}`} />
                </div>
            </Tilt>
        ))}
    </div>
  )
}

