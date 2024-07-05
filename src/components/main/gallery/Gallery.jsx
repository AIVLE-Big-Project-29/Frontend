import * as SC from './styled';

import img1 from '../../../assets/images/mainImg1.jpg';
import img2 from '../../../assets/images/mainImg2.jpg';
import img3 from '../../../assets/images/mainImg3.jpg';
import img4 from '../../../assets/images/mainImg4.jpg';
import GalleryTextBlock from './GalleryTextBlock';

const Gallery = () => {
  const galleryLeftItems = [
    { src: img1, alt: 'img1', title: '환경숲', subtitle: '환경숲은....' },
    { src: img2, alt: 'img2', title: '생활숲', subtitle: '생활숲은....' },
  ];

  const galleryRightItems = [
    { src: img3, alt: 'img3', title: '생태숲', subtitle: '생태숲은....' },
    { src: img4, alt: 'img3', title: '도시숲', subtitle: '도시숲은....' },
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
