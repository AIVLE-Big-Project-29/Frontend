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
  /* -webkit-mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
  mask-image: linear-gradient(to top, transparent, black 0),
    linear-gradient(to bottom, transparent, black 0),
    linear-gradient(to left, transparent, black 100),
    linear-gradient(to right, transparent, black 0);
  mask-size:
    100% 50%,
    100% 50%,
    50% 100%,
    50% 100%;
  mask-repeat: no-repeat;
`;

export const Container = styled.div`
  position: fixed;
  width: 517px;
  height: 300px;
  left: 260px;
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

export const HeaderWrapper2 = styled.div`
  // 헤더 안 div
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1px;
  left: 20px;
  &:hover :active :focus {
    outline: none;
    border: none;
  }
`;

export const Nav = styled.nav`
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

export const Nav2 = styled.div`
  // nav
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const NavMenu = styled.button`
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
  border: none;
  outline: none;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #355342;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 8px;
  }
  &:hover::after {
    width: 80%;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const NavMenu2 = styled.button`
  // nav 속 menu
  width: 100px;
  height: 24px;
  padding: 0;
  ${Fonts['font-semibold-20']}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #355342;
  background-color: white;
  border: none;
  outline: none;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #355342;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 8px;
  }
  &:hover::after {
    width: 80%;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const ToggleWrapper = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;

  /* svg animations */

  @keyframes rotate_in_cw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes rotate_out_cw {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate_in_ccw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
  @keyframes rotate_out_ccw {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes draw_in {
    50% {
      stroke-dashoffset: 100%;
    }
    100% {
      stroke-dashoffset: 0%;
    }
  }

  @keyframes draw_out {
    50% {
      stroke-dashoffset: 0%;
    }
    100% {
      stroke-dashoffset: 100%;
    }
  }

  .svg-1 {
    animation: ${(props) =>
        props.status === 'open' ? `rotate_in_cw` : `rotate_out_cw`}
      0.8s;
    animation-fill-mode: forwards;

    .line-1 {
      animation: ${(props) =>
          props.status === 'open' ? `draw_out` : `draw_in`}
        0.8s;
      animation-fill-mode: forwards;
    }
    .line-3 {
      animation: ${(props) =>
          props.status === 'open' ? `draw_out` : `draw_in`}
        0.8s;
      animation-fill-mode: forwards;
    }
  }

  .svg-2 {
    position: absolute;
    left: 0px;
    top: 160px;
    animation: ${(props) =>
        props.status === 'open' ? `rotate_in_ccw` : `rotate_out_ccw`}
      0.8s;
    animation-fill-mode: forwards;
  }

  /* default line offsets */

  .svg-1 {
    .line-1,
    .line-3 {
      stroke-dashoffset: ${(props) =>
        props.status === 'open' ? `0%` : `100%`};
    }
  }

  svg {
    width: 30px;
    height: 30px;
    overflow: visible;

    path {
      stroke: #000;
      stroke-dasharray: 100%;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 20px;
    }

    &:focus,
    &:active {
      border: none !important;
      outline: none !important;
    }
  }

  &:focus,
  &:active {
    border: none !important;
    outline: none !important;
  }
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
