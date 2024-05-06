var button = document.getElementsByClassName('generate-btn')[0]

const randomHexColorCode = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16)
	return '#' + n.slice(0, 6)
}

const handleColorGeneration = () => {
	let color = randomHexColorCode()

	document.body.style.backgroundColor = color

	navigator.clipboard.writeText(color)
}

button.addEventListener('click', handleColorGeneration)