'use client'

import Image from "next/image";
import {
  Container,
  PhotoSection,
  PhotoWrapper,
  PhotoFrame,
  PhotoCaption,
  TitleWrapper,
  TitleLine,
  SectionTitle,
  BlueBlock,
  TextContent,
  SeasonBlock,
  SeasonTitle,
  SeasonContent,
  SeasonText,
  ContactForm,
  FormGroup,
  SubmitButton,
  TitleContainer,
  SeasonImageWrapper,
  SeasonTextContainer,
  SeasonImageFrame,
  SeasonTextBlock
} from "@/styles/HomeStyles";
import { seasonsData } from "./constants";

export default function Home() {
  return (
    <>
      <div className="floating-lights">
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
      </div>
      <Container>
        {/* 第一块：照片区域 */}
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

        {/* 第二块：关于区域 */}
        <section>
          <TitleWrapper>
            <TitleLine />
            <TitleContainer>
              <SectionTitle>聖誕節明信片</SectionTitle>
              <BlueBlock />
            </TitleContainer>
            <TitleLine />
          </TitleWrapper>
          <TextContent>
            <p>
              聖誕明信片從大一到現在已經過了大概 6 年啦（雖然中間幾年有斷掉了），每一年都想和很久沒見的朋友有一個藉口、用文字或是訊息的方式有一份連結。作為一年的結束與即將進到下一年的聖誕節，在這樣冬天的日子裡收到卡片，也許可以作為一種幸福的來源、一種結束與開始。<br/>
              <br/>
              今年用網站的方式和大家相見！<br/>
              <br/>
              形式是最底下的表單可以填寫你的名字、你的近況、地址<br/>
              在聖誕節附近會有一張有寫字的明信片寄到你那邊<br/>
              <br/>
              想要你寫下近況的理由是，在過著不同生活圈以後的日子，可以更了解你在做什麼、<br/>
              這樣寫卡片的時候，可以寫下更多內容：）<br/>
              （不然會寫得很普通！哈哈哈）<br/>
              <br/>
              作為交換，也會放上我這一年的近況<br/>
              <br/>
              如果有什麼近況想要直接面對面交流，也可以在下面寫<br/>
              可以一起吃飯聊個天～！</p>
          </TextContent>
        </section>

        {/* 第三块：Photo Dump 区域 */}
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
                  <Image
                    src={season.image}
                    alt={season.title}
                    width={300}
                    height={300}
                  />
                  <SeasonImageFrame />
                </SeasonImageWrapper>
                <SeasonTextContainer>
                  <SeasonTitle reverse={!season.reverse}>{season.title}</SeasonTitle>
                  <SeasonText>
                    <SeasonTextBlock />
                    <p dangerouslySetInnerHTML={{ __html: season.content }} />
                  </SeasonText>
                </SeasonTextContainer>
              </SeasonContent>
            </SeasonBlock>
          ))}
        </section>

        {/* 第四块：联系表单 */}
        <section>
          <TitleWrapper>
            <TitleLine />
            <TitleContainer>
              <SectionTitle>明信片要送到 ... ?</SectionTitle>
              <BlueBlock />
            </TitleContainer>
            <TitleLine />
          </TitleWrapper>
          
          <ContactForm>
            <FormGroup>
              <label htmlFor="name">
                你的名字
                <span className="required">*</span>
              </label>
              <input type="text" id="name" name="name" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">信箱</label>
              <input type="email" id="email" name="email" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="address">
                地址（可以寫面交）
                <span className="required">*</span>
              </label>
              <input type="text" id="address" name="address" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="status">你的近况</label>
              <div className="description">
                如果生活圈比較遠，剛好又沒有寫近況的話，怕寫的很官方、可能就不會寄了哦 &gt;&lt;!
              </div>
              <textarea id="status" name="status"></textarea>
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">想額外說的話</label>
              <textarea id="message" name="message"></textarea>
            </FormGroup>
            <SubmitButton type="submit">送出</SubmitButton>
          </ContactForm>
        </section>
      </Container>
    </>
  );
}
