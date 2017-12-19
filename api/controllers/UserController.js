/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	register: function(req, res) {
        var data = {
            username : req.body.username,
            email : user.body.email,
            password:  user.body.password
        }

        User
            .create(data)
            .then(function(){
                res.view('usuario/login');
            })
    }
};

