const targetDate = new Date('2025-12-31T17:00:00').getTime();

const interval = setInterval(function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(interval); // Detener el contador cuando llegue a cero
        document.getElementById('cobertura').style.display = 'none'; // Ocultar el contador
        document.getElementById('button').style.display = 'block'; // Mostrar el botón
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days2').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours2').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes2').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds2').textContent = seconds.toString().padStart(2, '0');
    }
}, 1000);
    