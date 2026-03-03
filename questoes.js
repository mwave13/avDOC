const QUESTOES_DADOS = [
    {
        "id": 1,
        "tema": "Promoções e Especialização",
        "pergunta": "O VIP Ronaldo, portador de especialização avançada, após uma ausência de 15 dias por motivo de licença na especialização, retornou ao serviço e, no terceiro dia de atividade, indeferiu a solicitação de Especialização Intermediária (EI) feita pelo executivo Jonas. A solicitação havia sido realizada por meio de tópico na [CE] Solicitação de Análise, durante o turno da manhã. Ronaldo, que estava ativo nesse turno, concluiu unilateralmente a análise, sem consultar os demais portadores da especialização avançada e sem apresentar justificativa fundamentada ao executivo. Além disso, no quinto dia após o retorno da licença, o VIP deferiu uma nova EI, alegando estar plenamente ativo. Com base no exposto, responda: a) O VIP Ronaldo, pode conceder Especialização Intermediária sem ser da Diretoria do Corpo Executivo? Se sim, o que deve ter no requerimento? b) Evidencie os erros cometidos por Ronaldo nas decisões que tomou e justifique a resposta. Além disso, qual foi o crime cometido e a punição para ambos?",
        "criterios": "Avalie com base: a) Sim (0,10) pode conceder mesmo sem ser da Diretoria (0,10). O requerimento deve ser fundamentado com motivos da concessão (0,10), obrigatório menção ao desempenho e critérios (0,10). b) Erros: O portador deve fundamentar a negativa (0,20). Após licença superior a 7 dias, deve compensar 7 dias de atividade (0,15) antes de realizar concessões (0,15). Crime: Abandono de Dever/Negligência (0,10). Punição: Advertência Escrita (0,10). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 2,
        "tema": "Promoções e Permissões",
        "pergunta": "O corregedor e comandante Garrafa permaneceu em licença por 21 dias consecutivos. Logo após a postagem de retorno, procurou informações sobre o coronel mais apto à promoção, visto que havia 2 vagas disponíveis, realizando assim a promoção do mais apto. Dois dias depois, o VIP Tadeu, portador da especialização intermediária, solicita permissão para a promoção de um capitão ao corregedor Garrafa, concedendo-a e realizando a postagem. Analise se o corregedor agiu corretamente em ambas as situações, identificando possíveis crimes cometidos, juntamente com a punição, justificando sua resposta.",
        "criterios": "Avalie com base: O corregedor agiu corretamente na primeira situação (0,10), mas incorretamente na segunda (0,10). O VIP Tadeu não necessitava da permissão (0,20), já que executivos com Especialização Intermediária não necessitam de permissão para promoção de oficiais (0,20). Crime: Abandono de Dever/Negligência (0,10) por conceder permissão desnecessária (0,20). Punição: Advertência escrita (0,10). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 3,
        "tema": "Liderança e Ausência",
        "pergunta": "Em casos da ausência efetiva ou temporária do líder por meio de licença, reserva ou reforma, sua vaga será ocupada de acordo com algumas definições. Responda as alternativas com Verdadeiro ou Falso, justificando as falsas. I. Na ausência decorrente de licença temporária de até 30 dias, a vice-liderança deve assumir o papel de líder efetivo; II. Na ausência decorrente de reserva, um vice-líder deve ser nomeado como líder interino do grupo de tarefa, sendo ele a maior autoridade responsável pela gestão do grupo; III. Na ausência decorrente de reforma ou deixar o cargo, isto é, aquela considerada permanente, o policial que assumir o posto deverá ser reconhecido como tal pela Corregedoria ou Alto Comando Supremo.",
        "criterios": "Avalie com base: I. Falso (0,15). Deve assumir apenas o papel representativo da gestão (0,25). II. Verdadeiro (0,20). III. Falso (0,15). O policial deve ser reconhecido pelo Alto Comando Supremo (0,25). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 4,
        "tema": "Procedimentos de Exoneração",
        "pergunta": "Durante o turno matutino, o Capitão Jurassic presencia uma situação de desrespeito dentro do batalhão que resulta na demissão de um militar e constata que se trata de reincidência. Diante disso, o capitão assume a responsabilidade pelo caso e solicita permissão para exoneração, a qual é devidamente concedida. O requerimento é postado, porém o Centro de Recursos Humanos nega em razão de inconsistências nos motivos apresentados. Em razão de compromissos momentâneos, o Capitão Jurassic realiza nova postagem apenas após 47 horas, reapresentando os motivos de forma correta e reutilizando a permissão anteriormente concedida. Analise o caso apresentado, avaliando se o procedimento foi realizado de forma adequada e, caso identifique falhas, indique quais foram e quais medidas administrativas e disciplinares deveriam ser adotadas.",
        "criterios": "Avalie com base: Procedimento incorreto (0,10). Repostado após 47h (0,10) usando a mesma permissão. A permissão deveria ser reutilizada em até 24h (0,20). Como não houve permissão válida na repostagem, o requerimento é negado (0,20). Crime: Abandono de Dever/Negligência (0,20). Punição: Rebaixamento (0,20). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 5,
        "tema": "Especialização e Licença",
        "pergunta": "O VIP Jequiti adquiriu seu cargo no dia 1° de novembro e, após ingressar em uma companhia e concluir o CFO, solicitou sua especialização intermediária à diretora Eudora no dia 15 de novembro. No entanto, o VIP apresentava baixa presença no batalhão, não realizava movimentações hierárquicas e raramente concedia gratificações aos subordinados. A diretora Eudora indeferiu a solicitação, alegando que o desempenho do VIP deixava a desejar. Porém, ela havia tirado licença do dia 4 a 12 de novembro e não apresentou justificativa formal para o indeferimento. Quantos erros há nessa situação? Justifique sua resposta identificando o(s) possível(is) crime(s) e respectiva(s) punição(ões), se houver(em).",
        "criterios": "Avalie com base: Dois erros (0,10). 1. Portador licenciado deve compensar os dias (0,10+0,20). Crime: Abandono de Dever/Negligência (0,10), punição: Advertência Escrita (0,10). 2. Negativa de especialização deve ser informada e fundamentada ao solicitante (0,10+0,10). Crime: Abandono de Dever (0,10), punição: Advertência Escrita (0,10). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 6,
        "tema": "Transferência de Conta",
        "pergunta": "Um superintendente com especialização intermediária solicita a transferência de conta por motivo pessoal, utilizando a ferramenta moderna de alteração de nick do Habbo. O novo nickname não mantém qualquer semelhança com o anterior e o responsável pela transferência deixa de orientar o executivo quanto às suas obrigações dentro do prazo estipulado. Diante dessas circunstâncias, responda: a) Quem é a responsável por realizar a transferência de conta nas condições apresentadas? E caso ele possuísse especialização avançada? b) Quais são as obrigações que o militar transferido deverá cumprir, bem como os prazos correspondentes? c) Considerando a omissão do responsável pela transferência e o eventual descumprimento das exigências pelo militar, quais são as responsabilizações aplicáveis a cada um, conforme a normativa vigente?",
        "criterios": "Avalie com base: a) Diretoria (0,10); Avançada requer Alto Comando Supremo (0,10). b) TAG em 48h, formulário Pedido de Transferência em 72h (0,10), postar nos grupos de tarefas (0,10). c) Responsável omisso (>24h): Advertência Escrita (0,10) - Abandono de Dever (0,10). Militar omisso (pós-orientação): Advertência Escrita/Abandono de Dever (0,20). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 7,
        "tema": "Licenças e Atividade",
        "pergunta": "O Capitão Alberto decide postar uma licença de 20 dias no RCCSystem, para poder resolver algumas questões pessoais. Porém, no meio de sua licença, decide entrar no batalhão. O subtenente Michel, que estava avaliando a promoção de um cabo, solicita a permissão do Capitão para promovê-lo, tendo em vista o seu excelente desempenho. Prontamente, o Capitão Alberto confirma, realizando a postagem. Com base no enunciado, responda: I) O Capitão Alberto cometeu algum erro? Disserte sobre. II) Em casos de licença, quais postagens não são permitidas no Centro de Recursos Humanos?",
        "criterios": "Avalie com base: I) Erro: Postou permissão em licença (0,10). Crime: Abandono de Dever/Negligência (0,20), Punição: Advertência Escrita (0,10). II) Não permitido: Promoções, punições, transferências, gratificações, cancelamentos e permissões (0,10 por cada categoria correta). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 8,
        "tema": "Atividades Obrigatórias",
        "pergunta": "A liderança da companhia dos treinadores planejou uma reunião ministerial para 08 de fevereiro de 2026, às 16h00, determinando que o ministro Moisés enviasse uma notificação por mensagem privada aos envolvidos, o que ocorreu em 07 de fevereiro de 2026, às 10h00. A notificação estipulou prazo de 24 horas após o início da reunião para apresentação de justificativa em caso de não comparecimento, sob pena de advertência interna. O ministro Isaque não compareceu nem justificou no prazo, motivo pelo qual a liderança aplicou a punição. Diante disso, responda: A) A punição aplicada está correta? Justifique sua resposta. B) Em caso de descumprimento dos requisitos de caracterização de atividade obrigatória, indique a quem compete a responsabilização, o crime e a punição aplicável.",
        "criterios": "Avalie com base: A) Não (0,10). Requer postagem no Diário SRP (0,20) e MP com antecedência de 48h (0,20). B) Liderança do GT é responsável (0,20) - Abandono de Dever (0,15) - 50 medalhas negativas (0,15). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 9,
        "tema": "Retorno de Licença e Rebaixamentos",
        "pergunta": "O Acionista Majoritário Pedro.Helberto retornou de uma licença de serviço na especialização, compreendida entre os dias 01 de janeiro de 2026 e 15 de janeiro de 2026, tendo oficializado o seu retorno no dia 15. No dia 23 de janeiro, outorga o rebaixamento do coronel Jadson10 por insuficiência para a patente. Diante dos fatos e levando em consideração a necessidade de compensação de dias, responda às alíneas. A) O rebaixamento poderia proceder? Justifique. Há a necessidade de alguma comprovação? Se sim, cite-a(s). B) É aberta exceção à obrigatoriedade de compensação e comprovação em algumas situações específicas, descreva-as.",
        "criterios": "Avalie com base: A) Sim (0,10). Compensa 7 dias (0,10). Necessário depoimento de superiores (0,10). B) Exceções: CEM em Mediação Hierárquica (0,25), Rebaixamento por Ineficiência/Ausência 72h/Não entrar em CIA 7d (0,25), Corregedores <21d licença (0,20). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 10,
        "tema": "Visibilidade de Perfil",
        "pergunta": "O Cabo Blair resolveu que não queria entrar em nenhuma CIA por ora, mantendo-se apenas nas funções do batalhão. Após passar algumas horas, o seu superior Aspirante Zezinho percebeu que o militar não estava com a visibilidade do perfil ativa e o puniu com 50 medalhas efetivas negativas. Baseando-se no enunciado, responda se ocorreu algum erro por parte do Aspirante Zezinho e qual seria o procedimento correto.",
        "criterios": "Avalie com base: Erro: Aspirante errou (0,10). Procedimento: Apenas orientar MP (0,30) pois não está em CIA. Pós 24h: Rebaixamento a cada 24h (0,40). Sem contato/fórum: Rebaixamento imediato (0,20). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 11,
        "tema": "Hierarquia e Insubordinação",
        "pergunta": "O Tenente Azul recusou-se a cumprir a ordem de realizar uma ronda de recrutamento dada pelo Capitão Laranja e ainda o confrontou, afirmando que ele não tinha autoridade para obrigá-lo. Diante disso, o Capitão rebaixou imediatamente o Tenente. Minutos depois, o Coronel Azul aplicou uma advertência escrita ao Capitão por abandono de dever/negligência, fundamentando-se na licença de serviço do Capitão. O Capitão, estando em licença de serviço, poderia rebaixar o Tenente? Da mesma forma, a advertência aplicada pelo Coronel foi correta? Justifique sua resposta.",
        "criterios": "Avalie com base: Sim, capitão podia punir (0,10) mesmo em licença (0,10) pois foi atingido diretamente por insubordinação/desrespeito (0,45). Advertência do Coronel incorreta (0,35). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 12,
        "tema": "Migração de Corpos",
        "pergunta": "O general Pedro2525 decide migrar para o corpo executivo como superintendente com especialização intermediária. No mesmo dia, rebaixa o capitão Dadin20 por insuficiência para a patente. O marechal Jardas cancela o rebaixamento alegando falta de dias mínimos de serviço no cargo executivo. A resolução do Marechal Jardas foi correta?",
        "criterios": "Avalie com base: Não foi correta (0,30). Na migração de corpo, a contagem de dias não se aplica a subalternos da patente anterior (0,35) se já possuísse requisitos antes da migração (0,35). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 13,
        "tema": "Crimes de Ataque",
        "pergunta": "Um sargento foi identificado a negociar repetidamente com militares da recepção causando travamentos e quedas. Qual a conduta e responsabilização judicial?",
        "criterios": "Avalie com base: Punir imediatamente por transtorno (0,15). Crime de Ataque PCE inciso I (0,50). Punição: Exoneração 01 mês até tempo indeterminado (0,35). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 14,
        "tema": "Traição e Outras Instituições",
        "pergunta": "O Aspirante John foi flagrado a ajudar um amigo (Supremo de outra polícia PKO) na montagem de um batalhão. Alegou favor pessoal sem remuneração. Atitude correta?",
        "criterios": "Avalie com base: Não (0,10). Justifica demissão (0,15) por prestar serviços a outra instituição militar (0,25). Crime de Traição (0,50). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 15,
        "tema": "Código Penal Militar (Análise)",
        "pergunta": "Verdadeiro ou Falso: I - Reputação sistemática aplica-se apenas em território institucional; II - Confissão espontânea não é aceita; III - Terra estrangeira apenas inimigas; IV - Testemunhos escritos dispensam comprovação visual.",
        "criterios": "Avalie com base: I - Incorreta, aplica-se em solo estrangeiro (0,25). II - Incorreta, confissão é válida (0,25). III - Incorreta, inclui aliadas/neutras (0,25). IV - Incorreta, exige printscreen (0,25). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 16,
        "tema": "Código de Comando (Batalhão)",
        "pergunta": "O Tenente Bruno migrou do Batalhão Principal para o Auxiliar na madrugada sozinho, fechou com :fechar/:kickar e tirou prints. Atitude correta?",
        "criterios": "Avalie com base: Erro (0,20). Requer uso de corredor principal (0,25) com militar trancando passagem até abertura no Auxiliar (0,55). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 17,
        "tema": "Migração de Batalhões",
        "pergunta": "O general Francisco migrou do 3°BP para o 4°BP por motivos de design pessoal. Registrou relatório 45 min após. A) Validade? B) Incoerências?",
        "criterios": "Avalie com base: A) Inválida, motivo não plausível (0,40). Punição: Advertência Escrita (0,10). B) Incoerência: Prazo de 30 min (0,20). Abandono de Dever/Advertência Escrita (0,15). Falta do comando :migrar (0,15). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 18,
        "tema": "Plano de Controle Emergencial",
        "pergunta": "Oito bots entram e fazem flood de balões. Emergência, gravidade e procedimentos?",
        "criterios": "Avalie com base: Emergências: Bots (0,15) e Flood (0,15). Gravidade II (0,15). Procedimento: Silenciar todos/kickar (0,35). Justificativa: Floods infindáveis (0,20). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    },
    {
        "id": 19,
        "tema": "Simulações PCE",
        "pergunta": "O Marechal Joeliton realizou simulações de ataques para treinar um aspirante. A) Autoridade? B) Tipos de simulação?",
        "criterios": "Avalie com base: A) Não (0,10). Apenas Setor de Inteligência com autorização (0,40). B) Tipos: Base e Ataque (0,50). Cotação Máxima: 1.0",
        "cotacao_maxima": 1.0
    }
];
