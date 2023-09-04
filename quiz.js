const questions = {
    easy: [
        {
            question: "Pergunta 1: Qual é o objetivo principal da administração?",
            options: ["Maximizar os lucros", "Minimizar os custos", "Alcançar metas e objetivos organizacionais", "Aumentar o número de funcionários"],
            answer: 2,
        },
            
        {
            question: "Pergunta 2: O que é o planejamento estratégico?",
            options: ["Uma reunião de equipe", "Um conjunto de tarefas diárias", "Um processo de estabelecer metas de longo prazo e ações para alcançá-las", "Uma auditoria financeira anual"],
            answer: 2,
       },
            
        {
            question: "Pergunta 3: O que é a função do controle na administração?",
            options: ["Definir metas e objetivos", "Tomar decisões estratégicas", "Avaliar o desempenho e corrigir desvios", "Contratar novos funcionários"],
            answer: 2,
        },
            
        {
            question: "Pergunta 4: O que significa a sigla KPI na administração?",
            options: ["Key Performance Indicator", "Knowledge Planning and Implementation", "Keep People Informed", "Key Personal Interaction"],
            answer: 0,
        },
            
        {
            question: "Pergunta 5: Qual é o papel do líder na administração de uma equipe?",
            options: ["Executar todas as tarefas sozinho", "Dar ordens sem questionar", "Motivar, guiar e apoiar os membros da equipe para alcançar objetivos", "Evitar a comunicação com a equipe"],
            answer: 2,
        },
        // Adicione mais perguntas fáceis aqui
    ],
    medium: [
        {
            question: "O que é a teoria da contingência na administração e qual é sua principal ideia?",
            options: ["Uma abordagem que afirma que não há uma única melhor maneira de administrar e que as práticas de gestão dependem das circunstâncias", "Um modelo hierárquico de organização", "Uma teoria que prioriza a eficiência acima de tudo", "Um conceito relacionado à terceirização de serviços"],
            answer: 0,
        },
            
        {
            question: "O que é a matriz SWOT na análise estratégica e para que ela é usada?",
            options: ["Um método para calcular lucros e perdas", "Uma ferramenta para avaliar a concorrência no mercado", "Uma análise que identifica as forças, fraquezas, oportunidades e ameaças de uma organização", "Um sistema de gerenciamento de projetos"],
            answer: 2,
        },
            
        {
            question: "Qual é a diferença entre liderança e gestão na administração?",
            options: ["Não há diferença, são termos intercambiáveis", "Liderança envolve motivar e inspirar, enquanto gestão envolve planejamento e organização", "Liderança se refere apenas a cargos de alto escalão, enquanto gestão é para níveis mais baixos", "Liderança é mais importante do que gestão em todos os contextos"],
            answer: 1,
        },
            
        {
            question: "O que é a cultura organizacional e por que é importante na administração?",
            options: ["Um conjunto de regras governamentais para empresas", "A linguagem oficial usada em uma organização", "Os valores, crenças e normas compartilhados pelos membros de uma organização, importante para a coesão e o desempenho", "Uma técnica de marketing"],
            answer: 2,
        },
            
        {
            question: "O que é a administração por objetivos (APO) e qual é seu propósito?",
            options: ["Uma técnica para minimizar custos operacionais", "Uma abordagem para eliminar hierarquias nas organizações", "Um método de gestão que envolve a definição de metas específicas e a avaliação do desempenho com base nessas metas", "Uma estratégia para aumentar a diversidade no local de trabalho"],
            answer: 2,
        },
        // Adicione mais perguntas médias aqui
    ],
    hard: [
        {
            question: "O que é o paradoxo de Peters e Waterman e como ele se relaciona com a administração?",
            options: ["Uma teoria sobre a ineficácia das grandes organizações", "Uma abordagem que destaca a importância da diversidade na gestão", "Uma contradição aparente entre os princípios da excelência em administração e as práticas comuns nas organizações", "Um modelo de gestão focado exclusivamente na maximização de lucros"],
            answer: 2,
        },
            
        {
            question: "O que são os princípios da governança corporativa e como eles influenciam as empresas?",
            options: ["Regras para governos locais", "Um conjunto de valores morais para líderes empresariais", "Práticas e diretrizes que regem o comportamento e a tomada de decisões nas empresas, visando transparência, responsabilidade e equidade", "Um modelo de gestão voltado para o crescimento rápido a qualquer custo"],
            answer: 2,
        },
            
        {
            question: "O que é a abordagem de custeio baseada em atividades (ABC) e quando é mais apropriada em uma organização?",
            options: ["Uma técnica de marketing para atrair clientes", "Um método de contabilidade que aloca custos com base na quantidade de produtos vendidos", "Uma metodologia de custeio que identifica e aloca custos com base nas atividades que realmente consomem recursos, sendo mais adequada para empresas com operações complexas e variáveis", "Um modelo de gestão para startups"],
            answer: 2,
        },
            
        {
            question: "O que é a teoria da agência e como ela se aplica à administração corporativa?",
            options: ["Uma teoria sobre a necessidade de agências reguladoras para controlar as empresas", "Um modelo de gestão que enfatiza a autonomia dos funcionários", "Uma teoria que explora os conflitos de interesses entre proprietários (acionistas) e gestores (executivos) em empresas de capital aberto, propondo mecanismos para alinhar seus interesses", "Um método de gestão centrado na eficiência operacional"],
            answer: 2,
        },
            
        {
            question: "O que é a teoria do ciclo de vida das organizações e quais são suas principais fases?",
            options: ["Uma teoria que prevê o fim inevitável de todas as organizações", "Um modelo de gestão que enfoca a continuidade a longo prazo das empresas", "Uma teoria que descreve o nascimento, crescimento, maturidade e declínio de organizações, com implicações para estratégias de administração em cada fase", "Um método de gestão baseado em ciclos trimestrais de planejamento"],
            answer: 2,
        },
        // Adicione mais perguntas difíceis aqui
    ],
};

const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");

let currentDifficulty = "";
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentDifficulty][currentQuestionIndex];
    quizContainer.innerHTML = `
        <h1>Quiz de Administração</h1>
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li><input type="radio" name="answer" id="option-${index}" value="${index}"><label for="option-${index}">${option}</label></li>
            `).join("")}
        </ul>
        <button id="next-button">Próxima Pergunta</button>
    `;
    const nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", checkAnswer);
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.value);
        const currentQuestion = questions[currentDifficulty][currentQuestionIndex];
        if (selectedIndex === currentQuestion.answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[currentDifficulty].length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    quizContainer.innerHTML = `
        <h1>Quiz Concluído!</h1>
        <p>Pontuação: ${score} de ${questions[currentDifficulty].length}</p>
    `;
}

startButton.addEventListener("click", () => {
    currentDifficulty = difficultySelect.value;
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
});
