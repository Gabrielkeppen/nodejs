console.log("escrevendo qualquer coisa")

var array= [1,2,3,4,5,6,7,8,9,10,{nome:"Gabriel",idade:20,endereco:{rua:"rua lubumir"}}]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index])
}
console.log("nome:",array[10].nome)
console.log("rua:",array[10].endereco.rua)