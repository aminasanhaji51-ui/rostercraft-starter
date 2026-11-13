import { describe, expect, it } from 'vitest';
import { monthlyPrice } from './pricing';

describe('monthlyPrice', () => {
  it('charges 29 per location per month', () => {
    expect(monthlyPrice(1, 'monthly')).toBe(29);
    expect(monthlyPrice(10, 'monthly')).toBe(290);
  });

  it('charges 24 for each location from the 11th', () => {
    expect(monthlyPrice(11, 'monthly')).toBe(314);
  });

  it('takes 20% off with annual billing', () => {
    expect(monthlyPrice(1, 'annual')).toBe(23.2);
    expect(monthlyPrice(10, 'annual')).toBe(232);
  });

  it('applies the annual discount only once above 10 locations', () => {
    // 10 × 29 + 2 × 24 = 338; 338 × 0.8 = 270.40
    expect(monthlyPrice(12, 'annual')).toBe(270.4);
    expect(monthlyPrice(12, 'annual') * 12).toBeCloseTo(3244.8, 2);
    // 10 × 29 + 1 × 24 = 314; 314 × 0.8 = 251.20
    expect(monthlyPrice(11, 'annual')).toBe(251.2);
  });
});
