// api-service.token.ts
import { InjectionToken } from '@angular/core';
import { AppConfig } from '../app.config.service/appconfig.interface';
import { environment } from '../../../environments/environment';

// Define the AppConfig interface
export const API_SERVICE = new InjectionToken<AppConfig>('apiService', {
  providedIn: 'root',
  factory: () => ({apiEndpoint: environment.production
      ? 'http://productionserver:4200/api/v1'
      : environment.apiEndpoint,
    production: environment.production,
  }),
});

// Factory: Creates an object based on logic. Interface: Defines the expected structure.
// apiendpoint and production are the key or properties of the factory and are explicitly defined in the factory function