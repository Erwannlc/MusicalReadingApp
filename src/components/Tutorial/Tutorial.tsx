import { type FC, useState, useEffect, useRef } from "react";
import TutoButton from "./SwitchTutoBtn";
import TutoContent from "./TutoDialog/TutoContent";
import TutoDialog from "./TutoDialog";
import AlertModal from "./AlertModal";
import { steps } from "./TutoData/steps";
import { scaleA } from "../../data/data";
import { stepStyling } from "./TutoData/stepProcess";
import { playTutoGame, stopPlaying } from "../../utils/handleGame";
import type { CSSPropertiesWithVars } from "../../types/CSSPropertiesWithVars";
import type { Nodes } from "./TutoData/nodesToHighLight";
import type { Options } from "../../types/Options";
import type { ChangeButton, ChangeNodeBehavior } from "../../types/TutoTypes";
import type { ClefSelected } from "../../types/Clefs";
import type { MessageObj } from "../../types/MessageObj";
import type { AlertContentType } from "./AlertModal/AlertMsgModal";
import "./TutoDialog/tuto-dialog.scss";
import "./tuto-anims.scss";

interface Props {
  options: Options
  activeTuto: (bool: boolean) => void
  isTutoOn: boolean
  activeTutoPlay: (option: string, value: string | boolean) => void
  tutoPlay: { isActive: boolean, answer: string }
  restoreDefault: () => void
  isMobile: boolean
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  handleMessage: (message: MessageObj) => void
  changeClef: (clef: ClefSelected) => void
  changeTempo: (time: number) => void
  resetStavesData: () => void
  stopGame: () => void
  displayPiano: boolean
  closePiano: () => void
  nodes: Nodes
  changeProgressBarID: (id: string | null) => void
  resetNodesBehavior: () => void
  changeNodeBehavior: ChangeNodeBehavior
  isCorrection: boolean
  activateCorrection: () => void
};

// state machine
const ENTERING = 1;
const LAUNCHGAME = 2;
const QUITGAME = 3;
const NOTUTO = 5;

const defaultStep = 0;

const Tutorial: FC<Props> = (props) => {
  const {
    options,
    activeTuto,
    isTutoOn,
    activeTutoPlay,
    tutoPlay,
    restoreDefault,
    isMobile,
    isPlaying,
    setIsPlaying,
    handleMessage,
    changeClef,
    changeTempo,
    resetStavesData,
    stopGame,
    displayPiano,
    closePiano,
    nodes,
    changeProgressBarID,
    resetNodesBehavior,
    changeNodeBehavior,
    isCorrection,
    activateCorrection
  } = props;

  const {
    playBtn,
    stopBtn,
    switchOptions,
    optionsIndicator,
    switchPiano,
    padsDiv,
    note1,
    note2
  } = nodes;

  const [status, setStatus] = useState(isTutoOn ? ENTERING : NOTUTO);

  const [isDialog, setisModal] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("" as AlertContentType);

  const [stepIndex, setStepIndex] = useState(defaultStep);
  const max = steps.length - 1;
  const goNext = async () => { setStepIndex(i => i < max ? i + 1 : max); };
  const goPrev = async () => { setStepIndex(i => i > 0 ? i - 1 : 0); };
  const goToStep = (newStep: number) => { setStepIndex(newStep); };

  const step = steps[stepIndex];
  const pointerClassName: string = step.pointer ?? "toUp";
  const modalClassName = `tuto--dialog ${pointerClassName}`;
  const stylingContent: CSSPropertiesWithVars = {};

  const styling = useRef(step.styling ?? stylingContent);

  const startTuto = () => {
    setisModal(true);
    if (!isTutoOn) activeTuto(true);
  };

  const alertQuitPlay = () => {
    setAlertType("confirmQuitPlay");
    setIsAlertOpen(true);
  };
  const alertSimpleQuit = () => {
    setAlertType("confirmSimpleQuit");
    setIsAlertOpen(true);
  };
  const closeTuto = async (pause?: boolean) => {
    changeButton.current = defaultChangeButton;
    if (!pause) {
      restoreDefault();
      // isCorrection && restoreDefault();
      if (options.clefSelected !== "treble") changeClef("treble");
      if (isAlertOpen) setIsAlertOpen(false);
      activeTuto(false);
      resetNodesBehavior();
      styling.current = steps[defaultStep].styling ?? {};
      setStepIndex(defaultStep);
    };
    setisModal(false);
  };
  const confirmQuitPlay = () => {
    stopGame();
    stopPlaying(
      setIsPlaying,
      handleMessage,
      resetStavesData,
      changeProgressBarID,
      options.clefSelected,
      nodes.vexScoreOutput?.node,
      5,
      isMobile);
    closeTuto(false);
  };
  const quitTuto = () => {
    closeTuto(false);
    setStepIndex(0);
  };

  const closeConfirmModal = () => {
    setIsAlertOpen(false);
    setAlertType("");
  };

  const defaultChangeButton: ChangeButton = {
    isNextDisabled: false,
    nextButton: true,
    prevButton: true,
    quitButton: false,
    changeNextToQuit: false
  };
  const changeButton = useRef(defaultChangeButton);

  /// ///// useEffect to refactor /////////////////////////////////////////////

  useEffect(() => { // listeners // 1
    let funcName = "";
    const goToNextStep = () => {
      closeTuto(true);
      goNext();
      return setTimeout(() => {
        startTuto();
      }, 400);
    };
    const handleOutsideClick: EventListener = (e: Event) => {
      const targetNode = e.target as HTMLElement;
      handleStepListener(targetNode);
    };
    const handleStepListener = (targetNode: HTMLElement) => {
      switch (funcName) {
        case "toggleOptions" :
          if (targetNode === nodes.switchOptions?.node) {
            goToNextStep();
          };
          break;
        case "play" :
          if (targetNode === playBtn?.node ||
             targetNode.parentElement === playBtn?.node ||
             targetNode.parentElement?.parentElement === playBtn?.node) {
            goToNextStep();
          };
          break;
        case "padNote" :
          if (targetNode === nodes.padGNote?.node) {
            handleMessage({ content: "sol", className: "note-played center" });
            goToNextStep();
          };
          break;
        case "pads" :
          if (padsDiv?.node.children) {
            for (const child of padsDiv.node.children) {
              if (targetNode === child) {
                const keyValue = targetNode.dataset.note as string;
                handleMessage(
                  { content: scaleA[keyValue], className: "note-played center" }
                );
                activeTutoPlay("isActive", true);
                activeTutoPlay("answer", keyValue);
                goToNextStep();
              }
            };
          }
          break;
        case "optionsIndicator" :
          if (targetNode === optionsIndicator?.node ||
             targetNode.parentElement === optionsIndicator?.node ||
             targetNode === switchOptions?.node) {
            goToNextStep();
          };
          break;
        case "switchPiano" :
          if (targetNode === switchPiano?.node ||
             targetNode.parentElement === switchPiano?.node ||
             targetNode.parentElement?.parentElement === switchPiano?.node) {
            goToNextStep();
          };
          break;
        case "notesOnPiano" :
          if (targetNode === note1?.node ||
            targetNode === note2?.node) {
            handleMessage({ content: "do", className: "note-played center" });
            goToNextStep();
          };
          break;
        case "stop" :
          if (targetNode === stopBtn?.node ||
             targetNode.parentElement === stopBtn?.node ||
             targetNode.parentElement?.parentElement === stopBtn?.node) {
            goToNextStep();
          };
          break;
      };
    };

    if (!isDialog) {
      return () => {
        window.removeEventListener("click", handleOutsideClick);
      };
    }
    const activeListener = () => {
      window.addEventListener("click", handleOutsideClick);
    };
    if (step.listener && isDialog) {
      funcName = step.listener;
      setTimeout(() => { activeListener(); }, 0);
    };
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, stepIndex, isDialog]);

  useEffect(() => { // stateMachine // 2
    if (isTutoOn) {
      if (tutoPlay.isActive) setStatus(LAUNCHGAME);
      if (status === LAUNCHGAME) {
        if (!tutoPlay.isActive && stepIndex !== (max - 3)) {
          console.log("tutoPlay.isNotActive anymore !");
          setStatus(QUITGAME);
          goNext();
          setTimeout(() => {
            startTuto();
          }, 400);
        };
      };
      if (status === QUITGAME) {
        if (!isTutoOn) setStatus(NOTUTO);
      };
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTutoOn, tutoPlay.isActive]);

  useEffect(() => { // styles with current step // 3
    if (isDialog) {
      window.scrollTo(0, 0); // cancels previous unexpected scroll
      resetNodesBehavior();
      changeButton.current = defaultChangeButton;
      styling.current = stepStyling(
        step.styling ?? {},
        changeNodeBehavior,
        nodes,
        step.highlights,
        step.disable,
        step.above);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDialog, nodes, step]);

  /// /////////////////////////////////////////////////////////////

  // prevent unwilling behavior if user had selected unexpected options
  useEffect(() => {
    if (isDialog) {
      if (step.beginPlayStep ?? step.beginAdvancedOptions) {
        if (options.clefSelected !== "treble") changeClef("treble");
        if (step.beginPlayStep && options.tempoNum > 1) {
          changeTempo(1); // to keep lowest tempo if tuto chapter 1 was skipped
        }
        if (displayPiano) closePiano(); // close Piano if it was open
      };
    };
  }, [
    isDialog,
    step,
    options.clefSelected,
    changeClef,
    options.tempoNum,
    changeTempo,
    displayPiano,
    closePiano
  ]);

  useEffect(() => { // delete correction when expected
    if (isTutoOn && (stepIndex === 0 ||
       step.beginAdvancedOptions) && isCorrection) restoreDefault();
  }, [isCorrection,
    isTutoOn,
    restoreDefault,
    step.beginAdvancedOptions,
    stepIndex]);

  if (isDialog) {
    if (step.func) step.func(changeButton.current, options, nodes);

    // launch automatically Tuto Game with current = 3
    if (step.startTutoAutoPlay) {
      closeTuto(true)
        .then(() => {
          changeNodeBehavior("stopBtn", { highlight: false, disable: true });
        })
        .then(() => {
          playTutoGame(
            handleMessage,
            setIsPlaying,
            changeProgressBarID,
            activateCorrection);
        });
    };

    const handleClose = () => {
      ((stepIndex > 7 && stepIndex < 16) ||
       (stepIndex > 21 && stepIndex < 23))
        ? alertQuitPlay()
        : alertSimpleQuit();
    };

    const contentProps = {
      handleClose: () => { handleClose(); },
      directQuit: () => { quitTuto(); },
      steps,
      goNext,
      goPrev,
      goToStep,
      stepIndex,
      changeButton: changeButton.current,
      isTableContents: !!step.isTableContents,
      backToZero: !!step.backToZero
    };

    return (
      <TutoDialog
        modalClassName={modalClassName}
        isOpen={isDialog}
        styling={styling.current}>
        <TutoContent {...contentProps} />
        {isAlertOpen
          ? <AlertModal
          confirmQuitPlay={confirmQuitPlay}
          cancelConfirm={closeConfirmModal}
          quitTuto={quitTuto}
          contentType={alertType}
          isAlertOpen={isAlertOpen}/>
          : null}
      </TutoDialog>
    );
  } else {
    return (
      <div className="tuto-btn-wrapper">
        <TutoButton startTuto={startTuto} isPlaying={isPlaying}/>
      </div>
    );
  }
};

export default Tutorial;
