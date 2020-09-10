# NextJS + TypeScript Estrutura

Esse repositório eu fiz com base em um vídeo do canal da RocketSeat que se chama,
Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50

[Vídeo da Estrutura de NextJS + TypeScript](https://www.youtube.com/watch?v=1nVUfZg2dSA)

# :computer: Tecnologias:

[Node](https://nodejs.org)
[ReactJS](https://pt-br.reactjs.org)
[NextJS](https://nextjs.org)

# O que é NextJS?

O NextJS é uma biblioteca que faz com que a primeira renderização de um aplicativo feito com React
seja feita no server-side, essa renderização no server-side ajuda no SEO do seu aplicativo.

# O que eu aprendi com esse vídeo?

Nesse vídeo, eu aprendi, a configurar o .editorconfig, eslint e prettier, e configurar
styled-components para Next.js.

# Como faço para usar TypeScript com NextJS?

Depois de você criar seu aplicativo com `yarn create next-app`.
Instale `npm i typescript @types/react @types/node`, e pronto seu Next App,
já vai estar configurado para TypeScript. Quando você rodar o comando `next dev`
ele vai gerar o tsconfig.json completamento configurado.

# Como faço para colocar imagens SVG no NextJS?

## Módulo Next Images

Com esse módulo você pode importar imagens de maneira fácil, usando NextJS.

### Para você usar ele, você precisa:

`npm i next-images`

E adicionar isto ao arquivo next.config.js

```sh
const withImages = require("next-images")

module.exports = withImages({
  esModule: true,
})

```

A opção esModule, serve para que se você quiser importar os arquivos de imagem
como se fosse um módulo do ES6.

### Esse módulo tem um problema de performance.

O módulo next-images, converte svg em base64.
Mas tem um plugin para Babel, que faz com que carregue o código do SVG
inteiro na hora de carregar a página.

Adicione essa linha nos plugins do Babel.
"inline-react-svg"

Você pode usar o arquivo svg como se fosse um component do React.

## Autor

👤 **Kaique Araújo**

<h4>Feito com ❤️ e TypeScript.</h4>
