import { useEffect, useState } from 'react';
import EmojiShowerOverlay from '../components/EmojiShowerOverlay';

export default function PromiseDayPage() {
  const [triggerBurst, setTriggerBurst] = useState(0);

  useEffect(() => {
    // Initial burst on mount
    setTriggerBurst(1);
  }, []);

  const handleClick = () => {
    setTriggerBurst((prev) => prev + 1);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-peach-light to-white overflow-x-hidden"
      onClick={handleClick}
    >
      {/* Emoji shower overlay - renders above everything */}
      <EmojiShowerOverlay triggerBurst={triggerBurst} />

      {/* Hero emoji */}
      <div className="text-center pt-8 pb-4">
        <div className="text-[120px] md:text-[155px] inline-block animate-sway">
          🤝
        </div>
      </div>

      {/* Main card */}
      <div className="max-w-[620px] mx-auto px-4 pb-16">
        <div className="bg-white rounded-[30px] p-6 md:p-9 shadow-card">
          {/* Heading */}
          <h1 className="text-coral text-2xl md:text-3xl font-semibold text-center mb-6">
            🤝 Happy Promise Day, baby
          </h1>

          {/* Ring photo - on top */}
          <div className="mb-5">
            <img
              src="https://i.postimg.cc/q7BqM8Pb/IMG-6542.png"
              alt="Rings"
              className="w-full max-w-[290px] h-[220px] object-cover rounded-[18px] mx-auto shadow-photo"
            />
          </div>

          {/* Two photos below in grid */}
          <div className="flex gap-3 justify-center flex-wrap mb-6">
            <img
              src="https://i.postimg.cc/zG024N8G/56DF6AE0-151F-4078-9CE0-7DA0673CFC2D.jpg"
              alt="Promise memory 1"
              className="w-[46%] max-w-[230px] h-[190px] object-cover rounded-[18px] shadow-photo"
            />
            <img
              src="https://i.postimg.cc/3RBkFtg3/5928b01f-ab90-4ca5-b44b-26c9ff2c78aa.jpg"
              alt="Promise memory 2"
              className="w-[46%] max-w-[230px] h-[190px] object-cover rounded-[18px] shadow-photo"
            />
          </div>

          {/* Message */}
          <div className="text-gray-700 text-base md:text-[17px] leading-relaxed space-y-4">
            <p>
              Jaan… 🤍
            </p>
            <p>
              Promise Day isn't about big speeches. It's about the quiet
              promises that stay true even when emotions are messy.
            </p>
            <p>
              Baby, my promise is simple: I won't turn love into pressure. I
              won't chase you into feelings you're not ready to hold. I'll
              respect your space, your peace, and the path you choose. 💗
            </p>
            <p>
              Cookie… I promise to remember us kindly. Not with anger, not with
              bitterness — but with gratitude for the love we truly had.
            </p>
            <p>
              And if life ever brings us back to each other softly, I would meet
              you with calm love — not fear. 💞
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6 text-center italic text-gray-600">
            Yours,
            <br />
            Baby 🤍
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-8 text-sm text-gray-500">
        © 2026. Built with 💗 using{' '}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral hover:underline"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
