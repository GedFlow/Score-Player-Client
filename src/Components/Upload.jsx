import React, {useState, useEffect} from "react";
import * as S from "./UploadStyle.js"

export default function Upload({setPage}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  }

  const inputEvent = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  }

  useEffect(() => {
    if(!selectedFile) {
      console.error("파일이 없습니다.");
    } else {
      console.log("진입성공");
            
      setPage("Loading");
      setSelectedFile(null);
    }
  }, [selectedFile])

  return (
    <>
      <h1>악보 재생기</h1>
      <input 
        type="file" 
        accept="image/*" 
        id="fileInput" 
        style={{display:"none"}}
        onChange={inputEvent}
      />
      <S.UploadDiv onClick={handleButtonClick}>
        <S.UploadButton>
          <S.HorizontalLine />
          <S.VaticalLine />
        </S.UploadButton>
        <h3 style={{marginBottom: "5px"}}>악보 이미지를 업로드하세요</h3>
        <p style={{color: "red", margin: "0"}}>변환까지 1~2분 정도 소요됩니다</p>
      </S.UploadDiv>
    </>
  )
}