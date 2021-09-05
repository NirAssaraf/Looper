import React from 'react';
import Board from '../Board/Board';
import song1 from '../../audio/120_future_funk_beats_25.mp3';
import song2 from '../../audio/120_stutter_breakbeats_16.mp3';
import song3 from '../../audio/Bass Warwick heavy funk groove on E 120 BPM.mp3';
import song4 from '../../audio/electric guitar coutry slide 120bpm - B.mp3';
import song5 from '../../audio/FUD_120_StompySlosh.mp3';
import song6 from '../../audio/GrooveB_120bpm_Tanggu.mp3';
import song7 from '../../audio/MazePolitics_120_Perc.mp3';
import song8 from '../../audio/PAS3GROOVE1.03B.mp3';
import song9 from '../../audio/SilentStar_120_Em_OrganSynth.mp3';
import './Game.css'
import RecordView from '../Record/Record';
import Rope from '../../image/rope2.png';
import Header from '../Header/Header';

import PLayBtns from '../Button';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rope:false,
      history: [
        {
          squares: [  
          { "clicked": "0", "name": "Funk Beats", play: new Audio(song1) },
          { "clicked": "0", "name": "Stutter Breakbeats", play: new Audio(song2) },
          { "clicked": "0", "name": "Bass Warwick", play: new Audio(song3) },
          { "clicked": "0", "name": "Electric Guitar", play: new Audio(song4) },
          { "clicked": "0", "name": "StompySlosh", play: new Audio(song5) },
          { "clicked": "0", "name": "Groove", play: new Audio(song6) },
          { "clicked": "0", "name": "Maze Politics", play: new Audio(song7) },
          { "clicked": "0", "name": "PAS3GROOVE", play: new Audio(song8) },
          { "clicked": "0", "name": "Silent Star", play: new Audio(song9) }
      ],
        }
      ],
      stepNumber: 0,
      playing:false,
      
     // record:false,
    };
    this.setRope=this.setRope.bind(this)
  }
  setRope(){
    this.setState({rope:true})
  }
  createSession(squares){
      const replay =[];
      let currTime=0;
      let DTime=0;
      for (let i = 0; i < squares.length; i++) {
      if (squares[i].play.currentTime > 0) {
          currTime=squares[i].play.currentTime;
          DTime=squares[i].play.duration;
      }
        if (squares[i].clicked==="1") {
          replay.push(squares[i]);
        }
      
      }
      const timeLeft=(DTime - currTime) * 1000;
      return this.replaySession(replay,timeLeft);
    }
    
    replaySession(play,timeLeft) {
      setTimeout(()=>{
      var replay = play.slice();
      for(let i =0; i< replay.length; i++){
          replay[i].play.load();
          replay[i].play.play().catch(error => {
              console.log(error); 
          });
          replay[i].play.loop = true;
      }
  },timeLeft);
    }
  
    stopSession(replay) {
      for(let i =0; i< replay.length; i++){
          if(replay[i].clicked==="1"){
          replay[i].play.pause();
          replay[i].play.currentTime = 0;
          replay[i].play.loop = true;
          }
      }
      this.setState({
        playing:false,
      })

    }
    Play(start,end){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      this.setState({
        playing:true,
      })
      
      this.createSession(squares);   
    }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(squares[i].clicked==='1'){
      squares[i].play.pause();
      squares[i].play.currentTime = 0;
      squares[i].play.loop = true;    
    }else{
      if(this.state.playing){
        squares[i].clicked = squares[i].clicked==='0' ? "1" : "0";
        this.setState({
          history: history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: history.length,
        });
        this.createSession(squares);
          return;
    }
  }
  squares[i].clicked = squares[i].clicked==='0' ? "1" : "0";
  this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
    });
    var flag=false;
    for(var i=0;i<squares.length;i++){
      if(squares[i].clicked==='1' ){
        if(this.state.playing){
          flag=true;
          return;
        }
        flag=false;
        return;
      }
    }
    if(flag){
      console.log(flag);
      this.Play(0,0);
      return;
    }

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
    });
  }

  render() {
  const history = this.state.history;
  const current = history[this.state.stepNumber];

    return (
      <div className="App" style={{height:window.screen.height+'px',width:window.screen.width+'px'}}>
      <Header playing={this.state.playing}/>

      
      <div className="game" >
<div hidden={!this.state.rope} className='img-rope'></div>
        <div className="btn" >
        {/* <button onClick={()=> this.stopSession(current.squares)}>Stop</button> */}
        <PLayBtns flag={this.state.playing} onPlayClick={() => this.Play(0,0)} onPauseClick={()=> this.stopSession(current.squares)} />
        <RecordView setRope={this.setRope} />

        </div> 

        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
      </div>
      </div>
    );
  }
  }

  



  export default Game;