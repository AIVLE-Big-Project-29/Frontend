import styled from 'styled-components';

export const EmptySection2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 12px;

  width: 848px;
  height: 16px;

  flex: none;
  order: 7;
  align-self: stretch;
  flex-grow: 0;
`;

export const Line = styled.div`
  width: 824px;
  height: 0px;

  border: 1px solid rgba(28, 28, 28, 0.05);

  /* Inside auto layout */
  flex: none; 
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
