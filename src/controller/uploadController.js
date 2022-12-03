import usersService from '../Models/Users.js';

export const testRoute = async (req, res,) => {
  res.json({ message: `Soy una ruta de prueba ;)` })
}

export const uploadRoute = async (req, res, next) => {

  let url = '/images/' + req.file.filename
  let avatar = {
    avatar: url
  }

  console.log("here is the avatar >>> ", avatar)
  let file = req.file
  if (!file) {
    const error = new Error('Error subiendo archivo')
    error.httpStatusCode = 400
    return next(error)
  }
  
}
