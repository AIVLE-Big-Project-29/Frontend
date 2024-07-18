import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './AgreementPage_style';

const AgreementPage = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState({
    termsOfService: false,
    privacyPolicy: false,
    emailConsent: false,
  });

  const navigate = useNavigate();

  const handleAllCheckChange = (event) => {
    const { checked } = event.target;
    setAllChecked(checked);
    setIndividualChecks({
      termsOfService: checked,
      privacyPolicy: checked,
      emailConsent: checked,
    });
  };

  const handleIndividualCheckChange = (event) => {
    const { name, checked } = event.target;
    setIndividualChecks({
      ...individualChecks,
      [name]: checked,
    });
    setAllChecked(checked && Object.values(individualChecks).every(value => value === checked));
  };

  const handleNextClick = () => {
    if (individualChecks.termsOfService && individualChecks.privacyPolicy) {
      navigate('/signup');
    }
  };

  return (
    <SC.AgreementPageContainer>
      <SC.AgreementContainer>
        <SC.AgreementTitle>GreenCity</SC.AgreementTitle>
        <SC.AgreementSection>
          <SC.AgreementLabel>
            <SC.AgreementCheckbox
              type="checkbox"
              checked={allChecked}
              onChange={handleAllCheckChange}
            />
            전체 동의하기
          </SC.AgreementLabel>
          <p>설명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이메일 동의(선택) 동의를 포함합니다.</p>
        </SC.AgreementSection>

        <SC.AgreementSection>
          <SC.AgreementLabel>
            <SC.AgreementCheckbox
              type="checkbox"
              name="termsOfService"
              checked={individualChecks.termsOfService}
              onChange={handleIndividualCheckChange}
            />
            [필수] GreenCity 이용약관
          </SC.AgreementLabel>
          <SC.AgreementTextarea readOnly value="여러분을 환영합니다. GreenCity 서비스를 이용해 주셔서 감사합니다. 본 약관은 다양한 GreenCity 서비스의 이용과 관련하여 GreenCity가 이를 이용하는 사용자와의 관계를 규정합니다. 자세한 내용은 약관 전문을 확인해주세요."></SC.AgreementTextarea>
        </SC.AgreementSection>

        <SC.AgreementSection>
          <SC.AgreementLabel>
            <SC.AgreementCheckbox
              type="checkbox"
              name="privacyPolicy"
              checked={individualChecks.privacyPolicy}
              onChange={handleIndividualCheckChange}
            />
            [필수] 개인정보 수집 및 이용
          </SC.AgreementLabel>
          <SC.AgreementTextarea readOnly value="개인정보보호법에 따라 GreenCity 회원가입 신청 시 수집하는 개인정보의 항목, 수집 및 이용 목적, 보유 및 이용 기간 등을 안내드립니다. 자세한 내용은 개인정보 처리방침 전문을 확인해주세요."></SC.AgreementTextarea>
        </SC.AgreementSection>

        <SC.AgreementSection>
          <SC.AgreementLabel>
            <SC.AgreementCheckbox
              type="checkbox"
              name="emailConsent"
              checked={individualChecks.emailConsent}
              onChange={handleIndividualCheckChange}
            />
            [선택] 이메일 동의 수신
          </SC.AgreementLabel>
          <SC.AgreementTextarea readOnly value="GreenCity의 이벤트 및 혜택 정보를 이메일로 수신하실 수 있습니다. 동의하지 않으셔도 서비스 이용은 가능합니다."></SC.AgreementTextarea>
        </SC.AgreementSection>

        <SC.AgreementButton type="button" disabled={!individualChecks.termsOfService || !individualChecks.privacyPolicy} onClick={handleNextClick}>
          다음
        </SC.AgreementButton>
      </SC.AgreementContainer>
    </SC.AgreementPageContainer>
  );
};

export default AgreementPage;
