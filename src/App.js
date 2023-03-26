import "./App.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax>
        <ParallaxLayer>
          <img src="./assets/hero_provisorio.webp" alt="aliancas" />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <h1>Aqui vai o form de confirmação de presença</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
