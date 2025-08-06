const title = document.querySelector('.title')
const text = ' Hellow Sefiraa '.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 4; // Menghasilkan delay acak antara 0 hingga 4 detik
  element.style.animationDelay = `${randomDelay}s`;
});