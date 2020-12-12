const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

        if(load > 99) {
            clearInterval(int);
        }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    
}

/* Stackoverflow Reference for Function which maps loading time 0-100 and opactiy 1 to 0
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }