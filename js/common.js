$(document).ready(function() {
  jQuery(function($){
    $("#modal-form #phone").mask("8 (999) 999-9999");
  });
  jQuery(function($){
    $("#modal-formOne #phone").mask("8 (999) 999-9999");
  });
	jQuery(function($){
    $("#modal-formTwo #phone").mask("8 (999) 999-9999");
  });
	jQuery(function($){
    $("#modal-formThree #phone").mask("8 (999) 999-9999");
  });
	jQuery(function($){
    $("#modal-formFour #phone").mask("8 (999) 999-9999");
  });
  jQuery(function($){
    $("#modal-formFive #phone").mask("8 (999) 999-9999");
  });
  jQuery(function($){
    $("#modal-formSix #phone").mask("8 (999) 999-9999");
  });
  jQuery(function($){
    $("#modal-formSeven #phone").mask("8 (999) 999-9999");
  });
  jQuery(function($){
    $("#modal-formEight #phone").mask("8 (999) 999-9999");
  });
  jQuery(function($){
    $("#inlineForm #phone").mask("8 (999) 999-9999");
  });
	$('.confidense a').click(function(e) {
		e.preventDefault();
		return false;
	});
	$('#open-galery').click(function(e) {
		e.preventDefault();
		$('a.fancybox[rel="gallery1"]').click();
	});
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		padding:0
	});
	if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            $('body').css({'background' : '#000'});
        }
	$('.strah').fancybox({
		padding:0,
		beforeShow: function(){
		  $(".fancybox-skin").css("backgroundColor","transparent");
		 }
	})
	$('.bags-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true
	});
  $('a.open-formZero').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-form'),
      afterShow:function(){
        $('#modal-form input[name="yam"]').val(yam);
        $('#modal-form input[name="tag"]').val(tag);
      }
    });
  })
	$('a.open-form').click(function(e){
		var yam = $(this).data('yam');
    var tag = $(this).data('tag');
		e.preventDefault();
		$.fancybox({
			content: $('#modal-formOne'),
			afterShow:function(){
				$('#modal-formOne input[name="yam"]').val(yam);
        $('#modal-formOne input[name="tag"]').val(tag);
			}
		});
	})
  $('a.open-formTwo').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    console.log(tag);
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formTwo'),
      afterShow:function(){
        $('#modal-formTwo input[name="yam"]').val(yam);
        $('#modal-formTwo input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formThree').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formThree'),
      afterShow:function(){
        $('#modal-formThree input[name="yam"]').val(yam);
        $('#modal-formThree input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formThree').click(function(e){
    var yam = $(this).data('yam');
    var tag = 'акция_конкретной_компании_';
    if (yam === 'get_share_netflix') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях NETFLIX');
      tag += 'NETFLIX';
    } else if (yam === 'get_share_facebook') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях FACEBOOK');
      tag += 'FACEBOOK';
    } else if (yam === 'get_share_amazon') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях AMAZON');
      tag += 'AMAZON';
    } else if (yam === 'get_share_tesla') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях TESLA');
      tag += 'TESLA';
    } else if (yam === 'get_share_apple') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях APPLE');
      tag += 'APPLE';
    } else if (yam === 'get_share_microsoft') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях MICROSOFT');
      tag += 'MICROSOFT';
    } else if (yam === 'get_share_google') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях GOOGLE');
      tag += 'GOOGLE';
    } else if (yam === 'get_share_disney') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях DISNAY');
      tag += 'DISNAY';
    } else if (yam === 'get_share_boa') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях BANK OF AMERICA');
      tag += 'BANK_OF_AMERICA';
    } else if (yam === 'get_share_intel') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях INTEL');
      tag += 'INTEL';
    } else if (yam === 'get_share_boeing') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях BOEING');
      tag += 'BOEING';
    } else if (yam === 'get_share_nvidia') {
      $('#modal-formThree .form-title').html('Узнайте, сколько можно заработать на акциях NVIDIA');
      tag += 'NVIDIA';
    }
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formThree'),
      afterShow:function(){
        $('#modal-formThree input[name="yam"]').val(yam);
        $('#modal-formThree input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formFour').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formFour'),
      afterShow:function(){
        $('#modal-formFour input[name="yam"]').val(yam);
        $('#modal-formFour input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formFive').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formFive'),
      afterShow:function(){
        $('#modal-formFive input[name="yam"]').val(yam);
        $('#modal-formFive input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formSix').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formSix'),
      afterShow:function(){
        $('#modal-formSix input[name="yam"]').val(yam);
        $('#modal-formSix input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formSeven').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formSeven'),
      afterShow:function(){
        $('#modal-formSeven input[name="yam"]').val(yam);
        $('#modal-formSeven input[name="tag"]').val(tag);
      }
    });
  })
  $('a.open-formEight').click(function(e){
    var yam = $(this).data('yam');
    var tag = $(this).data('tag');
    e.preventDefault();
    $.fancybox({
      content: $('#modal-formEight'),
      afterShow:function(){
        $('#modal-formEight input[name="yam"]').val(yam);
        $('#modal-formEight input[name="tag"]').val(tag);
      }
    });
  })
  if(window.matchMedia('(max-width: 1200px)').matches) {
    $('div.videoBlock').click(function (e) {
      e.preventDefault();
      $.fancybox({
        type: 'iframe',
        href: 'https://www.youtube.com/embed/p1Od-V4yWCs?autoplay=1&rel=0',
        iframe: {
          scrolling: 'auto',
          preload: true
        }
      });
    })
  } else {
    $('div.videoBlock').click(function (e) {
      e.preventDefault();
      $.fancybox({
        type: 'iframe',
        href: 'https://www.youtube.com/embed/p1Od-V4yWCs?autoplay=1&rel=0',
        iframe: {
          scrolling: 'auto',
          preload: true
        },
        width: '899px'
      });
    })
  }
  if(window.matchMedia('(max-width: 1200px)').matches)
  {
    $('div.rect').click(function(e){
      e.preventDefault();
      $.fancybox({
        type: 'iframe',
        href: 'https://www.youtube.com/embed/1s7LCEf8z6g?autoplay=1&rel=0',
        iframe: {
          scrolling: 'auto',
          preload: true
        }
      });
    })
  } else {
    $('div.rect').click(function(e){
      e.preventDefault();
      $.fancybox({
        type: 'iframe',
        href: 'https://www.youtube.com/embed/1s7LCEf8z6g?autoplay=1&rel=0',
        iframe: {
          scrolling: 'auto',
          preload: true
        },
        width : '899px'
      });
    })
  }
  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    var el = anchor.attr('href');
    if (el === '#home') {
      $('html, body').stop().animate({
        scrollTop: 0
      }, 800);
    } else {
      $('html, body').stop().animate({
        scrollTop: $(el).offset().top
      }, 800);
    }
    e.preventDefault();
  });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		$this_form = $(this);
		e.preventDefault();
    yaCounter44006659.reachGoal('push_data');
		$.ajax({
			type: "post",
			url: "/mail.php",
			data: $this_form.serialize(),
      success:function (data) {
        if(data.indexOf('script') + 1) {
          $this_form.trigger('reset');
          $.fancybox({
            content:data,
            afterClose:function(){
              $('input[name="yam"]',$this_form).val('');
              $('input[name="tag"]',$this_form).val('')
            }
          })
          setTimeout(function(){
            $.fancybox.close();
          },5000)
          goog_report_conversion();
        }else{
          if ($this_form && $this_form[0] && $this_form[0][4] && $this_form[0][4].name === 'yam') {
            if ($this_form[0][4].value === 'ask_call') {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formTwo')
                    })
                  },500)
                }
              })
            } else if (
              $this_form[0][4].value === 'list_shares_first_block' ||
              $this_form[0][4].value === 'list_shares_fouth_block' ||
              $this_form[0][4].value === 'list_shares_sixth_block' ||
              $this_form[0][4].value === 'list_shares_ninth_block'
            ) {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formOne')
                    })
                  },500)
                }
              })
            } else if (
              $this_form[0][4].value === 'get_share_netflix' ||
              $this_form[0][4].value === 'get_share_facebook' ||
              $this_form[0][4].value === 'get_share_amazon' ||
              $this_form[0][4].value === 'get_share_tesla' ||
              $this_form[0][4].value === 'get_share_apple' ||
              $this_form[0][4].value === 'get_share_microsoft' ||
              $this_form[0][4].value === 'get_share_google' ||
              $this_form[0][4].value === 'get_share_disney' ||
              $this_form[0][4].value === 'get_share_boa' ||
              $this_form[0][4].value === 'get_share_intel' ||
              $this_form[0][4].value === 'get_share_boeing' ||
              $this_form[0][4].value === 'get_share_nvidia'
            ) {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formThree')
                    })
                  },500)
                }
              })
            } else if ($this_form[0][4].value === 'share_cons') {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formFive')
                    })
                  },500)
                }
              })
            } else if ($this_form[0][4].value === 'share_balance') {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formSix')
                    })
                  },500)
                }
              })
            } else if ($this_form[0][4].value === 'share_progressive') {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formSeven')
                    })
                  },500)
                }
              })
            } else if ($this_form[0][4].value === 'get_individual_portfolio') {
              $.fancybox({
                content: data,
                afterClose: function () {
                  setTimeout(function () {
                    $.fancybox({
                      content: $('#modal-formFour')
                    })
                  }, 500)
                }
              })
            } else if ($this_form[0][4].value === 'video_client_story') {
              $.fancybox({
                content:data
              })
            } else if ($this_form[0][4].value === 'i_want_port_likeThis') {
              $.fancybox({
                content: data,
                afterClose: function () {
                  setTimeout(function () {
                    $.fancybox({
                      content: $('#modal-formEight')
                    })
                  }, 500)
                }
              })
            } else {
              $.fancybox({
                content:data,
                afterClose:function(){
                  setTimeout(function(){
                    $.fancybox({
                      content: $('#modal-formOne')
                    })
                  },500)
                }
              })
            }
          } else {
            $.fancybox({
              content:data,
              afterClose:function(){
                setTimeout(function(){
                  $.fancybox({
                    content: $('#modal-formOne')
                  })
                },500)
              }
            })
          }
        }
      }
		})
		return false;
	});

});