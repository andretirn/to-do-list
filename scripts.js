const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let minhaListaDeItens = []


function adicionarNovaTarefa() {

     if (input.value.trim() === '') {
          alert('Por favor, insira uma tarefa antes de adicionar!')
          return; // Sai da função se o campo estiver vazio
     }



     minhaListaDeItens.push({
          tarefa: input.value,
          concluida: false
     })


     mostrarTarefas()



     // Limpar o campo de input
     input.value = ''


}

function mostrarTarefas() {

     let novaLi = ''

     minhaListaDeItens.forEach((item, posicao) => {

          novaLi = novaLi + `
          
          <li class="task ${item.concluida && "done"}">
               <img src="./img/checked.png" alt="tarefa-okay"onclick="concluirTarefa(${posicao})">
               <p>${item.tarefa}</p>
               <img src="./img/trash.png" alt="lixeira-tarefa" onclick="deletarItem(${posicao})">
         </li>
          
         `


     })


     listaCompleta.innerHTML = novaLi



}

function concluirTarefa(posicao){
     minhaListaDeItens[posicao].concluida =  !minhaListaDeItens[posicao].concluida

     mostrarTarefas()
}


function deletarItem(posicao){
     minhaListaDeItens.splice(posicao, 1)
     console.log(posicao)

     mostrarTarefas()
}



button.addEventListener('click', adicionarNovaTarefa)