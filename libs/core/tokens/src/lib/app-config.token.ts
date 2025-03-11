import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  endpoints: {
    skills: string;
    cvEntries: string;
    certificates: string;
  };
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
