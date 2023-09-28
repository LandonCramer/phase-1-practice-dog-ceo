const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogImageContainer = document.querySelector('#dog-image-container');
const dogBreeds = document.querySelector('#dog-breeds')

function getImages() {
  fetch(imgUrl)
    .then((res) => res.json())
    .then((renderImg))
    .catch(console.error)
}

function renderImg(imgsArray) {
  const dogPhotos = imgsArray.message
  dogPhotos.forEach(renderDogPhoto)
  };

  function renderDogPhoto(photUrl) {
   const img = document.createElement('img')
   img.src = photUrl
   dogImageContainer.append(img)
  }

function fetchDogBreeds() {
fetch(breedUrl)
.then(res => res.json())
.then(renderDogBreeds)
.catch(console.log.error)
}

function renderDogBreeds(breeds) {
const breedsList = breeds.message

for(breed in breedsList) {
  const li = document.createElement('li');
  li.textContent = breed
  dogBreeds.append(li)
  li.addEventListener('click', (e) => {
e.target.style.color = 'yellow'
  }) 
}
}
const breedDropdown = document.querySelector('#breed-dropdown')
const breedListContainer = document.querySelector('#dog-breeds')

breedDropdown.addEventListener('change', (event) => {
  const selectedLetter = event.target.value
  const breedListItems = breedListContainer.getElementsByTagName('li')
 
  for (const listItem of breedListItems) {
    if(listItem.textContent.startsWith(selectedLetter)) {
      listItem.style.display = 'block'
    } else {
      listItem.style.display = 'none'
    }
  }
})



getImages();
fetchDogBreeds();