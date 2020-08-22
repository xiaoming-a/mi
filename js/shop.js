$(function () {
  // 1.全选
  $(".checkall").change(function () {
    // console.log($(this).prop("checked"));
    $(".j-checkbox").prop("checked", $(this).prop("checked"))
  });

  $(".j-checkbox").change(function () {
    // console.log();
    if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
      $(".checkall").prop("checked", true)
    } else {
      $(".checkall").prop("checked", false)
    }
  });
  //商品加
  $(".increment").click(function () {
    let n = $(this).siblings(".itxt").val();
    // console.log(n);
    n++;
    $(this).siblings(".itxt").val(n);
    let p = $(this).parents(".p-num").siblings(".p-price").html();
    // console.log(p);
    p = p.substr(0, p.length - 1);
    // console.log(p);
    $(this).parents(".p-num").siblings(".p-sum").html((n * p).toFixed(2) + "元");
    getSum();
  });
  // 商品减
  $(".decrement").click(function () {
    let n = $(this).siblings(".itxt").val();
    if (n == 1) {
      return false;
    }
    n--;
    // 小计商品数量
    $(this).siblings(".itxt").val(n);
    let p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(0, p.length - 1);
    $(this).parents(".p-num").siblings(".p-sum").html((n * p).toFixed(2) + "元");
    getSum();
  });
  // 修改商品计数框的值
  $(".itxt").change(function () {
    let n = $(this).val();
    let p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(0, p.length - 1);
    $(this).parents(".p-num").siblings(".p-sum").html((p * n).toFixed(2) + "元");
    getSum();
  });

  //计算总额
  getSum();

  function getSum() {
    let count = 0; //总计数
    let money = 0; //总额
    $(".itxt").each(function (i, ele) {
      count += parseInt($(ele).val());
    })
    $(".operation i").text(count);

    $(".p-sum").each(function (i, ele) {
      money += parseFloat($(ele).text().substr(0, ($(ele).text()).length - 1));
    })
    $(".price-sum em").text(money.toFixed(2));
  }

  $(".p-action a").click(function () {
    $(this).parents(".cart-item").remove();
    getSum();
  })
})