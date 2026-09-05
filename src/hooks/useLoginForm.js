import { useState } from 'react';
import { validateInputs } from '../utils/validation';

export const useLoginForm = (onSuccess) => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

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
