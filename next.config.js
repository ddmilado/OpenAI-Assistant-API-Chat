/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/deploy",
        destination: "https://open-ai-assistant-api-chat.vercel.app",
        permanent: true,
      },
    ];
  },
  env: {
    REACT_APP_ASSISTANT_ID: process.env.REACT_APP_ASSISTANT_ID,
  },
};

module.exports = nextConfig;