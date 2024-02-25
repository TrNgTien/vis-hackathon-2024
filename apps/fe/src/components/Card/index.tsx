import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 2px 4px 8px 4px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 14rem;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
`;

const imageStyle = {
  borderRadius: '16px',
};
const Card = (props: any) => {
  const { asset_link, id } = props;
  return (
    <Wrapper>
      <ImageWrapper>
        <Link href={`post/${id}`}>
          <Image
            alt="image"
            objectFit="cover"
            layout="fill"
            src={asset_link}
            style={imageStyle}
          />
        </Link>
      </ImageWrapper>
    </Wrapper>
  );
};
export default Card;
