import React, { useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
// @ts-ignore
import stepfile from './ROCKET WOOD v6.step';
import StepModel from './StepModel';

import opencascade from 'opencascade.js/dist/debug/dynamic_web';
import opencascadeWasm from 'opencascade.js/dist/debug/dynamic_web.wasm';
import oc_TKernel from 'opencascade.js/dist/debug/modules/TKernel.wasm';
import oc_TKMath from 'opencascade.js/dist/debug/modules/TKMath.wasm';
import oc_TKG2d from 'opencascade.js/dist/debug/modules/TKG2d.wasm';
import oc_TKV3d from 'opencascade.js/dist/debug/modules/TKV3d.wasm';
import oc_TKService from 'opencascade.js/dist/debug/modules/TKService.wasm';
import oc_TKMesh from 'opencascade.js/dist/debug/modules/TKMesh.wasm';
import oc_TKSTEP from 'opencascade.js/dist/debug/modules/TKSTEP.wasm';
import oc_TKSTEP209 from 'opencascade.js/dist/debug/modules/TKSTEP209.wasm';
import oc_TKSTEPAttr from 'opencascade.js/dist/debug/modules/TKSTEPAttr.wasm';
import oc_TKSTEPBase from 'opencascade.js/dist/debug/modules/TKSTEPBase.wasm';
import oc_TKXSBase from 'opencascade.js/dist/debug/modules/TKXSBase.wasm';
import oc_TKShHealing from 'opencascade.js/dist/debug/modules/TKShHealing.wasm';
import oc_TKGeomAlgo from 'opencascade.js/dist/debug/modules/TKGeomAlgo.wasm';
import oc_TKBRep from 'opencascade.js/dist/debug/modules/TKBRep.wasm';
import oc_TKGeomBase from 'opencascade.js/dist/debug/modules/TKGeomBase.wasm';
import oc_TKG3d from 'opencascade.js/dist/debug/modules/TKG3d.wasm';
import oc_TKTopAlgo from 'opencascade.js/dist/debug/modules/TKTopAlgo.wasm';
import oc_TKCDF from 'opencascade.js/dist/debug/modules/TKCDF.wasm';
import oc_TKLCAF from 'opencascade.js/dist/debug/modules/TKLCAF.wasm';
import oc_TKCAF from 'opencascade.js/dist/debug/modules/TKCAF.wasm';
import oc_TKVCAF from 'opencascade.js/dist/debug/modules/TKVCAF.wasm';
import oc_TKXCAF from 'opencascade.js/dist/debug/modules/TKXCAF.wasm';
import oc_TKXDESTEP from 'opencascade.js/dist/debug/modules/TKXDESTEP.wasm';
import oc_TKRWMesh from 'opencascade.js/dist/debug/modules/TKRWMesh.wasm';
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Button, Slider } from '@material-ui/core';

function App() {
  const [oc, setOc] = useState<openCascadeInstance>();
  const [linDeflection, setLinDeflection] = useState<number>(1);
  const [angDeflection, setAngDeflection] = useState<number>(1);
  const [isWireframe, setIsWireframe] = useState(false);

  const downloadGlbFunctionRef = useRef<any>();

  useEffect(() => {
    (async () => {
      const ocInstance = await opencascade({
        locateFile: f => {
          if(f.endsWith(".wasm")) {
            return opencascadeWasm;
          }
          return f;
        },
        dynamicLibraries: [
          oc_TKernel,
          oc_TKMath,
          oc_TKG2d,
          oc_TKV3d,
          oc_TKService,
          oc_TKMesh,
          oc_TKSTEP,
          oc_TKSTEP209,
          oc_TKSTEPAttr,
          oc_TKSTEPBase,
          oc_TKXSBase,
          oc_TKShHealing,
          oc_TKGeomAlgo,
          oc_TKBRep,
          oc_TKGeomBase,
          oc_TKG3d,
          oc_TKTopAlgo,
          oc_TKCDF,
          oc_TKLCAF,
          oc_TKCAF,
          oc_TKVCAF,
          oc_TKXCAF,
          oc_TKXDESTEP,
          oc_TKRWMesh,
        ],
      } as any);
      setOc(ocInstance);
    })();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
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
        <StepModel
          stepFileUrl={stepfile}
          oc={oc}
          linDeflection={linDeflection}
          angDeflection={angDeflection}
          isWireframe={isWireframe}
          downloadGlbFunctionRef={downloadGlbFunctionRef}
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          value={linDeflection}
          onChangeCommitted={(e: any, newValue: number | number[]) => setLinDeflection(newValue as number)}
          min={0}
          max={10}
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          value={angDeflection}
          onChangeCommitted={(e: any, newValue: number | number[]) => setAngDeflection(newValue as number)}
          min={0}
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setIsWireframe(w => !w)}
          variant="contained"
          color="primary"
        >
          {
            isWireframe ? "Solid" : "Wireframe"
          }
        </Button>
        <Button
          onClick={() => downloadGlbFunctionRef.current()}
          variant="contained"
          color="primary"
        >
          Download GLB
        </Button>
      </div>
    </div>
  );
}

export default App;
