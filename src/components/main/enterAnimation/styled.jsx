import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';
import '../../../tokens/font.css';

export const Wrapper = styled.div`
  color: white;
  position: fixed;
  background: black;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
`;

export const WrapperText = styled.div`
  // 문구 div

  position: absolute;
  width: 570px;
  height: 300px;
  /* left: 462px;
  top: 202px; */

  transform: translateY(55vh);
`;

export const MainText = styled.p`
  // 메인 문구

  /* position: absolute; */
  width: 570px;
  height: 228px;
  left: calc(50% - 517px / 2 + 0.5px);
  margin: 0;
  /* top: 202px; */

  ${Fonts['font-semibold-64']}
  text-align: center;

  background: linear-gradient(
    180deg,
    rgba(240, 255, 238, 0.8) 0%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;

export const SubText = styled.p`
  // 서브 문구

  /* position: absolute; */
  width: 570px;
  height: 78px;
  left: calc(50% - 517px / 2 + 0.5px);
  top: 470px;
  margin: 0;

  ${Fonts['font-semibold-30']}
  text-align: center;

  color: rgba(255, 255, 255, 0.8);

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Silder1 = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translateY(100%);
  z-index: 998;
  background: #79ac78;
`;

export const Silder2 = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translateY(100%);
  z-index: 997;
  background: #b0d9b1;
`;

export const Silder3 = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translateY(100%);
  z-index: 996;
  background: #d0e7d2;
`;
