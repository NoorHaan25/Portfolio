const toTop= document.querySelector('.to-top');
window.addEventListener('scroll', function(){
  this.scrollY > 100 ? toTop.classList.add('active') : toTop.classList.remove('active');
});
toTop.addEventListener('click', function(){
  window.scrollTo({
    top:0
  })
})

// 
