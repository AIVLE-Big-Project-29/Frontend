import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as SC from './styled';

gsap.registerPlugin(ScrollTrigger);

const EnterAnimation = () => {
  // 입장 애니메이션 구현
  const wrapText = useRef();
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();
  const wrap = useRef();

  useEffect(() => {
    gsap.to(wrapText.current, {
      y: 0,
      duration: 2,
    });
    gsap.to(wrap.current, {
      y: -970,
      delay: 2.3,
      duration: 1.5,
    });
    gsap.to(slider1.current, {
      y: -970,
      delay: 2.3,
      duration: 1.5,
    });
    gsap.to(slider2.current, {
      y: -970,
      delay: 2.4,
      duration: 1.5,
    });
    gsap.to(slider3.current, {
      y: -970,
      delay: 2.45,
      duration: 1.5,
    });
  }, []);

  return (
    <>
      {/* 애니메이션 구현 */}
      <SC.Wrapper ref={wrap}>
        <SC.WrapperText ref={wrapText}>
          <SC.MainText>더 푸르고 건강한 도시, 도시숲이 만듭니다.</SC.MainText>
          <SC.SubText>도심 속 생태 공간, 삶의 질을 변화시킵니다.</SC.SubText>
        </SC.WrapperText>
      </SC.Wrapper>
      <SC.Silder1 ref={slider1} />
      <SC.Silder2 ref={slider2} />
      <SC.Silder3 ref={slider3} />
    </>
  );
};

export default EnterAnimation;
