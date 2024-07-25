import styled from 'styled-components';

export const FContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  height: 100vh; /* 전체 높이를 차지 */
  width: 100%; /* 전체 너비를 차지 */
  background-color: #ffffff; /* 전체 배경색 설정 */
`;

export const Frame1Container = styled.div`
  height: 70%; /* Frame1의 높이를 70%로 설정 */
  width: 100%; /* 전체 너비를 차지 */
  background-color: #ffffff; /* Frame1 배경색 설정 */
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto; /* 콘텐츠가 많을 경우 스크롤 가능하도록 설정 */
`;

export const Frame2Container = styled.div`
  height: 30%; /* Frame2의 높이를 30%로 설정 */
  width: 100%; /* 전체 너비를 차지 */
  background-color: #ffffff; /* Frame2 배경색 설정 */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

export const HeaderWrapper2 = styled.div`
  // 헤더 안 div
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 36px;
  right: 20px;
  align-items: flex-end;
  z-index: 100;
  &:hover :active :focus {
    outline: none;
    border: none;
  }
`;

export const ToggleWrapper = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  position: relative;

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
    right: 10px;
    top: 0px;
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

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 회색 배경
  z-index: 99; // 메뉴보다 뒤에 배치하여 클릭이 가능하게 설정
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  display: ${(props) => (props.visible ? 'auto' : 'none')};
  transition: background-color 0.3s;
`;

export const MenuToggleWrapper = styled.div`
  padding: 10px; /* 여백 추가 */
  cursor: pointer;
`;
