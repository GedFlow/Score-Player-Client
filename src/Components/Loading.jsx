import React from "react";
import * as S from "./LoadingStyle.js"

export default function Loading() {
  return (
    <>
      <S.LoadingDiv>
        <h2>로딩중...</h2>
        <p>악보를 준비중입니다... 잠시만 기다려주세요!</p>
      </S.LoadingDiv>
    </>
  )
}