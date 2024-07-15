import * as SC from './style';

const Section = ({ title, items, src }) => (
  <SC.Section1>
    <SC.IconImage2 src={src} alt="Icon 2" />
    <SC.SectionTitle>{title}</SC.SectionTitle>
    <SC.List>
      {items.map((item, index) => (
        <SC.ListItem key={index}>{item}</SC.ListItem>
      ))}
    </SC.List>
  </SC.Section1>
);

export default Section;
