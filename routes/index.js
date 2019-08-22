exports.routeInit = (app) => {
    const rootController = require('../controller/rootController');
    app.route('/')
        .get(rootController.index);

    const signUpController = require('../controller/signUpController');
    app.route('/signUp')
        .get(signUpController.index)
        .post(signUpController.create);

    const loginController = require('../controller/loginController');
    app.route('/login')
        .post(loginController.create);
}