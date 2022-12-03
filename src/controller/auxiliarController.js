import auxiliarService from '../Models/Auxiliar.js';

export const saveAuxurl = async (res, req) => {

    let _id = 1
    let auxurl = '/images/GPSC.png'
    try {
        await auxiliarService.create({
            _id: _id,
            auxurl: auxurl
        })
    }
    catch (error) {
        console.log(error)
    }
}