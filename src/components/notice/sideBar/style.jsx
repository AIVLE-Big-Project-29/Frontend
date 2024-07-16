import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';

export const Notice = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  border-radius: 24px;
`;

export const SideBar = styled.div`
  // 사이드바 전체
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 8px;
  isolation: isolate;
  width: 17vw;
  height: 100vh;
  border-right: 1px solid rgba(28, 28, 28, 0.1);
`;

export const Profile = styled.div`
  // 프로필 전체
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 12px;
  gap: 4px;

  width: 180px;
  height: 100px;
`;

export const ProfileName = styled.div`
  // 본인 프로필
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  padding: 8px;
  gap: 8px;
  width: 180px;
  height: 40px;
  border-radius: 8px;
`;

export const ProfileWrapper = styled.div`
  // 본인 프로필 wrapper
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 8px;
  width: 164px;
  height: 24px;
  border-radius: 8px;
  display: flex;
  align-content: center;
`;

export const ProfilePhoto = styled.div`
  // 프로필 사진 wrapper
  width: 24px;
  height: 24px;
  background: rgba(28, 28, 28, 0.05);
  border-radius: 80px;
  cursor: pointer;
`;

export const Photo = styled.img`
  // 프로필 사진
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

export const Name = styled.p`
  // 프로필 이름
  width: 58px;
  height: 20px;
  margin: 0;
  ${Fonts['font-regular-14']}
  color: #1c1c1c;
`;

export const ProfileMenu = styled.button`
  // 프로필 메뉴
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  padding: 8px;
  gap: 4px;
  width: 180px;
  height: 36px;
  border-radius: 12px;
  background-color: white;
  border: none;
  outline: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #355342;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 30px;
  }
  &:hover::after {
    width: 40%;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const IconText = styled.div`
  // 메뉴 아이콘, 문자
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 8px;
  width: 164px;
  height: 20px;
  border-radius: 8px;
`;

export const IconWrapper = styled.div`
  // 아이콘 wrapper
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;

export const Icon = styled.div`
  // 아이콘
  width: 16px;
  height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconImg = styled.img`
  background-color: rgba(28, 28, 28, 0.2);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 140px;
  height: 20px;
  border-radius: 8px;
`;

export const Text = styled.p`
  width: 140px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${Fonts['font-regular-14']}
  color: #355342;
`;

export const PageMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 12px;
  gap: 4px;
  width: 180px;
  height: 200px;
`;

export const MenuTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 12px;
  width: 180px;
  height: 28px;
  border-radius: 8px;
`;

export const Title = styled.p`
  width: 156px;
  height: 20px;
  ${Fonts['font-regular-14']}
  color: #355342;
`;

export const Menues = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  padding: 8px;
  gap: 4px;
  width: 180px;
  height: 36px;
  border-radius: 12px;
  background-color: white;
  border: none;
  outline: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #355342;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 20px;
  }
  &:hover::after {
    width: 50%;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const PreIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;

export const PreIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export const ArrowIcon = styled.img`
  color: rgba(28, 28, 28, 0.2);
`;

export const MenuIconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 12px;
  width: 144px;
  height: 20px;
  border-radius: 8px;
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 20px;
  height: 15px;
  border-radius: 8px;
`;

export const MenuIcon = styled.div`
  width: 20px;
  height: 16px;
  color: #355342;
`;

export const MainIcon = styled.img`
  color: #355342;
`;

export const MenuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  padding: 0px;
  width: 100px;
  height: 15px;
  border-radius: 8px;
`;

export const MenuText = styled.p`
  width: 100px;
  height: 15px;
  margin: 0;
  ${Fonts['font-regular-14']}
  color: #355342;
`;
