import { seasonsData } from "@/app/constants";
import ParallaxImage from "./ParallaxImage";
import {
  TitleWrapper,
  TitleLine,
  SectionTitle,
  BlueBlock,
  SeasonBlock,
  SeasonContent,
  SeasonImageWrapper,
  SeasonTextContainer,
  SeasonTitle,
  SeasonText,
  SeasonImageFrame,
  SeasonTextBlock,
  TitleContainer,
} from "@/styles/HomeStyles";

export default function SeasonsBlock() {
  return (
    <section>
      <TitleWrapper>
        <TitleLine />
        <TitleContainer>
          <SectionTitle>2024 與我</SectionTitle>
          <BlueBlock />
        </TitleContainer>
        <TitleLine />
      </TitleWrapper>

      {seasonsData.map((season) => (
        <SeasonBlock key={season.id}>
          <SeasonContent reverse={season.reverse}>
            <SeasonImageWrapper>
              <ParallaxImage
                src={season.image}
                alt={season.title}
                width={300}
                height={300}
              />
              <SeasonImageFrame />
            </SeasonImageWrapper>
            <SeasonTextContainer>
              <SeasonTitle reverse={!season.reverse}>
                {season.title}
              </SeasonTitle>
              <SeasonText>
                <SeasonTextBlock />
                <p dangerouslySetInnerHTML={{ __html: season.content }} />
              </SeasonText>
            </SeasonTextContainer>
          </SeasonContent>
        </SeasonBlock>
      ))}
    </section>
  );
}
