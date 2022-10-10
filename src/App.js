import React,{useEffect, useRef, useState} from 'react'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { generateTokoen, getRandomName, randomId } from './uil';

const App = () => {

  const myMeeting =useRef('');
  const [token, setToken] =useState('');

  useEffect(()=>{
    const getDate= async()=>{
      const {token} = await generateTokoen(randomId(5),"2345",getRandomName());
      setToken(token)
    }
    getDate()
  },[])
  useEffect(() => {
    if(token && myMeeting.current){
      const inst=ZegoUIKitPrebuilt.create(token);
      inst.joinRoom({
        container:myMeeting.current
      })
    }
  }, [token,myMeeting.current])
  

  return (
    <div>
      <div ref={myMeeting}>
      </div>
    </div>
  )
}

export default App