import React from 'react';
import * as EM1 from './styled/Empty_style1';
import * as EM2 from './styled/Empty_style2';
import * as SC from './styled/Profile_style';
import * as SC1 from './styled/Section1_style';
import * as SC2 from './styled/Section2_style';
import * as SC3 from './styled/Section3_style';
import * as SC4 from './styled/Section4_style';
import * as SC5 from './styled/Section5_style';
import * as SC6 from './styled/Section6_style';

import img2 from '../../../../assets/images/._..png';
import img from '../../../../assets/images/Section1.svg';

const Page = () => {
  return (
    <SC.Page>
      <SC.Profile>
        <SC.ProfileImage src={img2} alt="TH" />
        <div>
          <SC.ProfileText>김태희</SC.ProfileText>
          <SC.ProfileEmail>kim1998@naver.com</SC.ProfileEmail>
        </div>
      </SC.Profile>

      <SC1.Section1>
        <SC1.SectionTitle1>Name</SC1.SectionTitle1>
        <SC1.SectionContentWrapper1>
          <SC1.SectionContent1>태희</SC1.SectionContent1>
        </SC1.SectionContentWrapper1>
      </SC1.Section1>

      <EM1.EmptySection1>
        <EM1.Line/>
      </EM1.EmptySection1>

      <SC2.Section2>
        <SC2.SectionTitle2>Account security</SC2.SectionTitle2>
      </SC2.Section2>

      <SC3.Section3>
        <SC3.SectionSubtitle3>Email</SC3.SectionSubtitle3>
        <SC3.SectionContentWrapper>
          <SC3.SectionContent3>kim1998@naver.com</SC3.SectionContent3>
        </SC3.SectionContentWrapper>
      </SC3.Section3>

      <SC4.Section4>
        <SC4.SectionSubtitle4>Password</SC4.SectionSubtitle4>
        <SC4.SectionContentWrapper>
          <SC4.PasswordField>Set a permanent password to login to your account.</SC4.PasswordField>
          <SC4.IconButton src={img} alt="Icon" />
        </SC4.SectionContentWrapper>
      </SC4.Section4>

      <EM2.EmptySection2>
        <EM2.Line/>
      </EM2.EmptySection2>

      <SC5.Section5>
        <SC5.SectionTitle5>Log out of all devices</SC5.SectionTitle5>
        <SC5.SectionContent5>Log out of all other active sessions on other devices besides this one.</SC5.SectionContent5>
        <SC5.IconButton src={img} alt="Icon" />
      </SC5.Section5>

      <SC6.Section6>
        <SC6.SectionTitle6>Delete my account</SC6.SectionTitle6>
        <SC6.SectionContent6>Permanently delete the account and remove access from all devices.</SC6.SectionContent6>
        <SC6.IconButton src={img} alt="Icon" />
      </SC6.Section6>

    </SC.Page>
  );
};

export default Page;
