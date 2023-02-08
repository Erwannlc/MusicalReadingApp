import { NodeObj } from "../../../utils/Hooks/useClientRect";
import type { TutoDataKeys } from "../../../types/TutoTypes";

export type HighLights = TutoDataKeys;
export type Disabling = TutoDataKeys[];

export type Nodes = {
  [key in NodesKeys]: NodeObj;
};;

export type NodesType = {
  playBtn: HTMLElement,
  stopBtn: HTMLElement,
  switchOptions: HTMLElement,
  messageDiv: HTMLElement,
  optionsIndicator: HTMLElement,
  switchPiano: HTMLElement,
  vexScore: HTMLElement,
  vexScoreMobile: HTMLElement,
  vexScoreOutput: HTMLElement,
  vexScoreMobileOutput: HTMLElement,
  padsDiv: HTMLElement,
  clefs: HTMLElement,
  piano: HTMLUListElement,
  note1: HTMLLIElement,
  note2: HTMLLIElement,
  padGNote: HTMLElement
}; 
export type NodesKeys = keyof NodesType;


