"use client";

import Lottie from "lottie-react";
import animationData from "../../public/animation/2025_ending.json";
import styled from "styled-components";

const AnimationWrapper = styled.div<{
  isEnded: boolean;
  isAfterEnded: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) =>
    props.isEnded || props.isAfterEnded ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(75, 134, 167, 0.6) 0%,
    rgba(89, 144, 174, 0.6) 15%,
    rgba(102, 154, 181, 0.6) 30%,
    rgba(116, 164, 188, 0.6) 45%,
    rgba(129, 174, 195, 0.6) 60%,
    rgba(143, 184, 202, 0.6) 75%,
    rgba(156, 194, 209, 0.6) 85%,
    rgba(169, 204, 216, 0.6) 90%,
    rgba(182, 214, 223, 0.6) 95%,
    rgba(209, 234, 237, 0.6) 100%
  );
  backdrop-filter: blur(4px);
  border-radius: 8px;
  z-index: 10;
  transition: all 0.3s ease-in-out;
`;

const AnimationContent = styled.div`
  width: 80%;
  max-width: 400px;
  opacity: 0.95;
  position: relative;
`;

const EndingMessage = styled.p`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface EndingAnimationProps {
  isEnded: boolean;
  isAfterEnded: boolean;
}

export default function EndingAnimation({
  isEnded,
  isAfterEnded,
}: EndingAnimationProps) {
  return (
    <AnimationWrapper isEnded={isEnded} isAfterEnded={isAfterEnded}>
      <AnimationContent>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "300px",
            height: "300px",
            margin: "0 auto",
          }}
        />
        <EndingMessage>
          去準備卡片啦，我們聖誕節見 ✨<br />
          {isAfterEnded && (
            <>
              <br />
              如果來不及寫表單的話，突然想要明信片可以來密我，聖誕節快樂！
            </>
          )}
        </EndingMessage>
      </AnimationContent>
    </AnimationWrapper>
  );
}
