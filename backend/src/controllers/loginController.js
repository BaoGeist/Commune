const LoginService = require("../services/loginService");

getAllUsers = async(req, res) => {
    const allUsers = await LoginService.getAllUsers();
    res.send(allUsers);
}

loginUser = async(req, res) => {
    try {
        const {email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        const loginResult = await LoginService.login(email, password);

        res.send(loginResult);
    } catch (error) {
        console.error("Error loggin in user:", error);
        res.status(500).send("Error logging in user");
    }
    
}

module.exports = {
    getAllUsers,
    loginUser
}