import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { PaperclipIcon } from './PaperclipIcon';
import { formatCapitalizedName } from '../utils/validation';

export const CelebrationLetter = ({ name }) => {
  const [page, setPage] = useState(1);
  const displayName = formatCapitalizedName(name);

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
    // Page 3
    {
      title: 'Nắng Thu Tháng Chín 🍂',
      content: (
        <p>
          Tháng Chín về mang nắng thu dịu nhẹ,<br />
          Gió khẽ vờn qua suối tóc mây bay.<br />
          Chúc Khánh Phương tuổi mới thêm rạng rỡ,<br />
          Nụ cười hiền làm đắm say lòng ai.
        </p>
      )
    },
    // Page 4
    {
      title: 'Gói Trọn Thương Yêu 💖',
      content: (
        <p>
          Chưa phải người yêu, chỉ là người thương nhớ,<br />
          Thầm lặng cùng bạn đi qua tháng năm.<br />
          Mong đường đời luôn êm đềm như nước,<br />
          Bình an về gói trọn những thương yêu.
        </p>
      )
    },
    // Page 5
    {
      title: 'Rực Rỡ Tuổi Mới 🎉',
      content: (
        <>
          <p style={{ marginBottom: '8px' }}>
            Mong mỗi ngày bạn gặp nhiều may mắn,<br />
            Áo dài thơ, nón lá nghiêng nụ cười.<br />
            Giữ trong tim niềm vui ngàn sắc thắm,<br />
            Đón tuổi mới rực rỡ nhất trần đời!
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

  return (
    <div className="letter-wrapper">
      <div className="envelope-back" />
      <div className="letter-paper animate-card-shuffle-in" key={page}>
        <PaperclipIcon />

        {/* Vintage Page Number at corner */}
        <div className="letter-corner-page-num">
          {page} / {totalPages}
        </div>

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

        {/* Navigation buttons */}
        <div className="letter-nav-row">
          {page > 1 ? (
            <button
              className="letter-btn btn-prev"
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft size={14} />
              <span>Quay lại</span>
            </button>
          ) : <div />}

          {page < totalPages ? (
            <button
              className="letter-btn btn-next"
              onClick={() => setPage(page + 1)}
            >
              <span>Trang tiếp</span>
              <ChevronRight size={14} />
            </button>
          ) : (
            <button
              className="letter-btn btn-next"
              onClick={() => setPage(1)}
            >
              <RotateCcw size={13} />
              <span>Đọc lại</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
