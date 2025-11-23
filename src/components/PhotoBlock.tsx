import Image from "next/image";
import {
  PhotoSection,
  PhotoWrapper,
  PhotoFrame,
  PhotoCaption,
} from "@/styles/HomeStyles";
import styled from "styled-components";

const StyledImage = styled(Image)<{ $objectPosition: string }>`
  object-position: ${(props) => props.$objectPosition};
`;

type PhotoBlockProps = {
  src: string;
  year: string;
  objectPosition?: string;
}

export default function PhotoBlock({ src, year, objectPosition = 'center' }: PhotoBlockProps) {
  return (
    <PhotoSection>
      <PhotoWrapper>
        <StyledImage
          src={src}
          alt="Main photo"
          width={745}
          height={496}
          priority
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 745px"
          $objectPosition={objectPosition}
        />
        <PhotoFrame />
        <PhotoCaption>{year} Christmas</PhotoCaption>
      </PhotoWrapper>
    </PhotoSection>
  );
}
