import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DatePickerGrid } from './DatePickerGrid';

const modalOverlayStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: '8px',
  zIndex: 20,
  backgroundColor: 'rgba(26, 14, 20, 0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(229, 193, 88, 0.35)',
  borderRadius: '18px',
  padding: '16px',
  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(82, 28, 46, 0.4)',
  animation: 'fadeInCard 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '14px',
  color: 'var(--color-cream)'
};

const monthTitleStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--color-gold-light)'
};

const navBtnStyle = {
  background: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(229, 193, 88, 0.25)',
  borderRadius: '8px',
  color: 'var(--color-cream)',
  cursor: 'pointer',
  padding: '4px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const DatePickerModal = ({ selectedDate, onSelectDate, onClose }) => {
  const [currentYear, setCurrentYear] = useState(2004);
  const [currentMonth, setCurrentMonth] = useState(8); // Sept (0-indexed 8)

  useEffect(() => {
    if (selectedDate && selectedDate.length === 10) {
      const parts = selectedDate.split('/');
      if (parts.length === 3) {
        const m = parseInt(parts[1], 10) - 1;
        const y = parseInt(parts[2], 10);
        if (!isNaN(m) && !isNaN(y) && m >= 0 && m <= 11) {
          setCurrentMonth(m);
          setCurrentYear(y);
        }
      }
    }
  }, [selectedDate]);

  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleDayClick = (day) => {
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(currentMonth + 1).padStart(2, '0');
    onSelectDate(`${formattedDay}/${formattedMonth}/${currentYear}`);
    onClose();
  };

  const currentSelectedDay = (() => {
    if (!selectedDate) return null;
    const parts = selectedDate.split('/');
    if (parts.length === 3) {
      const d = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      const y = parseInt(parts[2], 10);
      if (m === currentMonth && y === currentYear) return d;
    }
    return null;
  })();

  return (
    <div style={modalOverlayStyle}>
      <div style={headerStyle}>
        <button type="button" onClick={handlePrevMonth} style={navBtnStyle}>
          <ChevronLeft size={16} />
        </button>

        <div style={monthTitleStyle}>
          {monthNames[currentMonth]} {currentYear}
        </div>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <button type="button" onClick={handleNextMonth} style={navBtnStyle}>
            <ChevronRight size={16} />
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              ...navBtnStyle,
              background: 'rgba(230, 80, 80, 0.25)',
              borderColor: 'rgba(240, 120, 120, 0.4)'
            }}
          >
            <X size={14} color="#f8a5a5" />
          </button>
        </div>
      </div>

      <DatePickerGrid
        daysInMonth={daysInMonth}
        firstDayOfWeek={firstDayOfWeek}
        currentSelectedDay={currentSelectedDay}
        onDayClick={handleDayClick}
      />
    </div>
  );
};
