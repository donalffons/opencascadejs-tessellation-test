import opencascade from 'opencascade.js/dist/release/dynamic_web';
import opencascadeWasm from 'opencascade.js/dist/release/dynamic_web.wasm';
import oc_TKernel from 'opencascade.js/dist/release/modules/TKernel.wasm';
import oc_TKMath from 'opencascade.js/dist/release/modules/TKMath.wasm';
import oc_TKG2d from 'opencascade.js/dist/release/modules/TKG2d.wasm';
import oc_TKG3d from 'opencascade.js/dist/release/modules/TKG3d.wasm';
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
import oc_TKTopAlgo from 'opencascade.js/dist/release/modules/TKTopAlgo.wasm';
import oc_TKCDF from 'opencascade.js/dist/release/modules/TKCDF.wasm';
import oc_TKLCAF from 'opencascade.js/dist/release/modules/TKLCAF.wasm';
import oc_TKCAF from 'opencascade.js/dist/release/modules/TKCAF.wasm';
import oc_TKVCAF from 'opencascade.js/dist/release/modules/TKVCAF.wasm';
import oc_TKXCAF from 'opencascade.js/dist/release/modules/TKXCAF.wasm';
import oc_TKXDESTEP from 'opencascade.js/dist/release/modules/TKXDESTEP.wasm';
import oc_TKRWMesh from 'opencascade.js/dist/release/modules/TKRWMesh.wasm';

// TKernel
import oc_FSD from 'opencascade.js/dist/release/packages/FSD.wasm';
import oc_MMgt from 'opencascade.js/dist/release/packages/MMgt.wasm';
import oc_OSD from 'opencascade.js/dist/release/packages/OSD.wasm';
import oc_Plugin from 'opencascade.js/dist/release/packages/Plugin.wasm';
import oc_Quantity from 'opencascade.js/dist/release/packages/Quantity.wasm';
import oc_Resource from 'opencascade.js/dist/release/packages/Resource.wasm';
import oc_Standard from 'opencascade.js/dist/release/packages/Standard.wasm';
import oc_StdFail from 'opencascade.js/dist/release/packages/StdFail.wasm';
import oc_Storage from 'opencascade.js/dist/release/packages/Storage.wasm';
import oc_TColStd from 'opencascade.js/dist/release/packages/TColStd.wasm';
import oc_TCollection from 'opencascade.js/dist/release/packages/TCollection.wasm';
import oc_TShort from 'opencascade.js/dist/release/packages/TShort.wasm';
import oc_Units from 'opencascade.js/dist/release/packages/Units.wasm';
import oc_UnitsAPI from 'opencascade.js/dist/release/packages/UnitsAPI.wasm';
import oc_NCollection from 'opencascade.js/dist/release/packages/NCollection.wasm';
import oc_Message from 'opencascade.js/dist/release/packages/Message.wasm';

// TKMath
import oc_math from 'opencascade.js/dist/release/packages/math.wasm';
import oc_ElCLib from 'opencascade.js/dist/release/packages/ElCLib.wasm';
import oc_ElSLib from 'opencascade.js/dist/release/packages/ElSLib.wasm';
import oc_BSplCLib from 'opencascade.js/dist/release/packages/BSplCLib.wasm';
import oc_BSplSLib from 'opencascade.js/dist/release/packages/BSplSLib.wasm';
import oc_PLib from 'opencascade.js/dist/release/packages/PLib.wasm';
import oc_Precision from 'opencascade.js/dist/release/packages/Precision.wasm';
import oc_GeomAbs from 'opencascade.js/dist/release/packages/GeomAbs.wasm';
import oc_Poly from 'opencascade.js/dist/release/packages/Poly.wasm';
import oc_CSLib from 'opencascade.js/dist/release/packages/CSLib.wasm';
import oc_Convert from 'opencascade.js/dist/release/packages/Convert.wasm';
import oc_Bnd from 'opencascade.js/dist/release/packages/Bnd.wasm';
import oc_BVH from 'opencascade.js/dist/release/packages/BVH.wasm';
import oc_gp from 'opencascade.js/dist/release/packages/gp.wasm';
import oc_TColgp from 'opencascade.js/dist/release/packages/TColgp.wasm';
import oc_TopLoc from 'opencascade.js/dist/release/packages/TopLoc.wasm';
import oc_Expr from 'opencascade.js/dist/release/packages/Expr.wasm';
import oc_ExprIntrp from 'opencascade.js/dist/release/packages/ExprIntrp.wasm';

// TKG2d
import oc_Geom2d from 'opencascade.js/dist/release/packages/Geom2d.wasm';
import oc_LProp from 'opencascade.js/dist/release/packages/LProp.wasm';
import oc_TColGeom2d from 'opencascade.js/dist/release/packages/TColGeom2d.wasm';
import oc_Adaptor2d from 'opencascade.js/dist/release/packages/Adaptor2d.wasm';
import oc_Geom2dLProp from 'opencascade.js/dist/release/packages/Geom2dLProp.wasm';
import oc_Geom2dAdaptor from 'opencascade.js/dist/release/packages/Geom2dAdaptor.wasm';
import oc_Geom2dEvaluator from 'opencascade.js/dist/release/packages/Geom2dEvaluator.wasm';

// TKG3d
import oc_Geom from 'opencascade.js/dist/release/packages/Geom.wasm';
import oc_TColGeom from 'opencascade.js/dist/release/packages/TColGeom.wasm';
import oc_GeomAdaptor from 'opencascade.js/dist/release/packages/GeomAdaptor.wasm';
import oc_AdvApprox from 'opencascade.js/dist/release/packages/AdvApprox.wasm';
import oc_GeomLProp from 'opencascade.js/dist/release/packages/GeomLProp.wasm';
import oc_Adaptor3d from 'opencascade.js/dist/release/packages/Adaptor3d.wasm';
import oc_LProp3d from 'opencascade.js/dist/release/packages/LProp3d.wasm';
import oc_TopAbs from 'opencascade.js/dist/release/packages/TopAbs.wasm';
import oc_GeomEvaluator from 'opencascade.js/dist/release/packages/GeomEvaluator.wasm';
import oc_GProp from 'opencascade.js/dist/release/packages/GProp.wasm';

// TKV3d
import oc_V3d from 'opencascade.js/dist/release/packages/V3d.wasm';
import oc_Select3D from 'opencascade.js/dist/release/packages/Select3D.wasm';
import oc_Prs3d from 'opencascade.js/dist/release/packages/Prs3d.wasm';
import oc_StdPrs from 'opencascade.js/dist/release/packages/StdPrs.wasm';
import oc_SelectBasics from 'opencascade.js/dist/release/packages/SelectBasics.wasm';
import oc_SelectMgr from 'opencascade.js/dist/release/packages/SelectMgr.wasm';
import oc_PrsMgr from 'opencascade.js/dist/release/packages/PrsMgr.wasm';
import oc_AIS from 'opencascade.js/dist/release/packages/AIS.wasm';
import oc_StdSelect from 'opencascade.js/dist/release/packages/StdSelect.wasm';
import oc_DsgPrs from 'opencascade.js/dist/release/packages/DsgPrs.wasm';
import oc_PrsDim from 'opencascade.js/dist/release/packages/PrsDim.wasm';

// TKService
import oc_Aspect from 'opencascade.js/dist/release/packages/Aspect.wasm';
import oc_InterfaceGraphic from 'opencascade.js/dist/release/packages/InterfaceGraphic.wasm';
import oc_Graphic3d from 'opencascade.js/dist/release/packages/Graphic3d.wasm';
import oc_Xw from 'opencascade.js/dist/release/packages/Xw.wasm';
import oc_Image from 'opencascade.js/dist/release/packages/Image.wasm';
import oc_Media from 'opencascade.js/dist/release/packages/Media.wasm';
import oc_WNT from 'opencascade.js/dist/release/packages/WNT.wasm';
import oc_Cocoa from 'opencascade.js/dist/release/packages/Cocoa.wasm';
import oc_Font from 'opencascade.js/dist/release/packages/Font.wasm';

// TKMesh
import oc_IMeshData from 'opencascade.js/dist/release/packages/IMeshData.wasm';
import oc_IMeshTools from 'opencascade.js/dist/release/packages/IMeshTools.wasm';
import oc_BRepMeshData from 'opencascade.js/dist/release/packages/BRepMeshData.wasm';
import oc_BRepMesh from 'opencascade.js/dist/release/packages/BRepMesh.wasm';

// TKSTEP
import oc_StepAP214 from 'opencascade.js/dist/release/packages/StepAP214.wasm';
import oc_RWStepAP214 from 'opencascade.js/dist/release/packages/RWStepAP214.wasm';
import oc_StepAP203 from 'opencascade.js/dist/release/packages/StepAP203.wasm';
import oc_RWStepAP203 from 'opencascade.js/dist/release/packages/RWStepAP203.wasm';
import oc_STEPConstruct from 'opencascade.js/dist/release/packages/STEPConstruct.wasm';
import oc_STEPEdit from 'opencascade.js/dist/release/packages/STEPEdit.wasm';
import oc_GeomToStep from 'opencascade.js/dist/release/packages/GeomToStep.wasm';
import oc_StepToGeom from 'opencascade.js/dist/release/packages/StepToGeom.wasm';
import oc_StepToTopoDS from 'opencascade.js/dist/release/packages/StepToTopoDS.wasm';
import oc_TopoDSToStep from 'opencascade.js/dist/release/packages/TopoDSToStep.wasm';
import oc_STEPControl from 'opencascade.js/dist/release/packages/STEPControl.wasm';
import oc_STEPSelections from 'opencascade.js/dist/release/packages/STEPSelections.wasm';
import oc_StepAP209 from 'opencascade.js/dist/release/packages/StepAP209.wasm';
import oc_RWStepAP242 from 'opencascade.js/dist/release/packages/RWStepAP242.wasm';
import oc_StepAP242 from 'opencascade.js/dist/release/packages/StepAP242.wasm';

// TKSTEP209
import oc_StepElement from 'opencascade.js/dist/release/packages/StepElement.wasm';
import oc_StepFEA from 'opencascade.js/dist/release/packages/StepFEA.wasm';
import oc_RWStepElement from 'opencascade.js/dist/release/packages/RWStepElement.wasm';
import oc_RWStepFEA from 'opencascade.js/dist/release/packages/RWStepFEA.wasm';

// TKSTEPAttr
import oc_StepVisual from 'opencascade.js/dist/release/packages/StepVisual.wasm';
import oc_RWStepVisual from 'opencascade.js/dist/release/packages/RWStepVisual.wasm';
import oc_StepDimTol from 'opencascade.js/dist/release/packages/StepDimTol.wasm';
import oc_RWStepDimTol from 'opencascade.js/dist/release/packages/RWStepDimTol.wasm';

// TKSTEPBase
import oc_StepBasic from 'opencascade.js/dist/release/packages/StepBasic.wasm';
import oc_RWStepBasic from 'opencascade.js/dist/release/packages/RWStepBasic.wasm';
import oc_StepRepr from 'opencascade.js/dist/release/packages/StepRepr.wasm';
import oc_RWStepRepr from 'opencascade.js/dist/release/packages/RWStepRepr.wasm';
import oc_StepGeom from 'opencascade.js/dist/release/packages/StepGeom.wasm';
import oc_RWStepGeom from 'opencascade.js/dist/release/packages/RWStepGeom.wasm';
import oc_StepShape from 'opencascade.js/dist/release/packages/StepShape.wasm';
import oc_RWStepShape from 'opencascade.js/dist/release/packages/RWStepShape.wasm';

// TKXSBase
import oc_Interface from 'opencascade.js/dist/release/packages/Interface.wasm';
import oc_Transfer from 'opencascade.js/dist/release/packages/Transfer.wasm';
import oc_IFGraph from 'opencascade.js/dist/release/packages/IFGraph.wasm';
import oc_IFSelect from 'opencascade.js/dist/release/packages/IFSelect.wasm';
import oc_TransferBRep from 'opencascade.js/dist/release/packages/TransferBRep.wasm';
import oc_XSControl from 'opencascade.js/dist/release/packages/XSControl.wasm';
import oc_StepData from 'opencascade.js/dist/release/packages/StepData.wasm';
import oc_StepFile from 'opencascade.js/dist/release/packages/StepFile.wasm';
import oc_HeaderSection from 'opencascade.js/dist/release/packages/HeaderSection.wasm';
import oc_RWHeaderSection from 'opencascade.js/dist/release/packages/RWHeaderSection.wasm';
import oc_APIHeaderSection from 'opencascade.js/dist/release/packages/APIHeaderSection.wasm';
import oc_StepSelect from 'opencascade.js/dist/release/packages/StepSelect.wasm';
import oc_UnitsMethods from 'opencascade.js/dist/release/packages/UnitsMethods.wasm';
import oc_XSAlgo from 'opencascade.js/dist/release/packages/XSAlgo.wasm';
import oc_LibCtl from 'opencascade.js/dist/release/packages/LibCtl.wasm';
import oc_MoniTool from 'opencascade.js/dist/release/packages/MoniTool.wasm';

// TKShHealing
import oc_ShapeBuild from 'opencascade.js/dist/release/packages/ShapeBuild.wasm';
import oc_ShapeExtend from 'opencascade.js/dist/release/packages/ShapeExtend.wasm';
import oc_ShapeConstruct from 'opencascade.js/dist/release/packages/ShapeConstruct.wasm';
import oc_ShapeCustom from 'opencascade.js/dist/release/packages/ShapeCustom.wasm';
import oc_ShapeAnalysis from 'opencascade.js/dist/release/packages/ShapeAnalysis.wasm';
import oc_ShapeFix from 'opencascade.js/dist/release/packages/ShapeFix.wasm';
import oc_ShapeUpgrade from 'opencascade.js/dist/release/packages/ShapeUpgrade.wasm';
import oc_ShapeAlgo from 'opencascade.js/dist/release/packages/ShapeAlgo.wasm';
import oc_ShapeProcess from 'opencascade.js/dist/release/packages/ShapeProcess.wasm';
import oc_ShapeProcessAPI from 'opencascade.js/dist/release/packages/ShapeProcessAPI.wasm';

// TKGeomAlgo
import oc_Hatch from 'opencascade.js/dist/release/packages/Hatch.wasm';
import oc_GeomInt from 'opencascade.js/dist/release/packages/GeomInt.wasm';
import oc_IntStart from 'opencascade.js/dist/release/packages/IntStart.wasm';
import oc_IntWalk from 'opencascade.js/dist/release/packages/IntWalk.wasm';
import oc_IntImp from 'opencascade.js/dist/release/packages/IntImp.wasm';
import oc_IntCurveSurface from 'opencascade.js/dist/release/packages/IntCurveSurface.wasm';
import oc_IntSurf from 'opencascade.js/dist/release/packages/IntSurf.wasm';
import oc_IntPatch from 'opencascade.js/dist/release/packages/IntPatch.wasm';
import oc_Geom2dInt from 'opencascade.js/dist/release/packages/Geom2dInt.wasm';
import oc_IntImpParGen from 'opencascade.js/dist/release/packages/IntImpParGen.wasm';
import oc_IntRes2d from 'opencascade.js/dist/release/packages/IntRes2d.wasm';
import oc_IntCurve from 'opencascade.js/dist/release/packages/IntCurve.wasm';
import oc_TopTrans from 'opencascade.js/dist/release/packages/TopTrans.wasm';
import oc_Intf from 'opencascade.js/dist/release/packages/Intf.wasm';
import oc_ApproxInt from 'opencascade.js/dist/release/packages/ApproxInt.wasm';
import oc_GccAna from 'opencascade.js/dist/release/packages/GccAna.wasm';
import oc_GccEnt from 'opencascade.js/dist/release/packages/GccEnt.wasm';
import oc_GccInt from 'opencascade.js/dist/release/packages/GccInt.wasm';
import oc_HatchGen from 'opencascade.js/dist/release/packages/HatchGen.wasm';
import oc_Geom2dHatch from 'opencascade.js/dist/release/packages/Geom2dHatch.wasm';
import oc_Law from 'opencascade.js/dist/release/packages/Law.wasm';
import oc_AppBlend from 'opencascade.js/dist/release/packages/AppBlend.wasm';
import oc_Plate from 'opencascade.js/dist/release/packages/Plate.wasm';
import oc_GeomPlate from 'opencascade.js/dist/release/packages/GeomPlate.wasm';
import oc_LocalAnalysis from 'opencascade.js/dist/release/packages/LocalAnalysis.wasm';
import oc_GeomAPI from 'opencascade.js/dist/release/packages/GeomAPI.wasm';
import oc_GeomFill from 'opencascade.js/dist/release/packages/GeomFill.wasm';
import oc_Geom2dAPI from 'opencascade.js/dist/release/packages/Geom2dAPI.wasm';
import oc_Geom2dGcc from 'opencascade.js/dist/release/packages/Geom2dGcc.wasm';
import oc_FairCurve from 'opencascade.js/dist/release/packages/FairCurve.wasm';
import oc_NLPlate from 'opencascade.js/dist/release/packages/NLPlate.wasm';
import oc_IntPolyh from 'opencascade.js/dist/release/packages/IntPolyh.wasm';
import oc_TopClass from 'opencascade.js/dist/release/packages/TopClass.wasm';

// TKBRep
import oc_TopoDS from 'opencascade.js/dist/release/packages/TopoDS.wasm';
import oc_TopExp from 'opencascade.js/dist/release/packages/TopExp.wasm';
import oc_TopTools from 'opencascade.js/dist/release/packages/TopTools.wasm';
import oc_BRep from 'opencascade.js/dist/release/packages/BRep.wasm';
import oc_BRepLProp from 'opencascade.js/dist/release/packages/BRepLProp.wasm';
import oc_BRepAdaptor from 'opencascade.js/dist/release/packages/BRepAdaptor.wasm';
import oc_BRepTools from 'opencascade.js/dist/release/packages/BRepTools.wasm';
import oc_BinTools from 'opencascade.js/dist/release/packages/BinTools.wasm';

// TKGeomBase
import oc_ProjLib from 'opencascade.js/dist/release/packages/ProjLib.wasm';
import oc_GeomProjLib from 'opencascade.js/dist/release/packages/GeomProjLib.wasm';
import oc_GCPnts from 'opencascade.js/dist/release/packages/GCPnts.wasm';
import oc_CPnts from 'opencascade.js/dist/release/packages/CPnts.wasm';
import oc_Approx from 'opencascade.js/dist/release/packages/Approx.wasm';
import oc_AppParCurves from 'opencascade.js/dist/release/packages/AppParCurves.wasm';
import oc_FEmTool from 'opencascade.js/dist/release/packages/FEmTool.wasm';
import oc_AppCont from 'opencascade.js/dist/release/packages/AppCont.wasm';
import oc_Extrema from 'opencascade.js/dist/release/packages/Extrema.wasm';
import oc_IntAna from 'opencascade.js/dist/release/packages/IntAna.wasm';
import oc_IntAna2d from 'opencascade.js/dist/release/packages/IntAna2d.wasm';
import oc_GeomConvert from 'opencascade.js/dist/release/packages/GeomConvert.wasm';
import oc_AdvApp2Var from 'opencascade.js/dist/release/packages/AdvApp2Var.wasm';
import oc_GeomLib from 'opencascade.js/dist/release/packages/GeomLib.wasm';
import oc_Geom2dConvert from 'opencascade.js/dist/release/packages/Geom2dConvert.wasm';
import oc_Hermit from 'opencascade.js/dist/release/packages/Hermit.wasm';
import oc_BndLib from 'opencascade.js/dist/release/packages/BndLib.wasm';
import oc_AppDef from 'opencascade.js/dist/release/packages/AppDef.wasm';
import oc_GeomTools from 'opencascade.js/dist/release/packages/GeomTools.wasm';
import oc_GC from 'opencascade.js/dist/release/packages/GC.wasm';
import oc_GCE2d from 'opencascade.js/dist/release/packages/GCE2d.wasm';
import oc_gce from 'opencascade.js/dist/release/packages/gce.wasm';

// TKTopAlgo
import oc_IntCurvesFace from 'opencascade.js/dist/release/packages/IntCurvesFace.wasm';
import oc_MAT from 'opencascade.js/dist/release/packages/MAT.wasm';
import oc_MAT2d from 'opencascade.js/dist/release/packages/MAT2d.wasm';
import oc_Bisector from 'opencascade.js/dist/release/packages/Bisector.wasm';
import oc_BRepMAT2d from 'opencascade.js/dist/release/packages/BRepMAT2d.wasm';
import oc_BRepCheck from 'opencascade.js/dist/release/packages/BRepCheck.wasm';
import oc_BRepBndLib from 'opencascade.js/dist/release/packages/BRepBndLib.wasm';
import oc_BRepExtrema from 'opencascade.js/dist/release/packages/BRepExtrema.wasm';
import oc_BRepClass from 'opencascade.js/dist/release/packages/BRepClass.wasm';
import oc_BRepClass3d from 'opencascade.js/dist/release/packages/BRepClass3d.wasm';
import oc_BRepLib from 'opencascade.js/dist/release/packages/BRepLib.wasm';
import oc_BRepGProp from 'opencascade.js/dist/release/packages/BRepGProp.wasm';
import oc_BRepIntCurveSurface from 'opencascade.js/dist/release/packages/BRepIntCurveSurface.wasm';
import oc_BRepTopAdaptor from 'opencascade.js/dist/release/packages/BRepTopAdaptor.wasm';
import oc_BRepBuilderAPI from 'opencascade.js/dist/release/packages/BRepBuilderAPI.wasm';
import oc_BRepApprox from 'opencascade.js/dist/release/packages/BRepApprox.wasm';

// TKCDF
import oc_CDM from 'opencascade.js/dist/release/packages/CDM.wasm';
import oc_PCDM from 'opencascade.js/dist/release/packages/PCDM.wasm';
import oc_CDF from 'opencascade.js/dist/release/packages/CDF.wasm';
import oc_UTL from 'opencascade.js/dist/release/packages/UTL.wasm';
import oc_LDOM from 'opencascade.js/dist/release/packages/LDOM.wasm';

// TKLCAF
import oc_TDF from 'opencascade.js/dist/release/packages/TDF.wasm';
import oc_TDataStd from 'opencascade.js/dist/release/packages/TDataStd.wasm';
import oc_TFunction from 'opencascade.js/dist/release/packages/TFunction.wasm';
import oc_TDocStd from 'opencascade.js/dist/release/packages/TDocStd.wasm';
import oc_AppStdL from 'opencascade.js/dist/release/packages/AppStdL.wasm';

// TKCAF
import oc_TDataXtd from 'opencascade.js/dist/release/packages/TDataXtd.wasm';
import oc_TNaming from 'opencascade.js/dist/release/packages/TNaming.wasm';
import oc_AppStd from 'opencascade.js/dist/release/packages/AppStd.wasm';

// TKVCAF
import oc_TPrsStd from 'opencascade.js/dist/release/packages/TPrsStd.wasm';

// TKXCAF
import oc_XCAFApp from 'opencascade.js/dist/release/packages/XCAFApp.wasm';
import oc_XCAFDimTolObjects from 'opencascade.js/dist/release/packages/XCAFDimTolObjects.wasm';
import oc_XCAFNoteObjects from 'opencascade.js/dist/release/packages/XCAFNoteObjects.wasm';
import oc_XCAFDoc from 'opencascade.js/dist/release/packages/XCAFDoc.wasm';
import oc_XCAFPrs from 'opencascade.js/dist/release/packages/XCAFPrs.wasm';
import oc_XCAFView from 'opencascade.js/dist/release/packages/XCAFView.wasm';

// TKXDESTEP
import oc_STEPCAFControl from 'opencascade.js/dist/release/packages/STEPCAFControl.wasm';

// TKRWMesh
import oc_RWGltf from 'opencascade.js/dist/release/packages/RWGltf.wasm';
import oc_RWMesh from 'opencascade.js/dist/release/packages/RWMesh.wasm';
import oc_RWObj from 'opencascade.js/dist/release/packages/RWObj.wasm';

// Export as you would in a normal module:
export function meaningOfLife() {
  return 42;
}

export class OpenCascade {
  async loadLibraries(libs, allowUndefined = false) {
    const promises = [];
    for(let lib of libs) {
      console.log("start loading " + lib);
      promises.push(this.oc.loadDynamicLibrary(lib, {loadAsync: true, global: true, nodelete: true, allowUndefined}));
    }
    await Promise.all(promises);
  }

  async loadLibrariesQueue(libs, allowUndefined = false) {
    for(let lib of libs) {
      await this.loadLibraries([lib], allowUndefined);
    }
  }

  async loadLibrariesAsPackages() {
    await this.loadLibrariesQueue([
        oc_TKernel,

        // oc_TKMath,
        oc_math,
        oc_ElCLib,
        oc_ElSLib,
        oc_BSplCLib,
        oc_BSplSLib,
        oc_PLib,
        // oc_Precision,
        // oc_GeomAbs,
        oc_Poly,
        oc_CSLib,
        // oc_Convert,
        oc_BVH,
        oc_Bnd,
        oc_gp,
        // oc_TColgp,
        oc_TopLoc,
        // oc_Expr,
        // oc_ExprIntrp,

        // oc_TKG2d,
        oc_Geom2d,
        // oc_LProp,
        // oc_TColGeom2d,
        oc_Adaptor2d,
        oc_Geom2dAdaptor,
        // oc_Geom2dLProp,
        // oc_Geom2dEvaluator,

        oc_TKG3d, // checked
        // oc_GeomAdaptor,
        // oc_Geom,
        // oc_Adaptor3d,
        // oc_TColGeom,
        // oc_AdvApprox,
        // oc_GeomLProp,
        // oc_LProp3d,
        // oc_TopAbs,
        // oc_GeomEvaluator,
        // oc_GProp,

        // oc_TKService, // checked
        oc_Image,
        oc_Aspect,
        oc_InterfaceGraphic,
        oc_Graphic3d,
        // oc_Xw,
        oc_Media,
        // oc_WNT,
        // oc_Cocoa,
        // oc_Font,
        
        // oc_TKGeomBase, // checked
        oc_AppParCurves,
        oc_Extrema,
        oc_ProjLib,
        // oc_AdvApp2Var,
        oc_AppDef,
        // oc_Approx,
        oc_GeomProjLib,
        oc_GCPnts,
        // oc_CPnts,
        // oc_FEmTool,
        // oc_AppCont,
        oc_IntAna,
        // oc_IntAna2d,
        // oc_GeomConvert,
        oc_GeomLib,
        // oc_Geom2dConvert,
        // oc_Hermit,
        oc_BndLib,
        // oc_GeomTools,
        // oc_GC,
        // oc_GCE2d,
        // oc_gce,

        // oc_TKBRep, // checked
        oc_BRepAdaptor,
        oc_TopoDS,
        oc_TopExp,
        oc_TopTools,
        oc_BRep,
        oc_BRepLProp,
        oc_BRepTools,
        // oc_BinTools,

        // oc_TKGeomAlgo, // checked
        // oc_IntSurf,
        oc_Intf,
        // oc_ApproxInt,
        // oc_IntPatch,
        // oc_Hatch,
        // oc_GeomInt,
        // oc_IntStart,
        // oc_IntWalk,
        // oc_IntImp,
        oc_IntCurveSurface,
        oc_Geom2dInt,
        oc_IntImpParGen,
        oc_IntRes2d,
        oc_IntCurve,
        oc_TopTrans,
        // oc_GccAna,
        // oc_GccEnt,
        // oc_GccInt,
        // oc_HatchGen,
        // oc_Geom2dHatch,
        // oc_Law,
        // oc_AppBlend,
        // oc_Plate,
        // oc_GeomPlate,
        // oc_LocalAnalysis,
        // oc_GeomAPI,
        // oc_GeomFill,
        oc_Geom2dAPI,
        // oc_Geom2dGcc,
        // oc_FairCurve,
        // oc_NLPlate,
        // oc_IntPolyh,
        // oc_TopClass,

        // oc_TKTopAlgo, // checked
        oc_Bisector,
        oc_BRepLib,
        oc_BRepBuilderAPI,
        oc_IntCurvesFace,
        // oc_MAT,
        // oc_MAT2d,
        // oc_BRepMAT2d,
        oc_BRepCheck,
        oc_BRepBndLib,
        // oc_BRepExtrema,
        oc_BRepClass,
        oc_BRepClass3d,
        // oc_BRepGProp,
        // oc_BRepIntCurveSurface,
        oc_BRepTopAdaptor,
        // oc_BRepApprox,

        // oc_TKShHealing, // checked
        oc_ShapeExtend,
        oc_ShapeAnalysis,
        oc_ShapeBuild,
        oc_ShapeConstruct,
        oc_ShapeCustom,
        oc_ShapeFix,
        oc_ShapeUpgrade,
        oc_ShapeAlgo,
        oc_ShapeProcess,
        // oc_ShapeProcessAPI,

        oc_TKV3d, // checked
        // oc_V3d,
        // oc_Select3D,
        // oc_Prs3d,
        // oc_StdPrs,
        // oc_SelectBasics,
        // // oc_SelectMgr,
        // oc_PrsMgr,
        // oc_AIS,
        // oc_StdSelect,
        // oc_DsgPrs,
        // oc_PrsDim,

        oc_TKXSBase, // checked
        // oc_MoniTool,
        // oc_Interface,
        // oc_Transfer,
        // oc_IFGraph,
        // oc_IFSelect,
        // oc_TransferBRep,
        // oc_XSControl,
        // oc_StepData,
        // oc_StepFile,
        // oc_HeaderSection,
        // oc_RWHeaderSection,
        // oc_APIHeaderSection,
        // oc_StepSelect,
        // oc_UnitsMethods,
        // oc_XSAlgo,
        // oc_LibCtl,

        oc_TKMesh, // checked
        // oc_IMeshData,
        // oc_IMeshTools,
        // oc_BRepMeshData,
        // oc_BRepMesh,

        oc_TKSTEPBase, // checked
        // oc_StepBasic,
        // oc_RWStepBasic,
        // oc_StepRepr,
        // oc_RWStepRepr,
        // oc_StepGeom,
        // oc_RWStepGeom,
        // oc_StepShape,
        // oc_RWStepShape,

        oc_TKSTEP209,
        // oc_StepElement,
        // oc_StepFEA,
        // oc_RWStepElement,
        // oc_RWStepFEA,
        
        oc_TKSTEPAttr,
        // oc_StepVisual,
        // oc_StepDimTol,
        // // oc_RWStepVisual,
        // // oc_RWStepDimTol,

        // oc_TKCDF,
        oc_LDOM,
        oc_CDM,
        oc_PCDM,
        oc_CDF,
        // oc_UTL,

        // oc_TKSTEP,
        oc_StepAP203,
        oc_StepAP214,
        oc_StepAP242,
        oc_RWStepAP214,
        // oc_RWStepAP203,
        oc_STEPConstruct,
        oc_STEPEdit,
        oc_STEPControl,
        // oc_GeomToStep,
        oc_StepToGeom,
        oc_StepToTopoDS,
        // oc_TopoDSToStep,
        // oc_StepAP209,
        // oc_RWStepAP242,
        oc_STEPSelections,

        // oc_TKLCAF,
        oc_TDF,
        oc_TDataStd,
        // oc_TFunction,
        oc_TDocStd,
        // oc_AppStdL,

        // oc_TKCAF,
        oc_TNaming,
        oc_TDataXtd,
        // oc_AppStd,

        // oc_TKVCAF,
        oc_TPrsStd,

        // oc_TKXCAF,
        oc_XCAFDoc,
        oc_XCAFPrs,
        // oc_XCAFApp,
        oc_XCAFDimTolObjects,
        // oc_XCAFNoteObjects,
        // oc_XCAFView,

        // oc_TKXDESTEP,
        oc_STEPCAFControl,

        // oc_TKRWMesh,
        oc_RWMesh,
        oc_RWGltf,
        // oc_RWObj,
    ], false);
  }

  async loadLibrariesAsModules() {
    await this.loadLibrariesQueue([
      oc_TKernel,
      oc_TKMath,
      oc_TKG2d,
      oc_TKG3d,
      oc_TKService,
      oc_TKGeomBase,
      oc_TKBRep,
      oc_TKGeomAlgo,
      oc_TKTopAlgo,
      oc_TKShHealing,
      oc_TKV3d,
      oc_TKXSBase,
      oc_TKMesh,
      oc_TKSTEPBase,
      oc_TKSTEP209,
      oc_TKSTEPAttr,
      oc_TKCDF,
      oc_TKSTEP,
      oc_TKLCAF,
      oc_TKCAF,
      oc_TKVCAF,
      oc_TKXCAF,
      oc_TKVCAF,
      oc_TKXDESTEP,
      oc_TKRWMesh,
    ]);
  }

  async initialize() {
    this.oc = await opencascade({
      locateFile: f => {
        if(f.endsWith(".wasm")) {
          return opencascadeWasm;
        }
        return f;
      },
      wasmMemory: new WebAssembly.Memory({initial:10000, maximum:32768})
    });
    await this.loadLibrariesAsPackages();
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