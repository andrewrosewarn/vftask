import { useState } from "react";
import styled from "styled-components";
import Loader from "../common/Loader";

const Image = styled.img`
  max-width: 100%;
`;

const ImageLoader = styled.div`
  display: grid;
  place-items: center;
  min-height: 200px;
`;

type Props = {
  src: string;
};

export default function ProductImage({ src }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        hidden={!imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <ImageLoader>
          <Loader />
        </ImageLoader>
      )}
    </>
  );
}
