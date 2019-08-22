exports.index = (req, res, next)=>{
    res.status(200).sendFile(path.resolve('dist') + '/signUp.html');
}

exports.create = (req, res, next)=>{
    const User = require('./models/user');
    User.findOne({username: req.body.username})
        .then( (userItem) => {
            if(userItem){
                return res.status(444).json({
                    msg : '이미 가입된 아이디가 있습니다.'
                })
            }
            const newUser = new User({
                username : req.body.username,
                password : req.body.password
            });

            newUser.save();
            return res.status(200).json({
                msg: '가입 성공'
            })
        }).catch(err => {
        console.log(err);
    })

}