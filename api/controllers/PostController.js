/********* 10no **********/
 module.exports = {
    //esta accion lo restrinjo si no estas autenticado
    wellcome:function(req, res){
        var username = req.user;
        console.log('esto es el username');
        console.log(username);
        User
            .find(username)
            .then(function(regs){
                console.log('esto es el usuario traido : D')
                console.log(regs);
                res.view('usuario/wellcome',{ regs:regs }); 
            })
      
    },

    //esta accion no esta restringida
    wellcometwo: (req, res) => {
        res.view('usuario/wellcometwo');
    }

    //NOTA: recuerda que para restringir mediante policies, debes de pasar la vista por el controlador :D 
 };
 
 