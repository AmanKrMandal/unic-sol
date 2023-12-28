// config.js
module.exports = {
    secretKey: "erere4r4f0lfmdnfoi3jrfrnf",
    database: "mongodb://127.0.0.1:27017/taskmanagement",
    cookieOption: {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        secure: true,
        httpOnly: true,
        sameSite: "none",
        path: "/",
    }
};