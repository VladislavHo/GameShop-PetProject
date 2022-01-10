import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function AboutGameInfo() {
  const {aboutGame} = useSelector((data:any) => data.settings) 

  return(
    <>
    <h2>About game</h2>
      {aboutGame && (
        <div className="about">
          <p>{aboutGame.name}</p>
          <p>{aboutGame.summary}</p>
        </div>
      )}
    </>

  )
}