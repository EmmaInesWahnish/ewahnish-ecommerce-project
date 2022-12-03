import auxiliarService from '../Models/Auxiliar.js';

export const testRoute = async (req, res,) => {
  res.json({ message: `Soy una ruta de prueba ;)` })
}

export const uploadRoute = async (req, res, next) => {

  let url = '/images/' + req.file.filename
  let auxurl = {
    auxurl: url
  }
  let file = req.file
  if (!file) {
    const error = new Error('Error subiendo archivo')
    error.httpStatusCode = 400
    return next(error)
  }
  try {
    let response = await auxiliarService.findOneAndUpdate({ _id: 1 }, auxurl, { returnOriginal: false });
    return response
  }
  catch (error) {
    console.log(error)
  }

}
