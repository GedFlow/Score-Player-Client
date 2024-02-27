import styled from "styled-components";

export let File = styled.input`

`

export let UploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  height: 60%;
  border: 1px solid black;
  border-radius: 35px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 70%;
    height: 400px;
  }
`
export let PlayerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  height: 60%;
  border: 1px solid black;
  border-radius: 35px;

  @media (max-width: 600px) {
    width: 70%;
    height: 400px;
  }
`

export let UploadButton = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #6fadcf;
  z-index: 1;
`

export let HorizontalLine = styled.div`
  position: absolute;
  width:30px;
  height:5px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
`

export let VaticalLine = styled.div`
  position: absolute;
  width:5px;
  height:30px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
`

export let MusicPlayer = styled.audio`
  
`