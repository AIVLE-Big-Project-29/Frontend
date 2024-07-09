import styled from 'styled-components';
import { Fonts } from '../../../../tokens/Font';

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  gap: 312px;
  position: absolute;
  height: 68px;
  left: 244px;
  right: 0px;
  top: 0px;
  border-bottom: 1px solid rgba(28, 28, 28, 0.1);
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 8px;
  width: 68px;
  height: 20px;
  border-radius: 8px;
`;

export const HeaderText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 56px;
  height: 20px;
  margin: 0;
  border-radius: 8px;
`;

export const HeaderSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  margin: 0;
  width: 260px;
  height: 28px;
`;

export const HeaderSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: end;
  padding: 4px 8px;
  gap: 8px;
  width: 160px;
  height: 28px;
  background: linear-gradient(
      0deg,
      rgba(53, 83, 66, 0.05),
      rgba(53, 83, 66, 0.05)
    ),
    rgba(28, 28, 28, 0.05);
  border-radius: 8px;
`;

export const SearchIconInput = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 0px;
  gap: 4px;
  width: 160px;
  height: 30px;
  border-radius: 8px;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 0px;
  gap: 4px;
  width: 155px;
  height: 20px;
  border-radius: 8px;
`;

export const SearchIcon = styled.img``;

export const SearchInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 130px;
  height: 20px;
  border-radius: 8px;
  border: 0;
  background: transparent;
  border: none;
  outline: none;
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  padding: 0px;
  gap: 8px;
  width: 64px;
  height: 28px;
  border-radius: 8px;
`;

export const IconBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 4px;
  isolation: isolate;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  transform: scale(1);
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const IconSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  width: 20px;
  height: 20px;
  border-radius: 8px;
`;

export const SunIcon = styled.img``;

export const SunFill = styled.img`
  position: relative;
  left: -14px;
  top: 1px;
`;
