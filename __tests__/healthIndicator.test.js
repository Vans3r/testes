import { getHealthStatus } from '../src/healthIndicator';

describe('getHealthStatus', () => {
  test('should return "healthy" when health is greater than 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
  });

  test('should return "wounded" when health is between 15 and 50 inclusive', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Разбойник', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Друид', health: 15 })).toBe('wounded');
  });

  test('should return "critical" when health is less than 15', () => {
    expect(getHealthStatus({ name: 'Целитель', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Некромант', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Шаман', health: -10 })).toBe('critical');
  });
});
