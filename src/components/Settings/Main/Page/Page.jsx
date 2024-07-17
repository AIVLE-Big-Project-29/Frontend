import React, { useState, useRef } from 'react';
import * as EM1 from './styled/Empty_style1';
import * as EM2 from './styled/Empty_style2';
import * as SC from './styled/Profile_style';
import * as SC1 from './styled/Section1_style';
import * as SC2 from './styled/Section2_style';
import * as SC3 from './styled/Section3_style';
import * as SC4 from './styled/Section4_style';
import * as SC5 from './styled/Section5_style';
import * as SC6 from './styled/Section6_style';
import { handleLogout } from '../../../logout/Logout'; // 로그아웃 함수 가져오기
import ChangePasswordModal from './ChangePassword';

import img from '../../../../assets/images/Section1.svg'; // 기본 아이콘 이미지 경로

const Page = () => {
  const [profileImage, setProfileImage] = useState(''); // 프로필 이미지 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const fileInputRef = useRef(null); // 파일 입력을 위한 ref

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // 읽은 이미지를 상태에 저장
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 읽기
    }
  };

  const handleProfileImageClick = () => {
    fileInputRef.current.click(); // 프로필 이미지를 클릭했을 때 파일 입력 클릭
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SC.Page>
      <SC.Profile>
        <SC.ProfileImage
          src={profileImage || img} // 기본 이미지와 선택한 이미지
          alt="Profile"
          onClick={handleProfileImageClick} // 이미지 클릭 시 파일 선택
        />
        <div>
          <SC.ProfileText>김태희</SC.ProfileText>
          <SC.ProfileEmail>kim1998@naver.com</SC.ProfileEmail>
        </div>
      </SC.Profile>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef} // ref 연결
        style={{ display: 'none' }} // 파일 입력 숨김
        onChange={handleImageChange}
      />

      <SC1.Section1>
        <SC1.SectionTitle1>Name</SC1.SectionTitle1>
        <SC1.SectionContentWrapper1>
          <SC1.SectionContent1>태희</SC1.SectionContent1>
        </SC1.SectionContentWrapper1>
      </SC1.Section1>

      <EM1.EmptySection1>
        <EM1.Line />
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
          <SC4.IconButton src={img} alt="Icon" onClick={openModal} />
        </SC4.SectionContentWrapper>
      </SC4.Section4>

      <ChangePasswordModal isOpen={isModalOpen} onClose={closeModal} /> {/* 모달 추가 */}

      <EM2.EmptySection2>
        <EM2.Line />
      </EM2.EmptySection2>

      <SC5.Section5>
        <SC5.SectionTitle5 onClick={handleLogout}>Log out of all devices</SC5.SectionTitle5>
        <SC5.SectionContent5>Log out of all other active sessions on other devices besides this one.</SC5.SectionContent5>
        <SC5.IconButton src={img} alt="Icon" />
      </SC5.Section5>

      <SC6.Section6>
        <SC6.SectionTitle6>Delete my account</SC6.SectionTitle6>
        <SC6.SectionContent6>Permanently delete the account and remove access from all devices.</SC6.SectionContent6>
      </SC6.Section6>
    </SC.Page>
  );
};

export default Page;
