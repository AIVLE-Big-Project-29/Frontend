import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 250px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileImageInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const ProfileName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`;

export const ProfileEmail = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  margin-left: 8px;
  font-size: 12px;
`;
