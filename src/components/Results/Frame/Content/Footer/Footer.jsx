import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as SC from './style';
import FileUpload from './Fileupload';
import { CSVUPLOADURL } from '../../../../../tokens/Urls';

const Footer = ({ isUpload }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(''); // 오류 메시지 상태를 추가합니다.

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === 'text/csv' ||
        selectedFile.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        selectedFile.type === 'application/vnd.ms-excel')
    ) {
      console.log('Selected file:', selectedFile);
      setFile(selectedFile);
      setError(''); // 파일이 올바른 경우 오류 메시지를 초기화합니다.
    } else {
      alert('CSV 또는 Excel 파일만 업로드할 수 있습니다.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type === 'text/csv' ||
        droppedFile.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        droppedFile.type === 'application/vnd.ms-excel')
    ) {
      console.log('Dropped file:', droppedFile);
      setFile(droppedFile);
      setError(''); // 파일이 올바른 경우 오류 메시지를 초기화합니다.
    } else {
      alert('CSV 또는 Excel 파일만 업로드할 수 있습니다.');
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
    const token = localStorage.getItem('accessToken');

    if (!file) {
      alert('업로드할 파일이 없습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios({
        method: 'post',
        url: CSVUPLOADURL,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setFile(null); // 파일 전송 성공 후 파일 상태를 초기화합니다.
      isUpload(true);
      console.log('파일 전송 성공', response.data);
      alert('파일 전송 성공');
      navigate('/results', { state: response.data });
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
          <SC.FileInput
            type="file"
            onChange={handleFileChange}
            accept=".csv, .xlsx, .xls"
          />
        </SC.FileInputLabel>
        <SC.SubmitFileButton onClick={handleSubmit}>
          파일 보내기
        </SC.SubmitFileButton>
      </div>
      <div className="App">
        <FileUpload
          file={file}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleCancel={handleCancel}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* 오류 메시지를 표시합니다. */}
    </SC.FooterContainer>
  );
};

export default Footer;
