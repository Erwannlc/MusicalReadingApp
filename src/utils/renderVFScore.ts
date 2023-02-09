import { Vex } from "vexflow";

import { StaveClef } from "../types/Clefs";

const renderVFSCore = (clefSelected: string, trebleData: StaveClef, bassData:StaveClef, level: number, gameLength: number) => {
  const containerWidth = 575;
  const containerHeight = clefSelected === "bothClefs" ? (level > 3 ? level > 4 ? level > 5 ? 380 : 350 : 320 : 300) : 250;
  const staveWidth = 500;
  const stave_x = 30;
  const stave_y = clefSelected === "bass" ? 30 :
  (level > 5 ? 75 : level > 4 ? 60 : level > 3 ? 40 : 30);

  document.documentElement.style.setProperty("--vexflow_height", `${containerHeight}px`);


  const VF = Vex.Flow;

  const vf = new VF.Factory({
    renderer: {elementId: "output", width: containerWidth, height: containerHeight}
  });

  const system = vf.System({width: staveWidth, x: stave_x, y: stave_y} );

  if (clefSelected === "treble" || clefSelected === "bothClefs") {
    const scoreG = vf.EasyScore();
    system.addStave({
      voices: [
        scoreG.voice(scoreG.notes(trebleData.notes), 
        {time: `${gameLength.toString()}/4`}),
      ]
    }).addClef("treble")
  };

  if (clefSelected === "bass" || clefSelected === "bothClefs") {
    const scoreF = vf.EasyScore();
    system.addStave({
      voices: [
        scoreF.voice(scoreF.notes(bassData.notes, {clef: "bass"}), 
        {time: `${gameLength.toString()}/4`}),
      ]
    }).addClef("bass")
  };
  system.addConnector();
  vf.draw();
};

export default renderVFSCore;