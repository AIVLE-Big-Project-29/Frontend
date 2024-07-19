import styled from 'styled-components';
import { Fonts } from '../../../../tokens/Font';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 440px;
`;

export const Table = styled.table`
  padding: 0px;
  width: 100%;
  /* height: 440px; */
`;

export const Th = styled.th`
  box-sizing: border-box;
  padding: 8px 12px;
  gap: 4px;
  /* width: 214.5px;
  min-width: 80px;
  max-width: 220px; */
  height: 40px;
  min-height: 40px;
  border-bottom: 1px solid rgba(28, 28, 28, 0.2);
  border-radius: 0px;
  ${Fonts['font-regular-14']}
  color: rgba(28, 28, 28, 0.4);
  text-align: justify;
  accent-color: black;
`;

export const Td = styled.td`
  box-sizing: border-box;
  padding: 8px 12px;
  /* width: 214.5px;
  min-width: 80px;
  max-width: 220px; */
  height: 40px;
  min-height: 40px;
  border-bottom: 1px solid rgba(28, 28, 28, 0.05);
  ${Fonts['font-regular-14']}
  color: #1C1C1C;
  cursor: pointer;
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const PageNumber = styled.button`
  background-color: ${(props) =>
    props.isactive ? 'rgba(28, 28, 28, 0.05);' : '#fff'};
  color: black;
  padding: 4px 8px;
  gap: 4px;
  margin: 0 5px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background: #f7f9fb;
  }
  &:focus {
    border: none;
    outline: none;
  }
  border: none;
  outline: none;
`;

export const Tr = styled.tr`
  &:hover {
    background: #f7f9fb;
  }
`;
