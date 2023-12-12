window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
      const button = document.getElementById("scrollTopButton");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = "block"; // 当滚动位置大于20时显示按钮
      } else {
          button.style.display = "none"; // 否则隐藏按钮
      }
  }
  
  // 点击按钮时返回顶部
  function scrollToTop() {
      document.body.scrollTop = 0; // 兼容旧版本浏览器
      document.documentElement.scrollTop = 0; // 现代浏览器
    }