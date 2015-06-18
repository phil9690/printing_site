// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

var Slider = function() { this.initialize.apply(this, arguments) }
Slider.prototype = {

  initialize: function(slider) {
    this.ul = slider.children[0]
    this.li = this.ul.children

    // make <ul> as large as all <li>'s
    this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px'

    this.currentIndex = 0
  },

  goTo: function(index) {
    // filter invalid indices
    if (index < 0 || index > this.li.length -1)
      return

    // move <ul> left
    this.ul.style.left = '-' + (100 * index) + '%'

    this.currentIndex = index
  },

  goToNext: function() {
    if (this.currentIndex == this.li.length -1) {
      this.currentIndex = -1
    }
    this.goTo(this.currentIndex + 1)
  }
}
