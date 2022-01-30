import React from 'react';
import './Home.css';


function Home() {
    let drum1audio = new Audio("/drum1.mp3")
    let drum2audio = new Audio("/drum2.mp3")
    let drum3audio = new Audio("/drum3.mp3")
    let drum4audio = new Audio("/drum4.mp3")
    let cymbalaudio = new Audio("/cymbal.mp3")

    const drum1 = () => {
        drum1audio.play()
      }

      const drum2 = () => {
        drum2audio.play()
      }

      const drum3 = () => {
        drum3audio.play()
      }

      const drum4 = () => {
        drum4audio.play()
      }

  const cymbal = () => {
    cymbalaudio.play()
  }

  return <div>

      <div className="drum_container">
      {/* <button onClick={drum1}>drum1</button> */}
      <div className="button_box"><button className='button'><img src="/drum1.png" alt="my image" onClick={drum1} /></button></div>
      <div className="button_box"><button className='button'><img src="/drum2.png" alt="my image" onClick={drum2} /></button></div>
      <div className="button_box"><button className='button'><img src="/drum3.jpg" alt="my image" onClick={drum3} /></button></div>
      <div className="button_box"><button className='button'><img src="/drum4.png" alt="my image" onClick={drum4} /></button></div>
      <div className="button_box"><button className='button'><img src="/cymbal.png" alt="my image" onClick={cymbal} /></button></div>
    
      </div>
    

  </div>;
}

export default Home;
