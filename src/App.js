import React, {useState} from "react";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer.jsx";
import Upload from "./Components/Upload/Upload.jsx";

let MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95vh;
`
let LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000b0;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
`

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? <LoadingDiv>로딩중</LoadingDiv> : null}
      <MainDiv>
        <Upload isLoading={isLoading} setIsLoading={setIsLoading} />
      </MainDiv>
      <Footer />
    </>
  );
}

export default App;
