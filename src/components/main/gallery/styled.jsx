import styled from 'styled-components';
import { Fonts } from '../../../tokens/Font';
import '../../../tokens/font.css';

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
`;

export const Gallery = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;

  width: 1232.21px;
  height: 1957.88px;
  left: 103px;
  top: 387px;
`;

export const GalleryLeft = styled.div`
  width: 440px;
  height: 1774.89px;
`;

export const GalleryTextBlock = styled.div`
  // 갤러리 이미지 + 텍스트 컨테이너

  height: 920px;
  left: 0%;
  right: 0%;
  top: 0px;
`;

export const GalleryItem = styled.img`
  margin-bottom: 1rem;
  width: 100%;
  display: block;

  /* a */

  height: 567.78px;
  width: 430px;
  left: 0%;
  right: 0%;
`;

export const GalleryText = styled.div`
  height: 200px;
  width: 430px;
  left: 0%;
  right: 0%;
`;

export const TextTitle = styled.h2`
  width: 123.56px;
  height: 43px;
  margin: 0;
  margin-bottom: 10px;
  ${Fonts['font-semibold-32']}
  display: flex;
  align-items: center;
  color: #355342;
`;

export const TextSubtitle = styled.p`
  width: 416.92px;
  ${Fonts['font-regular-16']}
  height: 100px;
  margin: 0;
  display: flex;
  align-items: flex-start;
  color: #355342;
`;

export const GalleryRight = styled.div`
  width: 440px;
  height: 1774.89px;
`;
