# Crypto App

## 📋 Sobre

Esta aplicação fornece uma interface intuitiva para acompanhar e visualizar informações sobre criptomoedas, consumindo dados em tempo real da API CoinCap. Possui um design responsivo com um layout limpo, oferecendo tanto uma visão geral abrangente quanto detalhes específicos para criptomoedas individuais, incluindo preços atualizados, capitalização de mercado, volume de negociação e outras métricas importantes fornecidas pela API CoinCap.

## Deploy do projeto
- https://cripto-app-azure-xi.vercel.app/

## 🛠️ Tecnologias

- React com TypeScript
- Vite para build e desenvolvimento
- React Router DOM para navegação
- CSS Modules para estilização de componentes
- ESLint para qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── assets/        # Arquivos estáticos como imagens
├── components/    # Componentes React reutilizáveis
│   ├── header/    # Componente de cabeçalho com estilos
│   └── layout/    # Componentes de layout
├── pages/         # Páginas da aplicação
│   ├── detail/    # Página de detalhes da criptomoeda
│   ├── home/      # Página inicial com listagem de criptomoedas
│   └── not-found/ # Página 404
├── App.tsx        # Componente principal da aplicação
├── router.tsx     # Roteamento da aplicação
└── main.tsx      # Ponto de entrada da aplicação
```

## 🚀 Começando

1. Clone o repositório:
```bash
git clone https://github.com/Marksva/cripto-app.git
cd cripto-app
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## � Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=https://rest.coincap.io/v3/assets
VITE_SECRET_KEY=sua_chave_api_aqui
```

| Variável | Descrição |
|----------|-----------|
| VITE_API_URL | URL base da API de criptomoedas |
| VITE_SECRET_KEY | Chave de API para autenticação |

> Nota: Certifique-se de nunca compartilhar suas chaves de API reais no controle de versão. O arquivo `.env` já está incluído no `.gitignore`.

## �🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila a aplicação para produção
- `npm run preview` - Visualiza a versão de produção localmente

## 💻 Funcionalidades

- **Página Inicial**: Navegue e pesquise através de uma lista completa de criptomoedas
- **Página de Detalhes**: Visualize informações detalhadas sobre criptomoedas específicas
- **Design Responsivo**: Layout totalmente responsivo que funciona em desktop e dispositivos móveis
- **Interface Moderna**: Interface de usuário limpa e intuitiva com CSS Modules
- **Segurança de Tipos**: Integração completa com TypeScript para uma experiência de desenvolvimento robusta

## 🤝 Como Contribuir

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.
