/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	register: function(req, res) {
        var data = {
            email : req.body.email,
            username : req.body.username,
            password:  req.body.password
        }

        User
            .create(data)
            .then(function(){
                res.view('usuario/login');
            })
    }
};

