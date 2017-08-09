var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var section = document.getElementById('imagenes');
for (var i = 0; i < pictures.length; i++) {
  var pandas = document.createElement('img');
  pandas.setAttribute('src', pictures[i]);
  pandas.setAttribute('class', 'pandas');
  section.appendChild(pandas);
}