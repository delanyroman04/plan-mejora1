export const acceso = (req, res, status=200, mjs="") => {
    res.status(status).json ({
        error:false,
        status:status,
        body:msj
    })
}

export const error = (req, res, estatus=400, mjs="") => {
    res.status(status).json({
        error:true,
        status:estatus,
        body:mjs
    })
}

