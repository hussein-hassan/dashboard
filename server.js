const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./orders.json');
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
function isAuthenticated({username, password}) {
    return userdb.findIndex(user => user.username === username && user.password === password) !== -1
}

// get all users
server.get('/getUsers', (req, res) => {
    console.log(res.body);
    res.json(userdb)

});
// get only one user by id
server.get('/getUser/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    // Number(userId);
    // console.log(typeof (userId));
    const result = userdb.find(_user => _user.id === userId);
    if (result) {
        res.json(result);
    } else {
        res.json(`This id:${userId} not found`)
    }

});
// delete one user by ID
server.delete('/removeUser/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    console.log(`Deleted item with id: ${userId}`);
    const filtered_users = userdb.filter(user => user.id !== userId);

    fs.writeFile('./users.json', JSON.stringify(filtered_users), err => {
      if (err) throw err;
    });
    res.json(filtered_users);
});
// Register New User
server.post('/auth/register', (req, res) => {
    console.log("register endpoint called; request body:");
    console.log(req.body);
    const {email, password, phone, role, username} = req.body;

    if (isAuthenticated({username, password}) === true) {
        const status = 401;
        const message = 'username  already exist';
        res.status(status).json({status, message});
        return
    }

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
        }); //add some data
        var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
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
    res.status(200).json({access_token})
});
// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
    console.log("login endpoint called; request body:");
    console.log(req.body);
    const {username, password} = req.body;
    if (isAuthenticated({username, password}) === false) {
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
    console.log("addOrder endpoint called; request body:");
    console.log(req.body);
    const {customerName, customerAddress, customerPhone, orderDetails, orderStatus} = req.body;

    // if (isAuthenticated({username, password}) === true) {
    //   const status = 401;
    //   const message = 'username  already exist';
    //   res.status(status).json({status, message});
    //   return
    // }

    fs.readFile("./orders.json", (err, data) => {
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

        //Add new order
        data.push({
            id: last_item_id + 1,
            customerName: customerName,
            customerAddress: customerAddress,
            customerPhone: customerPhone,
            orderDetails: orderDetails,
            orderStatus: orderStatus
        }); //add some data
        var writeData = fs.writeFile("./orders.json", JSON.stringify(data), (err, result) => {  // WRITE
            if (err) {
                const status = 401;
                const message = err;
                res.status(status).json({status, message});

            }
            res.status(200).json(
                {
                    id: last_item_id + 1,
                    customerName: customerName,
                    customerAddress: customerAddress,
                    customerPhone: customerPhone,
                    orderDetails: orderDetails,
                    orderStatus: orderStatus
                }
            );
        });
    });
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

server.use(router);

server.listen(3000, () => {
    console.log('Server is running now ');
    // const result = users.find(user => user.id === 3);
    // console.log(users)
});
