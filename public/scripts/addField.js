//procurar o botao
//Quando clicar colocar na pagina
//executar uma açao 
//duplicar os campos
//colocar na pagina
document.querySelector("#add-time")
.addEventListener('click', cloneField)


function cloneField(){
    
 const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true)

const fields = newFieldContainer.querySelectorAll('input')

fields.forEach(function(field){
    field.value =""
})

  document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}