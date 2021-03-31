import React, { Component } from 'react';
import sound1 from './sounds/clap.wav';
import sound2 from './sounds/hihat.wav';
import sound3 from './sounds/kick.wav';
import sound4 from './sounds/openhat.wav';
import sound5 from './sounds/boom.wav';
import sound6 from './sounds/ride.wav';
import sound7 from './sounds/snare.wav';
import sound8 from './sounds/tom.wav';
import sound9 from './sounds/tink.wav';
import sound0 from './sounds/mf-doom.mp3';
import './App.css';

class App extends Component {

  componentDidMount(){
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;     
      audio.play();
      key.classList.add('playing');
    }
  
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }
  
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
  }
  render() {
    return (
<div className="App">
  <div className="keys">
    <div data-key="65" className="key">
      <kbd>A</kbd>
      <span className="sound">clap</span>
    </div>
    <div data-key="83" className="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" className="key">
      <kbd>D</kbd>
      <span className="sound">kick</span>
    </div>
    <div data-key="70" className="key">
      <kbd>F</kbd>
      <span className="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span className="sound">boom</span>
    </div>
    <div data-key="72" className="key">
      <kbd>H</kbd>
      <span className="sound">ride</span>
    </div>
    <div data-key="74" className="key">
      <kbd>J</kbd>
      <span className="sound">snare</span>
    </div>
    <div data-key="75" className="key">
      <kbd>K</kbd>
      <span className="sound">tom</span>
    </div>
    <div data-key="76" className="key">
      <kbd>L</kbd>
      <span className="sound">tink</span>
    </div>
    <div data-key="186" className="key">
      <kbd>;</kbd>
      <span className="sound">MF DOOM</span>
    </div>
  </div>
  

  

  <audio data-key="65" src={sound1}></audio>
  <audio data-key="83" src={sound2}></audio>
  <audio data-key="68" src={sound3}></audio>
  <audio data-key="70" src={sound4}></audio>
  <audio data-key="71" src={sound5}></audio>
  <audio data-key="72" src={sound6}></audio>
  <audio data-key="74" src={sound7}></audio>
  <audio data-key="75" src={sound8}></audio>
  <audio data-key="76" src={sound9}></audio>
  <audio data-key="186" src={sound0}></audio>
  </div>
    )
  }
}

export default App;
