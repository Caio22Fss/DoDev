//criando classe

class Setup {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd  ;
    }

    apresentar() {
        console.log("Informações do computador:")
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Vídeo: ${this.Video}`)
        console.log(`Memória Ram: ${this.MemoriaRam}GB`)
        console.log(`Armazenamento: ${this.Armazenamento}GB`)
        console.log(`SSD: ${this.Ssd}`)
    }

}

//mostrando resultado
const meuComputador = new Setup("Desktop", "Ryzen 5 5600G", "Rx 6600m", 500, 32, true)
meuComputador.apresentar()
