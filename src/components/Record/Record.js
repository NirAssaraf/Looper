import React from 'react';
import  './Record.css';

import { ReactMediaRecorder } from "react-media-recorder";
import { purple } from '@material-ui/core/colors';
const RecordView = (props) => {
  const [stop,setStop]= React.useState(false);
  const [start,setStart]= React.useState(false);
  const [pause,setPause]= React.useState(false);
  const [stopClass,setstopClass]= React.useState('stop-record-btn');

  const handleStop=(stopF) =>{
    stopF();
   props.setRope();
    setStop(true);
    if(start){
      setStart(!start);
    }
  }
  // handelStopClass=()=>{

  // }
  const handleStart=(startRec) =>{
    startRec();
    setStart(!start);
  }
  const handlepPause=(PauseRec) =>{
    PauseRec();
    setPause(!pause)
      if(pause)
      setstopClass('stop-record-btn')
      else  setstopClass('stop-record-btn-noanim')

    
  }
  return(
  <div>
    <ReactMediaRecorder
    //   video
      screen
      render={({ status, pauseRecording,resumeRecording,startRecording, stopRecording, mediaBlobUrl}) => (
        <div className='record-btn'>
      {!start? <button  id='start-record-btn' onClick={()=>handleStart(startRecording)}><span className="iconify"  data-icon="fluent:record-16-regular" ></span></button>:
    <button  id={stopClass}  onClick={()=>handleStop(stopRecording)}><span className="iconify" data-icon="entypo:controller-record"></span></button>}
          <button id='pause-record-btn'  hidden={!start||pause} onClick={()=>handlepPause(pauseRecording)}><span class="iconify" data-icon="emojione-monotone:play-or-pause-button"></span></button>
          <button id='resume-record-btn'  hidden={!start||!pause} onClick={()=>handlepPause(resumeRecording)}><span class="iconify" data-icon="emojione-monotone:play-or-pause-button"></span></button>
          {stop?  
     <video className='record-video' src={mediaBlobUrl} width={300} height={300} controls />
         :''}
        </div>
      )}
    />
  </div>
  )
      }
export default RecordView;