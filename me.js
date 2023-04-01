window.onload = () => {
	const myInput = document.getElementById("dummyKeyboard");
	myInput.onpaste = (e) => e.preventDefault();
};
const COMMANDS = {
	ls: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
	about: "Hello 👋<br>I'm Aron Binoy. I'm a Security enthusiast, currently living in India.",
	experience: "None",
	education: "Unknown",
	contact:"You can contact me on any of following links:<br><a href='https://t.me/aronbinoy' class='success link'>Telegram</a>, <a href='https://www.instagram.com/aron_binoy/' class='success link'>Instagram</a>, <a href='https://www.linkedin.com/in/aron-binoy/' class='success link'>Linkedin</a>, <a href='https://www.twitter.com/aron_binoy/' class='success link'>Twitter</a>, <a href='mailto:iaronbinoy@gmail.com' class='success link'>Email</a>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		let input = e.target.value.trim();
		input = input.toLowerCase();
		if (input.length === 0) {
			return;
		}
		let output;
		output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
		if (!COMMANDS.hasOwnProperty(input)) {
			output += `<div class="terminal-line">no such command: ${input}</div>`;
			console.log("Oops! no such command");
		} else {
			output += COMMANDS[input];
		}
		terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
		terminalOutput.scrollTop = terminalOutput.scrollHeight;
		e.target.value = "";
	}
});
