import { useCallback, useState } from "react";

export interface NodeObj {
  node: HTMLElement
  rect: DOMRect
};

const useClientRect = () => {
  const [nodeObj, setRect] = useState<NodeObj>();

  const ref = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      const nodeObj: NodeObj = {
        node,
        rect: node.getBoundingClientRect()
      };
      setRect(nodeObj);
    }
  }, []);

  return [nodeObj, ref] as const;
};

export default useClientRect;
