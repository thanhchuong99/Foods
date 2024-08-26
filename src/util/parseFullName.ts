export function parseFullName(fullName: string) {
  const nameParts = fullName.split(' ');

  if (nameParts.length === 1) return { firstName: nameParts[0], lastName: '' };

  const firstName = nameParts.slice(0, -1).join(' ');
  const lastName = nameParts.slice(-1).join(' ');

  return { firstName, lastName };
}
