const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
// const router = jsonServer.router('./orders.json');
let userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
const orderdb = JSON.parse(fs.readFileSync('./orders.json', 'UTF-8'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());
const SECRET_KEY = '123456789';

const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token
function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({username, password, email}) {
    let currentUsersDb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
    return currentUsersDb.findIndex(user => user.username === username || user.password === password || user.email === email) !== -1
}

// get all users
server.get('/getUsers', (req, res) => {
    console.log(res.body);
    let currentUsersDb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
    res.json(currentUsersDb)

});
// get only one user by id
server.get('/getUser/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    // Number(userId);
    // console.log(typeof (userId));
    const currentUserDb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
    const result = currentUserDb.find(_user => _user.id === userId);
    if (result) {
        res.json(result);
    } else {
        res.json(`This id:${userId} not found`)
    }

});
// delete one user by ID
server.delete('/removeUser/:id', (req, res) => {
    const currentUsersDb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
    const userId = parseInt(req.params.id, 10);
    console.log(`Deleted item with id: ${userId}`);
    const currentUser = currentUsersDb.find(user => user.id === userId);
    let filtered_users = currentUsersDb.filter(_user => _user !== currentUser);
    fs.writeFile('./users.json', JSON.stringify(filtered_users), err => {
        if (err) throw err;
    });
    if (currentUser) {
        res.json(`User with ID = ${currentUser.id} has been deleted`);
    } else {
        res.json(`This ID: ${userId} not found`)
    }

});
server.put('/updateUser/:id', (req, res) => {
    let userId = parseInt(req.param.id, 10);
    let bodyData = req.body;
    console.log(bodyData);
    let currentUsersDb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
    currentUsersDb.find(_user => _user.id === userId);
    console.log(currentUsersDb);
    res.json(currentUsersDb)
});
// Register New User
server.post('/auth/register', (req, res) => {
    console.log("register endpoint called; request body:");
    console.log(req.body);
    const {email, password, phone, role, username} = req.body;
    let emptyUsername = username === undefined || username === '' || username === null;
    let emptyPassword = password === undefined || password === '' || password === null;
    let emptyEmail = email === undefined || email === '' || email === null;
    if (emptyUsername || emptyPassword || emptyEmail) {
        let errorMessages = [];
        if (emptyUsername) {
            errorMessages.push('Username can not be empty')
        }
        if (emptyPassword) {
            errorMessages.push('Password can not be empty')
        }
        if (emptyEmail) {
            errorMessages.push('Email can not be empty')
        }
        return res.status(400).send({
            message: errorMessages
        });
    }
    // if (password === '' || password === undefined || password === null) {
    //     return res.status(400).send({
    //         message: "Password  can not be empty"
    //     });
    // }
    let usernameExist = isAuthenticated({username});
    let emailExist = isAuthenticated({email});
    if (usernameExist || emailExist) {
        const status = 401;
        let errorMessages = [];
        if (usernameExist) {
            errorMessages.push('username is exist')
        }
        if (emailExist) {
            errorMessages.push('email is exist')
        }
        res.status(401).send({message: errorMessages});
        console.log(username);
        return
    }
    // if (isAuthenticated({email}) === true) {
    //     const status = 401;
    //     const message = 'Email Address  Already Exist';
    //     res.status(status).json({status, message});
    //     return
    // }
    fs.readFile("./users.json", (err, data) => {
        if (err) {
            const status = 401;
            const message = err;
            res.status(status).json({status, message});
            return
        }
        // Get current users data
        var data = JSON.parse(data.toString());
        // Get the id of last user
        var last_item_id = data[data.length - 1].id;
        //Add new user

        data.push({
            id: last_item_id + 1,
            email: email,
            password: password,
            phone: phone,
            role: role,
            username: username
        });

        //add some data
        fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
            if (err) {
                const status = 401;
                const message = err;
                res.status(status).json({status, message});

            }
        });
    });

// Create token for new user
    const access_token = createToken({email, password});
    console.log("Access Token:" + access_token);
    const removeProperty = prop => ({[prop]: _, ...rest}) => rest;
    const removePassword = removeProperty('password');
    removePassword(req.body);
    console.log(removePassword(req.body));
    res.status(200).json({access_token, username: removePassword(req.body).username, role: removePassword(req.body).role})
});
// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
    console.log("login endpoint called; request body:");
    console.log(req.body);
    const {username, password} = req.body;
    console.log(typeof username);
    if (username === '') {
        return res.status(400).send({
            message: "Username  can not be empty"
        });
    } else if (password === '') {
        return res.status(400).send({
            message: "Password  can not be empty"
        });
    }

    // if(username !== ''){
    //     return res.status(400).send({
    //         message: `${username} is not a string`
    //     });
    // }
    if (isAuthenticated({username}) === false) {
        const status = 401;
        const message = 'Incorrect username or password';
        res.status(status).json({status, message});
        return
    }
    if (isAuthenticated({password}) === false) {
        const status = 401;
        const message = 'Incorrect username or password';
        res.status(status).json({status, message});
        return
    }
    let signedUser = userdb.find(userObj => userObj.username === username);
    // console.log(userdb.find(element => element.username === username));
    let role = signedUser.role;
    const access_token = createToken({username, password});
    console.log("Access Token:" + access_token);
    res.status(200).json({access_token, role, username})
});
// add orders
server.post('/addOrder', (req, res) => {
    console.log("Add Order endpoint called; request body:");
    const {customerName, customerAddress, customerPhone, orderDetails, orderStatus} = req.body;
    if (isAuthenticated({customerName, customerAddress, customerPhone, orderDetails, orderStatus}) === true) {
        const status = 401;
        const message = 'username  already exist';
        res.status(status).json({status, message});
        return
    }
    fs.readFile("./orders.json", (err, data) => {
        if (err) {
            const status = 401;
            const message = err;
            res.status(status).json({status, message});
            return
        }
        // Get current orders data
        var data = JSON.parse(data.toString());
        console.log(data[data.length - 1]);
        // Get the id of last user
        var last_item_id = data[data.length - 1].id;
        //Add new user
        data.push({
            id: last_item_id + 1,
            customerName: customerName,
            customerAddress: customerAddress,
            customerPhone: customerPhone,
            orderDetails: orderDetails,
            orderStatus: orderStatus
        }); //add some data
        fs.writeFile("./orders.json", JSON.stringify(data), (err, result) => {  // WRITE
            if (err) {
                const status = 401;
                const message = err;
                res.status(status).json({status, message});

            }
        });
    });

    res.status(200).json('Order add successfully ')
});
// get all orders
server.get('/getOrders', (req, res) => {
    console.log(res.body);
    res.json(JSON.parse(fs.readFileSync('./orders.json', 'UTF-8')))
});
// get only one order by id
server.get('/getOrder/:id', (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    // Number(userId);
    // console.log(typeof (userId));
    const currentUserDb = JSON.parse(fs.readFileSync('./orders.json', 'UTF-8'));
    const result = currentUserDb.find(_order => _order.id === orderId);
    if (result) {
        res.json(result);
    } else {
        res.json(`This id:${orderId} not found`)
    }

});
// delete one order by ID
server.delete('/removeOrder/:id', (req, res) => {
    const currentOrdersDb = JSON.parse(fs.readFileSync('./orders.json', 'UTF-8'));
    const orderId = parseInt(req.params.id, 10);
    console.log(`Deleted item with id: ${orderId}`);
    const currentOrder = currentOrdersDb.find(_order => _order.id === orderId);
    let filtered_orders = currentOrdersDb.filter(_order => _order !== currentOrder);
    fs.writeFile('./orders.json', JSON.stringify(filtered_orders), err => {
        if (err) throw err;
    });
    if (currentOrder) {
        res.json(`Order with ID = ${currentOrder.id} has been deleted`);
    } else {
        res.json(`This ID: ${orderId} not found`)
    }

});
server.use(/^(?!\/auth).*$/, (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const status = 401;
        const message = 'Error in authorization format';
        res.status(status).json({status, message});
        return
    }
    try {
        let verifyTokenResult;
        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

        if (verifyTokenResult instanceof Error) {
            const status = 401;
            const message = 'Access token not provided';
            res.status(status).json({status, message});
            return
        }
        next()
    } catch (err) {
        const status = 401;
        const message = 'Error access_token is revoked';
        res.status(status).json({status, message})
    }
});
// server.use(router);
server.listen(3000, () => {
    console.log('Backend is running now ');
    // const result = users.find(user => user.id === 3);
    // console.log(users)
});
