var e = document.getElementById('heading');
e.addEventListener('mouseover',function(ev){
	console.log('called');
	e.innerHTML='Page not found';
	e.style.fontSize='50px';

})
e.addEventListener('mouseout',function(ev){
	e.innerHTML='404';
	e.style.fontSize='100px';
})