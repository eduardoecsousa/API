import { DataSource } from "typeorm";
import { Questions } from "../questions/infra/typeorm/entities/questions.entity";
import { Answers } from "../answers/infra/Entities/answers.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeedService {
  constructor(private dataSource: DataSource) {}
  async seedPsychosocial(): Promise<void> {
    const questionsRepository = this.dataSource.getRepository(Questions);
    const answersRepository = this.dataSource.getRepository(Answers);

    const allQuestions = [
      {
        title: "Nível de Preocupação com Problemas Cotidianos",
        answers: [
          "Sinto-me constantemente preocupado(a), mesmo quando as situações não justificam tanta tensão. Minha mente não desacelera e tenho dificuldade para relaxar ou dormir.",
          "Tenho me preocupado com algumas questões importantes, mas consigo alternar momentos de tensão com momentos de alívio e foco em outras coisas.",
          "Consigo manter a calma diante de situações adversas. Quando algo me preocupa, procuro avaliar com clareza, resolver o que posso e deixar de lado o que está fora do meu controle.",
        ],
      },
      {
        title: "Reações de Irritabilidade com Pessoas Próximas",
        answers: [
          "Tenho mantido uma convivência harmoniosa com meus entes queridos. Mesmo quando surgem conflitos, consigo dialogar com respeito e equilíbrio.",
          "Em alguns momentos fico mais impaciente, especialmente quando estou cansado(a) ou sob pressão, mas tento me controlar e evitar conflitos desnecessários.",
          "Tenho perdido a paciência com facilidade, mesmo com quem mais amo. Pequenas coisas me tiram do sério, e às vezes sinto culpa depois.",
        ],
      },
      {
        title:
          "Irritabilidade no Ambiente de Trabalho e com Atividades Diárias",
        answers: [
          "Consigo manter a calma diante das demandas diárias, mesmo quando surgem imprevistos ou quando alguém age de forma inadequada. Lido bem com os desafios do dia a dia.",
          "Sinto uma irritação crescente, mesmo diante de tarefas simples, como responder e-mails ou cumprir rotinas. Às vezes, tenho vontade de me isolar ou evitar interações.",
          "Em geral, consigo manter o equilíbrio, mas em períodos de pressão fico mais impaciente e tento evitar conversas desnecessárias para não me estressar.",
        ],
      },
      {
        title: "Explosões de Raiva e Reações Agressivas",
        answers: [
          "Às vezes me altero verbalmente ou ajo de forma ríspida, principalmente quando estou sob pressão, mas tento controlar para não ultrapassar limites.",
          "Tenho explodido com facilidade, gritado, batido portas ou adotado atitudes agressivas, mesmo por motivos pequenos. Depois, costumo me arrepender.",
          "Costumo manter a calma e buscar o diálogo. Mesmo quando fico irritado(a), consigo me expressar sem agressividade.",
        ],
      },
      {
        title: "Qualidade do Sono e Estado de Alerta Noturno",
        answers: [
          "Tenho acordado várias vezes durante a noite ou demorado muito para pegar no sono, mesmo sem nenhum problema concreto que justifique. Fico em alerta, como se algo fosse acontecer.",
          "Às vezes tenho dificuldade para dormir, especialmente em dias mais agitados, mas na maioria das vezes consigo descansar razoavelmente bem.",
          "Tenho dormido bem, com sono contínuo e reparador. Sinto-me descansado(a) ao acordar e não costumo ficar alerta ou agitado(a) durante a noite.",
        ],
      },
      {
        title: "Qualidade do Descanso e Efeitos Durante o Dia",
        answers: [
          "Tenho me sentido descansado(a) ao acordar e consigo manter energia e atenção ao longo do dia.",
          "Apesar de dormir, acordo cansado(a) ou com sensação de que não descansei. Durante o dia, sinto sonolência ou fadiga, e às vezes tenho pesadelos quando durmo.",
          "Em algumas noites o sono não é tão profundo, mas consigo compensar e manter um funcionamento razoável ao longo do dia.",
        ],
      },
      {
        title: "Atenção, Concentração e Nível de Interesse",
        answers: [
          "Tenho tido muita dificuldade para me concentrar, mesmo em tarefas simples. Minha mente se dispersa, sinto cansaço mental constante e, muitas vezes, desinteresse por tudo.",
          "Eventualmente me sinto mais distraído(a) ou cansado(a), principalmente em dias muito puxados, mas consigo retomar o foco com algum esforço.",
          "Mantenho um bom nível de atenção e consigo me concentrar bem nas tarefas. Mesmo nos dias mais exigentes, consigo manter o interesse e cumprir minhas responsabilidades.",
        ],
      },
      {
        title: "Memória e Capacidade de Retenção de Informações",
        answers: [
          "Às vezes esqueço algumas coisas, especialmente quando estou sobrecarregado(a), mas isso não tem afetado significativamente meu desempenho.",
          "Tenho esquecido com frequência compromissos, informações importantes e até tarefas simples. Isso tem me preocupado e me atrapalhado no trabalho e na vida pessoal.",
          "Minha memória tem funcionado bem, consigo lembrar com facilidade do que preciso, mesmo sob alguma pressão ou cansaço.",
        ],
      },
      {
        title: "Pessimismo e Pensamentos Negativos Constantes",
        answers: [
          "Tenho me sentido tomado(a) por pensamentos negativos na maior parte do tempo. É como se uma nuvem pairasse sobre tudo, mesmo quando não há um motivo claro.",
          "Às vezes fico mais negativo(a) ou desconfiado(a) em relação ao que está por vir, mas consigo me lembrar de momentos bons e manter alguma esperança.",
          "Apesar das dificuldades, consigo manter uma visão equilibrada. Tenho esperança no futuro e foco no que posso controlar.",
        ],
      },
      {
        title: "Tristeza Profunda e Perda de Prazer",
        answers: [
          "Sinto uma tristeza que não passa, não tenho vontade de fazer o que antes me dava prazer.",
          "Em alguns momentos me sinto mais sensível ou sem tanta motivação, mas consigo reagir e ter momentos de alegria.",
          "Tenho me sentido emocionalmente bem, com energia para as atividades e momentos de prazer.",
        ],
      },
      {
        title: "Isolamento Social no Trabalho e na Vida Pessoal",
        answers: [
          "Tenho aceitado com naturalidade. Gosto de me conectar com as pessoas e participar dos momentos, mesmo que às vezes esteja cansado(a).",
          "Costumo evitar ao máximo. Só vou a contragosto e apenas para não magoar alguém. O contato social tem sido um peso.",
          "Nem sempre estou no clima para eventos sociais, mas me esforço para participar quando posso, especialmente com pessoas próximas.",
        ],
      },
      {
        title: "Esgotamento Físico e Emocional",
        answers: [
          "Tenho sentido que estou no meu limite. Sinto cansaço extremo, falta de ar e uma exaustão que não passa, mesmo dormindo ou descansando.",
          "Às vezes fico muito cansado(a), especialmente após dias intensos, mas consigo me recuperar com descanso e pausas.",
          "Tenho conseguido lidar bem com as demandas. Mesmo em períodos mais corridos, consigo me sentir bem física e emocionalmente.",
        ],
      },
      {
        title: "Distanciamento e Queda de Desempenho no Trabalho",
        answers: [
          "Tenho mantido uma boa motivação. Me sinto conectado(a) ao que faço e encontro sentido no meu trabalho.",
          "Tenho me sentido desmotivado(a), com dificuldade para manter o foco e com a sensação de que meu rendimento caiu bastante.",
          "Em alguns dias fico menos animado(a), mas na maioria das vezes consigo manter uma produtividade razoável.",
        ],
      },
      {
        title: "Medo Constante e Crises Inexplicáveis de Ansiedade",
        answers: [
          "Tenho passado por momentos de medo que surgem do nada, acompanhados de tremores, suor, coração acelerado, e sensação de que algo ruim vai acontecer.",
          "Às vezes fico apreensivo(a) sem saber exatamente o motivo, mas consigo controlar e isso não chega a me paralisar.",
          "Não tenho experimentado crises de medo ou ansiedade fora do normal. Me sinto seguro(a) em relação ao meu estado emocional.",
        ],
      },
      {
        title: "Ansiedade Antecipatória e Evitação de Situações",
        answers: [
          "Tenho evitado situações sociais ou eventos que me causem desconforto. Só de pensar, já começo a ficar ansioso(a).",
          "Fico um pouco tenso(a) antes de algumas situações, mas tento enfrentar e geralmente me sinto melhor depois.",
          "Encaro os desafios com tranquilidade. Consigo lidar com novidades e me adaptar sem grandes dificuldades.",
        ],
      },
      {
        title: "Dificuldade com Mudanças e Visão Negativa do Novo",
        answers: [
          "Sempre que algo muda, imagino que será pior. Evito ao máximo qualquer mudança e fico muito desconfortável com o novo.",
          "Sinto um pouco de receio quando algo muda, mas tento entender e me adaptar com o tempo.",
          "Vejo as mudanças como oportunidades de crescimento. Mesmo quando não gosto de algo, procuro aprender com a nova situação.",
        ],
      },
      {
        title: "Sintomas Psicossomáticos (pressão, glicemia, respiração etc.)",
        answers: [
          "Tenho tido sintomas como pressão alta, e/ou alterações de glicemia, e/ou dificuldade para respirar, mas os exames não apontam nenhuma causa específica.",
          "Ocasionalmente tenho algum sintoma físico sem explicação, mas eles costumam passar rapidamente.",
          "Não tenho apresentado sintomas físicos recorrentes ou sem explicação médica.",
        ],
      },
      {
        title: "Sintomas Psicossomáticos Gastrointestinais",
        answers: [
          "Tenho sentido azia, dores abdominais, diarreia ou prisão de ventre com frequência, mesmo sem nenhuma causa identificada.",
          "Às vezes tenho desconfortos gastrointestinais, especialmente em momentos de estresse, mas nada muito frequente.",
          "Não tenho sintomas gastrointestinais persistentes ou sem causa clínica identificada.",
        ],
      },
      {
        title:
          "Dores Crônicas e Tensionais (como dores nas costas, cabeça, torcicolos)",
        answers: [
          "Tenho convivido com dores frequentes, como dores de cabeça, musculares, nas costas ou torcicolos, que parecem piorar com o estresse e não passam facilmente.",
          "Eventualmente sinto algum desconforto ou dor localizada, especialmente em dias mais tensos, mas consigo aliviar com repouso ou alongamento.",
          "Não tenho tido dores frequentes nem tensão muscular aparente, mesmo em períodos de maior pressão.",
        ],
      },
      {
        title: "Problemas de Pele Recorrentes (coceiras, alergias, acne, etc.)",
        answers: [
          "Às vezes surgem reações na pele, como coceiras, vermelhidão ou espinhas, especialmente em períodos de tensão, mas passam com facilidade.",
          "Tenho enfrentado sintomas persistentes na pele, como alergias, coceiras ou acne, sem causa clara, e percebo que pioram nos momentos de maior estresse.",
          "Minha pele tem se mantido saudável e não tenho apresentado reações ou irritações recorrentes.",
        ],
      },
      {
        title: "Adoecimento Frequente por Gripes e Resfriados",
        answers: [
          "Tenho adoecido com frequência, mesmo fora de épocas típicas de gripe. Sinto que minha imunidade está baixa, o que me preocupa.",
          "De vez em quando fico gripado(a) ou resfriado(a), mas são episódios leves e espaçados.",
          "Raramente fico doente. Mesmo em épocas de maior exposição, minha saúde tem se mantido estável.",
        ],
      },
      {
        title: "Sensação Constante de Estar Doente Mesmo com Exames Normais",
        answers: [
          "Tenho convivido com a sensação constante de que algo está errado no meu corpo, mesmo após exames normais. Isso me causa preocupação frequente.",
          "Em alguns momentos sinto desconfortos físicos ou sintomas estranhos, mas consigo me tranquilizar após uma avaliação médica.",
          "Não tenho tido preocupações persistentes com a saúde e confio nos resultados dos exames e nas orientações médicas.",
        ],
      },
      {
        title:
          "Uso Recorrente de Álcool e/ou Outras Substâncias para Lidar com Emoções ou Estresse",
        answers: [
          "Tenho usado com frequência álcool ou outras substâncias (mesmo que lícitas) para aliviar o estresse ou anestesiar emoções desconfortáveis.",
          "Em situações pontuais, já recorri a alguma substância como forma de relaxar, mas isso não é um padrão frequente na minha rotina.",
          "Tenho buscado formas saudáveis de lidar com o estresse, como exercícios, conversa com amigos ou pausas conscientes, sem recorrer a substâncias.",
        ],
      },
      {
        title:
          "Autocrítica Constante, Baixa Autoestima e Sentimento de Inferioridade",
        answers: [
          "Tenho sentido que sou capaz, reconheço minhas qualidades e falhas com equilíbrio, sem me julgar de forma excessiva.",
          "Às vezes me comparo negativamente com os outros ou duvido da minha capacidade, mas consigo lidar com isso na maioria das vezes.",
          "Tenho sido extremamente autocrítico(a), com pensamentos frequentes de inferioridade e sensação de não ser bom o suficiente.",
        ],
      },
      {
        title:
          "Vitimismo e Autopiedade Relacionados à Vida Pessoal e/ou Profissional",
        answers: [
          "Em muitos momentos me sinto injustiçado(a) ou penso que as coisas dão errado só comigo. É como se nada dependesse de mim e tudo estivesse fora do meu controle.",
          "Reconheço que às vezes tenho pensamentos de autopiedade (pena de si mesmo), mas tento buscar responsabilidade e ação para sair dessas situações.",
          "Procuro encarar os desafios com responsabilidade e realismo, sem me colocar como vítima dos acontecimentos.",
        ],
      },
      {
        title: "Medo Excessivo de Ser Julgado ou Avaliado pelos Outros",
        answers: [
          "Às vezes fico desconfortável ao ser avaliado, mas consigo enfrentar essas situações sem grande sofrimento.",
          "Sinto um medo intenso de ser julgado(a), mesmo por pessoas próximas. Evito me expor ou dar opiniões por receio da avaliação dos outros.",
          "Encaro avaliações e opiniões alheias com equilíbrio. Sei quem sou e não deixo que o julgamento dos outros defina meu valor.",
        ],
      },
      {
        title: "Dificuldade de Reconhecer Suas Conquistas Pessoais",
        answers: [
          "Reconheço meus progressos com naturalidade, valorizo minhas conquistas e sei me parabenizar por elas.",
          "Às vezes minimizo minhas conquistas ou acho que poderia ter feito mais, mas tento reconhecer meu esforço.",
          "Tenho extrema dificuldade em reconhecer algo positivo em mim. Sinto que nunca sou suficiente.",
        ],
      },
      {
        title:
          "Falas Frequentes sobre Morte, Inutilidade, Doação de Pertences ou Despedidas Indiretas",
        answers: [
          'Tenho expressado, de forma velada ou explícita, pensamentos sobre "partir", doar coisas ou desistir.',
          "Já tive pensamentos relacionados a cansaço da vida ou sensação de inutilidade, mas não de forma constante.",
          "Não tenho pensamentos ou falas ligadas à morte, nem sentimentos de inutilidade ou de despedida.",
        ],
      },
      {
        title: "Desesperança e Falta de Propósito",
        answers: [
          "Tenho me sentido perdido(a), sem sentido claro para continuar. Falta motivação para seguir.",
          "Às vezes me questiono sobre o sentido das coisas, mas ainda consigo encontrar algum propósito ou direção.",
          "Tenho clareza sobre meus propósitos e mesmo nos dias difíceis mantenho o foco no que acredito.",
        ],
      },
      {
        title: "Labilidade de Humor ao Longo do Dia",
        answers: [
          "Meu humor oscila bastante durante o dia, mudando conforme as situações ou até sem razão aparente.",
          "Tenho alguma oscilação de humor, mas ainda consigo manter um certo equilíbrio ao longo do dia.",
          "Meu humor costuma ser estável, mesmo diante de imprevistos ou desafios.",
        ],
      },
      {
        title: "Tendência Constante a Ver o Lado Negativo das Coisas",
        answers: [
          "Tento enxergar o lado positivo mesmo diante de dificuldades, com realismo e esperança.",
          "Em alguns momentos vejo as situações de forma mais negativa, mas procuro reverter esse padrão.",
          "Tenho grande dificuldade de ver o lado bom das coisas. A maioria das situações me parece negativa ou frustrante.",
        ],
      },
      {
        title:
          "Uso Recente de Medicamentos Controlados para Humor, Ansiedade ou Sono",
        answers: [
          "Iniciei há pouco tempo o uso de medicamentos para depressão, ansiedade ou insônia, por orientação médica.",
          "Já utilizei medicamentos, mas atualmente estou em acompanhamento e estável.",
          "Não estou usando nenhum medicamento controlado e não tenho necessidade atual.",
        ],
      },
      {
        title: "Choro Fácil ou Emoção Exacerbada em Situações Corriqueiras",
        answers: [
          "Tenho chorado ou sentido vontade de chorar frequentemente, mesmo em situações banais.",
          "Tenho ficado mais sensível em alguns momentos, mas sem grandes prejuízos no cotidiano.",
          "Minhas emoções estão equilibradas e reajo com naturalidade aos eventos do dia a dia.",
        ],
      },
      {
        title: "Nível de Paciência com Colegas de Trabalho",
        answers: [
          "Tenho mantido paciência e boa convivência com colegas, mesmo quando discordamos.",
          "Em alguns dias estou mais impaciente, mas ainda consigo manter a cordialidade e o respeito.",
          "Estou muito impaciente com colegas e chefes. Pequenas coisas já me tiram do sério.",
        ],
      },
      {
        title: "Reação às Metas e Demandas da Empresa",
        answers: [
          "Me sinto esgotado(a), indiferente ou até irritado(a) com tudo que envolve metas e demandas.",
          "Às vezes fico desmotivado(a) com a pressão, mas tento manter o ritmo e cumprir com as expectativas.",
          "Encaro metas e tarefas como parte do trabalho, com equilíbrio e foco.",
        ],
      },
      {
        title: "Distúrbios Alimentares Relacionados ao Estresse",
        answers: [
          "Tenho passado por episódios de compulsão alimentar, vômitos induzidos ou falta de apetite por conta do estresse.",
          "Meu apetite varia conforme o meu estado emocional, mas sem mudanças graves ou persistentes.",
          "Tenho mantido uma relação saudável com a alimentação, mesmo em períodos mais difíceis.",
        ],
      },
      {
        title: "Sensação de Injustiça ou Perseguição no Ambiente de Trabalho",
        answers: [
          "Tenho sentido constantemente que sou alvo de perseguição ou injustiças, mesmo sem provas concretas.",
          "Em alguns momentos me sinto injustiçado(a), mas tento conversar e buscar equilíbrio.",
          "Me sinto respeitado(a) e tratado(a) de forma justa na maior parte do tempo.",
        ],
      },
      {
        title: "Sensação de Estar Sobrecarregado e Sem Apoio da Liderança",
        answers: [
          "Me sinto extremamente sobrecarregado(a), sem acolhimento ou apoio da liderança.",
          "Às vezes acho que falta suporte, mas consigo lidar com isso sem grandes prejuízos.",
          "Sinto que tenho o apoio necessário para cumprir minhas funções e me desenvolver.",
        ],
      },
      {
        title: "Clima de Competitividade Exacerbada ou Tóxica",
        answers: [
          "Há um clima competitivo tóxico, com intrigas, fofocas e disputa desleal.",
          "Às vezes noto competitividade, mas ainda é possível manter relações saudáveis.",
          "O ambiente é colaborativo, mesmo quando há metas ou desafios em comum.",
        ],
      },
      {
        title:
          "Sentimento de Inutilidade ou Falta de Reconhecimento Profissional",
        answers: [
          "Sinto que tudo o que faço é invisível, como se não tivesse importância para a empresa.",
          "Nem sempre me sinto reconhecido(a), mas tenho consciência da relevância do que faço.",
          "Sinto-me valorizado(a) e reconhecido(a) pela equipe e pelos líderes.",
        ],
      },
      {
        title: "Dificuldade em Desconectar-se do Trabalho Fora do Expediente",
        answers: [
          "Mesmo em casa ou nos fins de semana, não consigo parar de pensar no trabalho.",
          "Às vezes levo preocupações para casa, mas procuro me desligar nas horas de descanso.",
          "Após o expediente, consigo me desconectar e aproveitar momentos de lazer e descanso.",
        ],
      },
      {
        title:
          "Exposição Contínua a Conflitos ou Situações de Tensão no Ambiente de Trabalho",
        answers: [
          "Há conflitos frequentes e desgastantes entre colegas e setores. Isso afeta meu bem-estar.",
          "O ambiente tem tensões eventuais, mas nada que comprometa seriamente minha saúde.",
          "O clima é estável e o diálogo costuma prevalecer diante de divergências.",
        ],
      },
      {
        title:
          "Sensação de Estagnação Profissional ou Falta de Perspectiva de Crescimento",
        answers: [
          "Sinto que estou parado(a) no tempo, sem oportunidades reais de crescimento.",
          "Tenho dúvidas sobre meu futuro profissional, mas ainda mantenho alguma esperança.",
          "Sinto que posso crescer e me desenvolver profissionalmente aqui.",
        ],
      },
      {
        title: "Dificuldade de Equilibrar Vida Pessoal e Trabalho",
        answers: [
          "Minha vida pessoal está totalmente comprometida pelas demandas profissionais.",
          "Nem sempre consigo equilibrar bem, mas busco momentos de qualidade fora do trabalho.",
          "Consigo manter uma boa divisão entre vida pessoal e trabalho, respeitando meus limites.",
        ],
      },
      {
        title: "Sensação de Medo Constante de Perder o Emprego",
        answers: [
          "Tenho medo constante de perder meu emprego, mesmo quando não há sinais claros disso.",
          "Às vezes tenho insegurança, mas procuro manter meu foco nas entregas e no desempenho.",
          "Me sinto seguro(a) em relação à minha posição na empresa e ao meu desempenho.",
        ],
      },
      {
        title: "Dificuldade de Expressar Emoções no Ambiente de Trabalho",
        answers: [
          "Reprimo constantemente meus sentimentos, com medo de julgamento ou retaliação.",
          "Em algumas situações me calo, mas tento buscar espaços para falar quando necessário.",
          "Sinto que posso expressar minhas emoções e opiniões com respeito e acolhimento.",
        ],
      },
      {
        title:
          'Tem algum "hobby" ou atividade com função de aliviar as tensões do cotidiano?',
        answers: [
          "Não tenho feito nada para aliviar o estresse. Sinto que não tenho tempo, energia ou ânimo para isso.",
          "Tenho alguns momentos de lazer, mas eles nem sempre são frequentes ou satisfatórios.",
          "Tenho atividades que me ajudam a relaxar e recarregar as energias regularmente.",
        ],
      },
      {
        title: 'Capacidade de dizer "não" sem culpa',
        answers: [
          'Tenho dificuldade em dizer "não" e, quando digo, sinto muita culpa ou medo de desapontar os outros.',
          'Consigo dizer "não" em algumas situações, mas ainda me sinto desconfortável com isso.',
          "Consigo estabelecer limites de forma tranquila e assertiva, sem me sentir culpado por isso.",
        ],
      },
      {
        title: "Sensação de valorização no ambiente de trabalho",
        answers: [
          "Me sinto desvalorizado(a) e constantemente ignorado(a), como se meu esforço não tivesse importância.",
          "Às vezes sou reconhecido(a), mas em geral sinto que poderia haver mais valorização.",
          "Sinto que sou valorizado(a) e reconhecido(a) com frequência pelo meu trabalho.",
        ],
      },
    ];

    console.log("Iniciando seeder de Questions e Answers...");

    for (const [index, questionData] of allQuestions.entries()) {
      console.log(
        `Processando questão ${index + 1}/${allQuestions.length}: ${questionData.title}`,
      );

      // Cria a questão
      const question = questionsRepository.create({
        title: questionData.title,
      });
      await questionsRepository.save(question);

      // Cria as respostas para esta questão
      for (const answerText of questionData.answers) {
        const answer = answersRepository.create({
          answer: answerText,
          question: question,
        });
        await answersRepository.save(answer);
      }
    }

    console.log(
      "Seeder completado com sucesso! Todas as 50 questões foram criadas.",
    );
  }

  async clearData(): Promise<void> {
    console.log("Clearing existing data...");
    const questionsRepository = this.dataSource.getRepository(Questions);
    const answersRepository = this.dataSource.getRepository(Answers);
    await answersRepository.delete({});
    await questionsRepository.delete({});
    console.log("Data cleared successfully!");
  }
}
