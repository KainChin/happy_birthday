import { useState } from 'react';
import { validateInputs } from '../utils/validation';

const getStoredSession = () => {
  try {
    const saved = sessionStorage.getItem('birthday_auth');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.isUnlocked) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to read session:', err);
  }
  return null;
};

export const useLoginForm = (onSuccess) => {
  const initialSession = getStoredSession();
  const [fullName, setFullName] = useState(initialSession?.fullName || '');
  const [birthDate, setBirthDate] = useState(initialSession?.birthDate || '');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(Boolean(initialSession?.isUnlocked));

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    if (authError) setAuthError('');
  };

  const handleDateChange = (e) => {
    let val = e.target.value;
    // Keep only digits and slashes
    val = val.replace(/[^\d/]/g, '');
    if ((val.length === 2 || val.length === 5) && !val.endsWith('/')) {
      val = val + '/';
    }
    if (val.length > 10) {
      val = val.slice(0, 10);
    }
    setBirthDate(val);
    if (authError) setAuthError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateInputs(fullName, birthDate);

    if (errorMsg) {
      setAuthError(errorMsg);
      return;
    }

    setAuthError('');
    setIsLoading(true);

    // Simulate luxury authentication unlock
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Save session in sessionStorage so state persists on reload, but clears on tab close
    try {
      sessionStorage.setItem(
        'birthday_auth',
        JSON.stringify({ isUnlocked: true, fullName, birthDate })
      );
    } catch (err) {
      console.error('Failed to save session:', err);
    }

    setIsLoading(false);
    setIsUnlocked(true);
    if (onSuccess) onSuccess({ fullName, birthDate });
  };

  return {
    fullName,
    birthDate,
    authError,
    isLoading,
    isUnlocked,
    handleNameChange,
    handleDateChange,
    handleSubmit
  };
};
