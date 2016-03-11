require.config({
  baseUrl: './js',
  paths: {
    'app': 'app',
    'lib': 'lib'
  }
})

// main
//调用

require(['app/appOne', 'lib/jquery.min' ,'lib/angular.min'], function(obj){
  $(function() {
    var user1 = new obj.user();
    $('#change').on('click', function() {
      var xx = {};
      var para = {
        step: 5,
        left: 100,
        top: 100,
        direction: [100, 100],
        range: [300, 300],
        user: '<p class="user">nsadifjsjdfoasdji<p>'
      };
      user1.reset(para);
      new obj.user() 
      // for (var i=0;i<10;i++) {
      //   para.left+=10*i;
      //   i = new user();
      //   i.reset(para)
      // }
      // 配置文件
      var block1para = {
        width: 200,
        height: 300,
        rotate: 60,
        top: 300,
        left: 300,
      }

      var block2para = {
        width: 200,
        height: 700,
        rotate: 0,
        top: -100,
        left: 300,
      }
      var block1 = new obj.block(block1para);
      var block2 = new obj.block(block2para);
      var home1 = new obj.home()

    })
  })
})

