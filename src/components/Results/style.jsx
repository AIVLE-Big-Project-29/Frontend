import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
`;

export const SidebarContent = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 200px);
  margin-left: 200px;
`;

export const Header = styled.h1`
  margin-top: 0px;
  text-align: center;
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding-right: 40px; /* Increased padding to move sections to the right */
  margin: 20px auto;
`;

export const Section = styled.section`
  width: 28%; /* Width reduced to 28% to center sections */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2%; /* Added margin to create space between sections */
`;

export const SectionTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: center;
  position: relative; /* Added for positioning */
  top: -10px; /* Adjusted to move title slightly up */
  right: -10px; /* Adjusted to move title slightly to the right */
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  width: calc(50% - 100px);
  margin-left: 200px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
  border-radius: 12px; /* Rounded corners added */
  position: fixed;
  bottom: 20px; /* Bottom margin added */
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Fonts = {
  'font-regular-14': {
    fontSize: '14px',
    fintFamily: 'SF Pro Text',
    fontWeight: '400',
    LineHeight: '20px',
  },
  'font-regular-18': {
    fontSize: '18px',
    fintFamily: 'SF Pro Text',
    fontWeight: '400',
    LineHeight: '20px',
  },
  'font-regular-24': {
    fontSize: '24px',
    fintFamily: 'SF Pro Text',
    fontWeight: '600',
    LineHeight: '32px',
  },
}