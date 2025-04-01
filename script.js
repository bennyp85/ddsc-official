document.addEventListener('DOMContentLoaded', function() {
    const dotsContainer = document.getElementById('data-dots');
    const numberOfDots = 100;
    
    // Create data dots
    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        
        // Random opacity
        dot.style.opacity = Math.random() * 0.5 + 0.1;
        
        dotsContainer.appendChild(dot);
    }
    
    // Animate dots subtly
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        // Initial position
        let x = parseFloat(dot.style.left);
        let y = parseFloat(dot.style.top);
        
        // Random speed and direction
        const speedX = (Math.random() - 0.5) * 0.02;
        const speedY = (Math.random() - 0.5) * 0.02;
        
        function animateDot() {
            // Move dot
            x += speedX;
            y += speedY;
            
            // Wrap around if out of bounds
            if (x > 100) x = 0;
            if (x < 0) x = 100;
            if (y > 100) y = 0;
            if (y < 0) y = 100;
            
            dot.style.left = `${x}%`;
            dot.style.top = `${y}%`;
            
            requestAnimationFrame(animateDot);
        }
        
        animateDot();
    });
});