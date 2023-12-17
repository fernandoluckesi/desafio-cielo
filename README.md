# Índice

- [Título e Sobre](#título-e-sobre)
- [Considerações de implementação](#considerações-de-implementação)
- [Objetivo do projeto](#objetivo-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como rodar o projeto localmente](#como-rodar-o-projeto-localmente)

# Título e Sobre

**Teste Prático: Dev Backend Mercado Livre** é um teste prático para atuar com back-end no Mercado Livre. E projeto consiste na criação de uma API RESTful com um recurso de que é de usuários. E ela possui as operações de: cadastro, atualização, busca de um único recurso e busca de vários recursos. E foram implementadas algumas regras para esse recurso que são: somente usuários acima de 18 anos serão cadastrados, não será permitido usuários com e-mail e CPF duplicados, quando buscar por vários usuários, deve permitir realizar um filtro pelo
nome, Permitir a alteração parcial e Validar se o CPF é válido (dígitos verificadores).

# Considerações de implementação

Existem duas funcionalidades que não foram incluidas na versão final do projeto por conta de indisposição dos dados disponibilizados para consumo através de API e limitações da biblioteca Json-Server. A primeira é o filtro por datas, existe a estrtura implementa, mas comentada, já que não é possível fazer filtro com intervalos e datas na versão padrão do json-server. E no arquivo src/components/FiltersTransactionsTable/index.tsx existem os trehcos de códigos comentados e com comentários para possíveis impletações e esclarecimentos. E a segunda funcionalidade é a paginação. Existe a estrutura para receber informações do back-end para fazer uma paginação funcional, porém está comentada, já que os dados consumidos não fornecem insumos para gerar outras páginas. Mas mesmo assim eu mantive a paginação simulada, onde quando clicado nos botões no rodapé da tabela os números sobre a página se alteram, mas os dados da tabela não. Para mais informações acesse esses arquivos: src/components/TransactionsTable/index.tsx e src/hooks/useSales.tsx. Veja os códigos comentados e com comentários.
E sobre testes eu consegui somente desenvolver a tempo o teste do componente FiltersTransactionsTable, pois a uma complexidade extra em testar componentes do Material UI que eu sinceramente não considerei. Falo mais sobre no próprio arquivo de teste do componente com alguns comentários. O arquivo fica nesse diretório: src/components/FiltersTransactionsTable/index.tsx

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
