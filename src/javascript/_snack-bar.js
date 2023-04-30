export function snackBar(textSnackbar, timeout) {
  const snackBar = document.getElementById('SNACKBAR')
  snackBar.innerHTML = textSnackbar
  snackBar.classList.remove('show')
  void snackBar.offsetWidth
  snackBar.classList.add('show')
  setTimeout(() => snackBar.classList.remove('show'), timeout)
}
