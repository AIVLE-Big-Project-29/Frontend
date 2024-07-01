import React from 'react';
import * as SC from './style';

const Section = ({ title, items }) => (
  <SC.Section>
    <SC.SectionTitle>{title}</SC.SectionTitle>
    <SC.List>
      {items.map((item, index) => (
        <SC.ListItem key={index}>{item}</SC.ListItem>
      ))}
    </SC.List>
  </SC.Section>
);

const Footer = () => (
  <SC.Sidebar>
    <SC.SidebarContent>
      <SC.Button>Clear conversations</SC.Button>
      <SC.Button>Light mode</SC.Button>
      <SC.Button>My account</SC.Button>
      <SC.Button>Log out</SC.Button>
    </SC.SidebarContent>
  </SC.Sidebar>
);

const DataRequirement = () => {
  const dataItems = [
    '대기 오염 데이터.csv',
    '"Got any creative ideas for a 10-year-old\'s birthday?"',
    '"How do I make an HTTP request in Javascript?"',
    '"How do I make an HTTP request in Javascript?"',
    '"How do I make an HTTP request in Javascript?"'
  ];

  const columnNamesItems = [
    '열 이름 1, 열 이름 2, 열 이름 3, 열 이름 4',
    'Allows user to provide follow-up corrections.',
    'Trained to decline inappropriate requests.',
    'Trained to decline inappropriate requests.',
    'Trained to decline inappropriate requests.'
  ];

  const explanationItems = [
    '각 구역 대기 오염 데이터를 포함',
    'May occasionally produce harmful instructions or biased content.',
    'Limited knowledge of world and events after 2021.',
    'Limited knowledge of world and events after 2021.',
    'Limited knowledge of world and events after 2021.'
  ];

  return (
    <SC.Container>
      <Footer />
      <SC.Content>
        <SC.Header>데이터 요구사항</SC.Header>
        <SC.Main>
          <Section title="Data" items={dataItems} />
          <Section title="Column names" items={columnNamesItems} />
          <Section title="Explanation" items={explanationItems} />
        </SC.Main>
      </SC.Content>
    </SC.Container>
  );
};

export default DataRequirement;
