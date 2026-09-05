import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  width: '100%'
};

const inputWrapperStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%'
};

const iconStyle = {
  position: 'absolute',
  left: '16px',
  width: '18px',
  height: '18px',
  color: 'rgba(235, 210, 185, 0.65)',
  pointerEvents: 'none',
  transition: 'color 0.3s ease'
};

const baseInputStyle = {
  width: '100%',
  padding: '14px 16px 14px 48px',
  backgroundColor: 'var(--color-input-bg)',
  border: '1px solid var(--color-input-border)',
  borderRadius: '14px',
  color: 'var(--color-cream)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem',
  outline: 'none',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  backdropFilter: 'blur(4px)'
};

const errorTextStyle = {
  fontSize: '0.78rem',
  color: '#f09595',
  marginTop: '6px',
  marginLeft: '4px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 400
};

export const FormInput = ({
  icon: Icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  id
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const dynamicInputStyle = {
    ...baseInputStyle,
    borderColor: error
      ? 'rgba(240, 149, 149, 0.65)'
      : isFocused
      ? 'rgba(229, 193, 88, 0.75)'
      : 'var(--color-input-border)',
    boxShadow: error
      ? '0 0 12px rgba(240, 149, 149, 0.15)'
      : isFocused
      ? '0 0 16px rgba(212, 175, 55, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
      : 'none',
    backgroundColor: isFocused
      ? 'rgba(255, 255, 255, 0.07)'
      : 'var(--color-input-bg)'
  };

  return (
    <div style={containerStyle}>
      <div style={inputWrapperStyle}>
        {Icon && (
          <Icon
            style={{
              ...iconStyle,
              color: isFocused
                ? 'var(--color-gold-light)'
                : 'rgba(235, 210, 185, 0.65)'
            }}
          />
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={dynamicInputStyle}
          autoComplete="off"
        />
      </div>
      {error && <span style={errorTextStyle}>{error}</span>}
    </div>
  );
};
