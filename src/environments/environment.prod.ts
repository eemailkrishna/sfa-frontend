// environments/environment.prod.ts
export const environment = {
    production: true,
    apiUrl: 'https://api.example.com', // Example API URL for production
    // Add other environment-specific variables here
  };

  

/* below code paste in your service file
import { environment } from '../environments/environment';

// Usage example:
if (environment.production) {
  // Do something specific for production environment
} else {
  // Do something for non-production (development) environment
}

// Accessing the API URL:
const apiUrl = environment.apiUrl; */