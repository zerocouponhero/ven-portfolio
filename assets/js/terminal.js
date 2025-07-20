// terminal.js
document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('terminal-output');
  const input = document.getElementById('terminal-cmd');

  const responses = {
    help: `Available commands:
- help     Show help menu
- resume   Download Ven's resume
- about    Short intro of Ven`,
    resume: `Downloading resume...`,
    about: `Ven is a Master of Commerce candidate at UNSW specializing in Finance & Economics. He builds DCF, LBO, and stock pitch models.`,
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      output.textContent += `ven@finance:~$ ${cmd}\n`;
      if (responses[cmd]) {
        output.textContent += responses[cmd] + '\n\n';
        if (cmd === 'resume') {
          window.open('assets/resume/Ven-Resume.pdf', '_blank');
        }
      } else {
        output.textContent += `command not found: ${cmd} — type "help"\n\n`;
      }
      input.value = '';
      output.scrollTop = output.scrollHeight;
    }
  });

  input.focus();
});
