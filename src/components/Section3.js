import React from 'react'
import back from '../images/background1.webp'
import ceo from '../images/ceo.webp'

function Section3() {
    return (
        <div className="section-3">
            
               <h2>What customers say</h2>
               <p className="long-text">"Let’s start your journey with us, your dream will come true. Lorem ipsum <br /> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua."</p>
                <div className="ceo">
                  <img src={ceo} />
                    <div>
                        <p>Mark Anthony</p>
                        <p>CEO of Colorlib</p>
                    </div>
                </div>
        
            
        </div>
    )
}

export default Section3
