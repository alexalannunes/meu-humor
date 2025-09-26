# meu humor

Monitore seu humor durante o dia

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## Como usar

Para clonar o projeto, rode o seguinte comando:

```bash
git clone https://github.com/alexalannunes/meu-humor
```

### `.env`

Crie um arquivo `.env.local` baseado no `.env` e adicione a url `http://localhost:3333` ou copie o codigo abaixo

```bash
VITE_API_URL="http://localhost:3333"
```

### Backend

O backend do projeto está presente nesse repositório: [meu-humor](https://github.com/erikpablo/meu-humor). Siga as instruções para instalação

### Instalar dependências

Voce pode usar um desses `npm`, `yarn`, `pnpm`, `bun`, exemplo usando `npm`:

```bash
npm install
```

### Rode o servidor de desenvolvimento

```bash
npm run dev
```

### Configurar pnpm (opcional)

Se você estiver usando `pnpm`, precisará adicionar o seguinte código ao seu arquivo `.npmrc`:

```bash
public-hoist-pattern[]=*@heroui/*
```

Após modificar o arquivo `.npmrc`, você precisa executar `pnpm install` novamente para garantir que as dependências sejam instaladas corretamente.

## License

Licenciado sob a [licença MIT](https://github.com/heroui-inc/vite-template/blob/main/LICENSE).