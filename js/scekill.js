window.addEventListener('load', function () {
  let lis = document.querySelector('.seckill_nav').querySelectorAll('li');
  let items = document.querySelectorAll('.goods_item');
  let dt = document.querySelector('.dt');
  let dd = document.querySelector('.dd');
  let hour = document.querySelector('.hour');
  let minute = document.querySelector('.minute');
  let second = document.querySelector('.second');
  for (let i = 0; i < lis.length; i++) {
    // 设置li的编号
    lis[i].setAttribute('index', i);
    lis[i].addEventListener('click', function () {
      for (let i = 0; i < lis.length; i++) {
        lis[i].className = '';
      }
      this.className = 'active';
      // 获取编号
      const index = this.getAttribute('index');
      // 排除思想
      for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
      }
      items[index].style.display = 'block';
    })
  }

  dt.addEventListener('mouseover', function () {
    dd.style.display = 'block'
  })
  dd.addEventListener('mouseover', function () {
    dd.style.display = 'block'
  })

  dt.addEventListener('mouseout', function () {
    dd.style.display = 'none'
  })
  dd.addEventListener('mouseout', function () {
    dd.style.display = 'none'
  })

  let inputTime = +new Date('2020-8-23 00:00:00');
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