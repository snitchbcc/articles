---
thumbnail: content://search_bar.jpg
title: We Caught A Search Bar!
authors: Auguste Rame, Dale Bell
date: 24
tags:
  - local
---

Breaking news today from *The Snitch* headquarters - we have caught a search bar for our website. Sure, the search bar only works on computers, but you can’t complain. I mean, do you have a search bar? No? We didn’t think so. They’re very rare. It was quite the process to capture it - we had to drive out into the Virginia wilderness, set a trap with clickbait headlines, and wait until a search bar wandered in. It took a while, but we caught one! Somehow, it still managed to take off our editor Caleb’s left arm before we could sedate it, but our insurance probably covers lost limbs so it was totally worth it. 

And now we’ve got a search bar! It’s on the homepage of our website, but as we previously mentioned, it only works on computers, so we included another one below for you to try out for your viewing pleasure. Since the search bar is newly in captivity it can be a little skittish, don’t let that bother you though! Have fun!

<input type="text" class="search" placeholder="Search..." id="dancing_search" style="margin-top: 100px; transition: 0.1s transform; z-index: 100;" onkeydown="event.key === 'Enter' ? location.replace(`/search?q=${this.value}`) : 0">
			<script>
				const s = document.getElementById("dancing_search");
				document.getElementsByTagName("h2")[0].style.zIndex = 0;
				let tx = 0;
				let ty = 0;
				const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
				const random = (min, max) => Math.random() * (max - min) + min;
				s.addEventListener("click", event => {
					s.blur();
					while (Math.sqrt(
						((s.offsetLeft + s.offsetWidth / 2 + tx) - event.pageX) ** 2 + ((s.offsetTop + s.offsetHeight / 2 + 112 + ty) - event.pageY) ** 2
					) < 250)
						[tx, ty] = [random(-s.offsetLeft, window.innerWidth-s.offsetLeft-s.offsetWidth-20), random(-s.offsetTop, 40)];
					s.style.transform = `translate(${tx}px, ${ty}px)`;
					event.stopImmediatePropagation();
				});
				document.addEventListener("mousemove", event => {
					const distance = Math.sqrt(
						((s.offsetLeft + s.offsetWidth / 2 + tx) - event.pageX) ** 2 + ((s.offsetTop + s.offsetHeight / 2 + 112 + ty) - event.pageY) ** 2
					);
					if (distance < 200) {
						let a = clamp(tx + ((s.offsetLeft + s.offsetWidth / 2 + tx) - event.pageX) / 5, -s.offsetLeft, window.innerWidth-s.offsetLeft-s.offsetWidth-20);
						let b = clamp(ty + ((s.offsetTop + s.offsetHeight / 2 + 112 + ty) - event.pageY) / 5, -s.offsetTop, 40);
						if (a === tx && b === ty) [tx, ty] = [random(-s.offsetLeft, window.innerWidth-s.offsetLeft-s.offsetWidth-20), random(-s.offsetTop, 40)];
						else [tx, ty] = [a, b];
						s.style.transform = `translate(${tx}px, ${ty}px)`;
					}
				});
			</script>
