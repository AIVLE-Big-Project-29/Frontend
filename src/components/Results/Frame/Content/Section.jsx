import { Fragment } from 'react';

import * as SC from './style';

const Section = ({ title, items, src, onClick, state }) => (
  <SC.Section1>
    <SC.IconImage2 src={src} alt="Icon 2" />
    <SC.SectionTitle>{title}</SC.SectionTitle>
    <SC.List onClick={onClick}>
      <SC.ListItem>
        {/* {items.map((item, index) => (
          <>
            {item.length > 15 ? 
            <p>{item[0]}</p>
            {state && (
              <SC.ListItem key={index}>
                <p>{item[1]}</p>
              </SC.ListItem>
            )} : <></>
            }
          </>
        ))} */}
        {items.map((item, index) => (
          <Fragment key={index}>
            {item.length < 15 ? (
              <>
                <SC.ListItem>
                  <p>{item[0]}</p>
                </SC.ListItem>
                {state && (
                  <>
                    <hr />
                    <SC.ListItem>
                      <p>{item[1]}</p>
                    </SC.ListItem>
                  </>
                )}
              </>
            ) : (
              <SC.ListItem>
                <p>{item}</p>
              </SC.ListItem>
            )}
          </Fragment>
        ))}
      </SC.ListItem>
    </SC.List>
  </SC.Section1>
);

export default Section;
