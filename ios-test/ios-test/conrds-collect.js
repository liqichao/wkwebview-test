//隐藏京东的顶部app下载条
//document.querySelector('#index_banner').style.display = 'none';
//var timeStamp = new Date().getTime();
//var noAddString = timeStamp + "_259200000";
//setCookie('downloadAppPlugIn_downCloseDate_m_index',noAddString,90);

//function setCookie(c_name,value,expiredays)
//{
//  var exdate=new Date();
//  exdate.setDate(exdate.getDate()+expiredays);
//  document.cookie=c_name+ "=" +escape(value)+
//  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
//}

var grabs = [
  {
    link: "http://m.jd.com/seckill/seckillList",
    selector: "[href='http://item.m.jd.com/product/1762527494.html'] .g-price",
    grab: {
      type: 'prop',
      propName: 'classList'
    }
  },
  {
    link: "http://m.jd.com/seckill/seckillList.action",
    selector: "[href='http://item.m.jd.com/product/1762527494.html'] .g-price",
    grab: {
      type: 'prop',
      propName: 'classList'
    }
  }
];

getContent(grabs);
window.localStorage.setItem('a','qwewq');
//alert(localStorage.getItem('a'));


function getContent(grabs) {//循环json规定的抓取规则，并输出抓取结果
  var length = grabs.length;
  for (var i = 0; i < length; i++) {
    var pure_url = formatUrlToPureUrl(grabs[i].link);
    var c_url = formatUrlToPureUrl(window.location.href);
    if (c_url == pure_url) { //执行该链接规则下的抓取，并以json的形式返回结果
      var ele = document.querySelector(grabs[i].selector);
      switch (grabs[i].grab.type) {
      case 'text':
        alert(ele.innerHTML);
        break;
      case 'prop':
        alert(ele[grabs[i].grab.propName]);
        break;
      default:
        alert('没有选择模式');
      }
    }
  }
}

function formatUrlToPureUrl(url) { //将输入的字符串进行格式化，去掉头部和尾部影响
  if (url.search(/http/) != -1) { //去掉头部的影响;
    if (url.search(/https/) != -1) {
      var result = url.substring(url.search(/https/) + 8);
      return removeUrlPara(result);
    } else {
      var result = url.substring(url.search(/http/) + 7);
      return removeUrlPara(result);
    }
  } else {
    return removeUrlPara(url)
  }
}

function removeUrlPara(urlWithoutHttp) { //去掉参数中的链接尾部参数部分
  var indexOfQM = urlWithoutHttp.indexOf('?');
  if (indexOfQM != -1) {
    return urlWithoutHttp.slice(0, indexOfQM);
  } else {
    return urlWithoutHttp
  }
}