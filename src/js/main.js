const canvas = document.getElementById('particle-canvas');
const button = document.getElementById('fireworkButton');

const gravity = 0.11;
const bounceFactor = 0.4;

function createFireworkEffect(x, y) {
    const ctx = canvas.getContext('2d');

    const particles = [];
    const numParticles = 150;
    const colors = ['#944c4c', '#94774c', '#789034', '#34906d', '#346490', '#543490', '#6b3490', '#90345a'];

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: x,
            y: y,
            vx: Math.random() * 6 - 3,
            vy: -(Math.random() * 9 + 3),
            ax: 0,
            ay: gravity,
            radius: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            isOnGround: false
        });
    }

    function updateParticles() {
        particles.forEach(particle => {
            if (!particle.isOnGround) {
                particle.vx += particle.ax;
                particle.vy += particle.ay;
                
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.y + particle.radius >= canvas.height) {
                    particle.y = canvas.height - particle.radius;
                    particle.vy *= -bounceFactor;
                    particle.vy = Math.max(particle.vy, -2);
                    particle.isOnGround = true;
                }
            }
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            ctx.fillStyle = particle.color;
            ctx.fillRect(
                particle.x - particle.radius,
                particle.y - particle.radius,
                particle.radius * 2,
                particle.radius * 3
            );
        });
    }

    function animate() {
        updateParticles();
        drawParticles();

        requestAnimationFrame(animate);
    }

    animate();
}

button.addEventListener('click', () => {
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createFireworkEffect(x, y);
});

window.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});