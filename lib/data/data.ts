import { TCCProject, TeamMember } from '../types'
import { advisors } from './advisors'

export const tccProjects: TCCProject[] = [
  {
    id: 1,
    title: "BusHere!",
    description: "Plataforma de gestão integrada de logística sobre rotas, pontos, passageiros e veículos.",
    fullDescription: `O projeto BusHere! nasceu para transformar a forma como empresas de transporte e logística de passageiros operam. Inicialmente desenvolvido para a Giraldi, empresa localizada em Pedreira, o sistema surge como resposta aos desafios causados pela dependência de processos manuais: contratos lentos e suscetíveis a erros, comunicação ineficaz com os passageiros e uma logística complexa que sobrecarrega a equipe.

Pensado a partir de um levantamento de requisitos em conjunto com a Giraldi, o BusHere! foi projetado para ser muito mais do que uma solução pontual. Sua arquitetura é adaptável e escalável, possibilitando a aplicação em diversas empresas do setor.

O objetivo é claro: automatizar processos críticos, otimizar a gestão do transporte, melhorar a experiência dos usuários e reduzir a sobrecarga de trabalho.

Para isso, a solução tecnológica se divide em dois pilares:

Sistema Web para gestores: administração de passageiros, rotas e pontos com agilidade e precisão.

Aplicativo Mobile para passageiros: acesso fácil a informações de rotas, itinerários e gerenciamento de dados pessoais.

Mais do que um software, o BusHere! representa um passo rumo a uma gestão mais eficiente, ágil e inteligente, capaz de elevar o padrão do transporte de passageiros.`,
    image: "/bushere/logo.jpg",
    gallery: [
      "/bushere/bushere-1.png",
      "/bushere/bushere-2.png",
      "/bushere/bushere-3.png",
      "/bushere/bushere-4.png",
      "/bushere/bushere-5.png",
    ],
    technologies: ["React", "Node.js", "MySQL", "expressJS", "Git", "Figma", "Bootstrap", "Cursor", "CodeRabbit"],
    members: [
        {
          name: "Victor Ramos",
          role: "Full Stack Developer, Scrum Master, Designer, Banco de Dados",
          photo: "/bushere/victor.png",
          linkedin: "https://linkedin.com/in/victor-ramos",
          email: "victor.ramosp19@gmail.com",
          location: "Jaguariúna, SP",
          about: `Desenvolvedor Full Stack em formação, com experiência em backend, frontend e bancos de dados.
           Busco constantemente aprimorar minhas competências técnicas e acompanhar as tendências do mercado, aplicando boas práticas de desenvolvimento, arquitetura de software e metodologias ágeis.`,
          career: `Atuo como líder e desenvolvedor do projeto BusHere! e outras aplicações web como este site, 
          com foco em criar soluções escaláveis, seguras e de fácil manutenção. Tenho 
          interesse em áreas como cloud computing, integração de sistemas, automação e 
          inteligência artificial, visando unir prática acadêmica e profissional para entregar resultados de impacto`,
          expertise: "Frontend Development, UI/UX Design, React, Node.js, MySQL",
          skills: ["React", "TypeScript", "Node.js", "MySQL", "Figma", "Git"],
          achievements: [
            "Líder & FullStack Developer do projeto BusHere!.",
            "Desenvolvedor de 10+ projetos autorais e co-autorais.",
            "Social Media Manager do @ds.etec",
          ],
        },
        {
          name: "Luiz Souza",
          role: "Frontend Developer, UI/UX Designer",
          photo: "/professional-man-frontend-developer.png",
          linkedin: "https://linkedin.com/in/luiz-souza",
          email: "luiz.souza@email.com",
          location: "Pedreira, SP",
          about: "-",
          career: "-",
          expertise: "UI/UX Design, Frontend Development",
          skills: ["React", "CSS", "Figma", "Adobe XD", "JavaScript"],
          achievements: [
            "-",
            "-",
            "-",
          ],
        },
        {
          name: "Marcelo Camillo",
          role: "Documentação",
          photo: "/professional-man-developer.png",
          linkedin: "https://linkedin.com/in/marcelo-camillo",
          email: "marcelo.camillo@email.com",
          location: "Amparo, SP",
          about: "-",
          career: "-",
          expertise: "Documentação",
          skills: ["Documentação"],
          achievements: [
            "-",
            "-",
            "-",
          ],
        },
        {
          name: "Renan Andrade",
          role: "Backend Developer",
          photo: "/professional-man-developer.png",
          linkedin: "https://linkedin.com/in/renan-andrade",
          email: "renan.andrade@email.com",
          location: "Jaguariúna, SP",
          about: "-",
          career: "-",
          expertise: "Backend Development, API Development, Node.js, Express",
          skills: ["Node.js", "Express", "MySQL", "MongoDB", "Docker", "AWS"],
          achievements: [
            "Arquiteto do projeto BusHere!",
            "-",
            "-",
          ],
        },
        {
          name: "Sarah Porsch",
          role: "Documentação",
          photo: "/professional-man-developer.png",
          linkedin: "https://linkedin.com/in/sarah-porsch",
          email: "sarah.porsch@email.com",
          location: "Jaguariúna, SP",
          about: "-",
          career: "-",
          expertise: "Documentação",
          skills: ["Documentação"],
          achievements: [
            "Documentadora do projeto BusHere!",
            "-",
            "-",
          ],
        },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web","Mobile"],
    features: [
      "Gestão de Veículos, Passageiros, Rotas e Pontos",
      "Portal do passageiro e responsável",
      "Comunicação integrada",
      "Relatórios automáticos",
      "Sistema de notificações",
      "Dashboard administrativo",
    ],
  },
  {
    id: 2,
    title: "Workfy",
    description: "Plataforma de empregos com ênfase na empregabilidade freelancer",
    fullDescription: `Este projeto propõe o desenvolvimento de um site de vagas de emprego com um diferencial: a ênfase na empregabilidade freelancer, funcionando de forma semelhante a plataformas como InfoJobs, Gupy e Indeed. O objetivo principal do software é facilitar, de maneira segura, organizada e ágil, a conexão entre candidatos que buscam oportunidades de trabalho e empresas que necessitam contratar profissionais para diferentes modalidades de serviço. 
    O sistema busca solucionar o problema da informalidade e da desorganização na busca por empregos temporários e freelances, além de reduzir as dificuldades enfrentadas tanto por empresas quanto por trabalhadores na hora de encontrar, selecionar e se comunicar com perfis compatíveis às suas necessidades. Para isso, o site oferecerá funcionalidades como: login com CPF (para candidatos) e CNPJ (para empresas), criação de currículos online (visíveis apenas para as empresas), e um chat interno em que as empresas poderão iniciar conversas com os candidatos selecionados, com histórico de mensagens salvo — permitindo uma interação direta entre as partes interessadas. 
    A justificativa para o desenvolvimento deste software está no aumento da demanda por trabalhos flexíveis e na carência de plataformas digitais acessíveis e objetivas voltadas para esse público. O sistema também contemplará jovens a partir de 14 anos interessados em vagas de jovem aprendiz, promovendo a inclusão desse público no mercado de trabalho. 
    Entre os benefícios proporcionados pelo software, destacam-se: agilidade na contratação de serviços, maior organização das informações dos candidatos, proteção de dados pessoais e melhora na comunicação entre empresa e candidato, evitando ruídos ou excesso de mensagens indevidas. 
    O público-alvo da aplicação compreende dois grupos principais: os candidatos (freelancers, jovens e adultos em busca de oportunidades) e as empresas que necessitam contratar trabalhadores em diferentes modalidades. Ambos serão beneficiados com o uso da plataforma, que proporcionará mais eficiência, praticidade e segurança em todo o processo de contratação. 
    A metodologia adotada baseia-se no levantamento de requisitos funcionais e não funcionais junto a potenciais usuários, com apoio de métodos ágeis de desenvolvimento e uso de tecnologias web modernas. A implantação inicial do software será voltada para ambientes urbanos e centros comerciais — locais com maior demanda por contratações pontuais e alta rotatividade de vagas.`,
    gallery: [
      "/workfy/workfy-1.png",
      "/workfy/workfy-2.png",
      "/workfy/workfy-3.png",
    ],
    image: "/workfy/workfy-logo.png",
    technologies: ["Laravel", "PHP", "MySQL", "expressJS", "nodeJS"],
    members: [
      {
        name: "Murilo Iossi",
        role: "Full Stack Developer & Database",
        photo: "/workfy/murilo.jpg",
        linkedin: "https://www.linkedin.com/in/murilo-iossi/",
        email: "iossimurilo@gmail.com",
        location: "Jaguariúna, SP",
        about: "Desenvolvedor Full Stack especializado em desenvolvimento backend, frontend e banco de dados.",
        career: "Atua como líder e desenvolvedor Full Stack em projetos de TCC e desenvolvimento web.",
        expertise: "Back end development, front end development, Database development",
        skills: ["C#", "PHP"],
        achievements: [
          "Líder e Full Stack do projeto de TCC WorkFy",
          "Dev Full Stack do WebStufa Angiosperma",
          "Dev front end do WebZoo",
        ],
      },
      {
        name: "Luan Chilaver",
        role: "Banco de dados & Full Stack",
        photo: "/workfy/luan.jpg",
        linkedin: "https://www.linkedin.com/in/luan-chilaver-24bb7036b/",
        email: "luanhchilaver@gmail.com",
        location: "Amparo, SP",
        about: "Desenvolvedor Full Stack especializado em banco de dados e desenvolvimento frontend.",
        career: "Atua como desenvolvedor Full Stack com foco em banco de dados e frontend.",
        expertise: "Front End development",
        skills: ["PHP", "Python", "Javascript", "HTML", "CSS"],
        achievements: [
          "Projeto blog de noticias",
          "Projeto calculadora",
          "Banco de dados e front end do projeto de TCC Workfy",
        ],
      },
      {
        name: "Marcos Brolezi",
        role: "Documentação & testes do Software",
        photo: "/workfy/marcos.jpg",
        linkedin: "https://www.linkedin.com/in/marcos-santos-957ba136b",
        email: "marcos981@gmail.com",
        location: "Amparo, SP",
        about: "Especialista em documentação e testes de software com experiência em design e marketing.",
        career: "Atua na documentação e testes de qualidade de software, além de marketing esportivo.",
        expertise: "Design, Front End, Documentação, Testes de qualidade",
        skills: ["Word", "Canvas", "HTML", "CSS", "Javascript"],
        achievements: [
          "Documentação e testes do projeto de TCC WorkFy",
          "Marketing do handebol amparo",
          "Desenvolvimento de uniformes para o handebol amparo",
        ],
      },
      {
        name: "Micaelly Mariano",
        role: "Desenvolvedora Fullstack",
        photo: "/workfy/micaelly.jpg",
        linkedin: "https://www.linkedin.com/in/micaelly-mariano-632767269",
        email: "micaellyvitoriaferrreira@gmail.com",
        location: "Amparo, SP",
        about: "Desenvolvedora Fullstack especializada em Frontend, Backend e Migrations com Banco de Dados.",
        career: "Atua como desenvolvedora Fullstack responsável pela codificação em projetos de TCC.",
        expertise: "Desenvolvimento Web (Frontend e Backend), UI Design",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "Laravel", "PHP"],
        achievements: [
          "Desenvolvedora Fullstack e responsável pela codificação no TCC Workfy",
        ],
      },
      {
        name: "Valentina Bastos",
        role: "Designer & Front-end & Backup",
        photo: "/workfy/valentina.jpg",
        linkedin: "https://www.linkedin.com/in/valentina-bastos-de-souza-43795136b/",
        email: "valentinabastosdesouza@gmail.com",
        location: "Amparo, SP",
        about: "Designer e desenvolvedora frontend especializada em design, documentação e gestão de projetos.",
        career: "Atua como designer e desenvolvedora frontend em projetos web e de TCC.",
        expertise: "Designer, Front-end, documentação, gestão",
        skills: ["HTML e CSS", "Figma", "PHP"],
        achievements: [
          "Designer do projeto Webstufa",
          "Designer do projeto Webzoo",
          "Designer e Front end do projeto de TCC Workfy",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web"],
    features: [
      "Login com CPF (para candidatos) e CNPJ (para empresas)",
      "Criação automática de currículos online (visíveis apenas para as empresas)",
      "Chat interno em que as empresas poderão iniciar conversas com os candidatos selecionados, com histórico de mensagens salvo",
      "Maior organização das informações dos candidatos",
      "Proteção de dados pessoais",
      "Melhora na comunicação entre empresa e candidato",
    ],
  },
  {
    id: 3,
    title: "TransportAI",
    description: "Sistema para a otimização de rotas a partir do uso Inteligência Artificial.",
    fullDescription: `Sistema de gestão logística, integrada com Inteligência Artificial para a organização de rotas.
    Atualmente, muitas transportadoras ainda usam planilhas manuais e mapas físicos, o que causa atrasos, erros e falhas de comunicação. Para resolver esse problema, o TransportAI propõe uma plataforma web e mobile voltada à gestão logística.
    Com funcionalidades como cadastro de cargas, veículos e clientes, simulação 3D de carregamento e geração de relatórios, a solução visa aumentar a eficiência, segurança e pontualidade. Integrando inteligência artificial, a plataforma facilita o trabalho de transportadoras e caminhoneiros, melhorando a produtividade.`,
    image: "/transportAi/logo.jpg",
    technologies: ["Flutter", "PHP", "Node.js", "Laravel", "MySQL", "JavaScript"],
    gallery: [
      "/transportAi/transportai-1.jpeg",
      "/transportAi/transportai-2.jpeg",
      "/transportAi/transportai-3.jpeg",
      "/transportAi/transportai-4.jpeg",
      "/transportAi/transportai-5.jpeg",
      "/transportAi/transportai-6.jpeg",
      "/transportAi/transportai-7.jpeg",
      "/transportAi/transportai-8.jpeg",
      "/transportAi/transportai-9.jpeg",
      "/transportAi/transportai-10.jpeg",
    ],
    members: [
      {
        name: "Murilo Fornel de Almeida",
        role: "Full Stack Developer, Scrum Master",
        photo: "/transportAi/murilo.jpeg",
        linkedin: "https://www.linkedin.com/in/murilo-fornel-de-almeida",
        email: "murilofdal@gmail.com",
        location: "Amparo, SP",
        about: "Project Leader e Full Stack Developer do projeto TransportAI, sistema de gestão logística com IA. Atua como Scrum Master coordenando o desenvolvimento da equipe.",
        career: "Líder técnico especializado em desenvolvimento full stack, com foco em frontend, UI/UX e gestão de projetos ágeis.",
        expertise: "Frontend Developer, UI/UX, Laravel Blade, MySQL",
        skills: ["MySQL", "Laravel Blade", "Figma", "Github Desktop"],
        achievements: [
          "Líder do projeto TransportAI",
        ],
      },
      {
        name: "Lucy Pereira Piza",
        role: "Documentação e Prototipagem de Telas",
        photo: "/transportAi/lucy.jpeg",
        linkedin: "http://linkedin.com/in/lucy-piza",
        email: "llucy.psz@gmail.com",
        location: "Monte Alegre do Sul, SP",
        about: "Responsável pela documentação e prototipagem de telas do projeto TransportAI, sistema de gestão logística com IA. Especializada em UI/UX Design e criação de interfaces.",
        career: "Atua na área de documentação técnica e design de interfaces, focando em criar experiências de usuário intuitivas e bem documentadas.",
        expertise: "UI/UX Design, Figma",
        skills: ["Figma"],
        achievements: [
          "Responsável pela documentação do TransportAI",
        ],
      },
      {
        name: "Miguel Cera",
        role: "Desenvolvedor",
        photo: "/placeholder-user.jpg",
        linkedin: "",
        email: "",
        location: "Amparo, SP",
        about: "Desenvolvedor do projeto TransportAI, sistema de gestão logística com IA.",
        career: "Atua no desenvolvimento de sistemas de gestão logística e inteligência artificial.",
        expertise: "Desenvolvimento Web, Mobile, IA",
        skills: ["Flutter", "PHP", "Node.js", "Laravel", "MySQL", "JavaScript"],
        achievements: [
          "Desenvolvedor do projeto TransportAI",
        ],
      },
      {
        name: "Nicolas Rafael Marcondez Luz Vieira",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "",
        email: "",
        location: "Amparo, SP",
        about: "Full Stack Developer do projeto TransportAI, sistema de gestão logística com IA.",
        career: "Atua no desenvolvimento de sistemas de gestão logística e inteligência artificial.",
        expertise: "Desenvolvimento Web, Mobile, IA",
        skills: ["Flutter", "PHP", "Node.js", "Laravel", "MySQL", "JavaScript"],
        achievements: [
          "Desenvolvedor do projeto TransportAI",
        ],
      },
      {
        name: "Victória Maiorino Fornel",
        role: "UI/UX Designer & Banco de dados",
        photo: "/transportAi/victoria.jpeg",
        linkedin: "https://www.linkedin.com/in/victoria-maiorino-fornel",
        email: "v.maiorino.f@gmail.com",
        location: "Amparo, SP",
        about: "Estudante do último semestre em Desenvolvimento de Sistemas na ETEC de Amparo, com foco em UX/UI, prototipação no Figma e modelagem de banco de dados (DER/MER). Busco aplicar criatividade e visão de usuário no desenvolvimento de soluções digitais.",
        career: "Quero construir minha carreira na área de tecnologia e inovação, unindo design, experiência do usuário e inteligência artificial para desenvolver soluções que facilitem a vida das pessoas.",
        expertise: "Frontend, UI | UX Design, Prototipação de Interfaces, Modelagem de dados",
        skills: ["Figma", "Banco de Dados Relacionais", "Noções de Front-end", "Criatividade", "Organização", "Facilidade em aprender"],
        achievements: [
          "Desenvolvedora do projeto TransportAI",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Web", "Mobile"],
    features: [
      "Organização de Cargas, Clientes, Veículos e Transportes",
      "Integração de Inteligência Artificial",
      "Gestão de documentos",
      "Dashboard",
      "Sistema de rotas",
      "Sistema de notificações",
    ],
  },
  {
    id: 4,
    title: "Handly",
    description: "Software educativo que facilita o aprendizado da Língua Brasileira de Sinais (Libras) por meio de dicionário interativo, missões e acompanhamento de progresso.",
    fullDescription: `A Libras é a língua oficial da comunidade surda no Brasil, reconhecida pela Lei nº 10.436 de 2002, um marco muito importante para garantir os direitos da comunidade surda.
    Mesmo assim, ainda existem muitos desafios relacionados à inclusão, já que o preconceito e a falta de conscientização sobre a Libras e a cultura surda ainda são grandes.
    Pensando nisso, desenvolvemos o Handly, um software educativo voltado para quem tem interesse em aprender Libras. O sistema oferece um dicionário interativo e atividades práticas organizadas em uma trilha de aprendizagem, com tarefas e categorias que ajudam o usuário a aprender de forma clara, prática e acessível.`,
    image: "/handly/handly.jpg",
    gallery: [
      "/handly/handly-1.jpg",
      "/handly/handly-2.jpg",
      "/handly/handly-3.jpg",
      "/handly/handly-4.jpg",
    ],
    technologies: ["PHP", "Laravel","MySQL", "Git"],
    members: [
      {
        name: "Caio Henrique Meurer",
        role: "Full stack developer e banco de dados",
        photo: "/placeholder-user.jpg",
        linkedin: "https://www.linkedin.com/in/caio-meurer",
        email: "meurercaiohenrique@gmail.com",
        location: "Amparo, SP",
        about: "Sou estudante de escola técnica, interessado em tecnologia e desenvolvimento, buscando crescer na área com dedicação e aprendizado contínuo.",
        career: "Quero seguir carreira na área técnica, aplicando meus conhecimentos em programação, tecnologia e soluções digitais.",
        expertise: "Bom em matemática, programação frontend, criação de projetos técnicos, organização e aprendizado rápido",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
        ],
      },
      {
        name: "Echiley Raissa de Paula Cardoso",
        role: "Documentação & design",
        photo: "/handly/echiley.jpg",
        linkedin: "https://www.linkedin.com/in/echiley-cardoso",
        email: "echileypaulacardoso@gmail.com",
        location: "Águas de Lindoia, SP",
        about: "Meu nome é echiley mas muitos me chamam de 'echy', tenho uma gatinha chamada cleópatra e sou evangélica. Por morar em uma cidade calma, acredito que isso influenciou nos meus gostos. Gosto de ler livros, jogar futebol e vôlei, assistir documentários, ir na igreja e sair de noite se for para comer. Não fumo e nem bebo nada alcoólico, pois acredito que não preciso dessas coisas para me sentir bem. Fui representante de classe durante três anos no ensino médio e trabalho como guia de turismo, essas duas competências ajudaram para que eu desenvolvesse uma comunicação interpessoal boa e só aumentou meu gosto por gestão de projetos.",
        career: "Gosto da tecnologia, mas de uma forma mais indireta, acredito que eu gosto do que ela pode proporcionar para nós desde experiencias convencionais à sentimentais. De uma forma mais clara, eu gosto da área de front-end. Sou apaixonada por fazer um design de tela e pensar em quais sentimentos um usuário ao acessá-la teria.",
        expertise: "UI/UX design, gestão de projetos",
        skills: ["Word", "MySQL", "Figma"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
          "Experiência prática em front-end, gestão de projetos e comunicação interpessoal",
        ],
      },
      {
        name: "Enzo Brunelli Denofrio",
        role: "Modelagem 3D, Desenvolvimento Full Stack e Banco de Dados",
        photo: "/handly/brunelli.jpg",
        linkedin: "https://br.linkedin.com/in/enzo-brunelli-a44500342",
        email: "enzobrunelli10@gmail.com",
        location: "Amparo, SP",
        about: "Gosto de novas experiências e sou muito dedicado em aprender, sempre buscando evoluir em tecnologia e modelagem 3D.",
        career: "Pretendo seguir carreira na área de tecnologia, atuando tanto em desenvolvimento de sistemas (full stack e banco de dados) quanto em modelagem 3D.",
        expertise: "Raciocínio lógico, comunicação, desenvolvimento web, modelagem 3D",
        skills: ["PHP", "HTML", "CSS", "Blender", "MySQL"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
        ],
      },
      {
        name: "Erika Romualdo",
        role: "Documentação",
        photo: "/handly/erika.jpg",
        linkedin: "https://www.linkedin.com/in/erikaromualdo",
        email: "Erikasoaresromualdo@gmail.com",
        location: "Pinhalzinho, SP",
        about: "Meus interesses estão voltados para gestão de projetos e bancos de dados. Valorizo o trabalho em equipe e a organização de processos.",
        career: "Me interesso em áreas de gestão de TI e Gerenciamento de dados, onde posso aplicar minhas habilidades em planejamento, organização comunicação e colaboração para gerar resultados.",
        expertise: "MySQL, Gestão de Projetos, Gerenciamento de dados, UI/UX Design",
        skills: ["Comunicação", "MySQL", "Figma", "Gerenciamento de dados", "HTML", "PHP"],
        achievements: [
          "Documentação do TCC",
        ],
      },
      {
        name: "Gabriel Araujo Gerbi",
        role: "Full Stack Developer, Empreendedor em Tecnologia, Estrategista de Negócios",
        photo: "/handly/gerbi.jpg",
        linkedin: "https://www.linkedin.com/in/gabriel-gerbi",
        email: "contatogabrielgerbi@gmail.com",
        location: "Amparo, SP",
        about: "Sou apaixonado por tecnologia, inovação e negócios. Como estudante de desenvolvimento de sistemas e jovem empreendedor, busco constantemente criar soluções inteligentes e escaláveis, unindo visão estratégica a competências técnicas. Meu propósito é transformar ideias em projetos de impacto real.",
        career: "Atualmente na área de desenvolvimento de sistemas, explorando desde programação full stack até design de produtos digitais. Paralelamente, desenvolvo iniciativas empreendedoras voltadas à integração entre tecnologia e negócios.",
        expertise: "Desenvolvimento web full stack, arquitetura de sistemas, bancos de dados, UI/UX design, empreendedorismo digital",
        skills: ["Java", "Python", "JavaScript", "TypeScript", "Node.js", "React", "MySQL", "Figma", "Git"],
        achievements: [
          "Participante do desenvolvimento do projeto handly",
          "Criação de protótipos funcionais aplicando metodologias ágeis (scrum e kanban)",
          "Idealizador de projetos independentes de software com foco em automação e eficiência",
          "Experiência prática em front-end, back-end e modelagem de banco de dados",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2025",
    category: ["Web"],
    features: [
      "Sistema de notificações",
      "Trilha de aprendizagem",
      "Dicionário Interativo",
      "Acompanhamento de Progresso",
    ],
  },
  {
    id: 5,
    title: "App de Controle Financeiro",
    description: "Aplicativo para controle de gastos pessoais com categorização automática e relatórios detalhados.",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Dart", "SQLite", "Firebase", "Chart.js"],
    members: [
      {
        name: "Isabella Santos",
        role: "Mobile Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/isabella-santos",
        email: "isabella.santos@email.com",
        location: "São Paulo, SP",
        about: "Especialista em aplicativos financeiros com foco em fintechs e soluções de gestão pessoal.",
        career: "Desenvolve aplicativos fintech e soluções de gestão financeira pessoal.",
        expertise: "Flutter, Financial Apps, Mobile UI/UX",
        skills: ["Flutter", "Dart", "Firebase", "SQLite", "Chart.js"],
        achievements: [
          "Desenvolveu 3 apps financeiros",
          "Especialista em Flutter",
          "Certificação em Fintech Development",
        ],
      },
      {
        name: "Matheus Silva",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/matheus-silva",
        email: "matheus.silva@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas financeiros e segurança com experiência em desenvolvimento de APIs para fintechs.",
        career: "Desenvolve sistemas bancários e APIs financeiras para grandes instituições.",
        expertise: "Financial Systems, Security, Firebase, API Development",
        skills: ["Node.js", "Firebase", "SQLite", "Security", "APIs"],
        achievements: [
          "Implementou sistemas de segurança para 5+ fintechs",
          "Especialista em segurança financeira",
          "Certificação em Cybersecurity",
        ],
      },
    ],
    advisor: advisors[0],
    year: "2025",
    category: ["Mobile"],
    features: [
      "Controle de gastos por categoria",
      "Categorização automática",
      "Relatórios e gráficos",
      "Metas financeiras",
      "Backup na nuvem",
      "Exportação de dados",
    ],
  },
  {
    id: 6,
    title: "Sistema de Delivery",
    description: "Plataforma completa de delivery com painel administrativo, app do cliente e sistema de rastreamento.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    members: [
      {
        name: "Diego Martins",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/diego-martins",
        email: "diego.martins@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de delivery e logística com experiência em plataformas de e-commerce e marketplace.",
        career: "Desenvolve plataformas de entrega e sistemas logísticos para empresas de delivery.",
        expertise: "Delivery Systems, Real-time Tracking, E-commerce",
        skills: ["React", "Node.js", "MongoDB", "Socket.io", "Maps API"],
        achievements: [
          "Desenvolveu 4 plataformas de delivery",
          "Especialista em sistemas logísticos",
          "Consultor em otimização de entregas",
        ],
      },
      {
        name: "Juliana Pereira",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/juliana-pereira",
        email: "juliana.pereira@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de tempo real e comunicação com experiência em aplicações de rastreamento e notificações.",
        career: "Desenvolve sistemas de rastreamento e comunicação em tempo real para aplicações de delivery.",
        expertise: "Real-time Systems, Socket.io, MongoDB, Notification Systems",
        skills: ["Node.js", "Socket.io", "MongoDB", "Redis", "WebSockets"],
        achievements: [
          "Implementou sistemas de tempo real para 8+ apps",
          "Especialista em WebSockets",
          "Certificação em Real-time Systems",
        ],
      },
    ],
    advisor: advisors[1],
    year: "2025",
    category: ["Web"],
    features: [
      "Painel administrativo completo",
      "App mobile para clientes",
      "Rastreamento em tempo real",
      "Sistema de avaliações",
      "Gestão de entregadores",
      "Relatórios de performance",
    ],
    links: {
      demo: "https://demo-delivery.vercel.app",
      github: "https://github.com/etec-tcc/sistema-delivery",
    },
  },
  {
    id: 7,
    title: "App de Receitas Inteligente",
    description: "Aplicativo que sugere receitas baseadas nos ingredientes disponíveis e preferências alimentares do usuário.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL", "OpenAI API"],
    members: [
      {
        name: "Amanda Rodrigues",
        role: "Mobile Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/amanda-rodrigues",
        email: "amanda.rodrigues@email.com",
        location: "São Paulo, SP",
        about: "Especialista em apps de culinária e IA com foco em aplicações de foodtech e inteligência artificial.",
        career: "Desenvolve aplicativos com IA para o setor alimentício e culinário.",
        expertise: "Mobile AI, React Native, Food Tech",
        skills: ["React Native", "JavaScript", "TensorFlow", "AI Integration"],
        achievements: [
          "Desenvolveu 3 apps de foodtech",
          "Especialista em IA mobile",
          "Prêmio de inovação em foodtech",
        ],
      },
      {
        name: "Felipe Carvalho",
        role: "AI Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/felipe-carvalho",
        email: "felipe.carvalho@email.com",
        location: "São Paulo, SP",
        about: "Especialista em machine learning e recomendação com foco em sistemas inteligentes para culinária e nutrição.",
        career: "Desenvolve sistemas de IA para recomendação de receitas e análise nutricional.",
        expertise: "Machine Learning, TensorFlow, Python, Recommendation Systems",
        skills: ["Python", "TensorFlow", "PostgreSQL", "OpenAI API", "ML"],
        achievements: [
          "Implementou sistemas de IA para 5+ foodtechs",
          "Especialista em sistemas de recomendação",
          "Mestrado em Machine Learning",
        ],
      },
    ],
    advisor: advisors[2],
    year: "2024",
    category: ["Mobile"],
    features: [
      "Sugestão inteligente de receitas",
      "Análise de ingredientes disponíveis",
      "Preferências alimentares personalizadas",
      "Análise nutricional",
      "Lista de compras automática",
      "Sistema de avaliações",
    ],
    links: {
      github: "https://github.com/etec-tcc/app-receitas-ia",
    },
  },
  {
    id: 8,
    title: "Sistema de Agendamento Médico",
    description: "Plataforma para agendamento de consultas médicas com integração de calendário e notificações automáticas.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "JWT", "SendGrid"],
    members: [
      {
        name: "Rodrigo Almeida",
        role: "Full Stack Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/rodrigo-almeida",
        email: "rodrigo.almeida@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas médicos e agendamento com experiência em healthtechs e telemedicina.",
        career: "Desenvolve healthtechs e sistemas de agendamento médico para clínicas e hospitais.",
        expertise: "Medical Systems, Scheduling, Angular, Health Tech",
        skills: ["Angular", "TypeScript", "Spring Boot", "PostgreSQL", "JWT"],
        achievements: [
          "Desenvolveu 4 sistemas médicos",
          "Especialista em healthtech",
          "Consultor em telemedicina",
        ],
      },
      {
        name: "Vanessa Torres",
        role: "Backend Developer",
        photo: "/placeholder-user.jpg",
        linkedin: "https://linkedin.com/in/vanessa-torres",
        email: "vanessa.torres@email.com",
        location: "São Paulo, SP",
        about: "Especialista em sistemas de saúde e segurança com foco em conformidade e proteção de dados médicos.",
        career: "Desenvolve sistemas médicos seguros e em conformidade com regulamentações de saúde.",
        expertise: "Healthcare Systems, Security, Spring Boot, Compliance",
        skills: ["Spring Boot", "Java", "PostgreSQL", "Security", "Compliance"],
        achievements: [
          "Implementou sistemas seguros para 6+ clínicas",
          "Especialista em compliance médico",
          "Certificação em Healthcare Security",
        ],
      },
    ],
    advisor: advisors[3],
    year: "2023",
    category: ["Web"],
    features: [
      "Agendamento online de consultas",
      "Integração com calendário",
      "Notificações automáticas",
      "Gestão de pacientes",
      "Relatórios médicos",
      "Sistema de lembretes",
    ],
    links: {
      demo: "https://demo-agendamento.vercel.app",
      github: "https://github.com/etec-tcc/sistema-agendamento",
    },
  },
]

export const getProjectById = (id: number): TCCProject | undefined => {
  return tccProjects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): TCCProject[] => {
  if (category === 'all') return tccProjects
  return tccProjects.filter(project => 
    project.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  )
}

export const getProjectsByYear = (year: string): TCCProject[] => {
  if (year === 'all') return tccProjects
  return tccProjects.filter(project => project.year === year)
}

export const searchProjects = (query: string): TCCProject[] => {
  if (!query.trim()) return tccProjects
  
  const searchTerm = query.toLowerCase()
  return tccProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.members.some(member => member.name.toLowerCase().includes(searchTerm))
  )
}
