export function fireRing(node, { duration = 5000, gifUrl } = { gifUrl: '' }) {
    return {
        duration,
        css: (t) => {
            return `
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: none;
                background: url(${gifUrl}) repeat center center;
                background-size: cover;
                transition: opacity ${duration}ms ease-out;
                z-index: 1000;
            `;
        }
    };
}