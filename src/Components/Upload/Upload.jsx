import React, {useState, useEffect} from "react";
import axios from "axios";
import * as S from "./UploadStyle.js"

export default function Upload({isLoading, setIsLoading}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [music, setMusic] = useState(false);
  const [musicTitle, setMusicTitle] = useState("");
  const HOME = process.env.REACT_APP_HOME.replaceAll('"', "");

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  }

  const inputEvent = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectedFile(file);
  }

  useEffect(() => {
    axios.post(`${HOME}delete`)
      .then(response => {
        console.log("서버 연결에 성공했습니다.");
      })
      .catch(error => {
        if(error) {
          console.log("서버가 비활성화 상태입니다. 나중에 다시 시도하십시오.");
        } else {
          console.log("서버가 비활성화 상태입니다. 나중에 다시 시도하십시오.");
        }
      })
  }, [])

  useEffect(() => {
    const uploadFile = async () => {
      if (!selectedFile) {
        console.error("파일이 없습니다.");
        return;
      } else {
        const formData = new FormData();
        formData.append("image", selectedFile);
  
        try {
          // 서버 업로드 엔드포인트에 POST 요청 보내기
          setIsLoading(true);
          const response = await axios.post(HOME, formData);
          setMusicTitle(response.data);
  
          console.log("파일 전송 성공");
          // setSelectedFile(null);
        } catch (error) {
          console.error("파일 전송 실패:", error);
          setIsLoading(false);
        }
      }
    };
    
    uploadFile();
  }, [selectedFile]);
  
  useEffect(() => {
    // console.log(musicTitle);
    if(musicTitle) {
      setMusic(true);
      setIsLoading(false);
    }
  }, [musicTitle])

  return (
    <>

      <h1>악보 재생기</h1>
      <label htmlFor="fileInput">
        <input 
          type="file" 
          accept="image/*" 
          id="fileInput" 
          style={{opacity: 0, height:0}}
          onInput={inputEvent}
        />
      </label>
      {
        music
        ?
        <S.PlayerDiv>
          <S.MusicPlayer controls src={`${HOME}music/${musicTitle}.wav`}/>
        </S.PlayerDiv>
        :
        <S.UploadDiv onClick={handleButtonClick}>
          <S.UploadButton>
            <S.HorizontalLine />
            <S.VaticalLine />
          </S.UploadButton>
          <h3 style={{marginBottom: "0px"}}>악보사진을 업로드하고</h3>
          <h3 style={{marginBottom: "10px", marginTop: "0px"}}>재생해 보세요!</h3>
          <p style={{color: "red", margin: "0"}}>변환까지 1~2분 정도 소요됩니다</p>
        </S.UploadDiv>
      }
    </>
  )
}