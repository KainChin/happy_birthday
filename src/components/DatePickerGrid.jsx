import React from 'react';

const daysGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '4px',
  textAlign: 'center'
};

const weekHeaderStyle = {
  fontSize: '0.72rem',
  color: 'rgba(245, 225, 200, 0.55)',
  fontWeight: 600,
  paddingBottom: '6px'
};

export const DatePickerGrid = ({
  daysInMonth,
  firstDayOfWeek,
  currentSelectedDay,
  onDayClick
}) => {
  const blanks = Array.from({ length: (firstDayOfWeek + 6) % 7 });
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div style={daysGridStyle}>
      {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((w) => (
        <div key={w} style={weekHeaderStyle}>{w}</div>
      ))}

      {blanks.map((_, idx) => (
        <div key={`blank-${idx}`} />
      ))}

      {daysArray.map((day) => {
        const isSelected = day === currentSelectedDay;
        return (
          <button
            key={day}
            type="button"
            onClick={() => onDayClick(day)}
            style={{
              padding: '8px 0',
              border: isSelected ? '1px solid var(--color-gold-light)' : 'none',
              borderRadius: '10px',
              background: isSelected
                ? 'linear-gradient(135deg, #66233a, #38121d)'
                : 'rgba(255, 255, 255, 0.03)',
              color: isSelected ? 'var(--color-gold-light)' : 'var(--color-cream)',
              fontSize: '0.82rem',
              fontWeight: isSelected ? 700 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isSelected ? '0 0 12px rgba(212, 175, 55, 0.3)' : 'none'
            }}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
};
