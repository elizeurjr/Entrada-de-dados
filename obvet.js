 const usuario1 = {
  nome: "Carlos",
  idade: 32,
    tecnologia: [
    { nome: "Java", especialidade: "Desktop"},
    { nome: "Javascript", especialidade: "Web"},
    { nome: "PHP", especialidade: "Web"}
  ]
};

//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
console.log(`O usuário ${usuario1.nome} possui ${usuario1.idade}anos e usa a tecnologia ${usuario1.tecnologia[0].nome} com especialidade em ${usuario1.tecnologia[0].especialidade}`)