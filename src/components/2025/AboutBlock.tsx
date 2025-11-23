import {
  TitleWrapper,
  TitleLine,
  SectionTitle,
  BlueBlock,
  TextContent,
  TitleContainer,
} from "@/styles/HomeStyles";
import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 100px;
  height: auto;
  position: absolute;
  bottom: -20px;
  right: -100px;

  @media (max-width: 765px) {
    width: 70px;
    right: -70px;
    bottom: -20px;
  }
`;

const textContent = {
  part1: "knock knock～～ 聖誕節要到哩～！",
  part2:
    "和之前一樣 可以在下面的表單填你的名字/近況/地址，在聖誕節附近會有一張有寫字的明信片寄過去！",
  part3:
    "想要你寫下近況的理由是，在過著不同生活圈以後的日子，也很好奇你現在在做什麼、在煩惱什麼～ 所以也可以把這裡當成一個樹洞吧 想寫什麼就寫什麼 :)！",
  part4:
    "作為交換也想把自己的近況放上來，但最近實在是處在一個有點迷惘和沒自信的狀態，不知道該寫什麼比較適合這樣的日子 ...！ 如果你對我的近況有什麼好奇的也可以在下面的表單寫，我會一起回覆給你～～！",
  part5:
    "就這樣～！ 如果想要約吃飯也可以在下面寫！！但 12 月有一點忙、最快 1 月見吧 💛 聖誕快樂！",
};

export default function AboutBlock() {
  return (
    <section>
      <TitleWrapper>
        <TitleLine />
        <TitleContainer>
          <SectionTitle>
            \ 聖誕快樂{" "}
            <StyledImage
              src="/images/otter-gift.png"
              alt="otter gift"
              width={50}
              height={50}
            />{" "}
            /
          </SectionTitle>
          <BlueBlock />
        </TitleContainer>
        <TitleLine />
      </TitleWrapper>
      <TextContent>
        <p>{textContent.part1}</p>
        <br />
        <p>{textContent.part2}</p>
        <br />
        <p>{textContent.part3}</p>
        <br />
        <p>{textContent.part4}</p>
        <br />
        <p>{textContent.part5}</p>
      </TextContent>
    </section>
  );
}
