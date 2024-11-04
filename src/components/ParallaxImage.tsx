'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ParallaxContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  transform: translateY(${props => props.isVisible ? '0' : '30px'});
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: all 0.6s ease-out;

  img {
    border-radius: 8px;
    object-fit: cover;
  }
`;

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export default function ParallaxImage({ src, alt, width, height, priority }: ParallaxImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ParallaxContainer ref={ref} isVisible={isVisible}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </ParallaxContainer>
  );
} 