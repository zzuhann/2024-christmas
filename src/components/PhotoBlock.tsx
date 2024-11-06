import Image from "next/image";
import {
  PhotoSection,
  PhotoWrapper,
  PhotoFrame,
  PhotoCaption,
} from "@/styles/HomeStyles";

export default function PhotoBlock() {
  return (
    <PhotoSection>
      <PhotoWrapper>
        <Image
          src="/images/banner.jpg"
          alt="Main photo"
          width={745}
          height={496}
          priority
        />
        <PhotoFrame />
        <PhotoCaption>2024 Christmas</PhotoCaption>
      </PhotoWrapper>
    </PhotoSection>
  );
}
