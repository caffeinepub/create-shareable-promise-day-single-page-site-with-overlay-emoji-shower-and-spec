import { useEffect, useRef } from 'react';

interface EmojiShowerOverlayProps {
  triggerBurst: number;
}

const EMOJI_STREAM = ['🤝', '💗', '💖', '💞', '🌸', '✨', '🤍', '🌷', '💕'];

export default function EmojiShowerOverlay({
  triggerBurst,
}: EmojiShowerOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const dropEmojis = (count: number) => {
    if (!containerRef.current) return;

    for (let i = 0; i < count; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'emoji-fall';
      emoji.textContent =
        EMOJI_STREAM[Math.floor(Math.random() * EMOJI_STREAM.length)];
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.fontSize = 16 + Math.random() * 28 + 'px';
      emoji.style.animationDuration = 4 + Math.random() * 5 + 's';
      emoji.style.opacity = String(0.45 + Math.random() * 0.55);

      containerRef.current.appendChild(emoji);

      // Clean up after animation
      emoji.addEventListener('animationend', () => {
        emoji.remove();
      });
    }
  };

  useEffect(() => {
    if (triggerBurst > 0) {
      dropEmojis(55);
    }
  }, [triggerBurst]);

  useEffect(() => {
    // Continuous gentle rain
    const interval = setInterval(() => {
      dropEmojis(2);
    }, 105);

    // Initial burst
    dropEmojis(95);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
