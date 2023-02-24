import type { StaveClef, BothClefs } from "../types/Clefs";
import type { MessageObj } from "../types/MessageObj";
import renderVFScoreMobile from "./renderVFScoreMobile";
// import Loader from "../components/PlayGame/Loader";

let timer: NodeJS.Timer;
let timerOut: NodeJS.Timeout;
let countdownTimer: NodeJS.Timer;

let isOnPlay: boolean;

let countDownTime = 3;

export const stopPlaying = (
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  handleMessage: (message: MessageObj) => void,
  quitGame: () => void,
  changeProgressBar: (id: string | null) => void
) => {
  isOnPlay = false;
  setIsPlaying(false);
  clearTimeout(countdownTimer);
  clearTimeout(timerOut);
  clearTimeout(timer);
  changeProgressBar(null);
  const stopMsg = {
    className: "stop_message",
    content: <h5>Partie stoppée</h5>
  };
  countDownTime = 3;
  handleMessage(stopMsg);
  setTimeout(() => {
    quitGame();
  }, 1000);
};

const playMobile = (
  current: number,
  clef: string,
  trebleData: StaveClef,
  bassData: StaveClef,
  bothClefsData: BothClefs,
  levelNum: number,
  gameLength: number,
  outputNode: HTMLElement | undefined) => {
  if (current > gameLength) return;
  if (outputNode) outputNode.innerHTML = "";
  if (clef === "bothClefs") {
    const staveClef = (bothClefsData.mobileNotesArray[current - 1][0]);
    const note = (bothClefsData.mobileNotesArray[current - 1][1]);
    renderVFScoreMobile(note, staveClef, levelNum, true);
  } else {
    const notesArray =
      clef === "treble" ? trebleData.notesArray : bassData.notesArray;
    const note = notesArray[current - 1];
    renderVFScoreMobile(note, clef, levelNum, true);
  };
};

async function displayNote (current: number, clef: string) {
  function displayTrebleNote () {
    document.getElementById(
      `vf-treble-n${current}`
    )?.classList.add("visible");
  };
  function displayBassNote () {
    document.getElementById(
      `vf-bass-n${current}`
    )?.classList.add("visible");
  };
  switch (clef) {
    case "treble":
      displayTrebleNote();
      break;
    case "bass":
      displayBassNote();
      break;
    case "bothClefs":
      displayTrebleNote();
      displayBassNote();
      break;
  };
};

export const playGame = (
  gameLength: number,
  intervalTime: number,
  levelNum: number,
  clefSelected: string,
  trebleData: StaveClef,
  bassData: StaveClef,
  bothClefsData: BothClefs,
  isMobile: boolean,
  handleMessage: (message: MessageObj) => void,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  changeProgressBarID: (id: string | null) => void,
  displayScoreCircle: (score: number) => void,
  outputNode: HTMLElement | undefined,
  enablePiano: () => void,
  disablePiano: () => void,
  activateCorrection: () => void
): void => {
  displayScoreCircle(-1);

  let current: number = 1;

  const end = () => {
    timerOut = setTimeout(() => {
      setIsPlaying(false);
      countDownTime = 3;
    }, (500));
  };

  const play = () => {
    if (current > gameLength || !isOnPlay) {
      console.log("end of game !");
      changeProgressBarID(null);
      clearInterval(timer);
      isOnPlay = false;
      activateCorrection();
      end();
    };
    enablePiano();
    const callFunc = async () => {
      isMobile
        ? playMobile(
          current,
          clefSelected,
          trebleData,
          bassData,
          bothClefsData,
          levelNum,
          gameLength,
          outputNode)
        : displayNote(current, clefSelected);
      changeProgressBarID(current.toString());
    };
    if (isOnPlay) {
      callFunc()
        .then(() => current++)
        .then(() => {
          timer =
          current > gameLength
            ? setTimeout(play, intervalTime * 2)
            : setTimeout(play, intervalTime);
        });
    };
  };

  const countdown = () => {
    if (countDownTime < 1) {
      clearTimeout(countdownTimer);
      handleMessage(
        { content: <h4>Let&apos;s go !</h4>, className: "countdown" }
      );
      play();
      return;
    }
    disablePiano();
    handleMessage(
      { content: <h3>{countDownTime.toString()}</h3>, className: "countdown" }
    );
    countDownTime--;
    const interval = intervalTime > 1500 ? 1500 : intervalTime;
    countdownTimer = setTimeout(countdown, interval);
  };

  isOnPlay = true;
  setIsPlaying(true);
  countdown();
};

//
/// //// Tutorial handle game ----------------------------------------->

// export const playTutoGame = (
//   handleMessage: (message: MessageObj) => void,
//   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
//   changeProgressBarID: (id: string | null) => void,
//   activateCorrection: () => void
// ) => {
//   const gameLength = 5;
//   let current = 3;

//   const endTutoGame = () => {
//     timerOut = setTimeout(() => {
//       setIsPlaying(false);
//     }, (0));
//   };

//   const play = () => {
//     if (current > gameLength || !isOnPlay) {
//       console.log("end of game !");
//       clearInterval(timer);
//       isOnPlay = false;
//       changeProgressBarID(null);
//       endTutoGame();
//       activateCorrection();
//     };
//     const callFunc = async () => {
//       document.getElementById(
//         `vf-treble-n${current}`
//       )?.classList.add("visible");
//       changeProgressBarID(current.toString());
//     };
//     if (isOnPlay) {
//       if (current === 3) { // begins
//         new Promise(resolve => setTimeout(resolve, 800))
//           .then(() => callFunc())
//           .then(() => current++)
//           .then(() => {
//             timer = setTimeout(() => { play(); }, 4500);
//           });
//       } else {
//         callFunc()
//           .then(() => current++)
//           .then(() => {
//             timer = setTimeout(() => { play(); }, 4500);
//           });
//       }
//     };
//   };

//   isOnPlay = true;
//   setIsPlaying(true);
//   const msg = {
//     className: "default",
//     content:
//     <>
//       <h5>La partie Tutoriel est lancée !</h5>
//     </>
//   };
//   handleMessage(msg);
//   play();
// };

// export const createTutoGame = (
//   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
//   handleMessage: (message: MessageObj) => void,
//   displayScoreCircle: (score: number) => void,
//   outputNode: HTMLElement | null
// ) => {
//   displayScoreCircle(-1);
//   isOnPlay = true;
//   setIsPlaying(true);
//   const msg = {
//     className: "default",
//     content:
//     <>
//       <h5>La partie Tutoriel est lancée !</h5>
//     </>
//   };
//   handleMessage(msg);
//   // createTutoStave(outputNode);
// };
