import * as SC from './styled';

import img1 from '../../../assets/images/mainImg1.jpg';
import img2 from '../../../assets/images/mainImg2.jpg';
import img3 from '../../../assets/images/mainImg3.jpg';
import img4 from '../../../assets/images/mainImg4.jpg';
import GalleryTextBlock from './GalleryTextBlock';

const Gallery = () => {
  const galleryLeftItems = [
    {
      src: img1,
      alt: 'img1',
      title: '환경숲',
      subtitle:
        '환경숲은 도심의 바람길숲 기능을 수행하여 공기 순환을 촉진하고, 산단 및 해안 주변에 위치한 미세먼지 차단숲으로 오염원을 차단합니다​',
    },
    {
      src: img2,
      alt: 'img2',
      title: '생활숲',
      subtitle:
        '생활숲은 주민들의 일상생활에서 쉽게 접근할 수 있는 숲으로, 생활권 공원 및 녹지, 학교와 그 주변지역 등에 조성됩니다. 이 숲은 주민들에게 쾌적한 생활환경을 제공하고, 일상에서 자연을 접할 수 있는 공간으로서의 역할을 합니다​',
    },
  ];

  const galleryRightItems = [
    {
      src: img3,
      alt: 'img3',
      title: '생태숲',
      subtitle:
        '생태숲은 도시 내 생태적 기능을 보존하고 향상시키기 위한 숲으로, 다양한 생물종의 서식지 제공과 생태계 회복을 목적으로 합니다. 이 숲은 도시민들이 자연과 교감하며 생태적 가치를 체험할 수 있도록 조성됩니다',
    },
    {
      src: img4,
      alt: 'img3',
      title: '도시숲',
      subtitle:
        '도시숲은 도시 내 국민의 보건, 휴양, 정서 함양 등을 위해 조성되는 숲으로, 미세먼지 저감, 폭염 완화 등의 환경적 혜택을 제공합니다. 이는 도시민들의 삶의 질을 향상시키고, 녹지 네트워크를 통해 도심 속 자연공간을 확충하는 역할을 합니다',
    },
  ];

  return (
    <SC.Wrapper className="wrapper">
      <SC.Container className="container">
        <SC.Gallery className="gallery">
          <SC.GalleryLeft className="gallery-left">
            {galleryLeftItems.map((item, index) => (
              <GalleryTextBlock
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </SC.GalleryLeft>
          <SC.GalleryRight className="gallery-right">
            {galleryRightItems.map((item, index) => (
              <GalleryTextBlock
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </SC.GalleryRight>
        </SC.Gallery>
      </SC.Container>
    </SC.Wrapper>
  );
};

export default Gallery;
