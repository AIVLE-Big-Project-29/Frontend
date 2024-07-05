import React from 'react';
import Section from './Section';
import * as SC from './style';
import Footer from './Footer/Footer';

import img1 from '../../../../assets/images/1.svg';
import img2 from '../../../../assets/images/2.svg';
import img3 from '../../../../assets/images/3.svg';
import img4 from '../../../../assets/images/4.svg';

const DataRequirementContent = () => {
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
      <SC.Content>
        <SC.Header>
          <SC.IconImage1 src={img1} alt="Icon 1" />
          데이터 요구사항
        </SC.Header>
        <SC.Main>
          <SC.IconImage2 src={img2} alt="Icon 2" />
          <Section title="Data" items={dataItems} />
          <SC.IconImage2 src={img3} alt="Icon 3" />
          <Section title="Column names" items={columnNamesItems} />
          <SC.IconImage2 src={img4} alt="Icon 4" />
          <Section title="Explanation" items={explanationItems} />
        </SC.Main>
          <Footer />
      </SC.Content>
  );
};

export default DataRequirementContent;
