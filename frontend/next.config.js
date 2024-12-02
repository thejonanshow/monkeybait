module.exports = {
    env: {
        NEXT_PUBLIC_WORLD_ID_CLIENT_ID: process.env.WORLD_ID_CLIENT_ID,
        NEXT_PUBLIC_WORLD_ID_CLIENT_SECRET: process.env.WORLD_ID_CLIENT_SECRET,
    },
    webpack: (config) => {
        const path = require("path");
        config.resolve.modules.push(path.resolve("./shared")); // Resolve shared directory
        return config;
    },
    experimental: {
        externalDir: true, // Allow access to files outside frontend directory
    },
};
