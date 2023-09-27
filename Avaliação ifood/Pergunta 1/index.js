//Desafio: Conversor de Horários
//Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) e retorne o equivalente (18:15:25). 

function convert24h(time12h) {
    // Divide o horário em horas, minutos, segundos e período
    let [horas, minutos, segundosPeriod] = time12h.split(":");
    let secondos = segundosPeriod.substring(0, 2);
    let period = segundosPeriod.substring(2, 4);

    // Converte as horas para int para realizar cálculos
    horas = parseInt(horas, 10);

    // Converte horário PM para formato de 24 horas, exceto quando são 12 PM
    if (period.toUpperCase() === "PM" && horas !== 12) {
        horas += 12;
    }

    
    else if (period.toUpperCase() === "AM" && horas === 12) {
        horas = 0;
    }

    
    return `${String(horas).padStart(2, '0')}:${minutos}:${secondos}`;
}


let time12h = "06:15:25PM";
console.log(convert24h(time12h));  
// Deve imprimir 18:15:25