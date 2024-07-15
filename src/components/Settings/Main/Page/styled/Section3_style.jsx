import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';
export const Section3 = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  gap: 16px;

  width: 848px;
  height: 36px;

  border-radius: 8px;

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`;

export const SectionSubtitle3 = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 12px;

  flex: none;
  order: 0;
  flex-grow: 0;
  ${Fonts['font-regular-14']};
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const SectionContent3 = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  ${Fonts['font-rgba-14']};
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;
