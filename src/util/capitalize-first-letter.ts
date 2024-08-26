export const capitalizeFirstLetter = (word?: string | null, noUnderscore?: boolean) => {
  if (!word) return '';

  if (noUnderscore && word.includes('_')) {
    const words = word.split('_');

    return words
      .join(' ')
      .toLowerCase()
      .replace(/\w/, firstLetter => firstLetter.toUpperCase());
  }

  return word.toLowerCase().replace(/\w/, firstLetter => firstLetter.toUpperCase());
};
