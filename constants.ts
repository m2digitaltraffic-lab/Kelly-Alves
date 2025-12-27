
import { Question, AssessmentResult } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Eu sei exatamente onde quero estar na minha carreira (cargo, segmento, nível de responsabilidade) nos próximos 3 a 5 anos?",
    options: [
      { text: "Sim, eu tenho esse objetivo documentado e reviso minha rota regularmente.", points: 4 },
      { text: "Tenho uma ideia geral, mas ainda não defini metas e prazos concretos.", points: 2 },
      { text: "Não, sinto-me no automático, sem saber qual é o próximo passo.", points: 0 }
    ]
  },
  {
    id: 2,
    text: "Sinto-me plenamente satisfeito(a) e alinhado(a) com a área/segmento em que atuo hoje?",
    options: [
      { text: "Sim, minha área atual reflete meus valores, talentos e propósito.", points: 4 },
      { text: "Estou razoavelmente satisfeito(a), mas sinto que preciso de um \"algo a mais\" ou de um ajuste na rota.", points: 2 },
      { text: "Não, sinto que estou estagnado(a) e essa área já não me conecta mais ao que desejo viver.", points: 0 }
    ]
  },
  {
    id: 3,
    text: "Você vê possibilidades de crescimento (promoção, novos projetos, aumento salarial) na sua empresa ou no segmento de mercado atual?",
    options: [
      { text: "Sim, conheço o \"mapa\" de crescimento e estou buscando essas oportunidades.", points: 4 },
      { text: "As oportunidades existem, mas não tenho certeza de quais passos precisos dar para alcançá-las.", points: 2 },
      { text: "Não, ou a empresa/segmento está estagnado, ou não vejo um caminho claro para minha evolução.", points: 0 }
    ]
  },
  {
    id: 4,
    text: "Eu sei quais são as competências (técnicas e comportamentais) que o mercado e meu futuro profissional exigirão de mim?",
    options: [
      { text: "Sim, consigo listar e diferenciar claramente meus pontos fortes e pontos a desenvolver.", points: 4 },
      { text: "Sei de forma geral, mas não tenho um plano de desenvolvimento claro ou documentado.", points: 2 },
      { text: "Não, não tenho clareza sobre o que o mercado valoriza ou quais habilidades devo priorizar.", points: 0 }
    ]
  },
  {
    id: 5,
    text: "Eu busco e transformo aprendizados (cursos, leituras, mentorias) em ações práticas no meu trabalho?",
    options: [
      { text: "Sim, aplico intencionalmente o que aprendo para gerar valor e impacto.", points: 4 },
      { text: "Busco conhecimento (leio, faço cursos), mas muitas vezes ele fica apenas na teoria.", points: 2 },
      { text: "Não, o tempo ou a experiência \"no automático\" é minha principal fonte de aprendizado.", points: 0 }
    ]
  },
  {
    id: 6,
    text: "Eu recebo e aplico feedbacks construtivos de forma regular para evoluir profissionalmente?",
    options: [
      { text: "Sim, busco feedback e o utilizo como incentivo para mudar e crescer.", points: 4 },
      { text: "Recebo feedback ocasional, mas nem sempre consigo transformá-lo em melhorias concretas.", points: 2 },
      { text: "Não, não tenho o hábito de pedir ou receber feedback de forma intencional.", points: 0 }
    ]
  },
  {
    id: 7,
    text: "Eu tenho metas definidas e prazos claros para evoluir na minha carreira (como uma promoção ou transição)?",
    options: [
      { text: "Sim, minhas metas são específicas, mensuráveis e alinhadas com meu objetivo de médio prazo.", points: 4 },
      { text: "Tenho objetivos de crescimento, mas não os transformei em metas com prazos e ações concretas.", points: 2 },
      { text: "Não, sinto que meu progresso está à mercê do acaso ou de oportunidades que surgirem.", points: 0 }
    ]
  },
  {
    id: 8,
    text: "Eu alinho minhas decisões (de cursos, projetos, investimentos) com o que desejo colher no futuro?",
    options: [
      { text: "Sim, cada decisão de carreira é um passo consciente em direção ao meu objetivo final.", points: 4 },
      { text: "Tento alinhar, mas muitas vezes me disperso com oportunidades que não me impulsionam.", points: 2 },
      { text: "Não, minhas decisões são baseadas mais na urgência do momento do que na estratégia de longo prazo.", points: 0 }
    ]
  },
  {
    id: 9,
    text: "Assumi o papel de “CEO da minha trajetória”, definindo prioridades e fazendo escolhas conscientes?",
    options: [
      { text: "Sim, eu estou no controle, definindo a rota e os movimentos profissionais que me aproximam do sucesso.", points: 4 },
      { text: "Sim, mas muitas vezes me sinto sobrecarregado(a) e acabo ligando o piloto automático.", points: 2 },
      { text: "Não, sinto que minha carreira é mais impulsionada pelas demandas externas do que por meus interesses.", points: 0 }
    ]
  },
  {
    id: 10,
    text: "Eu deixei de me candidatar a vagas, projetos ou desafios por me sentir \"não pronto\" ou duvidar da minha capacidade (Síndrome do Impostor)?",
    options: [
      { text: "Raramente ou nunca, eu ajo com coragem, mesmo sentindo medo.", points: 4 },
      { text: "Isso já aconteceu algumas vezes, mas estou aprendendo a reconhecer minhas forças.", points: 2 },
      { text: "Sim, a insegurança frequentemente limita minhas escolhas e rouba minhas oportunidades.", points: 0 }
    ]
  },
  {
    id: 11,
    text: "Eu costumo comparar meus resultados e minha trajetória com a de outras pessoas, sentindo-me \"atrás\"?",
    options: [
      { text: "Não, eu me concentro na minha evolução e valorizo minhas próprias conquistas.", points: 4 },
      { text: "A comparação é ocasional, mas me esforço para reescrever minha narrativa interna de forma fortalecedora.", points: 2 },
      { text: "Sim, a comparação externa é uma fonte constante de autossabotagem e desvalorização.", points: 0 }
    ]
  },
  {
    id: 12,
    text: "Eu consigo reconhecer, registrar e valorizar de forma consistente minhas conquistas, sem minimizá-las?",
    options: [
      { text: "Sim, tenho consciência do meu valor e uso minhas entregas como evidência da minha capacidade.", points: 4 },
      { text: "Reconheço o valor das minhas conquistas, mas tenho dificuldade em comunicá-las ou celebrá-las.", points: 2 },
      { text: "Não, sinto que minhas conquistas são mais sorte ou obrigações do que resultado do meu esforço.", points: 0 }
    ]
  },
  {
    id: 13,
    text: "Meus resultados são comunicados de forma clara e estratégica para as pessoas certas (líderes, áreas-chave)?",
    options: [
      { text: "Sim, eu garanto que meu impacto seja visto por quem toma as decisões.", points: 4 },
      { text: "Sim, mas muitas vezes eu só comunico quando me pedem, e não de forma proativa.", points: 2 },
      { text: "Não, eu trabalho muito, mas em silêncio, e sinto que minha contribuição é subpercebida.", points: 0 }
    ]
  },
  {
    id: 14,
    text: "Eu sou consistentemente lembrado(a) quando surgem projetos importantes, oportunidades de crescimento ou promoções?",
    options: [
      { text: "Sim, minha presença profissional e confiança me colocam como uma referência e prioridade.", points: 4 },
      { text: "Acontece, mas sinto que preciso fortalecer minha marca pessoal interna para ser mais considerada.", points: 2 },
      { text: "Não, sinto que \"quem não é vista, não é lembrada\" e que estou sendo esquecido.", points: 0 }
    ]
  },
  {
    id: 15,
    text: "Tenho clareza sobre \"3 mensagens\" que resumem meu valor, minha especialidade e o impacto que gero no negócio?",
    options: [
      { text: "Sim, tenho meu \"pitch profissional\" definido e o uso com confiança.", points: 4 },
      { text: "Consigo definir o que faço, mas tenho dificuldade em articular meu valor e impacto em frases claras.", points: 2 },
      { text: "Não, não tenho uma marca pessoal interna definida, e sinto que as pessoas não sabem em que sou realmente bom.", points: 0 }
    ]
  }
];

export interface StrategicPillar {
  pilar: string;
  foco: string;
  acao: string;
}

export interface StrategicMap {
  faixa: string;
  diagnostico: string;
  mensagem: string;
  prioridade: string;
  pilares: StrategicPillar[];
}

export const STRATEGIC_MAPS: Record<number, StrategicMap> = {
  1: {
    faixa: "0 a 24 Pontos",
    diagnostico: "LONGE, MAS COM CLAREZA! (Modo Automático)",
    mensagem: "Você concorda que está no piloto automático e precisa de uma mudança fundamental de rota. Sua carreira está sendo conduzida mais pelas demandas externas do que por seus interesses.",
    prioridade: "ASSUMIR O VOLANTE e definir o Destino.",
    pilares: [
      {
        pilar: "Pilar 1: Direcionamento",
        foco: "O ponto de virada é o autoconhecimento. É impossível ter sucesso sem direção.",
        acao: "Dedique 4 horas para responder às perguntas da Página 10 e defina onde você quer estar em 3 anos (cargo e segmentos)."
      },
      {
        pilar: "Pilar 3: Estratégia",
        foco: "Pare de deixar o progresso ao acaso. Você precisa de um mapa de ação.",
        acao: "Defina 1 única meta SMART para este mês, conectada ao seu objetivo de 3 anos."
      },
      {
        pilar: "Pilar 4: Inseguranças",
        foco: "O medo está limitando suas escolhas e roubando oportunidades.",
        acao: "Faça o exercício da Página 23 (Reescreva sua narrativa interna) todas as manhãs por 7 dias."
      }
    ]
  },
  2: {
    faixa: "25 a 44 Pontos",
    diagnostico: "PERTO DA VIRADA! (Consciente em Movimento)",
    mensagem: "Você tem consciência do que precisa, mas falta consistência e estratégia intencional para sair do platô. Você está construindo, mas precisa de foco para acelerar o reconhecimento.",
    prioridade: "GANHAR CONSISTÊNCIA e Fechar o Gap de Habilidades.",
    pilares: [
      {
        pilar: "Pilar 2: Competências",
        foco: "Você busca conhecimento, mas ele fica na teoria. É hora de aplicar o que o mercado valoriza.",
        acao: "Monte sua Matriz de Competências (Página 14). Escolha duas prioritárias (técnica e comportamental) para 90 dias."
      },
      {
        pilar: "Pilar 3: Estratégia",
        foco: "Você está tentando alinhar, mas se dispersa. É hora de focar nos passos que realmente te aproximam do objetivo.",
        acao: "Liste 5 projetos dos últimos 6 meses. Marque com 'S' (Estratégico) ou 'D' (Dispersão). Corte um item 'D'."
      },
      {
        pilar: "Pilar 5: Visibilidade",
        foco: "Você trabalha muito, mas se comunica pouco. O reconhecimento vem da combinação entrega + posicionamento.",
        acao: "Implemente a Regra do 3x3 da Visibilidade (Página 28). Escolha 3 pessoas e defina as 3 mensagens de valor."
      }
    ]
  },
  3: {
    faixa: "45 a 60 Pontos",
    diagnostico: "NO CAMINHO CERTO! (Protagonista)",
    mensagem: "Você é o líder estratégico da sua carreira, possui autoconfiança e está avançando posicionando seu valor. O crescimento é uma consequência de suas ações consistentes.",
    prioridade: "BUSCAR NOVO PATAMAR e Criar Alavancagem.",
    pilares: [
      {
        pilar: "Pilar 1: Direcionamento",
        foco: "A carreira é movimento. É preciso revisar a rota para garantir que o crescimento faça sentido.",
        acao: "Revisão Estratégica: O objetivo de 3-5 anos ainda te desafia? Se não, defina o Próximo Nível (7-10 anos)."
      },
      {
        pilar: "Pilar 2: Competências",
        foco: "Foque em habilidades que ampliam sua influência e te tornam uma referência (ex: liderança estratégica).",
        acao: "Transforme um ponto forte em Mentoria Interna: Lidere um projeto ou treine seu time em algo que domina."
      },
      {
        pilar: "Pilar 5: Visibilidade",
        foco: "Vá além da visibilidade interna. Foque em construir autoridade externa.",
        acao: "Construção de Autoridade: Use o LinkedIn ou eventos do setor para compartilhar aprendizados de forma consistente por 90 dias."
      }
    ]
  }
};

export const getResultConfig = (score: number): AssessmentResult => {
  if (score >= 45) {
    return {
      score,
      title: "NO CAMINHO CERTO! (Protagonista)",
      description: "Mantenha a Constância: Você é um líder estratégico de sua carreira. Seu foco deve ser em rever e ajustar sua rota a cada 6 meses.",
      color: "bg-green-100 text-green-800 border-green-200"
    };
  } else if (score >= 25) {
    return {
      score,
      title: "PERTO DA VIRADA! (Consciente em Movimento)",
      description: "Foque na Consistência: Você tem a consciência, mas falta consistência e estratégia intencional para sair do platô.",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
  } else {
    return {
      score,
      title: "LONGE, MAS COM CLAREZA! (Modo Automático)",
      description: "Assuma o Volante: Sua carreira está sendo conduzida pelo acaso. O ponto de virada é o autoconhecimento e direção.",
      color: "bg-red-100 text-red-800 border-red-200"
    };
  }
};
