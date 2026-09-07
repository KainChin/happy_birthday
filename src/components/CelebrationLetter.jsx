import React, { useState } from 'react';
import { PaperclipIcon } from './PaperclipIcon';
import { formatCapitalizedName } from '../utils/validation';

export const CakeBalloon = () => {
  return (
    <div className="cake-balloon-wrapper animate-fade-in" title="Bong bóng bánh sinh nhật">
      {/* Glass Bubble Sphere */}
      <div className="balloon-sphere">
        {/* Glossy Light Reflection */}
        <div className="bubble-shine" />

        {/* Birthday Cake Content Inside Bubble */}
        <div className="balloon-cake-content">
          <span className="cake-icon">🎂</span>
          <span className="cake-label">Hãy nhận bánh kem nè!</span>
        </div>
      </div>

      {/* Golden Thread String Hanging Down */}
      <svg className="balloon-string" width="20" height="65" viewBox="0 0 20 65">
        <path
          d="M10 0 C 15 18, 5 36, 10 65"
          stroke="var(--color-gold-light)"
          strokeWidth="2.2"
          strokeDasharray="4 2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export const CelebrationLetter = ({ name }) => {
  const [page, setPage] = useState(1);
  const displayName = formatCapitalizedName(name);

  // Touch & Mouse drag gesture states for swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseDownX, setMouseDownX] = useState(0);

  const letterPages = [
    // Page 1
    {
      title: `Gửi ${displayName},`,
      subtitle: 'Chúc mừng sinh nhật cô gái đặc biệt! ✨',
      content: (
        <p>
          Bước sang tuổi mới, chúc cậu luôn giữ trọn vẻ rạng rỡ, xinh đẹp và nụ cười cuốn hút này.
        </p>
      )
    },
    // Page 2
    {
      title: 'Tỏa Sáng Theo Cách Riêng 🌟',
      content: (
        <>
          <p style={{ marginBottom: '6px' }}>
            Mong rằng trên chặng đường phía trước, mọi dự định của cậu đều hanh thông.
          </p>
          <p>
            Gặt hái thật nhiều thành tựu rực rỡ và luôn kiêu hãnh tỏa sáng theo cách riêng của mình!
          </p>
        </>
      )
    },
    // Page 3: Thơ 6 chữ (Khổ 1)
    {
      title: 'Nắng Thu Tháng Chín 🍂',
      content: (
        <p>
          Tháng Chín mang heo may về,<br />
          Gió khẽ mơn suối tóc mây.<br />
          Chúc Khánh Phương thêm rạng rỡ,<br />
          Nụ cười đắm say lòng ai.
        </p>
      )
    },
    // Page 4: Thơ 6 chữ (Khổ 2)
    {
      title: 'Gói Trọn Thương Yêu 💖',
      content: (
        <p>
          Chẳng phải tình yêu xa vắng,<br />
          Chỉ là người thương thầm mong.<br />
          Mong đường đời luôn êm dịu,<br />
          Bình an gói trọn thương yêu.
        </p>
      )
    },
    // Page 5: Thơ 6 chữ (Khổ 3)
    {
      title: 'Rực Rỡ Tuổi Mới 🎉',
      content: (
        <>
          <p style={{ marginBottom: '8px' }}>
            Mỗi ngày gặp nhiều may mắn,<br />
            Áo dài nón lá thắm tươi.<br />
            Giữ trọn niềm vui tuổi mới,<br />
            Rạng rỡ nhất cả trần đời!
          </p>
          <p style={{ fontSize: '0.96rem', color: '#521c2e', fontStyle: 'italic', fontWeight: 600 }}>
            ✨ Hãy luôn mỉm cười và đón nhận những điều tuyệt vời nhất bạn nhé!
          </p>
        </>
      )
    }
  ];

  const totalPages = letterPages.length;
  const currentPageData = letterPages[page - 1];
  const minSwipeDistance = 35;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setPage((prev) => (prev < totalPages ? prev + 1 : 1));
    } else if (distance < -minSwipeDistance) {
      setPage((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setMouseDownX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown) return;
    setIsMouseDown(false);
    const distance = mouseDownX - e.clientX;
    if (distance > minSwipeDistance) {
      setPage((prev) => (prev < totalPages ? prev + 1 : 1));
    } else if (distance < -minSwipeDistance) {
      setPage((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  return (
    <div className="letter-wrapper">
      {/* Floating Birthday Cake Balloon when Page 5 is active */}
      {page === 5 && <CakeBalloon />}

      <div className="envelope-back" />
      <div
        className="letter-paper animate-card-shuffle-in"
        key={page}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ cursor: isMouseDown ? 'grabbing' : 'grab', userSelect: 'none' }}
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

        {/* Dashed line & Footer bar: Page number on right above dashed line */}
        <div className="letter-footer-bar">
          <div />
          <span className="letter-page-number">{page} / {totalPages}</span>
        </div>
      </div>
    </div>
  );
};
