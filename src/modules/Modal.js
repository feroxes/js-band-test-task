const openModalBtn = document.getElementById('open-modal-btn');
const modalWrapper = document.getElementById('modal-wrapper');
const modal = document.getElementById('modal');
const cancelBtn = document.getElementById('cancel-btn');

openModalBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
});

modalWrapper.addEventListener('click', (e) => {
  const isClickInside = modal.contains(e.target);
  if (!isClickInside) modalWrapper.style.display = 'none';
});
