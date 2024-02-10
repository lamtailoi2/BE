export default (err, req, res, next) => {
    if (!err)
       return next();
    console.log(err.stack);
    err.statusCode = err.statusCode || 500; //deafault status is 500
    err.status = err.status || 'error' //fail or error

    res.status( err.statusCode ).json({
        status: err.status,
        message: err.message
    })
    
}

