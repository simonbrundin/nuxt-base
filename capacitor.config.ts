import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.simonbrundinnuxtbase.app',
  appName: '@simonbrundin/nuxt-base',
  webDir: '.output',
  server: {
    androidScheme: 'https'
  }
};

export default config;
