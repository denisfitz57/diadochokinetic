import "./jspsych-image-audio-response-with-animation.js";
//import "./jspsych-audio-keyboard-response.js";

var experimentTimeline = [];

var startScreen = {
    type: "html-button-response",
    stimulus: "In this task, we would like you to say the syllables <br><br>'pa ta ka'<br><br>as fast as you can for 20 seconds.\
     <br>There will be a bar on the screen that indicates the remaining time.<br>Click continue for further instructions.",
    choices: ["Continue"],
};

var getIdTrial = {
    type: "survey-text",
    questions: [{
        prompt: "Make up an ID for yourself. <br>If you use an email, I will send the resulting audio files to that address.",
    }, ],
    preamble: "This task will record your voice. It will tell you what to say. <br>The audio will not be used in research results,\
    but will be used to develop software for doing research analysis.<br> \
 Close this window now if you don't want any recording to happen.",
    button_label: "Click to enter ID",
};

var testmicInstructions = {
    type: "html-button-response",
    stimulus: "After clicking continue, a three second recording will begin as a way to check that your microphone is working.\
    <br>The name of the microphone being used will be displayed.\
    <br>There will be a bar on the screen that indicates the remaining time.\
    <br>Click on the play arrow to verify the recording, Click on Okay to advance to the next set of instructions",
    choices: ["Continue"],
};

var checkmicTrial = {
    type: "image-audio-response-with-animation",
    prompt: "<p>Say 'check' then verify it is recorded </p>",
    allow_playback: true,
    show_mic_label: true,
    stimulus: "",
    stimulus_duration: 0,
    buffer_length: 3000,
    wait_for_mic_approval: true,
    // https://stackoverflow.com/a/15945825
    recording_light: `
          <div style="height:5px; position:relative; background:#666666; overflow:hidden;">
            <span style="display:block; width:100%; height:100%;">
              <span id="my-recording-light" style="background-color:#00ff00; display:block; height:100%; width:0%; animation-fill-mode:both;">
              </span>
            </span>
          </div>`,
    recording_animation_keyframes: [{ width: "0%" }, { width: "100%" }],
    recording_animation_id: "my-recording-light",
};

var initiateTrial1 = {
    type: "html-button-response",
    stimulus: "Click the Start button and repeat 'pataka' as fast as you can until the bar fills up and the screen ends.\
    <br>Recording will last for 20 seconds.",
    choices: ["Start"],
    prompt: "<p></p>",
};
var recordsoundTrial = {
    type: "image-audio-response-with-animation",
    prompt: "<p>Repeat 'pataka' as fast as you can'</p>",
    allow_playback: false,
    show_mic_label: false,
    stimulus: "",
    stimulus_duration: 0,
    buffer_length: 20000,
    wait_for_mic_approval: false,
    // https://stackoverflow.com/a/15945825
    recording_light: `
          <div style="height:5px; position:relative; background:#666666; overflow:hidden;">
            <span style="display:block; width:100%; height:100%;">
              <span id="my-recording-light" style="background-color:#00ff00; display:block; height:100%; width:0%; animation-fill-mode:both;">
              </span>
            </span>
          </div>`,
    recording_animation_keyframes: [{ width: "0%" }, { width: "100%" }],
    recording_animation_id: "my-recording-light",
};
var initiateTrial2 = {
    type: "html-button-response",
    stimulus: "Let's do it one more time. Click the Start button and repeat 'pataka' as fast as you can until the bar fills up and the screen ends.\
    <br>Recording will last for 20 seconds.",
    choices: ["Start"],
    prompt: "<p></p>",
};

var sequenceFinishedScreen = {
    type: "html-button-response",
    stimulus: "Thanks for participating! Press Done to finish, then close this window",
    choices: ["Done"],
    prompt: "<p></p>",
};

experimentTimeline = experimentTimeline.concat(getIdTrial);
experimentTimeline = experimentTimeline.concat(startScreen);
experimentTimeline = experimentTimeline.concat(testmicInstructions);
experimentTimeline = experimentTimeline.concat(checkmicTrial);
experimentTimeline = experimentTimeline.concat(initiateTrial1);
experimentTimeline = experimentTimeline.concat(recordsoundTrial);
experimentTimeline = experimentTimeline.concat(initiateTrial2);
experimentTimeline = experimentTimeline.concat(recordsoundTrial);
experimentTimeline = experimentTimeline.concat(sequenceFinishedScreen);

jsPsych.init({
    timeline: experimentTimeline,
});