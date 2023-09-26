// ------------- Countdow ------------

/**
 * Inicializa un contador regresivo que muestra el tiempo restante hasta la fecha de vencimiento en el DOM.
 * @param {string} id - ID del elemento HTML donde se mostrará el contador.
 * @param {string} endtime - Fecha de vencimiento en formato 'YYYY/MM/DD HH:MM'.
 */

const countdown = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const deadline = '2023/12/02 18:00';

    function pad(num, size) {
      return ('0' + num).slice(-size);
    }

    function parseDate(date) {
      const parsed = Date.parse(date);
      if (!isNaN(parsed)) return parsed;
      return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
    }

    function getTimeRemaining(endtime) {
      const total = parseDate(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return { total, days, hours, minutes, seconds };
    }

    function updateClock(id, endtime) {
      const daysElement = document.getElementById(id + '-days');
      const hoursElement = document.getElementById(id + '-hours');
      const minutesElement = document.getElementById(id + '-minutes');
      const secondsElement = document.getElementById(id + '-seconds');

      function updateDisplay() {
        const time = getTimeRemaining(endtime);

        if (time.total <= 0) {
          clearInterval(timeinterval);
        } else {
          daysElement.innerHTML = pad(time.days, 2);
          hoursElement.innerHTML = pad(time.hours, 2);
          minutesElement.innerHTML = pad(time.minutes, 2);
          secondsElement.innerHTML = pad(time.seconds, 2);
        }
      }

      updateDisplay();
      const timeinterval = setInterval(updateDisplay, 1000);
    }

    updateClock('js-clock', deadline);
  });
}
countdown()

// ----------- Carousel -------------

new Glide('.glide').mount()


// // ------------ Formulario -------------
// document.addEventListener("DOMContentLoaded", function () {
//   const inputsContainer = document.getElementById("inputs-container");
//   const addInput = document.getElementById("agregar-btn");

//   let guestsCount = 0;

//   addInput.addEventListener("click", function (e) {
//     e.preventDefault();

//       if (guestsCount < 5) {
//           const newInput = document.createElement("p");
//           newInput.classList.add("input");

//           const label = document.createElement("label");
//           label.textContent = "Nombre de tu acompañante";
//           label.setAttribute("for", "guest");

//           const input = document.createElement("input");
//           input.type = "text";
//           input.name = "guest";

//           newInput.appendChild(label);
//           newInput.appendChild(input);

//           inputsContainer.appendChild(newInput);
//           guestsCount++;
//       } else {
//           Swal.fire({
//               title: 'Lo sentimos',
//               text: 'Solo puedes agregar hasta 6 invitados',
//               icon: 'error',
//               confirmButtonText: 'Intentar de nuevo',
//               confirmButtonColor: "#890F3E",
//               iconColor: "#890F3E"
//           })
//       }
//   });
// });

// const submitForm = () => {
//   Swal.fire({
//     title: 'Gracias por tu confirmación',
//     text: 'Invitacion enviada correctamente',
//     icon: 'success',
//     confirmButtonText: 'Intentar de nuevo',
//     confirmButtonColor: "#0B7A44",
//     iconColor: "#0B7A44"
//   })
// }

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
      menu.classList.toggle("show-menu");
  });
});

const audioElement = document.getElementById('miAudio');
const playIcon = document.getElementById('playIcon');

function togglePlayPause() {
  try {
    if (audioElement.paused) {
      audioElement.play();
      playIcon.src = "./images/pause_circle_fill.svg";
      playIcon.alt = "Pausa";
    } else {
      audioElement.pause();
      playIcon.src = "./images/play_circle_fill.svg";
      playIcon.alt = "Reproducir";
    }
  } catch (error) {
    console.error('Error al reproducir/pausar el audio:', error);
  }
}
