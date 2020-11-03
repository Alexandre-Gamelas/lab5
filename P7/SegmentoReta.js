class SegmentoReta {
  constructor(ponto_a, ponto_b) {
    this.ponto_a = ponto_a;
    this.ponto_b = ponto_b;
    this.distancia = Math.sqrt((Math.pow(ponto_b.getX(), 2)) + (Math.pow(ponto_a.getX(), 2)) + (Math.pow(ponto_b.getY(), 2)) + (Math.pow(ponto_a.getY(), 2)))
  }

  getDistancia() {
    return this.distancia
  }
}

module.exports = {
  SegmentoReta: SegmentoReta
}