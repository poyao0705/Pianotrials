import {
  SvgPlus,
  SquidlyApp,
} from "https://session-app.squidly.com.au/src/Apps/app-class.js";
import PianoTrials from "./Piano_Trials/PianoTrials.js";

class MainWindow extends SvgPlus {
  constructor(isSender, app) {
    super("div");
    
    this.app = app;
    this.isSender = isSender;

    this.styles = {
      position: "absolute",
      display: "flex",
      width: "100%",
      height: "100%"
    };
    // this.eyepaint = this.createChild(EyePaint, {}, this.isSender, this.app);
    this.pianotrials = this.createChild(PianoTrials, {}, this.isSender, this.app);
  }

  set eyePosition(vector) {
    // this.eyepaint.eyePosition = vector;
    this.pianotrials.eyePosition = vector;
  }
}

export default class GameApp extends SquidlyApp {
  constructor(isSender, initializer) {
    super(isSender, initializer);

    this.window = new MainWindow(isSender, this);
  }

  set eyeData(vector) {
    this.window.eyePosition = vector;
  }

  getMainWindow() {
    return this.window;
  }

  static get name() {
    return "Piano Trials";
  }

  static get description() {
    return "Play piano with your eyes!";
  }

  static get appIcon() {
    let icon = new SvgPlus("img");
    icon.props = {
      src: "https://pianotrials.squidly.com.au/images/pianotrials/pianoicon.png",
      styles: { width: "100%", height: "100%" },
    };
    return icon;
  }
}