import { FunctionComponent, useEffect } from "react";
import type { BothClefs, StaveClef } from "../../types/Clefs";
import { createMobileStaves } from "../../utils/createStaves";
import useClientRect, { NodeObj } from "../../utils/Hooks/useClientRect";
import { renderVFEmptyStave } from "../../utils/renderVFScoreMobile";
import { NodesKeys } from "../Tutorial/TutoData/nodesToHighLight";


type Props = {
 level: string
 levelNum: number
 clefSelected: string
 Treble: StaveClef
 Bass: StaveClef
 both: BothClefs
 gameLength: number
 updateNodes: (key: NodesKeys, obj: NodeObj) => void
 outputNode: HTMLElement | null
};

const VFBoxMobile: FunctionComponent<Props> = ({level, levelNum, clefSelected, Treble, Bass, both, gameLength, updateNodes, outputNode}) => {

  const [nodeObj, ref] = useClientRect();
  useEffect(() => {
    updateNodes("vexScoreMobile", nodeObj);
  }, [nodeObj, updateNodes]);
  
  const [outputMobileNode, outputMobileRef] = useClientRect();
  useEffect(() => {
    updateNodes("vexScoreMobileOutput", outputMobileNode);
  }, [outputMobileNode, updateNodes]);

 useEffect(() => {
  createMobileStaves(level, Treble, Bass, both, gameLength, outputMobileNode.node).then(() => renderVFEmptyStave(clefSelected))
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
  
  return (     // change id s ==> add "mobile"
    <div ref={ref} id="vexboxMobile"> 

      <div ref={outputMobileRef} id="outputMobile"></div>
    </div>
  )
};


export default VFBoxMobile;