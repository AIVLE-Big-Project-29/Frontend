import * as SC from './styled';

const GalleryTextBlock = ({ src, alt, title, subtitle }) => {
  return (
    <SC.GalleryTextBlock>
      <SC.GalleryItem className="gallery-item" src={src} alt={alt} />
      <SC.GalleryText>
        <SC.TextTitle>{title}</SC.TextTitle>
        <SC.TextSubtitle>{subtitle}</SC.TextSubtitle>
      </SC.GalleryText>
    </SC.GalleryTextBlock>
  );
};

export default GalleryTextBlock;
