import "./App.css";
import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import Article from "./components/article/article.js";
import Table from "./components/table/table";
import TableRow from "./components/table-row/table-row";
import Section from "./components/section/section.js";

const rows = [
  {
    col1: "CURSOS(S):",
    col2: [
      "1904 - Ciência da Computação",
      "1902 - Tecnologia em Análise e Desenvolvimento de Sistemas",
      "1905 - Engenharia de Computação",
      "1906 - Engenharia de Software",
      "1907 - Sistemas de Informação",
    ],
  },
  {
    col1: "PROFESSOR/A:",
    col2: ["Ricardo Masao Kondo"],
  },
  {
    col1: "NOME DA DISCIPLINA:",
    col2: ["Programação para Web"],
  },
  {
    col1: "CÓDIGO DA DISCIPLINA:",
    col2: ["1919.000.414-5"],
  },
  {
    col1: "CH PRESENCIAL:",
    col2: ["64"],
  },
  {
    col1: "CH A DISTÂNCIA:",
    col2: ["4"],
  },
];

const sections = [
  {
    title: "EMENTA:",
    text: "Introdução à Programação para Web. Introdução a arquitetura cliente servidor. Revisão dos protocolos utilizados para a Web. Linguagens de marcação. Interfaces de usuário: estilização, usabilidade e acessibilidade, design responsivo. Padrões para interoperabilidade de dados. Introdução a Arquitetura de Software e estilos arquiteturais mais usados na Web. Prática em programação web.",
  },
  {
    title: "OBJETIVO:",
    text: "Propiciar o contato dos alunos com os aspectos relacionados à criação e produção de aplicações Web. Fornecer uma visão geral das atividades, técnicas, métodos e ferramentas relacionados ao projeto de aplicações Web. Fornecer fundamentos de hipermídia: nós, ligações, atributos, estruturas, e interação com o usuário. Apresentar os conceitos, tecnologias e plataformas básicas necessárias para o desenvolvimento de sistemas e aplicações Web. Conhecer as linguagens de programação Web e aprender as suas filosofias. Conhecer padrões e arquiteturas.",
  },
  {
    topic: 1,
    title: "PROGRAMA:",
    topics: [
      {
        subTitle: "Tópico I: Introdução à Programação para Web",
        subItems: [
          "➔ Conceitos Gerais e Histórico;",
          "➔ Definição de Hipertexto, Multimídia e Hipermídia;",
          "➔ Caracterização de hipermídia e multimídia, com suas diferenciações, aplicações, pontos fortes e fracos;",
          "➔ Fundamentos de nós, ligações, atributos, estruturas, interação com o usuário.",
        ],
      },
      {
        subTitle: "Tópico II: Engenharia Web",
        subItems: [
          "➔ Padrões Web;",
          "➔ Interação Humano Computador na Web;",
          "➔ Usabilidade na Web.",
        ],
      },
      {
        subTitle: "Tópico III: Linguagens de Marcação",
        subItems: [
          "➔ HTML e CSS;",
          "➔ Semântica e Design Tableless;",
          "➔ Design responsivo e experiência do usuário;",
          "➔ XML e XHTML;",
          "➔ DTD e XSD;",
          "➔ HTML5;",
          "➔ Frameworks.",
        ],
      },
      {
        subTitle: "Tópico IV: Linguagens de Script para Documentos Web",
        subItems: [
          "➔ JavaScript e Introdução à Programação Funcional;",
          "➔ HTML DOM;",
          "➔ JSON e Ajax;",
          "➔ Frameworks.",
        ],
      },
      {
        subTitle: "Tópico V: Introdução a Arquitetura de Software",
        subItems: [
          "➔ Padrão Arquitetural em 3 Camadas;",
          "➔ MVC e suas derivações.",
        ],
      },
      {
        subTitle: "Tópico VI: Introdução à Linguagens de Programação Web",
        subItems: [
          "➔ Estado da arte;",
          "➔ Principais linguagens de programação Web.",
        ],
      },
      {
        subTitle: "Tópico VII: PHP",
        subItems: [
          "➔ A linguagem PHP;",
          "➔ Orientação a Objetos em PH;",
          "➔ Acesso a banco de dados;",
          "➔ Frameworks.",
        ],
      },
      {
        subTitle:
          "Tópico VIII: Introdução à Web Services e Arquitetura Orientada a Serviços",
        subItems: [
          "➔ O que são Web Services;",
          "➔ Arquitetura orientada a serviços;",
        ],
      },
      {
        subTitle: "Tópicos Especiais:",
        subItems: [
          "➔ Java para web;",
          "➔ JavaScript no lado servidor com NodeJS;",
          "➔ Otimização para motores de busca (SEO).",
        ],
      },
    ],
  },
  {
    list: 1,
    paragraph: 1,
    title: "PROCEDIMENTOS:",
    paragraphs: [
      "Metodologia da oferta: A disciplina é de 64 horas ofertadas de forma presencial e com 4 horas ofertadas de forma EaD com o apoio de ferramentas virtuais de suporte ao aprendizado, como o Ambiente Virtual de Aprendizagem (AVA), para compartilhamento e realização de atividades. O plano de ensino, cronograma de aulas, atividades e materiais para estudo serão disponibilizados no ambiente virtual. O acesso ao AVA é realizado com passaporte institucional pelo endereço https://ava.ufms.br/.",
      "* Atividades EaD (4h teóricas): Elaboração e apresentação de atividades a serem desenvolvidas pelos alunos",
      "Material Didático: O Material Didático da disciplina será organizado no AVA de acordo com os Tópicos e suas respectivas unidades de conteúdo.",
      "Estratégias didáticas: A disciplina será ministrada com as seguintes estratégias didáticas, organizadas em momentos (reuniões), de acordo com o cronograma da disciplina:",
    ],
    listItems: [
      "- Aulas dialogadas.",
      "- Sala de aula invertida.",
      "- Discussões em grupo e fóruns online.",
      "- Desenvolvimento de atividades individuais e em grupo: fóruns, questionários, elaboração de instrumentos de observação e projeto.",
    ],
  },
  {
    list: 1,
    title: "RECURSOS:",
    listItems: [
      "- Ambiente Virtual de Aprendizagem – AVA",
      "- Biblioteca Virtual do AVA",
      "- Fórum",
      "- Wiki",
      "- Atividades de envio de arquivo",
      "- Chats on line",
      "- Artigos científicos",
      "- e-books",
    ],
  },
  {
    topic: 1,
    newLine: 1,
    title: "BIBLIOGRAFIA",
    topics: [
      {
        subTitle: "Bibliografia Básica:",
        subItems: [
          "SEBESTA, ROBERT W. Conceitos de Linguagens de Programação. 9. Ed. Porto Alegre, Rs: Bookman, 2011. 792 P. Isbn 9788577807918.",
          "PRESSMAN, ROGER S.; LOWE, DAVID BRIAN. Engenharia Web. Rio de Janeiro, Rj: Ltc, 2009. Xiii, 416 P. Isbn 978-85-216-1696-2.",
          "TERUEL, EVANDRO CARLOS. Html 5 Guia Prático. 2. São Paulo Erica 2014 1 Recurso Online. Isbn 9788536519296.",
          "BASS, LEN; CLEMENTS, PAUL; KAZMAN, RICK. Software Architecture In Practice. 3Rd Ed. Upper Saddle River, N.j.: Addison-wesley, C2013. Xix, 589 P. (Sei Series In Software Engineering). Isbn 9780321815736.",
          "BOOCH, GRADY; RUMBAUGH, JAMES; JACOBSON, IVAR. Uml: Guia do Usuário. 2. Ed., Totalmente Rev. e Atual. Rio de Janeiro, Rj: Elsevier, 2012. Xxvii, 521 P. Isbn 9788535217841.          ",
        ],
      },
      {
        subTitle: "Bibliografia complementar",
        subItems: [
          "MILETTO, EVANDRO MANARA; BERTAGNOLLI, SILVIA DE CASTRO (ORG.). Desenvolvimento de Software Ii: Introdução ao Desenvolvimento Web com Html, Css, Javascript e Php. Porto Alegre, Rs: Bookman, 2014. X, 266 P. Isbn 9788582601952.",
          "MACHADO, RODRIGO PRESTES. Desenvolvimento de Software, V.3 Programação de Sistemas Web Orientada a Objetos em Java. Porto Alegre Bookman 2016 1 Recurso Online (Tekne). Isbn 9788582603710.",
          "ALVES, WILLIAM PEREIRA. Java para Web Desenvolvimento de Aplicações. São Paulo Erica 2015 1 Recurso Online Isbn 9788536519357.",
          "FLANAGAN, DAVID. Javascript o Guia Definitivo. 6. Porto Alegre Bookman 2014 1 Recurso Online Isbn 9788565837484.",
          "ROSSI, GUSTAVO et al. Web Engineering: Modelling And Implementing Web Applications. London, Gb: Springer, 2008-2010. 461 P. (Human-computer Interaction Series). Isbn 978-1-84996-677-1.",
        ],
      },
    ],
  },
  {
    paragraph: 1,
    title: "AVALIAÇÃO:",
    paragraphs: [
      "A avaliação será realizada por meio de exercícios avaliativos individuais, provas conceituais, desenvolvimento de uma aplicação usando os conceitos aprendidos durante a disciplina e do próprio curso e elaboração e apresentação de seminários. Adicionalmente, outras atividades podem ser utilizadas como estratégias de recuperação e/ou complementação.",
      "Para o correto desenvolvimento das atividades será necessária a instalação de ferramentas automatizadas e o desenvolvimento de aplicações.",
      "O Ambiente Virtual de Aprendizagem (AVA) será o principal canal de comunicação e avisos. Além disso, todas atividades serão configuradas neste ambiente e os feedbacks serão disponibilizados inicialmente nas respectivas atividades e posteriormente lançadas no SISCAD.",
      "Nas atividades indicadas como avaliativas a nota será condicionada à realização e submissão das atividades no AVA. Estas serão realizadas principalmente nas dependências da unidade (laboratórios) podendo, à critério do professor, serem desenvolvidas à distância e submetidas no mesmo ambiente.",
    ],
  },
  {
    paragraph: 1,
    title: "Organização e Cálculo das Notas",
    paragraphs: [
      "EA (Exercícios Avaliativos) – Atividade semanais a serem realizadas individualmente e submetidas no AVA.",
      "Prova 1 (P1) – Prova escrita abordando os tópicos I a V (prevista para 28/04/2023).",
      "Prova 2 (P2) – Prova escrita abordando, principalmente, demais tópicos. Ressaltando que o conteúdo é cumulativo e conceitos apresentados nos tópicos anteriores são partes essenciais para os tópicos subsequentes (prevista para 26/06/2023).",
      "TP (Trabalho Prático) – Aplicação Web a ser desenvolvida com entregas parciais ao longo do semestre e a ser apresentada ao final do semestre.",
      "MA (Média de Aproveitamento) = (2*EA + 4*TP + 2*P1 + 2*P2) / 10",
      "No caso de não alcançar a média de aproveitamento 6,0 (seis), o acadêmico (a) poderá realizar a avaliação substitutiva, na qual será incluída todo o conteúdo do semestre. A PO (Prova Optativa) substituirá a menor nota obtida nas provas (i.e., P1 e P2) e está prevista para 30/06/2023.",
      "Atividade Pedagógica de Recuperação de Desempenho em Avaliações:",
      "Leituras complementares e estudos dirigidos serão propostos aos acadêmicos que apresentarem dificuldade nas avaliações. As atividades serão supervisionadas pelo professor e poderão ser de forma individual ou em grupo."
    ],
  },
];

function App() {
  return (
    <div>
      <Header></Header>

      <Main>
        <Article>
          <Table>
            {rows.map(function (item, index) {
              return (
                <TableRow
                  key={index}
                  col1={item.col1}
                  col2={item.col2}
                ></TableRow>
              );
            })}
          </Table>

          <br />

          {sections.map(function (section, index) {
            return (
              <Section
                key={index}
                title={section.title}
                text={section.text}
                topic={section.topic}
                newLine={section.newLine}
                topics={section.topics}
                paragraph={section.paragraph}
                paragraphs={section.paragraphs}
                list={section.list}
                listItems={section.listItems}
              ></Section>
            );
          })}
        </Article>
      </Main>
    </div>
  );
}

export default App;
