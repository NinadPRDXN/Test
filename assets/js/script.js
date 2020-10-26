/* Author:
	Ninad Parkar
*/
var
counters = document.querySelectorAll('.counter'),
div = document.querySelector('.about_us'),
speed = 10,
toggle = document.querySelector('.about_us ul li:nth-child(2)'),
close = document.querySelector('.close'),
modal = document.querySelector('.modal'),
readMore = document.getElementById('read-more'),
moreText = document.getElementById('more-text');

window.onscroll = function(){
	// TOP
    if(div.getBoundingClientRect().top <= 0){
		counters.forEach(counter => {
			var updateCount = () => {
				var target = Number(counter.getAttribute('data-target'));
				var count = Number(counter.innerText);

				var inc = ( speed / 100 ) * target;

				// Check if target is reached
				if (count < target) {
					// Add inc to count and output in counter
					var val = Math.floor(count + inc);
					if (val > target) {
						// Skip this step
					}
					else {
						counter.innerText = val;
					}
					// Call function every given ms
					setTimeout(updateCount, 100);
				} else {
					counter.innerText = target;
				}
			};
			updateCount();
		});
	}
}

toggle.onclick = () => modal.style.display = 'block';

close.onclick = () => modal.style.display = 'none';

readMore.onclick = (e) => {
	e.preventDefault();
	if (moreText.style.transform == 'scaleY(1)') {
		moreText.style.transform = 'scaleY(0)';
		readMore.innerHTML = 'read more';
	}
	else {
		moreText.style.transform = 'scaleY(1)';
		readMore.innerHTML = 'close';
	}
}


















