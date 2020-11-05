const grossInput = document.getElementById('gross_input');
const grossRes = document.querySelector('.gross_result-span');
const netInput = document.getElementById('net_input');
const netRes = document.querySelector('.net_result-span');

grossInput.oninput = () => {
  grossRes.innerHTML = Math.ceil(((grossInput.value / 87) * 100));
};

netInput.oninput = () => {
  netRes.innerHTML = Math.ceil(((netInput.value / 100) * 87));
};
