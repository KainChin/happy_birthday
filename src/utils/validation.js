import { ERRORS } from '../constants/theme';

export const normalizeText = (text) => {
  if (!text) return '';
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ');
};

export const isNameValid = (name) => {
  const normalized = normalizeText(name);
  return normalized === 'dong khanh phuong';
};

export const normalizeDate = (dateStr) => {
  if (!dateStr) return '';
  const parts = dateStr.trim().split('/');
  if (parts.length !== 3) return dateStr.trim();
  const day = parts[0].padStart(2, '0');
  const month = parts[1].padStart(2, '0');
  const year = parts[2];
  return `${day}/${month}/${year}`;
};

export const isDateValid = (dateStr) => {
  const formatted = normalizeDate(dateStr);
  return formatted === '09/09/2004';
};

export const validateInputs = (name, date) => {
  const hasName = Boolean(name && name.trim());
  const hasDate = Boolean(date && date.trim());

  // Check if both fields are empty
  if (!hasName && !hasDate) {
    return ERRORS.AUTH_EMPTY;
  }

  const validName = isNameValid(name);
  const validDate = isDateValid(date);

  if (!validName && !validDate) {
    return ERRORS.AUTH_BOTH_FAILED;
  }
  if (!validName) {
    return ERRORS.AUTH_NAME_FAILED;
  }
  if (!validDate) {
    return ERRORS.AUTH_DATE_FAILED;
  }

  return '';
};
