import opencascade from 'opencascade.js/dist/release/dynamic_web';
import opencascadeWasm from 'opencascade.js/dist/release/dynamic_web.wasm';
import oc_TKernel from 'opencascade.js/dist/release/modules/TKernel.wasm';
import oc_TKMath from 'opencascade.js/dist/release/modules/TKMath.wasm';
import oc_TKG2d from 'opencascade.js/dist/release/modules/TKG2d.wasm';
import oc_TKV3d from 'opencascade.js/dist/release/modules/TKV3d.wasm';
import oc_TKService from 'opencascade.js/dist/release/modules/TKService.wasm';
import oc_TKMesh from 'opencascade.js/dist/release/modules/TKMesh.wasm';
import oc_TKSTEP from 'opencascade.js/dist/release/modules/TKSTEP.wasm';
import oc_TKSTEP209 from 'opencascade.js/dist/release/modules/TKSTEP209.wasm';
import oc_TKSTEPAttr from 'opencascade.js/dist/release/modules/TKSTEPAttr.wasm';
import oc_TKSTEPBase from 'opencascade.js/dist/release/modules/TKSTEPBase.wasm';
import oc_TKXSBase from 'opencascade.js/dist/release/modules/TKXSBase.wasm';
import oc_TKShHealing from 'opencascade.js/dist/release/modules/TKShHealing.wasm';
import oc_TKGeomAlgo from 'opencascade.js/dist/release/modules/TKGeomAlgo.wasm';
import oc_TKBRep from 'opencascade.js/dist/release/modules/TKBRep.wasm';
import oc_TKGeomBase from 'opencascade.js/dist/release/modules/TKGeomBase.wasm';
import oc_TKG3d from 'opencascade.js/dist/release/modules/TKG3d.wasm';
import oc_TKTopAlgo from 'opencascade.js/dist/release/modules/TKTopAlgo.wasm';
import oc_TKCDF from 'opencascade.js/dist/release/modules/TKCDF.wasm';
import oc_TKLCAF from 'opencascade.js/dist/release/modules/TKLCAF.wasm';
import oc_TKCAF from 'opencascade.js/dist/release/modules/TKCAF.wasm';
import oc_TKVCAF from 'opencascade.js/dist/release/modules/TKVCAF.wasm';
import oc_TKXCAF from 'opencascade.js/dist/release/modules/TKXCAF.wasm';
import oc_TKXDESTEP from 'opencascade.js/dist/release/modules/TKXDESTEP.wasm';
import oc_TKRWMesh from 'opencascade.js/dist/release/modules/TKRWMesh.wasm';

// Export as you would in a normal module:
export function meaningOfLife() {
  return 42;
}

export class OpenCascade {
  async loadLibraries(libs) {
    const promises = [];
    for(let lib of libs) {
      const p = new Promise((resolve, reject) => {
        (async () => {
          const libBuf = new Int8Array(await(await (await fetch(lib)).arrayBuffer()));
          this.oc.FS.writeFile(lib, libBuf);
          this.oc.LibraryLoader.loadLibrary(lib);
          console.log("loaded " + lib);
          resolve();
        })();
      });
      promises.push(p);
    }
    await Promise.all(promises);
  }

  async loadLibraries2(libs) {
    const promises = [];
    for(let lib of libs) {
      console.log("start loading " + lib);
      promises.push(this.oc.loadDynamicLibrary(lib, {loadAsync: true, global: true, nodelete: true}));
    }
    await Promise.all(promises);
  }

  async initialize() {
    this.oc = await opencascade({
      locateFile: f => {
        if(f.endsWith(".wasm")) {
          return opencascadeWasm;
        }
        return f;
      },
    });

    await this.loadLibraries2([oc_TKernel]);
    await this.loadLibraries2([oc_TKMath]);
    await this.loadLibraries2([
      oc_TKG2d,
      oc_TKG3d,
      oc_TKService,
    ]);
    await this.loadLibraries2([
      oc_TKGeomBase,
    ]);
    await this.loadLibraries2([
      oc_TKBRep
    ]);
    await this.loadLibraries2([
      oc_TKGeomAlgo,
    ]);
    await this.loadLibraries2([
      oc_TKTopAlgo
    ]);
    await this.loadLibraries2([
      oc_TKShHealing,
      oc_TKV3d,
    ]);
    await this.loadLibraries2([
      oc_TKXSBase,
      oc_TKMesh,
    ]);
    await this.loadLibraries2([
      oc_TKSTEPBase,
    ]);
    await this.loadLibraries2([
      oc_TKSTEP209,
      oc_TKSTEPAttr,
    ]);
    await this.loadLibraries2([
      oc_TKCDF,
      oc_TKSTEP,
    ]);
    await this.loadLibraries2([
      oc_TKLCAF,
    ]);
    await this.loadLibraries2([
      oc_TKCAF,
    ]);
    await this.loadLibraries2([
      oc_TKVCAF,
    ]);
    await this.loadLibraries2([
      oc_TKXCAF,
    ]);
    await this.loadLibraries2([
      oc_TKVCAF,
    ]);
    await this.loadLibraries2([
      oc_TKXDESTEP,
    ]);
    await this.loadLibraries2([
      oc_TKRWMesh,
    ]);
  }

  async step1(stepFileContents) {
    if(!this.oc) return;
    if(this.oc.FS.analyzePath('/file.stp').exists) {
      this.oc.FS.unlink('/file.stp');
    }
    this.oc.FS.createDataFile("/", "file.stp", stepFileContents, true, true);
    const reader = new this.oc.STEPCAFControl_Reader_1();
    reader.ReadFile("./file.stp");
    
    this.doc = new this.oc.Handle_TDocStd_Document_2(new this.oc.TDocStd_Document(new this.oc.TCollection_ExtendedString_1()));

    if(!reader.Transfer_1(this.doc, new this.oc.Message_ProgressRange_1())) {
      console.log("this didn't work");
    }
    console.log("seems like it worked");

    const assembly = this.oc.XCAFDoc_DocumentTool.ShapeTool(this.doc.get().Main());
    const freeShapes = new this.oc.TDF_LabelSequence_1();
    assembly.get().GetFreeShapes(freeShapes);
    const oneFreeShape = freeShapes.First();
    this.shape = this.oc.XCAFDoc_ShapeTool.GetShape_2(oneFreeShape);
  }

  async step2(linDeflection, angDeflection) {
    const writer = new this.oc.RWGltf_CafWriter(new this.oc.TCollection_AsciiString_2("./export.glb"), true);
    this.oc.BRepTools.Clean(this.shape);
    new this.oc.BRepMesh_IncrementalMesh_2(this.shape, linDeflection, false, angDeflection, false);
    writer.Perform_2(this.doc, new this.oc.TColStd_IndexedDataMapOfStringString_1(), new this.oc.Message_ProgressRange_1());

    const aBuf = this.oc.FS.readFile("./export.glb", {
      encoding: "binary",
    });
    return aBuf.buffer;
  }
}