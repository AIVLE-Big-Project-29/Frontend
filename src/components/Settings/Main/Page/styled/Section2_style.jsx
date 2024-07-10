import styled from 'styled-components';
import { Fonts } from '../../../../../tokens/Font';

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 12px;

  width: 848px;
  height: 28px;

  border-radius: 8px;

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`;

export const SectionTitle2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 12px;

  width: 848px;
  height: 28px;

  border-radius: 8px;

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  ${Fonts['font-regular-18']};
`