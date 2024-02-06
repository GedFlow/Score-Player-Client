import React, {useState} from "react";
import styled from "styled-components";
import Upload from "./Components/Upload";
import Loading from "./Components/Loading";
import Player from "./Components/Player";

let MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

function App() {

  const [page, setPage] = useState("Upload");

  return (
    <MainDiv>
      { page === "Upload" ? <Upload setPage={setPage} /> : null }
      { page === "Loading" ? <Loading setPage={setPage} /> : null }
      { page === "Player" ? <Player setPage={setPage} /> : null }
    </MainDiv>
  );
}

export default App;
