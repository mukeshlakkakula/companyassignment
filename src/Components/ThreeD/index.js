import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./index.css";

const RotatingSphere = ({ color, setRotationEnabled }) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.0009;
    mesh.current.rotation.y += 0.0009;
  });
  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setRotationEnabled(true)}
      onPointerOut={() => setRotationEnabled(false)}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const ThreeD = () => {
  const [rotationEnabled, setRotationEnabled] = useState(false);

  return (
    <>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "120px",
        }}
      >
        <Canvas style={{ height: "75vh" }} className="sphereDisplay01">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingSphere setRotationEnabled={setRotationEnabled} />
          <OrbitControls enableZoom={false} enabled={rotationEnabled} />
        </Canvas>{" "}
        <Canvas style={{ height: "56vh" }} className="sphereDisplay02">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingSphere setRotationEnabled={setRotationEnabled} />
        </Canvas>{" "}
      </div>
    </>
  );
};

export default ThreeD;
