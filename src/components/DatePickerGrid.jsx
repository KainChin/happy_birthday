import React from 'react';

const daysGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '6px',
  textAlign: 'center'
};

const weekHeaderStyle = {
  fontSize: '0.78rem',
  color: 'var(--color-gold-light)',
  fontWeight: 700,
  paddingBottom: '8px'
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
              padding: '10px 0',
              border: isSelected
                ? '1.5px solid var(--color-gold-light)'
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              background: isSelected
                ? 'linear-gradient(135deg, #70263f, #3b131f)'
                : 'rgba(255, 255, 255, 0.07)',
              color: isSelected ? 'var(--color-gold-light)' : '#ffffff',
              fontSize: '0.9rem',
              fontWeight: isSelected ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isSelected
                ? '0 0 16px rgba(229, 193, 88, 0.5)'
                : 'none'
            }}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
};
