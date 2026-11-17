// Source - https://stackoverflow.com/a/54001170
// Posted by CertainPerformance, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-17, License - CC BY-SA 4.0

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["Web Developer.", "Photographer.", "Pre-Engineer Student."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("#tw").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 1200);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (dataText[i] === undefined) {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation((i + 1) % 3);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
