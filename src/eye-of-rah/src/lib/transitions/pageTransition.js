export function fireRing(node, { duration = 1000 } = {}) {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    const maxRadius = Math.hypot(x, y);

    return {
        duration,
        css: (t) => {
            const scale = 1 - t;
            return `
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: none;
                background: radial-gradient(circle, rgba(255,140,0,1) 10%, rgba(255,69,0,0.8) 40%, rgba(0,0,0,0) 70%);
                clip-path: circle(${(1 - scale) * maxRadius}px at ${x}px ${y}px);
                transition: clip-path ${duration}ms ease-out;
            `;
        }
    };
}
