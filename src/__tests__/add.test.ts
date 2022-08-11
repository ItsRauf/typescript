import { describe, test, expect } from 'vitest';
import { add } from '../add';

describe('add.ts', () => {
  test('add(1, 1) eql 2', () => {
    expect(add(1, 1)).toBe(2);
  });
  test('add(2, 2) eql 4', () => {
    expect(add(2, 2)).toBe(4);
  });
});
