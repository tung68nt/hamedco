/**
 * Format a date string into a localized Vietnamese date string.
 */
export function formatDate(dateString: string | undefined | null): string {
  if (!dateString) return '';
  try {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Truncate a string to a given length, appending "..." if truncated.
 */
export function truncate(str: string, maxLength: number): string {
  if (!str) return '';
  return str.length <= maxLength ? str : str.slice(0, maxLength) + '...';
}

/**
 * Generate a simple slug from a Vietnamese string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
