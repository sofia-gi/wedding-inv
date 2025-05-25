import React, { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  threshold?: number; // 얼마나 보여야 등장할지 (기본: 0.1)
  delay?: number;     // 애니메이션 지연 시간 (ms)
};

export function FadeInSection({ children, threshold = 0.1, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 한 번만 실행 (재등장 방지 시 제거 가능)
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
