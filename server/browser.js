const getViewPortWidth = function() {
    let IEDocument = document.documentElement;
    if(window.innerWidth) {
      return window.innerWidth;
    } else if(IEDocument.clientWidth) {
      return IEDocument.clientWidth;
    } else if(IEDocument.getElementsByTagName('body')[0]) {
      return IEDocument.getElementsByTagName('body')[0].clientWidth;
    }
  }
  const viewportWidth = getViewPortWidth()


  $(window).width()