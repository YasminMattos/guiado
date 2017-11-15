var containerImg = document.getElementById('container-img');
var selectDiv = document.getElementById('select-div');
var subSelectDiv = null;

selectDiv.addEventListener('change', showPics);


//folders' array
var codersPic = ['coder1', 'coder2', 'coder3', 'coder4'];
var wildPic = ['animal1', 'animal2', 'animal3', 'animal4'];
var catsPic = ['cat1', 'cat2', 'cat3', 'cat4'];

function iterFolder(arrayfolders, folders) { //addImages
  if (subSelectDiv)
    containerImg.removeChild(subSelectDiv);
  
  subSelectDiv = document.createElement('div');
  containerImg.appendChild(subSelectDiv);


  for(var i = 0; i < arrayfolders.length; i++)
    createImage(arrayfolders[i], folders);
  
}

//add images function
function createImage(name, folder) {
 
  var image = document.createElement('img');
  image.setAttribute('src', 'assets/images/' + folder + '/' + name + '.jpg');
  image.setAttribute('alt', name);
  image.setAttribute('width', '250px');
  image.setAttribute('height', '300px');
  subSelectDiv.appendChild(image);
}

function showPics(event) {
  switch(true){
    case event.target.value === 'coders':
    iterFolder(codersPic, 'pic1');
    break;
    case event.target.value === 'wild':
    iterFolder(wildPic, 'pic2');
    break;
    case event.target.value === 'cats':
    iterFolder(catsPic, 'pic3');
    break;
    default:
    containerImg.innerHTML == '';
    /*iterFolder(codersPic, 'pic1');
    iterFolder(wildPic, 'pic2');
    iterFolder(catsPic, 'pic3');*/
  }
}






