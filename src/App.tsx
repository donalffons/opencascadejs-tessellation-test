import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from 'react-three-fiber';
// @ts-ignore
import stepfile from './ROCKET WOOD v6.step';
import StepModel from './StepModel';

import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Button, Slider } from '@material-ui/core';

import MyWorker from './opencascade.worker';

type CameraProps = {
  position: [number, number, number];
};
function Camera({position}: CameraProps) {
  const ref = useRef<THREE.PerspectiveCamera>()
  const { setDefaultCamera } = useThree()
  useEffect(() => void setDefaultCamera(ref.current), [setDefaultCamera])
  return <perspectiveCamera ref={ref} position={position} />
}

function App() {
  const [oc, setOc] = useState<{
    worker: any,
  }>();
  const [linDeflection, setLinDeflection] = useState<number>(1);
  const [angDeflection, setAngDeflection] = useState<number>(1);
  const [linDeflectionDisplayValue, setLinDeflectionDisplayValue] = useState<number>(1);
  const [angDeflectionDisplayValue, setAngDeflectionDisplayValue] = useState<number>(1);
  const [isWireframe, setIsWireframe] = useState(true);
  const [loading, setLoading] = useState(true);

  const downloadGlbFunctionRef = useRef<any>();

  useEffect(() => {
    (async () => {
      const inst = new MyWorker();
      const obj = await new inst.OpenCascade();
      await obj.initialize();
      setOc({
        worker: obj,
      });
    })();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        oc === undefined ? "Loading CAD Kernel..." : null
      }
      <Canvas
        style={{
          width: "100%",
          height: "70%"
        }}
      >
        <Camera
          position={[200, 0, 0]}
        />
        <StepModel
          stepFileUrl={stepfile}
          oc={oc}
          linDeflection={linDeflection}
          angDeflection={angDeflection}
          isWireframe={isWireframe}
          downloadGlbFunctionRef={downloadGlbFunctionRef}
          loading={loading}
          setLoading={setLoading}
        />
        <OrbitControls />
        <directionalLight
          position={[1, 10, 1]}
        />
        <directionalLight
          position={[1, -10, 1]}
        />
      </Canvas>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          disabled={loading}
          value={linDeflectionDisplayValue}
          onChange={(e: any, newValue: number | number[]) => setLinDeflectionDisplayValue(newValue as number)}
          onChangeCommitted={(e: any, newValue: number | number[]) => setLinDeflection(newValue as number)}
          min={0.05}
          max={2}
          step={0.01}
        />
        <div>
          Linear Deflection:&nbsp;
          {
            linDeflection
          }
        </div>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          disabled={loading}
          value={angDeflectionDisplayValue}
          onChange={(e: any, newValue: number | number[]) => setAngDeflectionDisplayValue(newValue as number)}
          onChangeCommitted={(e: any, newValue: number | number[]) => setAngDeflection(newValue as number)}
          min={0.2}
          max={Math.PI/2}
          step={0.01}
        />
        <div>
          Angular Deflection:&nbsp;
          {
            angDeflection
          }
        </div>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setIsWireframe(w => !w)}
          variant="contained"
          color="primary"
          style={{
            width: "25%",
          }}
        >
          {
            isWireframe ? "Solid" : "Wireframe"
          }
        </Button>
        <Button
          disabled={loading}
          onClick={() => downloadGlbFunctionRef.current()}
          variant="contained"
          color="primary"
          style={{
            width: "25%",
          }}
        >
          Download GLB
        </Button>
      </div>
    </div>
  );
}

export default App;
