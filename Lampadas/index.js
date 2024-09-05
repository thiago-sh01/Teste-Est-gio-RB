function descobrirInterruptores() {
    // Simulando as lâmpadas: false = desligada, true = ligada
    let lampada1 = false; // Conectada ao interruptor 1
    let lampada2 = false; // Conectada ao interruptor 2
    let lampada3 = false; // Conectada ao interruptor 3
    let quente = false; // Representa se uma lâmpada ficou quente

    // Etapa 1: Ligar o primeiro interruptor e deixar por alguns minutos
    lampada1 = true;
    quente = true; // A lâmpada esquenta após algum tempo

    // Etapa 2: Desligar o primeiro interruptor e ligar o segundo interruptor
    lampada1 = false;
    lampada2 = true;

    // Etapa 3: Simulação de visita à sala de lâmpadas
    console.log("Visitando a sala de lâmpadas...");
    
    if (lampada2) {
        console.log("A lâmpada conectada ao interruptor 2 está ligada.");
    }
    if (!lampada1 && quente) {
        console.log("A lâmpada conectada ao interruptor 1 está desligada, mas quente.");
    }
    if (!lampada3 && !quente) {
        console.log("A lâmpada conectada ao interruptor 3 está desligada e fria.");
    }
}

descobrirInterruptores();
