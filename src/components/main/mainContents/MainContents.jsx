import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import * as SC from './styled';
import mainImg from '../../../assets/images/mainBack.png';
import Gallery from '../gallery/Gallery';
import Footer from '../Footer/Footer';
import NavSecond from './NavSecond';
import logo from '../../../assets/images/GreenCitynotext.png';
import NavSidebar from '../../Results/Sidebar/NavSidebar';

gsap.registerPlugin(ScrollTrigger);

const MainContents = () => {
  // 스크롤 애니메이션 구현
  useEffect(() => {
    const scrollEl = document.querySelector('.wrapper');

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    // GSAP 애니메이션 설정
    gsap.fromTo(
      '.hero-section',
      { opacity: 1 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.hero-section',
          scroller: scrollEl,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // MainTitle과 MainImg 애니메이션 설정
    gsap.fromTo(
      '.main-title',
      { y: 0 },
      {
        y: -200,
        scrollTrigger: {
          trigger: '.hero-section',
          scroller: scrollEl,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.hero-img',
      { y: 0, opacity: 1 },
      {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-section',
          scroller: scrollEl,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    const itemsL = document.querySelectorAll('.gallery-left .gallery-item');
    itemsL.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -400 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            scroller: scrollEl,
            start: '-850px',
            end: '-100px',
            scrub: true,
          },
        }
      );
    });

    const itemsR = document.querySelectorAll('.gallery-right .gallery-item');
    itemsR.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 400 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            scroller: scrollEl,
            start: '-850px',
            end: '-100px',
            scrub: true,
          },
        }
      );
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <SC.Wrapper className="wrapper">
      <SC.Contents className="contents">
        <SC.Header className="hero-section">
          {/* navbar */}
          {/* <SC.HeaderWrapper>
            <SC.Nav>
              <SC.navMenu>도시숲 분석</SC.navMenu>
              <SC.navMenu>공지사항</SC.navMenu>
              <SC.navMenu>마이 프로필</SC.navMenu>
            </SC.Nav>
          </SC.HeaderWrapper> */}

          {/* 메인 화면 */}
          <SC.MainImg
            data-speed=".6"
            src={mainImg}
            className="hero-img"
            alt="hero image"
          ></SC.MainImg>
          <SC.Container className="container">
            <SC.MainHeader data-speed=".8" className="main-header">
              <SC.MainTitle className="main-title">
                GreenCity Project
              </SC.MainTitle>
            </SC.MainHeader>
          </SC.Container>
        </SC.Header>
        <SC.LogoContainer>
          <SC.Logo src={logo} alt="로고" />
        </SC.LogoContainer>
        <NavSidebar />
        {/* 스크롤 시작 */}
        <Gallery />
        {/* footer */}
        <Footer />
      </SC.Contents>
    </SC.Wrapper>
  );
};

export default MainContents;
