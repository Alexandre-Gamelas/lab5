const ponint2DModule = require("./Ponto2D")
const Ponto2D = ponint2DModule.Ponto2D

const segmentoDeRetaModule = require("./SegmentoReta")
const SegmentoReta = segmentoDeRetaModule.SegmentoReta


//ex-1
const ponto_a = new Ponto2D(2, 3)
ponto_a.setX(4)
//ex-2
const ponto_b = new Ponto2D(4, 5)
const reta = new SegmentoReta(ponto_a, ponto_b)
console.log(reta.getDistancia())