window.addEventListener("load", solve);

function solve() {

  let firstNameField = document.getElementById('first-name');
  let lastNameField = document.getElementById('last-name');
  let ageField = document.getElementById('age');
  let storytitleField = document.getElementById('story-title');
  let genreField = document.getElementById('genre');
  let storyField = document.getElementById('story');
  let publishBtn = document.getElementById('form-btn');
  let saveBtn = document.createElement('button');
  saveBtn.classList = 'save-btn';
  let editBtn = document.createElement('button');
  editBtn.classList = 'edit-btn';
  let deleteBtn = document.createElement('button');
  deleteBtn.classList = 'delete-btn';

  publishBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let story = storyField.value;
    let li = document.createElement('li');
    li.className = 'story-info';
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let pAge = document.createElement('p');
    let pTitle = document.createElement('p');
    let pGenre = document.createElement('p');
    let pStory = document.createElement('p');


    if (firstNameField.value && lastNameField.value && 
       ageField.value  && storytitleField.value && genreField.value) {
        
        h4.innerText = `Name: ${firstName} ${lastName}`;

        pAge.innerText = `Age: ${ageField.value}`;

        pTitle.innerText = `Title: ${storytitleField.value}`;

        pGenre.innerText = `Genre: ${genreField.value}`;

        pStory.innerText = storyField.value;

        article.appendChild(h4);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pStory);
        li.appendChild(article);

        saveBtn.innerText = 'Save Story';
        editBtn.innerText = 'Edit Story';
        deleteBtn.innerText = 'Delete Story';

        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

       document.getElementById('preview-list').appendChild(li);
 
    };
    firstNameField.value = '';
    lastNameField.value = '';
    ageField.value = '';
    storytitleField.value = '';
    storyField.value = '';

    event.target.disabled = true

    editBtn.addEventListener('click', function (ev) {

      firstNameField.value = firstName;
      lastNameField.value = lastName;
      ageField.value = pAge.innerText;
      storytitleField.value = pStory.innerText;
      storyField.value = story;
      event.target.disabled = false;

      ev.target.parentElement.remove()
    });
    saveBtn.addEventListener('click', function (event) {
      let divMain = document.getElementById('main');
      while(divMain.firstChild){
        divMain.firstChild.remove()
      }
      let h1 = document.createElement('h1');
      h1.innerText = 'Your scary story is saved!';
      divMain.appendChild(h1);
      
    });
    deleteBtn.addEventListener('click', function (event) {
      event.target.parentElement.remove();
      publishBtn.disabled = false;
    });
    
  });
  

}
