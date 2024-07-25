import { useState } from 'react';

import Section from './Section';
import * as SC from './style';
import Footer from './Footer/Footer';
import img1 from '../../../../assets/images/GreenCityBig.png';
import img2 from '../../../../assets/images/2.svg';
import img3 from '../../../../assets/images/3.svg';
import img4 from '../../../../assets/images/4.svg';

const DataRequirementContent = ({ isUpload }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const dataItems = [
    '환경데이터',
    '날씨 데이터',
    '토지데이터',
    '인구 소득 데이터',
  ];

  const columnNamesItems = [
    [
      '환경 데이터',
      `
      BOD (Biochemical Oxygen Demand): 생물학적 산소 요구량
      COD (Chemical Oxygen Demand): 화학적 산소 요구량
      TOC (Total Organic Carbon): 총 유기 탄소
      SS (Suspended Solids): 부유물질
      DO (Dissolved Oxygen): 용존 산소
      T-P (Total Phosphorus): 총 인
      총대장균군 (Total Coliforms): 대장균군 총량
      분원성대장균군 (Fecal Coliforms): 분원성 대장균군
      암모니아성질소 (Ammonia Nitrogen): 암모니아성 질소
      질산성질소 (Nitrate Nitrogen): 질산성 질소
      용존총질소 (Dissolved Total Nitrogen): 용존 총 질소
      인산염인 (Phosphate Phosphorus): 인산염 인
      용존총인 (Dissolved Total Phosphorus): 용존 총 인
      클로로필A (Chlorophyll A): 클로로필 A
      pH 분류 (pH Classification): 수소이온 농도
      수온 분류 (Water Temperature Classification): 수온
      전도 분류 (Conductivity Classification): 전기 전도도
      미세먼지 (PM-2.5): 지름 2.5 마이크로미터 이하의 미세먼지
      미세먼지 (PM-10): 지름 10 마이크로미터 이하의 미세먼지
      오존 (Ozone): 대기 중 오존 농도
      일산화탄소 (Carbon Monoxide): 대기 중 일산화탄소 농도
      일산화질소 (Nitric Oxide): 대기 중 일산화질소 농도
      이산화황 (Sulfur Dioxide): 대기 중 이산화황 농도
      `,
    ],
    [
      '날씨 데이터',
      `
      평균 기온 (Average Temperature): 일정 기간 동안의 평균 기온
      최고 기온 (Maximum Temperature): 일정 기간 동안의 최고 기온
      최저 기온 (Minimum Temperature): 일정 기간 동안의 최저 기온
      강수 총계 (Total Precipitation): 일정 기간 동안의 총 강수량
      평균 풍속 (Average Wind Speed): 일정 기간 동안의 평균 풍속
      최대 순간풍속 (Maximum Instantaneous Wind Speed): 일정 기간 동안의 최대 순간 풍속
      `,
    ],
    [
      '토지 데이터',
      `토지 데이터
      면적 (Area): 총 면적
      전 (Field): 농경지 면적
      답 (Paddy Field): 논 면적
      과수원 (Orchard): 과수원 면적
      목장용지 (Pasture Land): 목장용지 면적
      임야 (Forest): 산림 면적
      염전 (Salt Field): 염전 면적
      대 (Residential Area): 주거지 면적
      공장용지 (Factory Site): 공장용지 면적
      학교용지 (School Site): 학교용지 면적
      주차장 (Parking Lot): 주차장 면적
      주유소용지 (Gas Station Site): 주유소용지 면적
      창고용지 (Warehouse Site): 창고용지 면적
      도로 (Road): 도로 면적
      철도용지 (Railway Site): 철도용지 면적
      하천 (River): 하천 면적
      제방 (Embankment): 제방 면적
      구거 (Ditch): 구거 면적
      유지 (Reservoir): 저수지 면적
      양어장 (Fish Farm): 양어장 면적
      수도용지 (Water Supply Site): 수도용지 면적
      공원 (Park): 공원 면적
      체육용지 (Sports Facility Site): 체육용지 면적
      유원지 (Amusement Park): 유원지 면적
      종교용지 (Religious Site): 종교용지 면적
      사적지 (Historic Site): 사적지 면적
      묘지 (Cemetery): 묘지 면적
      잡종지 (Miscellaneous Land): 잡종지 면적
      광천지 (Hot Spring Site): 광천지 면적
      `,
    ],
    [
      '인구 소득 데이터',
      `
      세대수 (Number of Households): 지역 내 총 세대수
      등록 인구수 (Total Registered Population): 지역 내 총 등록 인구수
      등록 인구수 남 (Registered Population Male): 지역 내 등록 인구수 중 남성
      등록 인구수 여 (Registered Population Female): 지역 내 등록 인구수 중 여성
      한국인 (Korean Nationals): 지역 내 한국인 수
      한국인 남 (Korean Nationals Male): 지역 내 한국인 남성 수
      한국인 여 (Korean Nationals Female): 지역 내 한국인 여성 수
      외국인 (Foreign Nationals): 지역 내 외국인 수
      외국인 남 (Foreign Nationals Male): 지역 내 외국인 남성 수
      외국인 여 (Foreign Nationals Female): 지역 내 외국인 여성 수
      65세 이상 고령자 (Elderly Population over 65): 65세 이상 인구 수
      소득 (Income): 지역 내 평균 소득
    `,
    ],
  ];

  const explanationItems = [
    '수질의 질을 나타내는 다양한 지표 데이터와 대기의 오염 정도를 나타내는 지표 데이터를 포함합니다',
    '기온, 풍속, 강수량 정보를 포함합니다',
    '한국의 토지지목 분류 28가지와 각 지목의 면적 정보를 포함합니다',
    '지역별 인구 통계 및 소득 정보를 포함합니다',
  ];

  // 데이터 설명을 클릭하면 상세 설명이 나오도록 만드는 함수
  const dataClickHandler = () => {
    setIsDisplay((prev) => !prev);
  };

  return (
    <>
      <SC.ContentWrapper>
        <SC.Header>
          <SC.IconImage1 src={img1} alt="Icon 1" />
          <SC.IconTitle>도시숲 분석</SC.IconTitle>
        </SC.Header>
        <SC.Main>
          {/* <Section title="Data" items={dataItems} src={img2} /> */}
          <Section
            title="Data & Column names"
            items={columnNamesItems}
            src={img3}
            onClick={dataClickHandler}
            state={isDisplay}
          />
          <Section title="Explanation" items={explanationItems} src={img4} />
        </SC.Main>
      </SC.ContentWrapper>
      <Footer isUpload={isUpload} />
    </>
  );
};

export default DataRequirementContent;
