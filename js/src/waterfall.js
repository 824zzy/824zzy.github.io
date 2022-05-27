/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'https://changba.com/s/A28banmi3NpwBwDXhxoI6g',// 唱吧链接
      img_link: 'http://ww1.sinaimg.cn/thumbnail/ca26ff18ly1fsmb6wmx4sj20hs0ftgzv.jpg',
      sheet_link: 'http://www.tan8.com/jitapu-15158.html',// 吉他谱链接
      title: 'Gravity(指弹)',// 作品名称
      original_author: '郑成河',// 原作者姓名
      description: '原作是个帅哥'
    }, {
      demo_link: 'https://changba.com/s/9FiuFkDGxL_P0Lo9Qa9grA',
      img_link: 'http://ww1.sinaimg.cn/mw690/ca26ff18ly1fsmad7lnhqj206y08pjro.jpg',
      sheet_link: 'http://101.37.252.154/jitapu-54476.html',
      title: '遇见你的那一刻（指弹）',
      original_author: '杨泽',
      description: 'BLACK'
    }, {
      demo_link: 'https://changba.com/s/plH4NTX0N7O0pLmHRFJaVg',
      img_link: 'http://ww1.sinaimg.cn/mw690/ca26ff18ly1fsmaw90gmbj205y06jq4a.jpg',
      sheet_link: 'https://baike.baidu.com/item/%E5%8F%AF%E4%B9%90/16019090?fr=aladdin',
      title: '可乐',
      original_author: '赵浴辰',
      description: '大一'
    }, {
      demo_link: 'https://changba.com/s/eDh54jIhSNIdX_yeUkKhXw',
      img_link: 'http://ww1.sinaimg.cn/mw690/ca26ff18ly1fsmayx7m4wj207w04xjtf.jpg',
      sheet_link: 'http://www.17jita.com/jitapu/img/Twilight.html',
      title: '黄昏(指弹)',
      original_author: '押尾光太郎',
      description: '指弹大师'
    }, {
      demo_link: 'https://changba.com/s/PpLbCP-HVY62mTPqBiObpQ',
      img_link: 'http://ww1.sinaimg.cn/mw690/ca26ff18ly1fsmb5mrlajj207705ewer.jpg',
      sheet_link: 'http://www.jitaba.cn/jitapu/082013/5356.html',
      title: '时间里的',
      original_author: '马頔',
      description: '民谣'
    },
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].original_author+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].sheet_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>原作者：' + content[i].original_author + '</p>' + '   <p>' + content[i].description + '  &emsp;  <a href="' + content[i].sheet_link + '">谱子</a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
