export type CurrencyCode = 'USD' | 'INR';

export const getActiveCurrency = (): CurrencyCode => {
  if (typeof window === 'undefined') return 'USD';
  try {
    return (localStorage.getItem('havenly-currency') as CurrencyCode) || 'USD';
  } catch {
    return 'USD';
  }
};

export const setActiveCurrency = (currency: CurrencyCode): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('havenly-currency', currency);
    window.dispatchEvent(new Event('currencyChanged'));
  } catch (e) {
    console.error('Failed to set currency:', e);
  }
};

export const formatPrice = (priceInUSD: number): string => {
  const currency = getActiveCurrency();
  if (currency === 'INR') {
    return `₹${Math.round(priceInUSD * 83).toLocaleString('en-IN')}`;
  }
  return `$${priceInUSD.toLocaleString('en-US')}`;
};
