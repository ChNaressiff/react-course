import './styles.css'

import Image1 from './assets/src/img/Image1.png'
import Link from './assets/src/img/link.png'
import X from './assets/src/img/X.png'
import Dribble from './assets/src/img/Dribble.png'



export default function Content() {
    return (
        <div className='content-container'>
            <img src="" alt="" />
            <div className="content-title">
                <img src={Image1} alt="" className="content-image"/>
                <h1>Full name</h1>
                <h2>Job title</h2>
            </div>
            <p className="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

            <div className="content-icons">
                <a href="https://br.linkedin.com/" target='_blank'>
                    <img src={Link} alt="" />
                </a>
                <a href="https://x.com/" target='_blank'>
                    <img src={X} alt="" />
                </a>
                <a href="https://dribbble.com/" target='_blank'>
                    <img src={Dribble} alt="" />
                </a>
            </div>
        </div>
    );
}
