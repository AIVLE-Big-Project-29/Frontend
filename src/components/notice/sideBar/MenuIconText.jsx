import * as SC from './style';

const MenuIconText = ({ src, txt }) => {
  return (
    <>
      <SC.MenuIconText>
        <SC.MenuIconWrapper>
          <SC.MenuIcon>
            <SC.MainIcon src={src} alt="메인 아이콘" />
          </SC.MenuIcon>
        </SC.MenuIconWrapper>
        <SC.MenuTextWrapper>
          <SC.MenuText>{txt}</SC.MenuText>
        </SC.MenuTextWrapper>
      </SC.MenuIconText>
    </>
  );
};

export default MenuIconText;
