import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'custom',
  contentSources: [],
  postInstallCommand: 'npm i --no-save @stackbit/types serve',
  devCommand: 'PORT=${PORT:-3000} npx serve -s -l $PORT .'
});
