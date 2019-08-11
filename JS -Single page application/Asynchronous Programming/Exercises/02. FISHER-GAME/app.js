function attachEvents() {
  const labels = {
    angler: 'Angler',
    weight: 'Weight',
    species: 'Species',
    location: 'Location',
    bait: 'Bait',
    captureTime: 'Capture Time',
    update: 'Update',
    delete: 'Delete'
  };

  const htmlElements = {
    catchesDiv: document.getElementById('catches'),
    loadBtn: document.querySelector('[class = load]'),
    addBtn: document.querySelector('[class = add]'),
    updateBtn: document.querySelector('[class = update]'),
    deleteBtn: document.querySelector('[class = delete]'),
    fieldset: document.getElementById('addForm')
  };
  htmlElements.catchesDiv.children[0].style.display = 'none';
  htmlElements.loadBtn.addEventListener('click', getAllCatches);
  htmlElements.addBtn.addEventListener('click', createCatch);

  function getAllCatches() {
    const url = 'https://fisher-game.firebaseio.com/catches.json';
    customFetch(url, {}, loadCatches);
  }

  function loadCatches(data) {
    resetCatches(); //TODO method implementation - don't work correctly!!!!
    if (data !== null) {
      let catches = Object.entries(data);
      for (let catche of catches) {
        let dataId = catche[0];
        let catcheElement = htmlElements.catchesDiv.children[0].cloneNode(true);
        catcheElement.setAttribute('data-id', dataId);
        catcheElement.querySelector('input.angler').value = catche[1].angler;
        catcheElement.querySelector('input.weight').value = catche[1].weight;
        catcheElement.querySelector('input.species').value = catche[1].species;
        catcheElement.querySelector('input.location').value = catche[1].location;
        catcheElement.querySelector('input.bait').value = catche[1].bait;
        catcheElement.querySelector('input.captureTime').value = catche[1].captureTime;
        catcheElement.querySelector('button.update').addEventListener('click', updateCatch);
        catcheElement.querySelector('button.delete').addEventListener('click', deleteCatch);
        catcheElement.style.display = 'block';

        htmlElements.catchesDiv.appendChild(catcheElement);

      }
    } else {
      console.log('No catchers!!!!');
    }
  }


  function createCatch() {
    const url = 'https://fisher-game.firebaseio.com/catches.json';
    let data = getCatchData(htmlElements.fieldset);
    let catchNew = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    customFetch(url, catchNew, refresh)
  }

  function updateCatch(event) {
    const currentCatchDiv = event.currentTarget.parentNode;
    const catchId = currentCatchDiv.getAttribute('data-id');
    const url = `https://fisher-game.firebaseio.com/catches/${catchId}.json`;
    let data = getCatchData(currentCatchDiv);
    let catchUpdate = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    customFetch(url, catchUpdate, refresh);


  }

  function deleteCatch(event) {
    const currentCatchDiv = event.currentTarget.parentNode;
    const catchId = currentCatchDiv.getAttribute('data-id');
    const url = `https://fisher-game.firebaseio.com/catches/${catchId}.json`;

    let catchDelete = {
      method: 'DELETE',
      body: JSON.stringify({catchId}),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    customFetch(url, catchDelete, removeCatch(currentCatchDiv));


  }


  function getCatchData(htmlElement) {
    let result = {
      angler: htmlElement.querySelector('input.angler').value,
      weight: htmlElement.querySelector('input.weight').value,
      species: htmlElement.querySelector('input.species').value,
      location: htmlElement.querySelector('input.location').value,
      bait: htmlElement.querySelector('input.bait').value,
      captureTime: htmlElement.querySelector('input.captureTime').value
    };
    return result;

  }

  function customFetch(url, obj, method) {
    fetch(url, obj)
      .then(handler)
      .then(method)
  }

  function handler(responce) {
    if (responce.status > 400) {
      throw new Error(`Error: ${responce.statusText}`);
      // error(`Error: ${responce.status} ${responce.statusText}`);
    }
    return responce.json();
  }

  function refresh() {
    htmlElements.loadBtn.click();
  }
 // TODO method implementation - don't work correctly!!!!
  function resetCatches() {
    //htmlElements.catchesDiv.innerHTML = '';
    let children = htmlElements.catchesDiv.children;
    console.log(children);
    if (children.length > 1) {

      if (htmlElements.catchesDiv.hasChildNodes()) {
        for (let i = 1; i < children.length; i++) {

          htmlElements.catchesDiv.removeChild(htmlElements.catchesDiv.children[i]);
        }
      //  htmlElements.catchesDiv.removeChild(htmlElements.catchesDiv.childNodes[1]);
      }

    }
  }

  function removeCatch(catche) {
    catche.remove();
  }
}

attachEvents();

