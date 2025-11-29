# Hub de TCC's - ETEC João Belarmino

Bem-vindo ao repositório do **Hub de TCC's**, o portal oficial para exibição dos Trabalhos de Conclusão de Curso do curso Técnico em Desenvolvimento de Sistemas da ETEC João Belarmino.

Este projeto serve como uma vitrine digital para os projetos inovadores desenvolvidos pelos alunos, permitindo que a comunidade escolar, empresas e interessados conheçam as soluções criadas.

## 🚀 Sobre o Projeto

O **Hub de TCC's** foi desenvolvido com o objetivo de centralizar e profissionalizar a apresentação dos projetos finais. A plataforma oferece uma experiência moderna e interativa, destacando não apenas o produto final, mas também as equipes de desenvolvimento, as tecnologias utilizadas e os professores orientadores.

## ✨ Funcionalidades

- **Vitrine de Projetos:** Listagem visual de todos os TCCs.
- **Página de Detalhes:** Informações aprofundadas sobre cada projeto, incluindo:
  - Descrição completa e proposta de valor.
  - Galeria de imagens e vídeos.
  - Tecnologias e ferramentas utilizadas.
  - Links para repositórios e demos.
- **Perfis de Equipe:** Popups detalhados sobre cada membro da equipe (Bio, Skills, Redes Sociais).
- **Corpo Docente:** Seção dedicada aos professores orientadores e coordenadores.
- **Design Responsivo:** Interface totalmente adaptada para dispositivos móveis e desktops.
- **Modo Escuro/Claro:** Suporte a temas para melhor acessibilidade e conforto visual.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias mais modernas do ecossistema web:

- **[Next.js 14](https://nextjs.org/)** - Framework React para produção (App Router).
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilitários CSS para estilização rápida.
- **[Shadcn/ui](https://ui.shadcn.com/)** - Coleção de componentes de UI reutilizáveis e acessíveis (baseado em Radix UI).
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones leve e consistente.
- **[Framer Motion](https://www.framer.com/motion/)** (ou animações CSS nativas) - Para transições e micro-interações suaves.

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm/yarn

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/victimnn/hub-tccs.git
   cd hub-tccs
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse o projeto:**
   Abra seu navegador e acesse `http://localhost:3000`.

## 📂 Estrutura do Projeto

```
hub-tccs/
├── app/                 # Páginas e rotas do Next.js (App Router)
│   ├── projetos/        # Rotas dinâmicas para detalhes dos projetos
│   ├── layout.tsx       # Layout principal da aplicação
│   └── page.tsx         # Página inicial (Home)
├── components/          # Componentes React reutilizáveis
│   ├── layout/          # Componentes estruturais (Header, Footer)
│   ├── project/         # Componentes específicos de projetos
│   ├── team/            # Componentes de equipe (Popups, Cards)
│   ├── theme/           # Controle de tema (Dark/Light)
│   └── ui/              # Componentes base do Shadcn/ui (Button, Dialog, etc.)
├── lib/                 # Utilitários e definições de tipos
│   ├── data/            # Dados estáticos (Projetos, Membros)
│   └── utils.ts         # Funções auxiliares (cn, formatters)
├── public/              # Arquivos estáticos (Imagens, Logos)
└── styles/              # Estilos globais
```

## 🤝 Contribuição

Contribuições são bem-vindas! Se você é aluno ou professor e deseja sugerir melhorias:

1. Faça um Fork do projeto.
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`).
3. Faça o Commit de suas mudanças (`git commit -m 'Adiciona NovaFeature'`).
4. Faça o Push para a Branch (`git push origin feature/NovaFeature`).
5. Abra um Pull Request.

## 🎓 Créditos

- **Instituição:** ETEC João Belarmino
- **Curso:** Técnico em Desenvolvimento de Sistemas
- **Mantenedor:** [Victor Ramos](https://github.com/victimnn)

---
