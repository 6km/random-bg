var button = document.getElementsByClassName('generate-btn')[0];

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

const setBgColor = (hex) => {
  if (typeof hex === 'string') {
    document.body.style.backgroundColor = hex;
  }
}

button.addEventListener('click', () => {
  let color = randomHexColorCode();
  setBgColor(color);

  navigator.clipboard.writeText(color).then(() => {
    button.textContent = 'Copied'

    setTimeout(() => {
      button.textContent = 'New color'
    }, 240)
  })
})
