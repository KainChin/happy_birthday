import React, { useState, useEffect } from 'react';
import { PaperclipIcon } from './PaperclipIcon';
import { SpecialPhotoModal } from './SpecialPhotoModal';
import { formatCapitalizedName } from '../utils/validation';

export const CakeRain = () => {
  // Optimized item count for smooth animation
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const count = isMobile ? 30 : 45;

  const cakeItems = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 95}%`,
    duration: `${2.8 + Math.random() * 1.8}s`,
    delay: `${Math.random() * 4.2}s`,
    fontSize: isMobile ? `${1.4 + Math.random() * 1.5}rem` : `${1.6 + Math.random() * 1.8}rem`,
    icon: ['🎂', '🍰', '🧁', '🎂', '✨', '🎂', '🕯️', '🎁'][i % 8],
    rotation: `${(Math.random() - 0.5) * 360}deg`
  }));

  return (
    <div className="cake-rain-overlay">
      {cakeItems.map((item) => (
        <span
          key={item.id}
          className="falling-cake-item"
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
            animationIterationCount: 1,
            fontSize: item.fontSize,
            transform: `rotate(${item.rotation})`
          }}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
};

export const SunBalloon = ({ onPop }) => {
  const [isPopping, setIsPopping] = useState(false);

  const handleClick = () => {
    setIsPopping(true);
    setTimeout(() => {
      onPop();
    }, 350);
  };

  if (isPopping) {
    return (
      <div className="sun-pop-explosion">
        <span className="pop-flash" />
        <span className="pop-emoji">💥</span>
      </div>
    );
  }

  return (
    <div
      className="sun-balloon-wrapper animate-fade-in"
      onClick={handleClick}
      title="Bấm vào để nổ bong bóng mặt trời nhận hàng ngàn bánh kem!"
    >
      {/* Rotating Sun Rays & Solar Glow Aura */}
      <div className="sun-rays" />
      <div className="sun-glow-aura" />

      {/* Sun Balloon Sphere */}
      <div className="sun-balloon-sphere">
        <div className="sun-shine" />
        <div className="sun-cake-content">
          <span className="sun-cake-icon">🎂</span>
          <span className="sun-cake-label">Bấm vào nhận bánh nè! ☀️</span>
        </div>
      </div>

      {/* Golden Thread String */}
      <svg className="sun-string" width="22" height="65" viewBox="0 0 22 65">
        <path
          d="M11 0 C 17 18, 5 36, 11 65"
          stroke="#ffe875"
          strokeWidth="2.5"
          strokeDasharray="4 2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export const CelebrationLetter = ({ name }) => {
  const [page, setPage] = useState(1);
  const [showCakeRain, setShowCakeRain] = useState(false);
  const [isBalloonPopped, setIsBalloonPopped] = useState(false);
  const [showSpecialPhotoModal, setShowSpecialPhotoModal] = useState(false);

  const displayName = formatCapitalizedName(name);

  const letterPages = [
    // Page 1: Vui vẻ & Tuổi mới
    {
      title: `Gửi ${displayName},`,
      subtitle: 'Chúc mừng sinh nhật tuổi mới rạng rỡ! ✨',
      content: (
        <p>
          Nhân ngày sinh nhật, chúc cậu luôn giữ trọn niềm vui, sự rạng rỡ và nụ cười tươi tắn trên môi. Mong tuổi mới mang đến cho cậu thật nhiều khoảnh khắc bình yên và những niềm vui nho nhỏ mỗi ngày!
        </p>
      )
    },
    // Page 2: Công việc & Thành công
    {
      title: 'Thành Công & Hanh Thông 💼',
      subtitle: 'Vững bước trên chặng đường phía trước',
      content: (
        <p>
          Chúc công việc và mọi dự định của cậu luôn thuận lợi, suôn sẻ và gặt hái được nhiều thành công rực rỡ. Mong rằng mọi nỗ lực của cậu đều sẽ mang lại những kết quả xứng đáng nhất!
        </p>
      )
    },
    // Page 3: May mắn & Trọn vẹn
    {
      title: 'May Mắn & Trọn Vẹn 🍀',
      subtitle: 'Đón nhận những điều tuyệt vời nhất',
      content: (
        <>
          <p style={{ marginBottom: '8px' }}>
            Mong chặng đường sắp tới của cậu luôn ngập tràn may mắn, bình an và nhiều trải nghiệm thú vị. Cùng đón chờ một tuổi mới thật rực rỡ và tràn đầy hạnh phúc cậu nhé!
          </p>
          <p style={{ fontSize: '0.96rem', color: '#521c2e', fontStyle: 'italic', fontWeight: 600 }}>
            ✨ Chúc cậu luôn vui vẻ, may mắn và hạnh phúc mỗi ngày!
          </p>
        </>
      )
    }
  ];

  const totalPages = letterPages.length;
  const currentPageData = letterPages[page - 1];

  // Reset balloon & modal state whenever user navigates away from final page
  useEffect(() => {
    if (page !== totalPages) {
      setIsBalloonPopped(false);
      setShowSpecialPhotoModal(false);
    }
  }, [page, totalPages]);

  const handlePopBalloon = () => {
    setIsBalloonPopped(true);
    setShowCakeRain(true);
    // Cake rain stays active for 9.5 seconds until all cakes have completely fallen past bottom screen
    setTimeout(() => {
      setShowCakeRain(false);
      setShowSpecialPhotoModal(true);
    }, 9500);
  };

  return (
    <div className="letter-wrapper">
      {/* Sun Balloon when Final Page (Page 3) is active & not popped */}
      {page === totalPages && !isBalloonPopped && <SunBalloon onPop={handlePopBalloon} />}

      {/* Raining Birthday Cakes Effect when Balloon is popped */}
      {showCakeRain && <CakeRain />}

      {/* Special Photo Modal with Birthday Checkered Ribbon Frame displayed after Cake Rain */}
      {showSpecialPhotoModal && (
        <SpecialPhotoModal
          imageSrc="photos/special_gift.jpg"
          name={name}
          onClose={() => setShowSpecialPhotoModal(false)}
        />
      )}

      <div className="envelope-back" />
      <div
        className="letter-paper animate-card-shuffle-in"
        key={page}
      >
        <PaperclipIcon />

        {/* Header */}
        <div className="letter-header">
          {currentPageData.title && (
            <h3 className="letter-title">{currentPageData.title}</h3>
          )}
          {currentPageData.subtitle && (
            <p className="letter-subtitle">{currentPageData.subtitle}</p>
          )}
        </div>

        {/* Body */}
        <div className="letter-body">
          {currentPageData.content}
        </div>

        {/* Dashed line & Footer bar: Centered circular arrow navigation button(s) */}
        <div className="letter-footer-bar">
          <div className="letter-footer-spacer" />
          <div className="letter-nav-container">
            {page < totalPages ? (
              <button
                className="letter-circle-btn"
                onClick={() => setPage((prev) => prev + 1)}
                title="Trang tiếp theo"
                aria-label="Trang tiếp theo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            ) : (
              <div className="letter-btn-group">
                <button
                  className="letter-circle-btn"
                  onClick={() => setPage((prev) => prev - 1)}
                  title="Trang trước"
                  aria-label="Trang trước"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <button
                  className="letter-circle-btn"
                  onClick={() => setPage(1)}
                  title="Về trang 1"
                  aria-label="Về trang 1"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <span className="letter-page-number">{page} / {totalPages}</span>
        </div>
      </div>
    </div>
  );
};
