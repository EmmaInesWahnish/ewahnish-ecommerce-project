const renderModalUploadProduct = (result) => {

  document.getElementById('uModal').style.display = 'block';

  let closeModal = document.getElementById('uClose');

  const here = document.getElementById('here');

  here.innerHTML = `<div id="root">
                            <h2 class="form_title">Upload</h2>
                            <form id="upload_form">
                              <div class="m-2">
                              <label for="upload_file">Select file</label>
                                <input id="upload_file" type="file" />
                             </div>
                              <div class="m-2">
                                <button id: "upload" type="submit" class="btn btn-success">Enviar</button>
                              </div>
                            </form>
                    </div>`;

  let root = document.getElementById('root')

  let upload = document.getElementById('upload')

  upload.addEventListener('submit', submitForm)

  function submitForm(e) {
    e.preventDefault();
    console.log("trato de mandar")
    const files = document.getElementById("upload_file");
    const formData = new FormData();
    for (let i = 0; i < files.files.length; i++) {
      formData.append("files", files.files[i]);
    }

    let upload_route = "/upload_files";

    const requestOptions = {
      method: 'POST',
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    fetch(upload_route, requestOptions)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => ("Error occured", err));
    document.getElementById('uModal').style.display = 'none';
  }

  closeModal.addEventListener('click', function () {
    document.getElementById('uModal').style.display = 'none';
  })


}

export default renderModalUploadProduct;