import React, { useEffect, useRef, useState } from "react";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type StepModelProps = {
  stepFileUrl: string,
  oc: openCascadeInstance | undefined,
  linDeflection: number,
  angDeflection: number,
  isWireframe: boolean,
  downloadGlbFunctionRef: any,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function StepModel({stepFileUrl, oc, linDeflection, angDeflection, isWireframe, downloadGlbFunctionRef, loading, setLoading}: StepModelProps) {
  const [stepFileContents, setStepFileContents] = useState<string>();
  const setLoadingRef = useRef<React.Dispatch<React.SetStateAction<boolean>>>(setLoading);
  useEffect(() => setLoadingRef.current = setLoading, [setLoading]);

  useEffect(() => {
    setLoadingRef.current(true);
    (async () => {
      const stepFileContents = await (await fetch(stepFileUrl)).text();
      setStepFileContents(stepFileContents);
    })();
  }, [stepFileUrl]);

  const [step1, setStep1] = useState<{
    done: boolean,
  }>({
    done: false,
  });
  useEffect(() => {
    if(!oc) return;
    setLoadingRef.current(true);
    (async() => {
      await oc.worker.step1(stepFileContents);
      setStep1({
        done: true,
      });
    })();
  }, [oc, stepFileContents]);

  const [step2, setStep2] = useState<any>();
  useEffect(() => {
    if(!oc || !step1.done) return;
    setLoadingRef.current(true);
    (async() => {
      const buf = await oc.worker.step2(linDeflection, angDeflection);
      setStep2(buf);
    })();
  }, [oc, step1, linDeflection, angDeflection]);

  const [gltf, setGltf] = useState<GLTF>();
  useEffect(() => {
    if(!step2) return;
    setLoadingRef.current(true);
    const loader = new GLTFLoader();
    loader.parse(step2, "", gltf => {
      setGltf(gltf);
      gltf.scene.traverse(o => {
        if((o as any).material) {
          (o as any).material.wireframe = isWireframe;
        }
      });
      setLoadingRef.current(false);
    });
  }, [step2, isWireframe]);

  downloadGlbFunctionRef.current = () => {
    const blob = new Blob([step2], {type: "	model/gltf-binary"});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "model.glb";
    link.click();
  };

  return gltf ? <primitive object={gltf.scene} /> : null;
}