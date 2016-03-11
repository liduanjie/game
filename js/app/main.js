require.config({
  baseUrl: '../js',
  paths: {
    'lib': 'lib',
    'app': 'app'
  }
})

// main
//调用

require(['app/appOne', 'app/control', 'lib/jquery.min', 'lib/angular.min'], function($){
    console.log(obj)
    
    var user1 = new user();

    $('#change').on('click', function() {
      var xx = {};
      var para = {
        step: 10,
        left: 100,
        top: 100,
        range: [300, 300],
        user: '<p class="user">nsadifjsjdfoasdji<p>'
      };
      console.log(user1)
      user1.reset(para);
      new user()
      // for (var i=0;i<10;i++) {
      //   para.left+=10*i;
      //   i = new user();
      //   i.reset(para)
      // }
    })

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
    var block1 = new block(block1para);
    var block2 = new block(block2para);
    var home1 = new home()

})