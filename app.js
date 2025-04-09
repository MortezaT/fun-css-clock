(() => {
  const date = new Date();
  const delayForSecond = date.getSeconds();
  const delayForMinute = date.getMinutes() * 60 + delayForSecond;
  const delayForHour = date.getHours() * 3600 + delayForMinute + delayForSecond;
  console.log(date.getHours(), date.getHours() * 3600, delayForHour);

  /**
   * @type {HTMLDivElement}
   */
  const domFace = document.querySelector('.face');
  if (!domFace) return;

  domFace.style.setProperty('--delay-second', `-${delayForSecond}s`)
  domFace.style.setProperty('--delay-minute', `-${delayForMinute}s`)
  domFace.style.setProperty('--delay-hour', `-${delayForHour}s`)

  const indices = Array.from(
    { length: 60 },
    (_, i) =>
      `<div class="indices ${i % 5 ? 'minor' : 'major'
      }"" style="--index:${i};"></div>`
  ).join('');

  const arms = `
<div class="arms hour"></div>
<div class="arms minute"></div>
<div class="arms second"></div>
`;
  const center = `<div class="center"></div>`;

  domFace.innerHTML += indices + arms + center;
})();