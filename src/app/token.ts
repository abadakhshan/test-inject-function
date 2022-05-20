import { inject, InjectionToken } from '@angular/core';
export const TEST_TOKEN = new InjectionToken<string>('TEST_TOKEN');

export function tokenValue(): string {
  return inject(TEST_TOKEN);
}
