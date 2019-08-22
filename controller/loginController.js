exports.create = (req, res, next)=>{
    res.status(200).sendFile(path.resolve('dist') + '/signUp.html');
}