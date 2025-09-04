import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;



const slideForward = () => {
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward = () => {
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
}
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Amit S.</h3>
                                <span>Taj, Mumbai</span>
                            </div>
                        </div>
                        <p>As a restaurant owner, I used to juggle multiple vendors. Now I get everything from one place—fresh, fast, and fairly priced. Game changer!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Rina M.</h3>
                                <span>Novotle, Banglore</span>
                            </div>
                        </div>
                        <p>The quality of the vegetables and exotic fruits is unmatched. My café’s menu has never looked or tasted better!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Vikram T.</h3>
                                <span>Haldiram, Delhi</span>
                            </div>
                        </div>
                        <p>Prompt delivery, competitive prices, and excellent customer support. I highly recommend them to any hotel kitchen!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Chef Alok D.</h3>
                                <span>Alok's Kitchen, Kolkata</span>
                            </div>
                        </div>
                        <p>I’ve saved time and money since switching to this platform. It’s reliable and has everything I need in one place.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
