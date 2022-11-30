const renderModalUploadProduct = () => {

    document.getElementById('uModal').style.display = 'block';

    let closeModal = document.getElementById('uClose');

    const here = document.getElementById('here');

    here.innerHTML = `<div id="root">
                            <h2 class="form_title">Formulario para upload de archivos</h2>
                            <form action="/api/up" enctype="multipart/form-data" method="POST">
                              <div class="m-2">
                                <input id="avatar"  accept="image/*" type="file" name="avatar" />
                                <p><img id="output" width="200" /></p>
                              </div>
                              <div class="m-2">
                                <input type="submit" value="Upload File" class="btn btn-success" />
                              </div>
                            </form>
                    </div>`;

    let root = document.getElementById('root')

    let avatar = document.getElementById('avatar')

    avatar.addEventListener('change', (e) => {
        let avatar = document.getElementById('avatar');
        url = avatar.Name
    })

    root.addEventListener('submit', submitForm)

    //avatar.addEventListener('change', showValue);

    function submitForm(e) {
        e.preventDefault();
        document.getElementById('uModal').style.display = 'none';
    }

    closeModal.addEventListener('click', function () {
        document.getElementById('uModal').style.display = 'none';
    })

    console.log("theUrl >>> ", url)

    return url

}

export default renderModalUploadProduct;