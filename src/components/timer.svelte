<script>
    let audio;
    const minutesToSeconds = (minutes) => minutes * 60;
    const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
    const padWithZeroes = (number) => number.toString().padStart(2, '0');
    const State = {idle: 'idle', inProgress: 'in progress', resting: 'resting'};
  
    const POMODORO_S =  minutesToSeconds(25)
    const LONG_BREAK_S = minutesToSeconds(20);
    const SHORT_BREAK_S = minutesToSeconds(5);
  
    let currentState = State.idle;
    let pomodoroTime = POMODORO_S;
    let completedPomodoros = 0;
    let interval;
  
    function formatTime(timeInSeconds) { 
      const minutes = secondsToMinutes(timeInSeconds);
      const remainingSeconds = timeInSeconds % 60;
      return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
    }
  
    function startPomodoro() { 
      setState(State.inProgress);
      interval = setInterval(() => {
        if (pomodoroTime === 0) {
            audio.play();
            alert("Pomodoro completed!");
          completePomodoro();
        }
        pomodoroTime -= 1;
      },1000);
    }
  
    function setState(newState){
      clearInterval(interval)
      currentState = newState;
    }
  
    function completePomodoro(){
      completedPomodoros++;
      if (completedPomodoros === 4) {
        rest(LONG_BREAK_S);
        completedPomodoros = 0;
      } else {
        rest(SHORT_BREAK_S);
      }
    }
  
    function rest(time){
      setState(State.resting);
      pomodoroTime = time;
      interval = setInterval(() => {
        if (pomodoroTime === 0) {
            audio.play();
            alert("Break Finished Get Back To Work!!");
          idle();
        }
        pomodoroTime -= 1;
      },1000);
    }
  
    function cancelPomodoro() {
      // TODO: Add some logic to prompt the user to write down
      // the cause of the interruption.
      idle();
    }
  
    function idle(){
      setState(State.idle);
      pomodoroTime = POMODORO_S;
    }
  </script>
  <audio bind:this={audio} src="https://download1478.mediafire.com/2g2unotmxx0g/xd7am36c7ivuf0w/message-ringtone-magic.mp3" preload="auto"></audio>
  <style>
    time {
      display: block;
      font-size: 5em;
      margin-bottom: 0.2em;
    }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: var(--accent);
    text-transform: uppercase;
    font-size: 6em;
    margin: 0;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

/* global.css simulated here */
:global(:root) {
 --black: #333;
 --base: white;
 --base-light: #f4f4f4;
 --base-dark: #ddd;

 --white: white;
 --accent: orangered;
 --accent-light: #ff4500d6;
 --accent-dark: #e83f00;
}

:global(html, body) {
  position: relative;
  width: 100%;
  height: 100%;
}

:global(body) {
  color: var(--black);
  margin: 0;
  padding: 8px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 300;
}

:global(a) {
  color: rgb(0,100,200);
  text-decoration: none;
}

:global(input, button, select, textarea) {
  font-family: inherit;
  font-size: 1.5em;
  font-weight: inherit;
  padding: 0.4em;
  margin: 0 0 0.5em 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
}

:global(input:disabled) {
  color: #ccc;
}

:global(input[type="range"]) {
  height: 0;
}

:global(button) {
  background-color: var(--base);
  border-color: var(--black);
  color: var(--black);
  font-size: 1.5em;
  font-weight: inherit;
  outline: none;
  text-transform: uppercase;
  transition: background-color .2s, color .2s, border-color .2s, opacity .2s;
}

:global(button:disabled) {
  opacity: 0.5;
}

:global(button:focus),
:global(button:not(:disabled):hover) {
  background-color: var(--base-light);
}

:global(button:not(:disabled):active) {
  background-color: var(--base-dark);
}

:global(button.primary) {
  background-color: var(--accent);
  border-color: var(--accent);
  color: var(--white);
}

:global(button.primary:not(:disabled):hover) {
  background-color: var(--accent-light);
  border-color: var(--accent-light);
}

:global(button.primary:not(:disabled):active) {
  background-color: var(--accent-dark);
  border-color: var(--accent-dark);
}

</style>
  
  <section class="has-text-centered">
    <time>
      {formatTime(pomodoroTime)}
    </time>
    <footer>
      <button class="primary" on:click={startPomodoro} disabled={currentState !== State.idle}>start</button>
      <button on:click={cancelPomodoro} disabled={currentState !== State.inProgress}>cancel</button>
      <!--button on:click={completePomodoro}>complete</button-->
    </footer>
  </section>
  