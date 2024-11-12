"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PhotoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  width: 100%;
  max-width: 745px;
  margin-left: auto;
  margin-right: auto;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 3/2;
  margin-bottom: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhotoFrame = styled.div`
  position: absolute;
  left: -35px;
  bottom: -45px;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(255, 255, 255, 0.8);
  z-index: -1;

  @media (max-width: 768px) {
    left: -20px;
    bottom: -25px;
    border-width: 2px;
  }
`;

export const PhotoCaption = styled.p`
  position: absolute;
  left: -15px;
  bottom: -40px;
  margin: 0;
  text-align: left;
  color: rgba(255, 255, 255);
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-family: var(--font-spectral), serif;
  font-weight: 300;
  letter-spacing: 0;

  @media (max-width: 768px) {
    left: -10px;
    bottom: -20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const TitleLine = styled.div`
  height: 2px;
  width: 100px;
  background-color: rgba(255, 255, 255);

  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 20px 10px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BlueBlock = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
  width: 90%;
  height: 70%;
  background-color: rgba(69, 148, 228, 0.4);
  backdrop-filter: blur(4px);
  z-index: 0;
`;

export const TextContent = styled.div`
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1rem;
  will-change: transform;
  contain: content;

  p {
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

export const SeasonBlock = styled.div`
  margin: 4rem 0;
  display: flex;
  gap: 1rem;
`;

export const SeasonContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  justify-content: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SeasonImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  img {
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
`;

export const SeasonImageFrame = styled.div`
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  z-index: -1;

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 80%;
    height: 80%;
    border-width: 1px;
  }
`;

export const SeasonTitle = styled.h3<{ reverse?: boolean }>`
  position: absolute;
  top: -5px;
  ${(props) => (props.reverse ? "right: 0;" : "left: 0;")}
  font-size: 3rem;
  margin: 0;
  font-weight: 300;
  z-index: 2;

  @media (max-width: 768px) {
    top: 30px;
    position: relative;
    margin-bottom: 1rem;
  }
`;

export const SeasonTextBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 72, 120, 0.3); // #184878 with opacity
  border-radius: 8px;
  backdrop-filter: blur(4px);
  z-index: 0;
`;

export const SeasonText = styled.div`
  position: relative;
  padding: 2rem;
  margin-top: 1rem;

  p {
    position: relative;
    z-index: 1;
  }
`;

export const SeasonTextContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  max-width: 600px;
  min-height: 300px; // 確保有足夠的高度顯示內容

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #fff;

    .required {
      color: #d32f2f;
      margin-left: 4px;
    }
  }

  .description {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .error-message {
    color: #d32f2f;
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &.error {
      border-color: #d32f2f;

      &:focus {
        border-color: #d32f2f;
        box-shadow: 0 0 0 1px #d32f2f;
      }
    }
  }
`;

export const SubmitButton = styled.button<{ $isLoading?: boolean }>`
  background-color: rgba(24, 72, 120, 0.8);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  font-size: 1rem;
  display: block;
  margin: 0 auto; /* 只讓按鈕置中 */
  position: relative;

  &:hover {
    background-color: rgba(18, 54, 90, 0.9);
  }

  &:disabled {
    background-color: ${(props) => (props.$isLoading ? "#4a90e2" : "#cccccc")};
    cursor: ${(props) => (props.$isLoading ? "wait" : "not-allowed")};
  }

  ${(props) =>
    props.$isLoading &&
    `
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid transparent;
      border-top-color: #ffffff;
      border-radius: 50%;
      animation: button-loading-spinner 1s ease infinite;
    }
  `}

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
`;
