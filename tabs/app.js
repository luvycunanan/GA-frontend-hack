const mike = document.querySelector('.mike');
const dustin = document.querySelector('.dustin');
const lucas = document.querySelector('.lucas');
const eleven = document.querySelector('.eleven');

const elevenArticle = document.querySelector('.eleven-article');
const mikeArticle = document.querySelector('.mike-article');
const dustinArticle = document.querySelector('.dustin-article');
const lucasArticle = document.querySelector('.lucas-article');

function checkEleven() {
  if (eleven.id == 'active') {
    elevenArticle.id = ''
  } else {
    elevenArticle.id = 'hidden'
  }
}
function checkMike() {
  if (mike.id == 'active') {
    mikeArticle.id = ''
  } else {
    mikeArticle.id = 'hidden'
  }
}

function checkDustin() {
  if (dustin.id == 'active') {
    dustinArticle.id = ''
  } else {
    dustinArticle.id = 'hidden'
  }
}

function checkLucas() {
  if (lucas.id == 'active') {
    lucasArticle.id = ''
  } else {
    lucasArticle.id = 'hidden'
  }
}

document.querySelectorAll('.title').forEach(item => {
  item.addEventListener('click', e => {
    document.querySelectorAll('.title').forEach(item => {
      item.id = 'inactive'
    })
    item.id = 'active'
    checkEleven()
    checkDustin()
    checkLucas()
    checkMike()
  })
})

