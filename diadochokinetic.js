import "./jspsych-image-audio-response-with-animation.js";
//import "./jspsych-audio-keyboard-response.js";

var experimentTimeline = [];
var urlvar = jsPsych.data.urlVariables();
var getIdTrial = {
    type: "survey-text",
    questions: [{
        prompt: "If the ID displayed is not correct, please enter it now.",
        placeholder: urlvar.subjectID,
    }, ],
    preamble: "This task will record your voice. It will tell you what to say.",
    button_label: "Click to enter ID",
};

var startScreen = {
    type: "html-button-response",
    stimulus: "In this task, we would like you to say the syllables <br><br>'pa ta ka'<br><br>as fast as you can for 20 seconds.\
     <br>There will be a bar on the screen that indicates the remaining time.<br>Click continue for further instructions.",
    choices: ["Continue"],
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
    stimulus: "Thanks for participating! Press Done to finish.",
    choices: ["Done"],
    prompt: "<p></p>",
};

experimentTimeline = experimentTimeline.concat(getIdTrial);
experimentTimeline = experimentTimeline.concat(startScreen);
experimentTimeline = experimentTimeline.concat(initiateTrial1);
experimentTimeline = experimentTimeline.concat(recordsoundTrial);
experimentTimeline = experimentTimeline.concat(initiateTrial2);
experimentTimeline = experimentTimeline.concat(recordsoundTrial);
experimentTimeline = experimentTimeline.concat(sequenceFinishedScreen);

jsPsych.init({
    timeline: experimentTimeline,
    on_finish: function() {
        window.close();
    },
});