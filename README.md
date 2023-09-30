# Índice

- [Título e Sobre](#titulo-e-sobre)
- [Considerações de implementação](#consideracoes-de-implementacao)
- [Objetivo do projeto](#objetivo-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como rodar o projeto localmente](#como-rodar-o-projeto-localmente)

# Título e Sobre

Desafio Cielo é um software com uma tela de Vendas que dispõe os dados vindo de uma api sobre as vendas de um determinado cliente. Nessa mesma tela existes os seguintes componentes:

- Sibebar Menu:
  O Sidebar Menu deixa a disposição uma navegação simulada para outras telas (telas essas não inclusas no projeto). Ainda no Sibebar Menu existe uma lista em dropdown para selecionar outras lojas desse cliente (lista simulada, pois não retorna dados dessas outras lojas na api) e seguindo nessa mesma linha também tem um dropdown para opções da conta do usuário (que também é uma lista simulada). Na versão para dispositivos portáteis o Sidebar Menu da lugar para o Header, que contém a mesma disposição do Sidebar Menu, mas com sua posição no topo da tela e a navegação para outras telas é somente visível quando clicado no botão "Burger", fazendo com que a lista de navegação apareça no inferior da tela para o meio de forma animada e se retira de modo inverso da tela quando clicado fora dele ou no botão "X".

- Filtros de dados da tabela
  O Filtros de dados funciona com 4 tipos de filtros em linhas de inputs, onde cada linha é construida por um input select com o tipo de filtro e o outro com o valor do filtro. E os tipos são: "Tipo de Pagamento", "Bandeira do cartão", "Canal" e "Status". E esse componente funciona com as seguintes regras: Só é possível selecionar o valor do filtro quando o tipo foi selecionado; É possível ir adicionando linhas de inputs, mas somente até o limite de tipos de filtros disponíveis, e quando chega no limite o botão "Adicionar Filtro" fica desabilitado; Quando um input de tipo de filtro for selecionado, essa mesma seleção ficara indisponível nos outrs inputs; Existem outros 2 botões, o "Filtrar"(filtra os dados da tabela de acordo com os inputs de filtros) e o "Limpar Filtros"(remove todos os inputs selecionados e retorna a tabela com os dados iniciais). Esses botões ficam desabulitados caso não haja nenhuma seleção de valor do filtro.
  Observação: os botões e inputs ficam desabilitados para deixar a usuabilidade intuitiva para a pessoa usuário no que diz respeito do que pode ou não ser feito com os filtros e também para não acontecer requisições desnecessárias para a API.

- Tabela de vendas
  Por último e não menos importante (pelo contrário). A Tabela de vendas renderiza os dados de vendas de forma tabelada na horizontal quando está na versão para Desktop e muda a disposição na vertical na versáo para dispositivos portáteis.

# Considerações de implementação

Existem duas funcionalidades que não foram incluidas na versão final do projeto por conta de indisposição dos dados disponibilizados para consumo através de API e limitações da biblioteca Json-Server. A primeira é o filtro por datas, existe a estrtura implementa, mas comentada, já que não é possível fazer filtro com intervalos e datas na versão padrão do json-server. E no arquivo src/components/FiltersTransactionsTable/index.tsx existem os trehcos de códigos comentados e com comentários para possíveis impletações e esclarecimentos. E a segunda funcionalidade é a paginação. Existe a estrutura para receber informações do back-end para fazer uma paginação funcional, porém está comentada, já que os dados consumidos não fornecem insumos para gerar outras páginas. Mas mesmo assim eu mantive a paginação simulada, onde quando clicado nos botões no rodapé da tabela os números sobre a página se alteram, mas os dados da tabela não. Para mais informações acesse esses arquivos: src/components/TransactionsTable/index.tsx e src/hooks/useSales.tsx. Veja os códigos comentados e com comentários.

# Objetivo do projeto

O projeto Desafio Cielo tem como objetivo demonstrar minhas seguintes habilidades como Desenvolvedor de Software com ênfase no Front-end:

- Domínio de HTML, Javascript, Typescript, CSS e React
- Documentação de projeto
- Design responsivo
- Consumo de API utilizando Axios
- Componentização em React
- Organização do código
- Uso e criação de Hooks customizados
- Acessibilidade
- Uso da biblioteca Styled Components
- Criação de estilo global
- Testes automatizados
- Desenvolver pensando na experiência do usuário

# Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Typescript
- React com Vite
- Vitest
- Axios
- Styled Components
- Json Server

# Como rodar o projeto localmente

1. Clone o repositório

Abra o terminal e execute o comando `git clone git@github.com:fernandoluckesi/my-collection.git ou https://github.com/fernandoluckesi/my-collection.git`

2. Instale as dependências de desenvolvimento

Acesse o diretótio onde está o projeto e execute `npm install` ou `yarn`

3. Para rodar o Front-end execute:

Ainda dentro diretótio execute o comando `npm start` ou `yarn start`

4. Executando a API do json-server:

Abra outro terminal e ainda no mesmo diretótio do projeto execute o comando `json-server --watch db.json`
