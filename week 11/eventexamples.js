/*function moveMeme() */
    
      const memeImage = document.getElementById('memeImage');
      let isMoving = false;

function startMoving() {
        enableButton('stopButton');
        disableButton('startButton');
        document.getElementById('memeImage').style.animationPlayState = 'running';
        isMoving = true;
      }
  
function stopMoving() {
        enableButton('startButton');
        disableButton('stopButton');
        document.getElementById('memeImage').style.animationPlayState = 'paused';
        isMoving = false;
      }

      let movementInterval;

      function enableButton(buttonId) {
        document.getElementById(buttonId).disabled = false;
      }
  
      function disableButton(buttonId) {
        document.getElementById(buttonId).disabled = true;
      }

const playButton = document.getElementById('playButton');
      playButton.addEventListener('click', playWav);
      
function playWav() {
        const audioElement = new Audio('space.wav');
        audioElement.play();
      }audioElement.addEventListener("loadeddata", () => {
        let duration = audioElement.duration;

      }