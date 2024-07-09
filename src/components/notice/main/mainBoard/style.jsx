import styled from 'styled-components';
import { Fonts } from '../../../../tokens/Font';

export const MainBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: calc(100% - 50vw / 2);
  height: 536px;
  left: 295px;
  top: 140px;
`;

export const BoardHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 0;
  gap: 16px;
  width: 100%;
  height: 44px;
  background: #f7f9fb;
  border-radius: 8px;
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 7px;
  gap: 8px;
  width: 100%;
  height: 28px;
  border-radius: 8px;
`;

export const HeaderBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  transform: scale(1);
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.3);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const BtnIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 20px;
  height: 20px;
  border-radius: 8px;
`;

export const HeaderIcon = styled.img``;
