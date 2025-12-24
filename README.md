# 🌎 Rumo Certo - Portal de Viagens

Uma aplicação Next.js completa que simula um portal de viagens moderno, apresentando destinos turísticos brasileiros com páginas de detalhes individuais, implementada com as melhores práticas de desenvolvimento.

## 🚀 Funcionalidades

- **Página Inicial**: Apresentação elegante do portal com call-to-action para explorar destinos
- **Listagem de Destinos**: Cards visuais com informações essenciais de cada destino
- **Páginas Dinâmicas**: Detalhes completos de cada destino com rotas dinâmicas
- **Design Responsivo**: Interface adaptativa para dispositivos móveis, tablets e desktop
- **Navegação Intuitiva**: Header e footer consistentes em todas as páginas
- **Metodologia BEM**: CSS organizado seguindo padrões profissionais
- **Path Aliases**: Imports limpos e organizados com `@/*`
- **Imagens Otimizadas**: `next/image` com assets leves (SVG) e diretrizes para fotos em WebP/AVIF

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **CSS Modules + BEM** - Estilização modular e metodologia profissional
- **Next/Image** - Otimização automática de imagens
- **Next/Link** - Navegação client-side otimizada
- **Path Aliases** - Organização de imports com `@/*`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header.tsx       # + Header.module.css (BEM)
│   │   ├── Footer.tsx       # + Footer.module.css (BEM)
│   │   └── CardDestino.tsx  # + CardDestino.module.css (BEM)
│   ├── destinos/            # Rotas de destinos
│   │   ├── page.tsx         # Listagem de destinos
│   │   ├── destinos.module.css  # Estilos BEM
│   │   └── [id]/            # Rotas dinâmicas
│   │       ├── page.tsx     # Detalhes do destino
│   │       ├── destinoDetalhes.module.css  # Estilos BEM
│   │       └── not-found.tsx
│   ├── styles/              # Estilos globais
│   │   └── globals.css
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx            # Página inicial
│   └── home.module.css     # Estilos BEM da home
├── data/
│   └── destinos.ts         # Dados mockados com 6 destinos
├── types.ts                # Interfaces TypeScript centralizadas
└── public/
    └── destinos/           # SVGs customizados para cada destino
```

## 🎨 Metodologia BEM Implementada

O projeto segue rigorosamente a metodologia **BEM (Block Element Modifier)**:

### Padrão de Nomenclatura:

- **Block**: `.componente`
- **Element**: `.componente__elemento`
- **Modifier**: `.componente__elemento--modificador`

### Exemplos no Projeto:

```css
/* Header */
.header__nav
.header__logo
.header__menuButton

/* Card Destino */
.cardDestino__image
.cardDestino__overlay
.cardDestino__info
.cardDestino__title

/* Destino Detalhes */
.destinoDetalhes__hero
.destinoDetalhes__sidebar
.destinoDetalhes__actions;
```

## Componentes Principais

### CardDestino

Componente otimizado para exibir destinos:

- **Imagem SVG customizada** para cada destino
- **Overlay elegante** com informações essenciais
- **Animações suaves** de hover
- **Design responsivo** adaptativo

### Header

Navegação moderna e responsiva:

- **Logo personalizado** do Rumo Certo
- **Menu hamburger** para dispositivos móveis
- **Navegação ativa** com indicadores visuais
- **Gradientes atraentes** e efeitos visuais

### Footer

Rodapé informativo e elegante:

- **Informações de contato** organizadas
- **Links úteis** para navegação
- **Design consistente** com o tema geral

## 🗺️ Destinos Incluídos

O portal apresenta **6 destinos brasileiros icônicos**:

1. **Rio de Janeiro** - Cidade Maravilhosa
2. **São Paulo** - Metrópole Cultural
3. **Salvador** - Capital da Alegria
4. **Florianópolis** - Ilha da Magia
5. **Foz do Iguaçu** - Cataratas Espetaculares
6. **Recife** - Veneza Brasileira

Cada destino possui:

- **SVG customizado** criado especificamente para o projeto
- **Descrição detalhada** e informações práticas
- **Preços estimados** e melhor época para visitar
- **Interface de reserva** simulada

## 🔧 Recursos Técnicos Avançados

### Path Aliases

Imports organizados e limpos:

```typescript
import { destinos } from "@/data/destinos";
import { Destino } from "@/types";
import styles from "@/app/components/Header.module.css";
```

### TypeScript Interfaces

Tipagem centralizada em `src/types.ts`:

```typescript
interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  localizacao: string;
  preco: string;
  melhorEpoca: string;
}
```

### Geração Estática

Páginas de destinos pré-renderizadas:

```typescript
export async function generateStaticParams() {
  return destinos.map((destino) => ({
    id: destino.id.toString(),
  }));
}
```

### Metadata Dinâmica

SEO otimizado para cada página:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destino = destinos.find((d) => d.id === parseInt(params.id));
  return {
    title: `${destino.nome} - Rumo Certo`,
    description: destino.descricao,
  };
}
```

## 🌐 Rotas da Aplicação

- **`/`** - Página inicial com apresentação do portal
- **`/destinos`** - Listagem completa de todos os destinos
- **`/destinos/[id]`** - Página individual de cada destino
- **`/destinos/[id]/not-found`** - Página 404 personalizada

## 🎨 Design e Estilização

### Paleta de Cores

- **Primária**: Gradiente azul/roxo (`#667eea` → `#764ba2`)
- **Secundária**: Tons de cinza (`#2c3e50`, `#34495e`, `#7f8c8d`)
- **Background**: Gradientes suaves e cores neutras (`#f8f9fa`, `#f5f7fa`)

### Recursos Visuais

- **Gradientes CSS** para elementos atraentes
- **Animações suaves** em hover e transições
- **Sombras elegantes** para profundidade
- **Tipografia harmônica** com pesos variados
- **Ícones emoji** para elementos visuais
- **Border-radius** arredondado para modernidade

### Layout Responsivo

Breakpoints otimizados:

- **Desktop**: 1200px+ (grid de 3 colunas)
- **Tablet**: 768px-1199px (grid de 2 colunas)
- **Mobile**: <768px (coluna única)

## 📱 Modo Mobile

- **Menu Hamburger**: botão acessível com `aria-expanded` para abrir/fechar navegação
- **Navegação Colapsável**: links do Header exibidos em coluna quando aberto
- **Grid Adaptativo**: listagem de destinos em uma coluna com espaçamento otimizado
- **Cartões Otimizados**: imagem e conteúdo com padding reduzido e footer empilhado
- **Sticky Header**: mantém o topo visível para navegação rápida

## 🌓 Tema Escuro/Claro

- **Toggle no Header**: alterna entre `claro` e `escuro` com persistência em `localStorage`
- **Preferência do Sistema**: respeita `prefers-color-scheme` na primeira carga
- **Variáveis CSS Globais**: cores e gradientes controlados por `:root` e `[data-theme="dark"]`
- **Gradientes Temáticos**: Header, Home e Destinos usam `var(--gradient-*)`
- **Superfícies**: fundos e cards adaptados via `--surface-bg` e `--surface-card-bg`

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/rumo-certo.git

# 2. Navegue para o diretório
cd rumo-certo

# 3. Instale as dependências
npm install

# 4. Execute o servidor de desenvolvimento
npm run dev

# 5. Abra no navegador
# http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📊 Estrutura de Dados

### Interface Destino

```typescript
interface Destino {
  id: number; // Identificador único
  nome: string; // Nome do destino
  imagem: string; // Caminho para SVG customizado
  descricao: string; // Descrição detalhada
  localizacao: string; // Estado/região
  preco: string; // Faixa de preço estimada
  melhorEpoca: string; // Época ideal para visita
}
```

### Dados Mockados

6 destinos brasileiros com informações completas e SVGs personalizados criados especificamente para cada cidade.

## 🎯 Melhores Práticas Implementadas

### Arquitetura

- ✅ **Separação de responsabilidades** clara
- ✅ **Componentes reutilizáveis** bem definidos
- ✅ **Tipagem TypeScript** completa
- ✅ **Path aliases** para imports limpos

### Performance

- ✅ **Imagens otimizadas** com `next/image`
- ✅ **Geração estática** de páginas
- ✅ **CSS Modules** para bundle otimizado
- ✅ **Code splitting** automático

### SEO

- ✅ **Metadata dinâmica** por página
- ✅ **URLs semânticas** e amigáveis
- ✅ **Estrutura HTML** semântica
- ✅ **Meta tags** otimizadas

### Acessibilidade

- ✅ **Alt text** em todas as imagens
- ✅ **Estrutura semântica** HTML
- ✅ **Navegação por teclado** funcional
- ✅ **Contraste** adequado de cores

## 📈 Otimizações Aplicadas (Dez/2025)

### Resultados

- **ESLint**: problemas resolvidos (erros de links internos com `<a>` e avisos de variáveis/imports não usados). Estado atual: sem problemas reportados.
- **Código morto**: removido componente não utilizado `DeferredSection`.
- **Navegação**: migração de âncoras internas para `next/link` em componentes e páginas.
- **Imagens**: conversão de `<img>` para `next/image` em lista e detalhe de destinos.
- **Build**: produção gerada com sucesso e minificação automática (Next.js/SwC).

### Arquivos alterados

- [src/app/components/CardDestino.tsx](src/app/components/CardDestino.tsx)
- [src/app/components/Header.tsx](src/app/components/Header.tsx)
- [src/app/components/Footer.tsx](src/app/components/Footer.tsx)
- [src/app/components/HomeCta.tsx](src/app/components/HomeCta.tsx)
- [src/app/destinos/[id]/page.tsx](src/app/destinos/%5Bid%5D/page.tsx)
- [src/app/layout.tsx](src/app/layout.tsx)
- [src/app/components/DeferredSection.tsx](src/app/components/DeferredSection.tsx)

### Técnicas que trouxeram maior impacto

- **Imagens (LCP)**: uso de `next/image` para otimização automática; manter assets fotográficos em **WebP/AVIF**, redimensionar para o tamanho real de exibição e usar `priority` apenas para heróis; listas e conteúdos abaixo da dobra mantêm lazy-load padrão.
- **HTML/CSS/JS**: minificação e tree-shaking via build de produção do Next (`npm run build`), sem plugins adicionais.
- **Código**: remoção de trechos não utilizados (imports/variáveis e componente sem referência) reduz bundle e evita custo de renderização.
- **Imports**: preferência por recursos nativos do Next/React (ex.: `next/link`, `next/image`) em vez de bibliotecas externas pesadas.

### Como reproduzir as verificações

```bash
npm run lint           # Verifica código e flags de não utilizados
npx ts-prune           # Aponta exports/arquivos não referenciados
npm run build          # Gera build minificado e otimizado
```

### Diretrizes práticas

- **Imagens**: para fotos, prefira **.webp** ou **.avif** em `public/`, definindo dimensões compatíveis com o layout. Use `priority` apenas em imagens críticas (herói) e mantenha lazy nas demais.
- **Estilos**: remova classes não utilizadas dos CSS Modules para reduzir o CSS final.
- **Código**: mantenha o projeto com ESLint ativo para detectar imports/variáveis não usados.
- **Imports**: evite libs grandes para utilidades simples; prefira APIs nativas do browser/React/Next.

## Possíveis Melhorias Futuras

### Funcionalidades

- 🔍 **Sistema de busca** e filtros avançados
- 📸 **Galeria de imagens** expandida
- ⭐ **Sistema de avaliações** de usuários
- 🗺️ **Integração com mapas** interativos
- 💳 **Sistema de reservas** e pagamentos
- 👤 **Área do usuário** e favoritos

### Técnicas

- 🔐 **Autenticação** com NextAuth
- 📱 **PWA** para experiência mobile
- 🌐 **Internacionalização** (i18n)
- 📊 **Analytics** e métricas
- ⚡ **Cache** avançado e otimizações

## 👨‍💻 Desenvolvimento

**Desenvolvido por:** Rodrigo Albuquerque  
**Data:** Dezembro 2025  
**Versão:** 1.0.0

### Metodologia

- ✅ **BEM CSS** para organização
- ✅ **Component-driven** development
- ✅ **Mobile-first** responsive design
- ✅ **TypeScript-first** approach

---

## 🌟 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 🔧 Enviar pull requests
- ⭐ Dar uma estrela no projeto

**⭐ Se este projeto foi útil para você, deixe uma estrela! Isso ajuda muito. Agradeço desde já! ⭐**

---

### 📝 Licença

Este projeto está sob a licença MIT.
