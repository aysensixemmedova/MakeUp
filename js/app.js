
  $(".nav-ico").on("click",function(){
    // $(this).find("#ico-rem").toggle()
     $(this).find("#ico-bar").slideDown()
     $(".sidebar-left").slideDown(500)
  })

  $(".close-ico").click(function(){
    $(".sidebar-left").slideUp(200)

  })

  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $("#header .menu").addClass("menu-active")
        }
        else{
           $("#header .menu").removeClass("menu-active")
        }
  })



  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $("#header .menu-mobile").addClass("menu-active")
        }
        else{
           $("#header .menu-mobile").removeClass("menu-active")
        }
  })

