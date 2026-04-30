# Rick & Morty MVP App

Este projeto é um Produto Mínimo Viável (MVP) desenvolvido com React Native e Expo que consome a API REST pública do Rick and Morty [https://rickandmortyapi.com/](https://rickandmortyapi.com/).

## 1. Planejamento e Requisitos

### Requisitos Funcionais (RF)
1. **Listagem de dados:** O aplicativo carrega e exibe inicialmente uma lista com os personagens de Rick and Morty através da rota `/character`.
2. **Visualização de Detalhes:** Ao interagir (clicar) num personagem, o usuário é direcionado à tela de detalhes, onde visualiza informações completas, como espécie, origem, última localização conhecida e estado de vida (vivo/morto).
3. **Indicador de Carregamento:** Exibe feedback visual para o usuário (`ActivityIndicator`) enquanto a camada de serviço finaliza o carregamento da API.
4. **Alerta/View de Falhas (Fallback):** Tratamento da interface em caso de falhas na consumação da requisição, apresentando na tela uma mensagem clara de erro.

### Requisitos Não Funcionais (RNF)
1. **Tratamento de Erros de Conexão:** A lógica de fetch possui bloco `try/catch` sendo refletida num Alert/Text UI state apropriado.
2. **Carregamento Assíncrono:** Os dados são consumidos via requisições HTTP (Axios) usando `async/await` com loaders nativos.
3. **SafeArea Management:** Tratamento para exibição na área visível da tela `SafeAreaView` e controle de StatusBar por cima das dependências do `react-native-safe-area-context`.
4. **Arquitetura modular:** O código é quebrado em pequenos blocos seguindo princípios básicos de Clean Architecture (Separation of concerns).

### Prototipagem & Style Guide
- **Background Principal:** `#24282F` (Fundo escuro remetente ao seriado)
- **Primary Color:** `#97CE4C` (Verde "tóxico" do logo/portais)
- **Secondary Color:** `#00B5CC` (Ciano)
- **Texto Primário:** `#FFFFFF` (Branco para alto contraste)
- **Texto Secundário:** `#9E9E9E` (Cinza claro para descrições de status)
- **Background Card:** `#3C3E44` (Para as view list items)
- **Tipografia:** 24px Títulos, 18px Subtítulos, 14px Body
- **Componentes Base:** Header para o Title, Cards renderizados dinamicamente da FlatList e TouchableOpacity sem backgrounds complexos com pequenas sombreadas (elevation).

---

## 2. Configuração e Estrutura de Pastas

Como boas práticas de separação de responsabilidades (Clean Architecture simplificada), o app utiliza a seguinte estrutura dentro do diretório `/src`:

* `src/assets/`: Destinada para imagens globais, ícones vetoriais e arquivos fixos do projeto.
* `src/components/`: Armazena componentes visuais reutilizáveis em mais de uma tela e "Dumb components".
  * Exemplo: `Header.js`, `Card.js`.
* `src/routes/`: Concentra e instâncializa toda a configuração de pilha/Stack de Navegação (`@react-navigation`).
* `src/screens/`: As "páginas" completas da aplicação ("Smart Components"). Cada arquivo reflete uma view com sua própria lógica de apresentação.
  * Exemplo: `HomeScreen.js`, `DetailsScreen.js`.
* `src/services/`: Configuração de comunicação com camadas externas e APIs através do `axios`.
  * Exemplo: `api.js`.
* `src/styles/`: Constantes com variáveis css globais, como cores, hex e tipografias de um layout.
  * Exemplo: `theme.js`.

**Por que essa divisão?** Centralizar regras específicas (estilo num lugar, chamadas HTTP em outro) facilita dar manutenção ou escalar o software sem impactar toda a página. Por ex., se precisarmos trocar do `Axios` para `Fetch`, apenas trocariamos em `/services` sem alterar nem um React Component.

---

## 3. Desenvolvimento Técnico

* **Consumo de API:** Arquitetado puramente sobre Axios `GET`.
* **Estados e Ciclos de Vida:** Funções combinadas entre `useState` e chamadas instanciadas dentro de um `useEffect([])` para popular as telas na renderização inicial.
* **Componente de UX/UI:** Adotado `FlatList` ao invés de ScrolLViews estáticas para otimização e gerência eficiente do consumo de memória do React Native em listas grandes.
* **Navegação:** Native Stack navegando de Home -> Detalhes do Personagem.

---

## Como Rodar o Projeto

1. Clone esse repositório pelo terminal: `git clone [link-do-repositorio]`
2. Instale todas as dependências com `npm install`
3. Execute o servidor de desenvolvimento: `npx expo start`
4. Pelo app "Expo Go", abra no seu dispositivo ou selecione um Emulador (pressione "a" para Android no terminal expo).

---
*MVP Construído como entrega final de estudos e avaliação técnica.*
