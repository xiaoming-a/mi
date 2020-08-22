window.addEventListener('load', function () {
  let site = document.querySelector('.site_slider');
  let ul = site.querySelector('ul');
  let aitem = site.querySelector('.a_item');
  let btnp = document.querySelector('.button_prev');
  let btnn = document.querySelector('.button_next');
  let sul = document.querySelector('.s_ul')
  let sitewidth = site.offsetWidth;
  let hour = document.querySelector('.hour');
  let minute = document.querySelector('.minute');
  let second = document.querySelector('.second');
  // console.log(ul.children.length);
  for (let i = 0; i < ul.children.length; i++) {
    let a = document.createElement('a');
    // 给a一个序号
    a.setAttribute('x', i)
    aitem.appendChild(a);
    a.addEventListener('click', function () {
      for (let index = 0; index < aitem.children.length; index++) {
        aitem.children[index].className = '';
      }
      this.className = 'a_act';
      // 点击a移动图片(ul)
      let x = this.getAttribute('x');
      num = x;
      cricle = x;
      animate(ul, -x * sitewidth)
    })
  }
  aitem.children[0].className = 'a_act';
  // 克隆第一张图
  let first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  let num = 0;
  let cricle = 0;
  //轮播图右侧按钮
  btnn.addEventListener('click', function () {
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    animate(ul, -num * sitewidth)
    cricle++;
    if (cricle == aitem.children.length) {
      cricle = 0;
    }
    cricleChange();
  });
  //轮播图左侧按钮
  btnp.addEventListener('click', function () {
    if (num == 0) {
      num = ul.children.length - 1;
      ul.style.left = -num * sitewidth + 'px';
    }
    num--;
    animate(ul, -num * sitewidth)
    cricle--;
    if (cricle < 0) {
      cricle = aitem.children.length - 1;
    }
    cricleChange();
  });

  function cricleChange() {
    for (let index = 0; index < aitem.children.length; index++) {
      aitem.children[index].className = '';
    }
    aitem.children[cricle].className = 'a_act';
  }

  let timer = setInterval(function () {
    btnn.click();
  }, 3000);

  sul.addEventListener('mouseenter', function () {
    clearInterval(timer);
    timer = null;
  });
  sul.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
      btnn.click();
    }, 3000)
  });

  let inputTime = +new Date('2020-8-23 20:00:00');
  setInterval(countDown, 1000)

  function countDown() {
    let nowTime = +new Date(); // 返回的是当前时间总的毫秒数
    let times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
    let h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
    let m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m;
    let s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
  }
})