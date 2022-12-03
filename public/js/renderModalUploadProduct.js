import build_header from './getHeaderUpload.js';

let headers_object= build_header()

const renderModalUploadProduct = (result) => {

  document.getElementById('uModal').style.display = 'block';

  let closeModal = document.getElementById('uClose');

  const here = document.getElementById('here');

  here.innerHTML = `<div id="root">
                            <form id="uploadForm">
                              <div class="m-2">
                                <label for="files">Select file</label>
                                <input id="files" type="file" name='FOTO' multiple/>
                              </div>
                              <div class="m-2">
                                <button type="submit" class="btn btn-success">Enviar</button>
                              </div>
                            </form>
                    </div>`;

  let uploadForm = document.getElementById('uploadForm')

  let test = document.getElementById("files").value

  console.log("La prueba ", test)

  uploadForm.addEventListener('submit', submitForm)

  function submitForm(e) {
    const files = document.getElementById("files");
    let formData = new FormData();
    for (let i = 0; i < files.files.length; i++) {
      formData.append("FOTO", files.files[i]);
    }
    const upload_route = "/upload_files";
    const requestOptions = {
      method: 'POST',
      headers: headers_object,
      body: formData,
    }
    fetch(upload_route, requestOptions)
      .then((res) => {
        const data = res.json();
        console.log("La respuesta ",data)
      })
      .finally(document.getElementById('uModal').style.display = 'none')
      .catch((err) => ("Error occured", err))
  }

  closeModal.addEventListener('click', function () {
    document.getElementById('uModal').style.display = 'none';
  })

}

export default renderModalUploadProduct;