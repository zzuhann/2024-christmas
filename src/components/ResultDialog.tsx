import { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import successAnimation from "../../public/animation/ending.json";
import failAnimation from "../../public/animation/fail.json";

interface ResultDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background: rgba(24, 72, 120, 0.9);
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  backdrop-filter: blur(3px);
  color: white;
`;

const Message = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: rgba(74, 144, 226, 0.8);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: rgba(74, 144, 226, 0.9);
  }
`;

const AnimationContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export default function ResultDialog({
  isOpen,
  onClose,
  isSuccess,
}: ResultDialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <DialogOverlay
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <DialogContent>
        <AnimationContainer>
          <Lottie
            animationData={isSuccess ? successAnimation : failAnimation}
            loop={true}
          />
        </AnimationContainer>
        <Message>
          {isSuccess ? "送出成功！聖誕節見！✨" : "送出失敗QQ 再送一次看看！"}
        </Message>
        <Button onClick={onClose}>確認</Button>
      </DialogContent>
    </DialogOverlay>
  );
}
