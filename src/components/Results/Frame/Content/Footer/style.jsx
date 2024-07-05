  import styled from 'styled-components';

  export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.3% 8%;
    width: 80%;
    height: 80px; /* 예시로 높이를 60px로 설정 */
    border-radius: 12px;
    left: 10%;
    right: 10%;
    bottom: 0;
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, 0.8);
  `;

  export const Input = styled.input`
  
    width: 100%;
    padding: 1%;
    font-size: 0.9em;
    border: none;
    border-radius: 8px;
    min-height: 40px; /* 예시로 최소 높이를 40px로 설정 */
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  `;

  export const FooterContainer = styled.footer`
    margin-top: ;
    width: 100%;
    background-color: #ffffff;
    padding: 16px 20px;
    text-align: center;
  `;

  