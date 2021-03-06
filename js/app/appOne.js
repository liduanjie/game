/**
 * author: lidunajie
 * function: thrree class, to create block, home, user 
 * 			and this will be use in main.js
 * usage:
 */
define(['app/appOne'], function() {

	var block = function() {
	  this.data = {

	  }

	  this.action = {

	  }
	}

	/**
	 * size , randon , step
	 * 如何把setInterval函数运用进来
	 */
	var home = function() {
	  this.data = {
	    $home: $('<div class="home"><i class="fa fa-home" style="font-size:100px;"></i></div>'),
	  }
	  var that = this;

	  this.home = function() {
	    $('#container').append(that.data.$home);
	  }

	  that.home();
	}

	var block = function(para) {
	  this.data = {
	    width: 100,
	    height: 200,
	    rotate: 30,
	    top: 100,
	    left: 100,
	    $block: $('<div class="block"></div>')
	  }
	  var that = this;


	  this.resize = function() {
	    that.data.width = para.width;
	    that.data.height = para.height;
	    that.data.rotate = para.rotate;
	    that.data.top = para.top;
	    that.data.left = para.left;
	    that.listener()
	  }
	  // effect/
	  this.block = function() {
	    $('#container').append(that.data.$block);
	  }

	  this.listener = function () {
	    that.data.$block.css({
	      'width': that.data.width,
	      'height':that.data.height,
	      'top': that.data.top,
	      'left': that.data.left
	    })
	    that.data.$block.css('transform', 'rotate(' + that.data.rotate + 'deg)')
	  }

	  that.block();
	  if (para) {
	     that.resize();
	   }

	}

	var user = function() {
	  this.data = {
	    step: 50,
	    top: 0,
	    left: 0,
	    range: [1060, 500],
	    user: $('<div class="user"><i class="fa fa-user"></i></div>')
	  }
	  var that = this;

	  this.reset = function(para) {
	    that.data.step = para.step;
	    that.data.left = para.left;
	    that.data.top = para.top;
	    that.data.range = para.range;
	    that.listener();
	  }

	  this.listener = function() {
	    that.data.user.css({'left': that.data.left, 'top': that.data.top});
	  }

	  this.new = function() {
	    $('#container').append(that.data.user);
	    that.action();
	  }

	  this.action = function() {
	    $(document).on('keydown', function(event) {
	      switch(event.which) {
	        // left
	        case 37: 
	          var left = that.data.left - that.data.step;
	          if (left < 0) {
	            left = 1060;
	          }
	          that.data.left = left;
	          break;
	        // right
	        case 39: 
	          var left = that.data.left + that.data.step;
	          if (left > that.data.range[0]) {
	            left = 0;
	          }
	          that.data.left = left;
	          break;
	        // down
	        case 40:
	          var top = that.data.top + that.data.step;
	          if (top > 500) {
	            top = 0;
	          }
	          that.data.top = top;
	          break;
	        // up
	        case 38: 
	         var top = that.data.top - that.data.step;
	         if (top < 0) {
	          top = that.data.range[1];
	         }
	          that.data.top = top;
	          break;
	      }
	      that.listener();
	    })
	  } 

	  that.new();

	}

	var obj = {
		block: block,
		home: home,
		user: user,
	}
	return obj;
})