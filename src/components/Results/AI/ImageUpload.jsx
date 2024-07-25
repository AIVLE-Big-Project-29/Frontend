import { useState } from 'react';
import axios from 'axios'; // axios를 임포트합니다.
import * as SC from './style';
import UploadForm from './UploadForm';
import { IMGUPLOADURL } from '../../../tokens/Urls';

const ImageUpload = ({ setReceivedImg }) => {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(''); // 오류 메시지 상태를 추가합니다.
  const allowedTypes = ['image/jpeg', 'image/png']; // 허용되는 이미지 파일 유형

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      console.log('Selected file:', selectedFile);
      setFile(selectedFile);
      setError(''); // 파일이 올바른 경우 오류 메시지를 초기화합니다.
    } else {
      alert('JPEG, PNG 파일만 업로드할 수 있습니다.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && allowedTypes.includes(droppedFile.type)) {
      console.log('Dropped file:', droppedFile);
      setFile(droppedFile);
      setError(''); // 파일이 올바른 경우 오류 메시지를 초기화합니다.
    } else {
      alert('JPEG, PNG 파일만 업로드할 수 있습니다.');
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
      alert('업로드할 파일이 없습니다.');
      return;
    }

    const token = localStorage.getItem('accessToken');

    const formData = new FormData();
    formData.append('init_image', file);

    try {
      const response = await axios({
        method: 'post',
        url: IMGUPLOADURL,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob',
      });
      console.log('파일 전송 성공', response.data);

      // Blob 데이터를 URL로 변환
      const imgURL = URL.createObjectURL(response.data);
      alert('파일 전송 성공');
      setFile(null); // 파일 전송 성공 후 파일 상태를 초기화
      setReceivedImg(imgURL); // 변환된 URL을 상태에 저장
    } catch (error) {
      console.error('파일 전송 실패', error);
      setError('파일 전송 실패. 다시 시도해주세요.');
    }
  };

  return (
    <SC.FooterContainer>
      <SC.BtnContainer>
        <SC.FileInputLabel>
          파일 선택
          <SC.FileInput
            type="file"
            onChange={handleFileChange}
            accept=".jpg, .png"
          />
        </SC.FileInputLabel>
        <SC.SubmitFileButton onClick={handleSubmit}>
          파일 보내기
        </SC.SubmitFileButton>
      </SC.BtnContainer>
      <SC.ImgUploadContainer className="App">
        <UploadForm
          file={file}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleCancel={handleCancel}
        />
      </SC.ImgUploadContainer>
      {/* 오류 메시지를 표시합니다. */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </SC.FooterContainer>
  );
};

export default ImageUpload;
