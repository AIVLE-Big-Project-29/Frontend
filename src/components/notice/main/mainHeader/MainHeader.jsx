import * as SC from './style';

import search from '../../../../assets/images/search.svg';
import sun from '../../../../assets/images/sun.svg';
import fill from '../../../../assets/images/sun-fill.svg';
import clock from '../../../../assets/images/clock.svg';
import clockFill from '../../../../assets/images/clock-fill.svg';

const MainHeader = () => {
  return (
    <SC.Header>
      <SC.HeaderTextContainer>
        <SC.HeaderText>공지사항</SC.HeaderText>
      </SC.HeaderTextContainer>
      <SC.HeaderSide>
        <SC.HeaderSearchContainer>
          <SC.SearchIconInput>
            <SC.SearchIconContainer>
              <SC.SearchIcon src={search} alt="찾기 아이콘" />
              <SC.SearchInput placeholder="Search" />
            </SC.SearchIconContainer>
          </SC.SearchIconInput>
        </SC.HeaderSearchContainer>
        <SC.IconGroup>
          <SC.IconBtn>
            <SC.IconSet>
              <SC.SunIcon src={sun} alt="sun" />
              <SC.SunFill src={fill} alt="sun-fill" />
            </SC.IconSet>
          </SC.IconBtn>
          <SC.IconBtn>
            <SC.IconSet>
              <SC.SunIcon src={clock} alt="sun" />
              <SC.SunFill src={clockFill} alt="sun-fill" />
            </SC.IconSet>
          </SC.IconBtn>
        </SC.IconGroup>
      </SC.HeaderSide>
    </SC.Header>
  );
};

export default MainHeader;
