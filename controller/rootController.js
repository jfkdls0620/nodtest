exports.index = (req, res, next) => {
    res.status(200).sendFile(path.resolve('dist') + '/index.html');
}