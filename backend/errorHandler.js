const errorHandler = (err,req,res,next) => {
    let statusCode = res.statusCode;
    
    res.status(statusCode).json({
        message:err.message
    })
}

export default errorHandler