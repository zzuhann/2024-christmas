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
          src="/images/banner.webp"
          alt="Main photo"
          width={745}
          height={496}
          priority
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 745px"
        />
        <PhotoFrame />
        <PhotoCaption>2024 Christmas</PhotoCaption>
      </PhotoWrapper>
    </PhotoSection>
  );
}
