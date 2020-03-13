# Entrada-de-dados
O programa armazena dados da empresa Supremos dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: (string)
Cor: (string)
Foco: (string)
Endereço:
  Rua: (string)
  Número: (int)

Para armazenar os dados de endereço da empresa foi criado objetos intercalados:

const usuario = {
  nome: "string",
  empresa: {
    nome: "string"
  }
};

Ao imprimir o nome da empresa e seu endereço será exibidoo seguinte formato:

A empresa Supremos está localizada em Rua Guilherme Gembala, 260

utilizado o formato de template strings

console.log(`O nome do usuário é ${usuario.nome}`);

Vetores e objetos
Um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
O programa utiliza um array.

São utilizados objetos contendo nome e especialidade, conforme abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};

Ao imprimir em tela, o nome e especialidade da primeira tecnologia que o usuário utiliza será exibido no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
