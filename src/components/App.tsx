import { HomeScene } from "@/scenes";
import { Canvas } from "@react-three/fiber";

export function App() {

  return (
    <>
      <div className="app">
        <section className="hero">
          <h1>Camilo López</h1>
          <p>Desarrollador Frontend</p>
          </section>
      </div>
      <Canvas className="canvas" shadows camera={{ position: [0, 30, 60] /*x,y,z*/, fov: 15 }}>
        <HomeScene />
      </Canvas>
    </>
  )
}

