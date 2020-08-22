window.addEventListener('load', function () {
  let dd = document.querySelector('.dd');
  let dditem = dd.querySelectorAll('.dd-item');
  let sitelist = document.querySelector('.site_list')
  let siitem = sitelist.querySelectorAll('.si_item');
  // 导航模块 dd
  for (let i = 0; i < dditem.length; i++) {
    dditem[i].addEventListener('mouseenter', function () {
      this.children[1].style.display = 'block'
    });
    dditem[i].addEventListener('mouseleave', function () {
      this.children[1].style.display = 'none'
    });
  };
  // 导航模块 site_list
  for (let i = 0; i < siitem.length; i++) {
    siitem[i].addEventListener('mouseenter', function () {
      this.children[1].style.display = 'block';
    });
    siitem[i].addEventListener('mouseleave', function () {
      this.children[1].style.display = 'none';
    });
  };
})