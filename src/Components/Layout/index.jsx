import "./styles.css"

import Vector from "../../assets/images/svg/Vector.svg"
import Image from "../../assets/Image.png"

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
          <div className="layout-text">
            <h4>Tagline</h4>
            <h1>Medium length section heading goes here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="layout-button">
            <button>Button</button>
            <button>
              <p>Button</p>
              <img className="photo" src={Vector} alt="" />
            </button>
          </div>
          </div>
          
        <img src={Image} alt="" />
      </div>
    </div>
  )
}