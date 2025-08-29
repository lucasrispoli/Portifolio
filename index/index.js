let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

  function abrirMenu() {
    document.getElementById("sidebar").style.width = "250px";  
  }

  function fecharMenu() {
    document.getElementById("sidebar").style.width = "0";   
  }
