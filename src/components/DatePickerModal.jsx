import React, { useState, useEffect } from 'react';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerGrid } from './DatePickerGrid';

const modalOverlayStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: '8px',
  zIndex: 100,
  backgroundColor: 'rgba(20, 10, 15, 0.98)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1.5px solid rgba(229, 193, 88, 0.5)',
  borderRadius: '20px',
  padding: '18px',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(82, 28, 46, 0.5)',
  animation: 'fadeInCard 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
};

export const DatePickerModal = ({ selectedDate, onSelectDate, onClose }) => {
  const [currentYear, setCurrentYear] = useState(2004);
  const [currentMonth, setCurrentMonth] = useState(8);

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
      <DatePickerHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        onMonthChange={setCurrentMonth}
        onYearChange={setCurrentYear}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onClose={onClose}
      />
      <DatePickerGrid
        daysInMonth={daysInMonth}
        firstDayOfWeek={firstDayOfWeek}
        currentSelectedDay={currentSelectedDay}
        onDayClick={handleDayClick}
      />
    </div>
  );
};
