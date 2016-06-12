//左侧导航切换
$(function(){
	
	$(".level1-nav-a").click(function(){
		$(".level1-nav-a").removeClass("active");
		$(this).addClass("active");
		$(this).parent().siblings("li").find("ul").removeClass("show").addClass("hide");
		var $ul = $(this).siblings("ul");
		if($ul.is(":hidden")){
			$ul.removeClass("hide").addClass("show");
		}else{
			$ul.removeClass("show").addClass("hide");
		}
	})
})

//上传文件
function uploadFile(target){
	$(target).siblings("input[type='file']").trigger("click");
}


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/*徽标数*/
var __badge = $(".badge");
for (var i = 0; i < __badge.length; i++) {
    var countNumber = parseInt(__badge[i].getAttribute('count'));
    if (countNumber) {
        var _limited = parseInt(__badge[i].getAttribute('limited'));
        var _sup = document.createElement('sup');
        _sup.className = "badge-count";
        __badge[i].appendChild(_sup);
        if (_limited && countNumber > _limited) {
            _sup.innerHTML = _limited + '+';
        } else {
            _sup.innerHTML = __badge[i].getAttribute('count');
        }
    } else {
        __badge[i].addClass('dot');
    }
}

//table表格全选功能
//$(".table thead .checkbox input[type=checkbox]").click(function(){
//	var tbody_checkboxs = $(this).closest('.table').find("tbody .checkbox input[type=checkbox]");
//	tbody_checkboxs.prop("checked",$(this).prop("checked"));
//})

