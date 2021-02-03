export function toggleSelect() {
  document.querySelector('.select-wrapper').addEventListener('click', function () {
    this.querySelector('.select').classList.toggle('open');
    this.querySelector('.select__trigger').classList.toggle('active');
  })

  for (const option of document.querySelectorAll(".option")) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
      }
    })
  }

  window.addEventListener('click', function (e) {
    const select = document.querySelector('.select')
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
}
