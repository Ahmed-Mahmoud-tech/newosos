 const sharedConfig = require('@repo/tailwind-config');

module.exports = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Include app-specific files
    ...sharedConfig.content,      // Add shared content paths
  ],
};
 