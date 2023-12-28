const { cookieOption } = require("./config");
const getToken = require("./getToken");

const cookiesToken = async (userDetails, res) => {
    const token = getToken(userDetails.id, userDetails.email);
    userDetails.password = undefined;
    res.status(200).cookie("token", token, cookieOption).json({
        data: userDetails,
        message: null,
    });
};

module.exports = cookiesToken;