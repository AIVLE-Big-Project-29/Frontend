import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';
import '../../../tokens/font.css';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Contents = styled.div`
  overflow: hidden;
`;

export const Header = styled.div`
  // 메인 화면 헤더

  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 8px;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: relative;
  z-index: -1;
`;

export const MainImg = styled.img`
  // 메인 화면 이미지
  position: fixed;
  width: 800px;
  height: 562.74px;
  left: 588px;
  top: 139px;

  background: url(iStock-1199126039.jpg);
  border-radius: 40px;
`;

export const Container = styled.div`
  position: fixed;
  width: 517px;
  height: 300px;
  left: 180px;
  top: 300px;
`;

export const MainHeader = styled.div`
  // 메인 화면 문구
  position: relative;
`;

export const MainTitle = styled.h1`
  margin: 0;

  ${Fonts['font-bold-90']}
  text-align: justify;

  background-clip: text;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  color: #355342;
`;

export const HeaderWrapper = styled.div`
  // 헤더 안 div

  width: 900px;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const nav = styled.nav`
  // nav
  position: absolute;
  width: 700px;
  height: 65px;
  /* left: calc(50% - 700px / 2);
  top: calc(50% - 65px / 2); */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const navMenu = styled.button`
  // nav 속 menu

  width: 100px;
  height: 24px;
  padding: 0;
  /* left: calc(50% - 118px / 2 + 145px);
  top: calc(50% - 24px / 2 + 0.5px); */

  ${Fonts['font-semibold-20']}

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #355342;
  background-color: white;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    transform: translateX(-50%);
    height: 7px;
    top: 29px;
    left: 0;
    background-color: #355342;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
