function addToTable() {

    //ID Select
    let defeito_id = document.getElementById('defeito').value;

    //Pegando descrição do option
    let select = document.querySelector('#defeito');
    let indice = select.selectedIndex;
    let defeito = select.options[indice].text;

    //Definindo as variaveis e recebendo os dados
    let qtde = document.getElementById('qtde').value;
    let obs = document.getElementById('obs').value;
    let table = document.getElementById("myTable");
    
    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize; //Adicionando o id no elemento a ser criado
    //Criando o codigo do botão para remover a linha
    let btnCode = "<a data-toggle='tooltip' data-placement='bottom' class='fa fa-trash center' onclick='removeToTable(this)'></a>";
 
    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = defeito;
    cell3.innerHTML = qtde;
    cell4.innerHTML = obs;
    cell5.innerHTML = defeito_id;
    cell5.style.display = 'none';
    cell6.innerHTML = btnCode;

    //Limpando os campos de inserção de dados
    document.getElementById('defeito').value = "";
    document.getElementById('qtde').value = "";
    document.getElementById('obs').value = "";

    var tabela_defeito = document.getElementsByClassName("table_defects");
    var linhas = tabela_defeito[0].querySelectorAll("table tr");
    let vetor = [];

    Array.from(linhas).forEach((element, index) => {
        if(index > 0){
            //console.log('def => '+defeito_id)
            let collumn = element.children;
            Array.from(collumn).forEach((elem, i) => {
                if(i < 5){
                    //console.log(elem.innerHTML);
                    vetor.push(elem.innerHTML);
                }else{
                    vetor.push('#');
                }
            })
            
        }
    })
    console.log(vetor);
    var down = document.getElementById('down');
    down.setAttribute("value",JSON.stringify(vetor));
    //Retornando 'false' para impedir o reload da pagina
    return false;

}

//Função para remover uma linha
function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}