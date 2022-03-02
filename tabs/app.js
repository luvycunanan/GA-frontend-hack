// function show() {
//   document.querySelectorAll('.article').forEach(article => {
//     if (article.id == '') {
//       article.id = 'hidden'
//     } else {
//       article.id = ''
//     }
//   })
// }

// let counter = 1;
// function count() {
//   if (counter < 4) {
//     counter += 1;
//   } else {
//     counter = 1;
//   }
// }


const mike = document.querySelector('.mike');
const dustin = document.querySelector('.dustin');
const lucas = document.querySelector('.lucas');
const eleven = document.querySelector('.eleven');
const elevenArticle = document.querySelector('.eleven-article');

function check() {
  if (eleven.id == 'active') {
    elevenArticle.id = ''
  } else {
    elevenArticle.id = 'hidden'
  }
}

document.querySelectorAll('.title').forEach(item => {
  item.addEventListener('click', e => {
    document.querySelectorAll('.title').forEach(item => {
      item.id = 'inactive'
    })
    item.id = 'active'
    check()
  })
})

