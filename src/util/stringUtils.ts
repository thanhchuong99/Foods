export const normalizeMessage = (str: string) => {
  return (
    str
      // replaces JSX and HTML and their properties with an empty string
      // keeping only the content left
      .replace(/<[^>]*>/gm, '')
  );
};

export const renderStringTemplate = (str: string, values: Record<string, string>) => {
  return Object.entries(values).reduce((acc, [key, value]) => {
    return acc.replace(`{${key}}`, value);
  }, str);
};
