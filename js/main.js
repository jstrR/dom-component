 const notification = document.querySelector('#component');
 const disabler = document.querySelector('#checkbox');
 const info =  document.querySelector('.info');
 const left = document.querySelector('#left');
 const right = document.querySelector('#right');
 const radioWrapper = document.querySelector(".number");
 const items = [];
 const mas = ['Charge your smartphone in the living room', 'Be cool', 'Go mattress shopping', 'Do it sideways', 'Go old-school clock'];
 mas.forEach(t => {
	 let el = document.createElement("input");
	 el.setAttribute("name", "position");
	 el.setAttribute("type", "radio");
	 el.classList.add("tip-item-radio");
	 radioWrapper.insertBefore(el, right);
	 items.push(el);
 });

 let i = 0;
 items[0].setAttribute("checked", "checked");

 window.onload = function() {
    setTimeout(function () {
    	// body...
    		if(localStorage.getItem('display')){
    		notification.style.display = localStorage.getItem('display');
    	} else notification.style.display = 'block';
    }, 5000);
  };

function close() {
	// body...
	const crossmark = document.querySelector('#crossmark');
	crossmark.onclick = function () {
		// body...
		notification.style.display = 'none';
	}
}
close();

function check() {
	// body...
	if (disabler.checked == true){
    	localStorage.setItem('display','none');
    } else{
    	localStorage.setItem('display','block');
    }
}

const p = document.createElement("p");
p.style.padding = '10px';
p.innerText = mas[0];
info.appendChild(p);

items.forEach((c, ci) => c.addEventListener("click", e => setActive(ci)));

function setActive(ni) {
	items[i].removeAttribute("checked");
	i = ni;
	items[i].setAttribute("checked", "checked");
	p.innerText = mas[i];
}

function pageShift(sh) {
	let ni = i;
	ni += sh;
	if (ni < 0) ni = mas.length - 1;
	if (ni >= mas.length) ni = 0;
	setActive(ni);
}

right.addEventListener('click', () => {
	pageShift(1);
});

left.addEventListener('click', () => {
	pageShift(-1);
});

document.body.addEventListener('keyup', keySwitch);
function keySwitch(event) {
	if(event.keyCode == 39){
		pageShift(1);
	}
	if(event.keyCode == 37){
			pageShift(-1);
	}
	if(event.keyCode == 27){
		notification.style.display = 'none';
	}
}
