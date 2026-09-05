import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '14px',
  color: 'var(--color-cream)'
};

const selectStyle = {
  background: 'rgba(255, 255, 255, 0.12)',
  border: '1px solid rgba(229, 193, 88, 0.4)',
  borderRadius: '8px',
  color: 'var(--color-gold-light)',
  fontFamily: 'var(--font-serif)',
  fontSize: '0.92rem',
  fontWeight: 600,
  padding: '5px 8px',
  outline: 'none',
  cursor: 'pointer'
};

const navBtnStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(229, 193, 88, 0.3)',
  borderRadius: '8px',
  color: 'var(--color-cream)',
  cursor: 'pointer',
  padding: '6px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const DatePickerHeader = ({
  currentMonth,
  currentYear,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onClose
}) => {
  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  const yearsList = Array.from({ length: 40 }, (_, i) => 1990 + i);

  return (
    <div style={headerStyle}>
      <button type="button" onClick={onPrevMonth} style={navBtnStyle}>
        <ChevronLeft size={16} />
      </button>

      <div style={{ display: 'flex', gap: '6px' }}>
        <select
          value={currentMonth}
          onChange={(e) => onMonthChange(Number(e.target.value))}
          style={selectStyle}
        >
          {monthNames.map((name, idx) => (
            <option key={name} value={idx} style={{ background: '#200a12', color: '#f5ebe0' }}>
              {name}
            </option>
          ))}
        </select>

        <select
          value={currentYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          style={selectStyle}
        >
          {yearsList.map((y) => (
            <option key={y} value={y} style={{ background: '#200a12', color: '#f5ebe0' }}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <button type="button" onClick={onNextMonth} style={navBtnStyle}>
          <ChevronRight size={16} />
        </button>
        <button
          type="button"
          onClick={onClose}
          style={{
            ...navBtnStyle,
            background: 'rgba(230, 80, 80, 0.3)',
            borderColor: 'rgba(240, 120, 120, 0.5)'
          }}
        >
          <X size={15} color="#f8a5a5" />
        </button>
      </div>
    </div>
  );
};
