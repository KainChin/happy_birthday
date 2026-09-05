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
  if (!name || !name.trim()) return ERRORS.NAME_REQUIRED;
  if (!date || !date.trim()) return ERRORS.DATE_REQUIRED;

  const validName = isNameValid(name);
  const validDate = isDateValid(date);

  if (!validName || !validDate) {
    return ERRORS.AUTH_FAILED;
  }
  return '';
};
