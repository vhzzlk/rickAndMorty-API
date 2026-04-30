# 🌌 Rick & Morty MVP App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-8C84FF?style=for-the-badge&logo=react&logoColor=white)

Um Produto Mínimo Viável (MVP) robusto desenvolvido com **React Native** e **Expo**, projetado para consumir e interagir com os dados da [The Rick and Morty REST API](https://rickandmortyapi.com/).

Este projeto foi construído focando em boas práticas de mercado, arquitetura escalável, gerenciamento de estado eficiente e uma UI/UX responsiva e polida.

---

## 📋 Sumário
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Requisitos Técnicos](#-requisitos-técnicos)
3. [Arquitetura e Padrões](#-arquitetura-e-padrões)
4. [Design System (Style Guide)](#-design-system-style-guide)
5. [Stacks e Ferramentas](#-stacks-e-ferramentas)
6. [Instalação e Execução](#-instalação-e-execução)

---

## 🚀 Sobre o Projeto

O aplicativo tem como objetivo prover uma interface interativa para explorar o universo de Rick and Morty. Através dele, os usuários podem listar e pesquisar personagens do seriado, e aprofundar-se em especificações geográficas e vitais através de telas dinâmicas de detalhamento.

### 📌 Requisitos Funcionais (RF)
- **[RF01]** Listagem inicial e contínua de personagens (`HomeScreen`).
- **[RF02]** Sistema de Busca/Filtro em tempo real por nome do personagem.
- **[RF03]** Visualização de perfil detalhado (`DetailsScreen`), apresentando métricas como status vital, espécie, gênero, localização e origem.
- **[RF04]** Feedback de interações assíncronas (Shimmers/Loading states) durante resoluções de Promise.
- **[RF05]** Tratamentos de Fallback e Empty States amigáveis ao usuário para buscas sem resultados ou erros de rede HTTP.

### 🛠 Requisitos Não Funcionais (RNF)
- **[RNF01]** Componentização reativa suportando re-renderizações eficientes através de `FlatList`.
- **[RNF02]** Design Responsivo alinhado para compatibilidade Cross-platform (iOS, Android e Web).
- **[RNF03]** Gerenciamento inteligente da área de interface `SafeAreaView`, respeitando barras de navegação virtuais e notches (câmeras fontais).
- **[RNF04]** Stack HTTP baseada em `Axios` interceptando e tratando Status Codes.

---

## 🏗 Arquitetura e Padrões

Foi estabelecida uma estrutura orientada a modularidade baseada no conceito abstrato da **Clean Architecture**, privilegiando a manutenibilidade, separação de responsabilidades (SoC - Separation of Concerns) e o desacoplamento de abstrações visuais (UI) da lógica de negócios e I/O (API).

```text
src/
 ┣ 📂 assets/      # Mídias locais estáticas (Imagens, SVGs, Fontes customs)
 ┣ 📂 components/  # Componentes encapsulados 'Dumb/Presentational' (Header.js, Card.js)
 ┣ 📂 routes/      # Mapeamento do Core de rotas do @react-navigation
 ┣ 📂 screens/     # Entry points da árvore visual, 'Container/Smart' Components
 ┣ 📂 services/    # Camada unificada de I/O, instâncias de chamadas HTTP (api.js)
 ┗ 📂 styles/      # Tokens de design globais, Cores padronizadas, Constantes CSS (theme.js)
```

**Justificativa de Modelagem:** Enclausurar regras assíncronas no diretório de `services` e centralizar Tokens de Design isolam a complexidade de mudança global. A adoção de `components/` versus `screens/` ajuda as equipes a discernirem onde blocos renderizáveis simples e blocos regrados por regras de negócio habitam.

---

## 🎨 Design System (Style Guide)

O Theme System configurado evoca a identidade e a paleta canônica do seriado:

| Papel Visual | Referência (Hex) | Amostra |
| :--- | :--- | :--- |
| **Background Root** | `#24282F` | ⬛ Dark Charcoal |
| **Surface Cards** | `#3C3E44` | 🌫️ Ash Grey |
| **Primary Accent** | `#97CE4C` | 🧪 Toxic Green |
| **Secondary Accent** | `#00B5CC` | 🌀 Portal Cyan |
| **Texto Primário** | `#FFFFFF` | ⚪ White |
| **Texto Secundário** | `#9E9E9E` | 🔘 Ghost Grey |
| **Danger State** | `#FF6B6B` | 🔴 Error Red |

**Tipografia Global (Scalable Constraints):** 
- *Titles:* 24px (fontWeight: bold)
- *Subtitles:* 18px
- *Body / Labels:* 14px

---

## 💻 Stacks e Ferramentas

O ecossistema é mantido pelo empacotador metro através das seguintes soluções:
- [React Native](https://reactnative.dev/)
- [Expo (Managed Workflow)](https://expo.dev/)
- [Axios](https://axios-http.com/)
- [React Navigation (Native Stack)](https://reactnavigation.org/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)

---

## ⚙️ Instalação e Execução

### Pré-requisitos
* Node.js (Recomendado v18 LTS ou superior)
* Expo CLI (`npm install -g expo-cli`)
* Emulador Local (Android Studio ou Xcode) **ou** o Aplicativo Físico do *Expo Go* no Smartphone.

### Passos de Configuração

1. Clone as dependências do código fonte do MVP:
   ```bash
   git clone [sua-url-do-repositorio-aqui]
   cd RickAndMorty-API
   ```

2. Instale o pacote de dependências `node_modules`:
   ```bash
   npm install
   ```

3. Gire o empacotador metropolitano do Expo:
   ```bash
   npx expo start
   ```

4. **Inicializando o aplicativo:** O terminal irá gerar um QRCode. Você pode interagir com os comandos (Ex: Press `a` para rodar num simulador Android) ou escanear o código na tela com o seu app físico do Expo.

