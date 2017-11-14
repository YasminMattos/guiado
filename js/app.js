var containerImg = document.getElementById('container-img');


//folders' array
var codersPic = ['coder1', 'coder2', 'coder3', 'coder4'];
var wildPic = ['animal1', 'animal2', 'animal3', 'animal4'];
var catsPic = ['cat1', 'cat2', 'cat3', 'cat4'];

function iterFolder(arrayfolders, folders) {
  for(var i = 0; i < arrayfolders.length; i++){
    createImage(arrayfolders[i], folders);
  }

}

//add images function
function createImage(name, folder) {
  var image = document.createElement('img');
  image.setAttribute('src', 'assets/images/' + folder + '/' + name + '.jpg');
  image.setAttribute('alt', name);
  image.setAttribute('width', '250px');
  image.setAttribute('height', '300px');
  containerImg.appendChild(image);
}

iterFolder(codersPic, 'pic1');

iterFolder(wildPic, 'pic2');

iterFolder(catsPic, 'pic3');
