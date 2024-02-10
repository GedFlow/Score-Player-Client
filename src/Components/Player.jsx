import React from "react";
import * as S from "./PlayerStyle.js"

export default function Player({setPage}) {

  return (
    <S.MusicPlayer controls src="/music/octop.wav"/>
  )
}