import React, { useState } from 'react';
import axios from 'axios'; // axios를 임포트합니다.
import * as SC from './style';
import FileUpload from './Fileupload';

const Footer = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(''); // 오류 메시지 상태를 추가합니다.

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      console.log('Selected file:', selectedFile);
      setFile(selectedFile);
      setError(''); // 파일이 올바른 경우 오류 메시지를 초기화합니다.
    } else {
      alert('CSV 파일만 업로드할 수 있습니다.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'text/csv') {
      console.log('Dropped file:', droppedFile);
      setFile(droppedFile);
      setError(''); // 파일이 올바른 경우 오류 메시지를 초기화합니다.
    } else {
      alert('CSV 파일만 업로드할 수 있습니다.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => {
    console.log('File upload canceled');
    setFile(null);
    setError(''); // 파일을 취소할 경우 오류 메시지를 초기화합니다.
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('업로드할 CSV 파일이 없습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.6:8000/upload_csv/', // 서버의 파일 업로드 수정은 여기서!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('파일 전송 성공', response.data);
      alert('파일 전송 성공');
      setFile(null); // 파일 전송 성공 후 파일 상태를 초기화합니다.
    } catch (error) {
      console.error('파일 전송 실패', error);
      setError('파일 전송 실패. 다시 시도해주세요.');
    }
  };

  return (
    <SC.FooterContainer>
      <div>
        <SC.FileInputLabel>
          파일 선택
          <SC.FileInput type="file" onChange={handleFileChange} accept=".csv" />
        </SC.FileInputLabel>
        <SC.SubmitFileButton onClick={handleSubmit}>파일 보내기</SC.SubmitFileButton>
      </div>
      <div className="App">
        <FileUpload
          file={file}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleCancel={handleCancel}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* 오류 메시지를 표시합니다. */}
    </SC.FooterContainer>
  );
};

export default Footer;