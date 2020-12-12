import React, { useEffect, useState } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type StepModelProps = {
  stepFileUrl: string,
  oc: openCascadeInstance | undefined,
  linDeflection: number,
  angDeflection: number,
  isWireframe: boolean,
  downloadGlbFunctionRef: any,
};

export default function StepModel({stepFileUrl, oc, linDeflection, angDeflection, isWireframe, downloadGlbFunctionRef}: StepModelProps) {
  const [stepFileContents, setStepFileContents] = useState<string>();
  useEffect(() => {
    (async () => {
      const stepFileContents = await (await fetch(stepFileUrl)).text();
      setStepFileContents(stepFileContents);
    })();
  }, [stepFileUrl]);

  const [step1, setStep1] = useState<{
    doc: any,
    shape: any,
  }>();
  useEffect(() => {
    if(!oc) return;
    if(oc.FS.analyzePath('/file.stp').exists) {
      oc.FS.unlink('/file.stp');
    }
    oc.FS.createDataFile("/", "file.stp", stepFileContents, true, true);
    const reader = new oc.STEPCAFControl_Reader_1();
    reader.ReadFile("./file.stp");
    
    const doc = new oc.Handle_TDocStd_Document_2(new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1()));

    if(!reader.Transfer_1(doc, new oc.Message_ProgressRange_1())) {
      console.log("this didn't work");
    }
    console.log("seems like it worked");

    const assembly = oc.XCAFDoc_DocumentTool.ShapeTool(doc.get().Main());
    const freeShapes = new oc.TDF_LabelSequence_1();
    assembly.get().GetFreeShapes(freeShapes);
    const oneFreeShape = freeShapes.First();
    const shape = oc.XCAFDoc_ShapeTool.GetShape_2(oneFreeShape);
    setStep1({shape, doc});
  }, [oc, stepFileContents]);

  const [step2, setStep2] = useState<any>();
  useEffect(() => {
    if(!oc || !step1) return;
    const writer = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2("./export.glb"), true);
    oc.BRepTools.Clean(step1.shape);
    new oc.BRepMesh_IncrementalMesh_2(step1.shape, linDeflection, false, angDeflection, false);
    writer.Perform_2(step1.doc, new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());

    const aBuf = oc.FS.readFile("./export.glb", {
      encoding: "binary",
    });

    setStep2(aBuf.buffer);
  }, [oc, step1, linDeflection, angDeflection]);

  const [gltf, setGltf] = useState<GLTF>();
  useEffect(() => {
    if(!step2) return;
    const loader = new GLTFLoader();
    loader.parse(step2, "", gltf => {
      setGltf(gltf);
      gltf.scene.traverse(o => {
        if((o as any).material) {
          (o as any).material.wireframe = isWireframe;
        }
      });
      console.log("updated model");
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