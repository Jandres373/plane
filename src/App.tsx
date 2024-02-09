import React, { useEffect, useRef, useState, useMemo } from "react";
import { Plane } from "./components/Plane.tsx";
import { Clouds1 } from "./components/Clouds1.tsx";
import { Canvas, useThree } from "@react-three/fiber";
import { Cloud, Clouds, FirstPersonControls, OrbitControls, Sky, Stars } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

const App = () => {
  const planeRef = useRef();
  const controls = useRef();

  return (
    <div className="canvas">
      <Canvas
        id="canvas"
        camera={{ position: [0, 0, 3] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <OrbitControls></OrbitControls>
        <ambientLight intensity={1.5} color="white" />
        <directionalLight position={[0, 10, 0]} />
        <Sky
          distance={450000}
          sunPosition={[1, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Stars
          radius={100}
          depth={1}
          count={5000}
          factor={2}
          saturation={0}
          fade
          speed={1}
        />
        <Plane
          ref={planeRef}
        />
        <Clouds1 position={[-50, -1, 0]} rotation={[0, -90, 0]} />
        <Clouds material={MeshBasicMaterial} position={[-100, 0, 0]}>
          <Cloud segments={40} bounds={[10, 2, 2]} volume={100} color="white" />
          <Cloud
            seed={1}
            scale={2}
            volume={5}
            color="blue"
            fade={1000}
            position={[-90, 0, 0]}
          />
          <Cloud
            seed={1}
            scale={2}
            volume={5}
            color="blue"
            fade={1000}
            position={[-80, 10, 0]}
          />
        </Clouds>
      </Canvas>
    </div>
  );
};

export default App;
