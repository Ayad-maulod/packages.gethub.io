// Scroll animation for packages
const packages = document.querySelectorAll('.package');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

packages.forEach(pkg => observer.observe(pkg));

// Starfield background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
const stars = [];

for(let i = 0; i < 200; i++){
    stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5,
        d: Math.random() * 0.5
    });
}

function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'white';
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'white';
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
    });
    moveStars();
}

function moveStars(){
    for(let i=0;i<stars.length;i++){
        let s = stars[i];
        s.y += s.d;
        if(s.y > h) {
            s.y = 0;
            s.x = Math.random() * w;
        }
    }
}

function animate(){
    draw();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});
