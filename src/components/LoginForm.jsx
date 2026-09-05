import React from 'react';
import { User, Calendar, AlertCircle } from 'lucide-react';
import { FormInput } from './FormInput';
import { UnlockButton } from './UnlockButton';
import { SuccessView } from './SuccessView';
import { useLoginForm } from '../hooks/useLoginForm';
import { TEXTS } from '../constants/theme';

const errorBannerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 14px',
  marginBottom: '16px',
  backgroundColor: 'rgba(230, 80, 80, 0.12)',
  border: '1px solid rgba(240, 120, 120, 0.35)',
  borderRadius: '12px',
  color: '#f8a5a5',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.84rem',
  textAlign: 'center',
  backdropFilter: 'blur(4px)',
  animation: 'fadeInCard 0.4s ease forwards'
};

export const LoginForm = () => {
  const {
    fullName,
    birthDate,
    authError,
    isLoading,
    isUnlocked,
    handleNameChange,
    handleDateChange,
    handleSubmit
  } = useLoginForm();

  if (isUnlocked) {
    return <SuccessView fullName={fullName} birthDate={birthDate} />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      {authError && (
        <div style={errorBannerStyle}>
          <AlertCircle size={16} color="#f8a5a5" style={{ shrink: 0 }} />
          <span>{authError}</span>
        </div>
      )}

      <FormInput
        id="her-full-name"
        icon={User}
        placeholder={TEXTS.INPUT_NAME_LABEL}
        value={fullName}
        onChange={handleNameChange}
      />
      <FormInput
        id="birth-date"
        icon={Calendar}
        placeholder={TEXTS.INPUT_DATE_LABEL}
        value={birthDate}
        onChange={handleDateChange}
        isDatePicker={true}
        onSelectDate={(dateStr) => {
          handleDateChange({ target: { value: dateStr } });
        }}
      />
      <UnlockButton isLoading={isLoading} />
    </form>
  );
};
