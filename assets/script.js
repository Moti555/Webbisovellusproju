const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
  alert(':)');
});

document.getElementById('muutaTeksti').addEventListener('click', function() {
    document.getElementById('teksti').textContent = 'Auto';
  });

let marjat = ['mustikka', 'puolukka', 'karpalo'];

function naytaMarjoja() {
  marjat.forEach(function(marjat) {
    console.log(marjat);
  });
}

naytaMarjoja(); // tulostaa kaikki marjat

setInterval(function() {
    console.log('Tämä viesti näkyy verkkosivun konsolissa joka 10. sekunti.');
}, 10000);


function startCountdown() {
    let countdown = 5;
    const countdownInterval = setInterval(function() {
        if (countdown >= 0) {
            document.getElementById('currentTime').textContent = ` ${countdown}`;
            countdown--;
        } else {
            clearInterval(countdownInterval);
            displayCurrentTime();
        }
    }, 1000);
}

function displayCurrentTime() {
    
    updateCurrentTime();

    setInterval(updateCurrentTime, 1000);
}


function updateCurrentTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = now.toLocaleTimeString([], options);
    document.getElementById('currentTime').textContent = `Current time in Oulu: ${timeString}`;
}


startCountdown();

document.getElementById('temperature').addEventListener('click', function() {
    
    fetch('https://wttr.in/Oulu?format=%C+%t')
        .then(response => response.text())
        .then(data => {
            document.getElementById('showTemperature').textContent = `Current weather in Oulu: ${data}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('showTemperature').textContent = 'Error fetching weather data.';
        });
});






