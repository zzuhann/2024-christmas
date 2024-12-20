import {
  TitleWrapper,
  TitleLine,
  SectionTitle,
  BlueBlock,
  TextContent,
  TitleContainer,
} from "@/styles/HomeStyles";

const textContent = {
  part1: `聖誕明信片從大一到現在已經過了大概 6 年啦（雖然中間幾年有斷掉了），每一年都想和很久沒見的朋友有一個藉口、用文字或是訊息的方式有一份連結。作為一年的結束與即將進到下一年的聖誕節，在這樣冬天的日子裡收到卡片，也許可以作為一種幸福的來源、一種結束與開始。`,
  part2: "今年用網站的方式和大家相見！",
  part3: `形式是最底下的表單可以填寫你的名字、你的近況、地址
在聖誕節附近會有一張有寫字的明信片寄到你那邊`,
  part4: `想要你寫下近況的理由是，在過著不同生活圈以後的日子，可以更了解你在做什麼、
這樣寫卡片的時候，可以寫下更多內容：）
（不然會寫得很普通！哈哈哈）`,
  part5: "作為交換，也會放上我這一年的近況",
  part6: `如果有什麼近況想要直接面對面交流，也可以在下面寫
可以一起吃飯聊個天～！`,
};

export default function AboutBlock() {
  return (
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
        <p>{textContent.part1}</p>
        <br />
        <p>{textContent.part2}</p>
        <br />
        <p>{textContent.part3}</p>
        <br />
        <p>{textContent.part4}</p>
        <br />
        <p>{textContent.part5}</p>
        <br />
        <p>{textContent.part6}</p>
      </TextContent>
    </section>
  );
}
