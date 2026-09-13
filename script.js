/**
 * Simulador de Juros Compostos - Lógica em JS Puro
 */

// 1. Função para formatar valores em moeda brasileira (R$)
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// 2. Função principal para calcular a simulação
function calcularSimulacao(event) {
    if (event) {
        event.preventDefault();
    }

    // Obter dados de entrada
    const valorInicial = parseFloat(document.getElementById('valorInicial').value) || 0;
    const investimentoMensal = parseFloat(document.getElementById('investimentoMensal').value) || 0;
    const taxaJurosInput = parseFloat(document.getElementById('taxaJuros').value) || 0;
    const tipoTaxa = document.getElementById('tipoTaxa').value; // 'mensal' ou 'anual'
    const periodoInput = parseInt(document.getElementById('periodo').value) || 0;
    const unidadePeriodo = document.getElementById('unidadePeriodo').value; // 'meses' ou 'anos'

    // Validação básica
    if (periodoInput <= 0) {
        alert("Por favor, informe um período válido (maior que zero).");
        return;
    }

    // Converter período total para meses
    const totalMeses = unidadePeriodo === 'anos' ? periodoInput * 12 : periodoInput;

    // Converter taxa de juros para taxa mensal decimal
    let taxaMensalDecimal = 0;
    if (tipoTaxa === 'anual') {
        // Fórmula equivalente para juros compostos: i_m = (1 + i_a)^(1/12) - 1
        const taxaAnualDecimal = taxaJurosInput / 100;
        taxaMensalDecimal = Math.pow(1 + taxaAnualDecimal, 1 / 12) - 1;
    } else {
        // Taxa já é mensal
        taxaMensalDecimal = taxaJurosInput / 100;
    }

    // Variáveis de controle de iteração
    let saldoAcumulado = valorInicial;
    const tabelaCorpo = document.getElementById('tabelaCorpo');
    tabelaCorpo.innerHTML = ''; // Limpar tabela anterior

    // Iteração mês a mês
    for (let mes = 1; mes <= totalMeses; mes++) {
        // 1. Rendimento de juros sobre o saldo anterior
        const jurosDoMes = saldoAcumulado * taxaMensalDecimal;

        // 2. Adiciona os juros do mês e o aporte mensal ao saldo acumulado
        saldoAcumulado += jurosDoMes + investimentoMensal;

        // 3. Total investido até este mês (Capital próprio)
        const totalInvestidoMes = valorInicial + (investimentoMensal * mes);

        // 4. Total de juros acumulados até este mês
        const jurosAcumuladosMes = saldoAcumulado - totalInvestidoMes;

        // Criar linha da tabela dinamicamente
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${mes}</td>
            <td>${formatarMoeda(jurosDoMes)}</td>
            <td>${formatarMoeda(totalInvestidoMes)}</td>
            <td>${formatarMoeda(jurosAcumuladosMes)}</td>
            <td><strong>${formatarMoeda(saldoAcumulado)}</strong></td>
        `;
        tabelaCorpo.appendChild(tr);
    }

    // Cálculos dos Totais Finais
    const valorTotalInvestidoFinal = valorInicial + (investimentoMensal * totalMeses);
    const valorTotalFinal = saldoAcumulado;
    const totalJurosFinal = valorTotalFinal - valorTotalInvestidoFinal;

    // Atualizar cartões de totais na tela
    document.getElementById('totalFinal').innerText = formatarMoeda(valorTotalFinal);
    document.getElementById('totalInvestido').innerText = formatarMoeda(valorTotalInvestidoFinal);
    document.getElementById('totalJuros').innerText = formatarMoeda(totalJurosFinal);

    // Exibir a seção de resultados
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.classList.remove('hidden');

    // Rolar suavemente até a seção de resultados
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 3. Função para limpar os campos e esconder os resultados
function limparSimulacao() {
    document.getElementById('simulatorForm').reset();
    document.getElementById('tabelaCorpo').innerHTML = '';
    document.getElementById('resultsSection').classList.add('hidden');
}

// 4. Função para carregar exemplos reais de uso com 1 clique
function carregarExemplo(tipo) {
    if (tipo === 'reserva') {
        document.getElementById('valorInicial').value = '2000';
        document.getElementById('investimentoMensal').value = '500';
        document.getElementById('taxaJuros').value = '0.8';
        document.getElementById('tipoTaxa').value = 'mensal';
        document.getElementById('periodo').value = '12';
        document.getElementById('unidadePeriodo').value = 'meses';
    } else if (tipo === 'aposentadoria') {
        document.getElementById('valorInicial').value = '5000';
        document.getElementById('investimentoMensal').value = '800';
        document.getElementById('taxaJuros').value = '10.5';
        document.getElementById('tipoTaxa').value = 'anual';
        document.getElementById('periodo').value = '20';
        document.getElementById('unidadePeriodo').value = 'anos';
    } else if (tipo === 'carro') {
        document.getElementById('valorInicial').value = '1000';
        document.getElementById('investimentoMensal').value = '600';
        document.getElementById('taxaJuros').value = '0.95';
        document.getElementById('tipoTaxa').value = 'mensal';
        document.getElementById('periodo').value = '3';
        document.getElementById('unidadePeriodo').value = 'anos';
    }

    // Executar a simulação com o exemplo carregado
    calcularSimulacao();
}
