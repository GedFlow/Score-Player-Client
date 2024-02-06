import styled from "styled-components";

export let LoadingDiv = styled.div`
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