# 🌳 Green City

<img src="https://avatars.githubusercontent.com/u/173887388?s=200&v=4" align="center"  >

## 🌳 프로젝트 소개

도시 내 녹지 공간을 확대하기 위해 도시 데이터를 분석하고, 적합한 후보지를 시각화합니다. <br>
또한, 해당 후보지의 주소를 기반으로 원하는 지역의 조감도를 생성하여 제공합니다.

## 🚀 설치 및 실행 방법

1. **레포지토리 클론**:
   ```bash
   git clone https://github.com/AIVLE-Big-Project-29/Frontend.git
   cd repository-name
2. **의존성 설치:**:
   ```bash
   npm install
3. **개발 서버 실행**:
   ```bash
   npm run dev

## 🍏 기능 소개

### 로그인

- 초기 화면으로 로그인 페이지가 나타납니다.
- 값이 올바를 때 : 로그인 버튼 클릭 시 홈페이지로 이동합니다.
- 값이 잘못됐을 때 : 입력창 테두리가 빨간색으로 변하며 에러 메시지를 출력합니다.

<img width="360" alt="스크린샷 2024-09-03 오후 4 25 11" src="https://github.com/user-attachments/assets/6e564823-0557-44c4-b2ba-2b8028158702">
<img width="360" alt="스크린샷 2024-09-03 오후 4 25 41" src="https://github.com/user-attachments/assets/47e4f729-4b89-458c-8699-01614575a801">

### 회원가입

- sign up 버튼 클릭 시, 개인 정보 수집 동의 페이지로 이동합니다.
- 필수 사항에 동의 시, 버튼이 활성화되고, 클릭 시 회원가입 페이지로 이동합니다.
- 회원가입 페이지에도 값이 잘못된 경우, 동일하게 에러 메시지를 출력합니다.
- 값을 올바르게 입력하면 버튼을 클릭해 이메일 인증 페이지로 이동합니다.
- 입력창에 이메일을 입력하고 send 버튼을 클릭하면 이메일 인증을 할 수 있습니다.

<img width="270" alt="스크린샷 2024-09-03 오후 4 37 22" src="https://github.com/user-attachments/assets/5b66e7d2-b646-44fe-9523-bce05b89e011">
<img width="270" alt="스크린샷 2024-09-03 오후 4 22 18" src="https://github.com/user-attachments/assets/a3e0002f-49db-40cd-acce-a5cc7284e7a2">
<img width="270" alt="스크린샷 2024-09-03 오후 4 26 21" src="https://github.com/user-attachments/assets/f79e393a-03e3-4664-be6d-a8b674289b0f">

### 메인 페이지

- 서비스에 대한 소개를 애니메이션을 활용하여 보여줍니다.

![Sep-03-2024 17-06-59](https://github.com/user-attachments/assets/89338464-3359-440a-87c9-a03174e8d84f)

### 데이터 분석

- 양식에 맞는 파일을 업로드하면 이미 저장된 실제 데이터와 함께 데이터를 산점도 그래프로 보여줍니다.
- 산점도 그래프에서 업로드한 데이터를 비교할 수 있도록 점을 클릭 시, 밑에 막대 그래프로 분석 결과를 확인 할 수 있습니다.
- 막대 그래프는 최대 3개까지 나오고 다시 한 번 클릭하면 막대 그래프가 사라집니다.

[https://github.com/user-attachments/assets/e3225e4c-cd61-4e14-b2c8-83b618a63e83](https://github.com/user-attachments/assets/626d54db-cec1-431b-95c0-6384a578c5cf)

### 조감도 출력

- 원하는 후보지의 주소를 선택하고 지도 이동 버튼을 클릭하면 지도가 해당 위치로 움직입니다.
- 해당 3d 지도의 화면을 캡처하려면 이미지 다운로드 버튼을 클릭합니다.
- 다운로드 받은 이미지를 옆의 파일 업로드 부분에 업로드한 뒤 파일 보내기 버튼을 클릭하면 <br>
stable diffusion으로 생성한 조감도 이미지가 출력됩니다.

[https://github.com/user-attachments/assets/69c1ad07-7240-4535-9980-ee528759aee2](https://github.com/user-attachments/assets/b7bbbf71-9563-4526-8d3b-d5ad49d07dcf)


## 📚 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">

