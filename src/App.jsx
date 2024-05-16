import "./App.css"

import Banner from "./Components/Banner"

import api from "./assets/images/svg/api-interface-svgrepo-com.svg"
import availability from "./assets/images/svg/availability-svgrepo-com.svg"
import cloud from "./assets/images/svg/cloud-acceleration-svgrepo-com.svg"
import flexible from "./assets/images/svg/flexible-access-svgrepo-com.svg"
import intelligent from "./assets/images/svg/intelligent-positioning-svgrepo-com.svg"
import control from "./assets/images/svg/interface-control-svgrepo-com.svg"

function App() {
  return (
    <body>
      <div className="card">
          <h1>React Course</h1>
          <p>Front-End Javascript</p>
      </div>
      <Banner title="Título" description="Descrição" image={api}/>
      <Banner title="Título" description="Descrição" image={availability}/>
      <Banner title="Título" description="Descrição" image={cloud}/>
      <Banner title="Título" description="Descrição" image={flexible}/>
      <Banner title="Título" description="Descrição" image={intelligent}/>
      <Banner title="Título" description="Descrição" image={control}/>

    </body>
  );
}

export default App;
