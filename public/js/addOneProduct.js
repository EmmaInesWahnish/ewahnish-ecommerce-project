import showOneProduct from './showOneProduct.js';
import build_header from './getHeader.js';
import getImage from './getImage.js';
import { LocalStorageService } from './localStorageService.js'

const addOneProduct = (addedProduct) => {
    getImage();

    let productId = '';

    const productRoute = `/api/productos/`;

    let headers_object = build_header();

    let auxurl = LocalStorageService.getItem("image");

    addedProduct.foto = auxurl;

    const requestOptions = {
        method: 'POST',
        headers: headers_object,
        body: JSON.stringify(addedProduct),
    };

    fetch(productRoute, requestOptions)
        .then(async res => {
            const data = await res.json();
            let productId
            const theProductId = data.theProductId;
            productId = theProductId;
            alert(`Alta de producto ${productId} exitosa`);
            showOneProduct(productId);
        })
        .catch(error => {
            console.log('Se produjo el siguiente error: ', error);
        })

}

export default addOneProduct;
