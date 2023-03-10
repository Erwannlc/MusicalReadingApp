import { type FunctionComponent, useCallback } from "react";
import ClefsButtons from "./ClefButtons";
import type { NodeObj } from "../../../utils/Hooks/useClientRect";
import type { NodesKeys } from "../../Tutorial/TutoData/nodesToHighLight";
import type { ClefSelected } from "../../../types/Clefs";

interface Props {
  changeClef: (clef: ClefSelected) => void
  updateNodes: (key: NodesKeys, obj: NodeObj) => void
  clefSelected: string
  highlight: boolean
};

const Clef: FunctionComponent<Props> = ({ changeClef, updateNodes, clefSelected, highlight }) => {
  const chooseClef = useCallback((clef: ClefSelected) => {
    changeClef(clef);
  }, [changeClef]);

  return (
    <div className="clef-option">
      <p className="clef-option-title">Clef</p>
      <ClefsButtons chooseClef={chooseClef} updateNodes={updateNodes} clefSelected={clefSelected} highlight={highlight}/>
    </div>
  );
};

export default Clef;
