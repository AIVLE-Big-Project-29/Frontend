import React from 'react';
import * as SC from './style';

const Section = ({ title, items }) => (
  <SC.Section1>
    <SC.SectionTitle>{title}</SC.SectionTitle>
    <SC.List>
      {items.map((item, index) => (
        <SC.ListItem key={index}>{item}</SC.ListItem>
      ))}
    </SC.List>
  </SC.Section1>
);

export default Section;
