window.addEventListener('load', function () {
  let userid = document.querySelector('.userid');
  let saoma = document.querySelector('.saoma');
  let text = document.querySelector('#text')
  userid.addEventListener('click', function () {
    this.parentNode.nextElementSibling.childNodes[3].style.display = 'block';
    this.parentNode.nextElementSibling.childNodes[7].style.display = 'none';
  })
  saoma.addEventListener('click', function () {
    this.parentNode.nextElementSibling.childNodes[3].style.display = 'none';
    this.parentNode.nextElementSibling.childNodes[7].style.display = 'block';
  })
})