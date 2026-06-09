class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade <= 11){
     return "Infantil";
  }
   else if (this.idade <= 13){
      return "Juvenil";
   }
    else if (this.idade <= 15){
      return "Intermediário";
    }
    else if (this.idade <= 30){
      return "Adulto";
    }
    else{
      return "Sem categoria";
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let notas = [this.notas].sort((a, b) => a - b);
    return (notas[1] + notas[2] + notas[3]) / 3;
  }

  
  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}
