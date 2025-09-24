//Classe simples
class Pessoa{
  //atributos
  String _nome;
  int _idade;

  //construtor
  //Pessoa(String novoNome, int novaIdade){
  // nome =novoNome;
  //idade = novaIdade;
  //}
  Pessoa(this._nome, this._idade);
  String getNome(){
    return _nome;
  }
  void setNome(String nome){
    _nome = nome;
  }
  int getIdade(){
    return _idade;
  }
  void setIdade(int idade){
    _idade = idade;
  }
  
  //Métodos
  void exibir(){
    print('Nome: $_nome, Idade: $_idade');
  }}

//Herança permite que uma classe herde atributos e métodos de outra.
//class Aluno extends Pessoa {
  //Atributos
//  String _curso;

  //Construtor
//  Aluno(String nome, int idade, this.curso) : super(nome, idade);

  //Métodos
 // String getCurso(){
 //   return _curso;
 // }

 // void setCurso( String curso){
 //     _curso = curso;
//  }
 // void exibirCurso(){
 //   print('Curso: $_curso');
 // }

//}

//polimorfismo
class Aluno extends Pessoa {
  //Atributos
  String _curso;

  //Construtor
  Aluno(String nome, int idade, this._curso) : super(nome, idade);

  //Métodos
  String getCurso(){
    return _curso;
  }

  void setCurso( String curso){
      _curso = curso;
  }
  @override
  void exibir(){
    print('Nome do aluno: $_nome, Idade: $_idade, curso: $_curso');
  }

}

//Abstração
abstract class Forma2D {
  double calArea();
  double calPeri();
}

class Retangulo extends Forma2D{
  //atributos
  double largura;
  double alutura;

  //construtor
  Retangulo(this.largura, this.alutura);

  //Métodos
  double calArea (){
    return largura * alutura;
  }
  double calPeri(){
    return 2 * (largura + alutura);
  }

}

class Quadrado extends Forma2D{
double lado;


Quadrado(this.lado);

double calArea(){
  return lado * lado;
}

double calPeri(){
  return 4 * lado;
}
}

// class Quadrado extends Retangulo{

// Quadrado(double lado) : super(lado, lado);
// }

// class Circulo extends Forma2D{
//  double raio;

//  Circulo(this.raio);

//  double calArea(){

//  }
// }

// class Triangulo extends Forma2D{

// }

// class Triangulo {
// //pra ele exixtir a soma de dois lados tem que ser a menor que o terceiro
// }
void main(){
  Retangulo retan = Retangulo(2, 3);
  Quadrado qua = Quadrado(5);
  print(retan.calArea());
  print(retan.calPeri());
}


// void main(){
//   Aluno aluno = Aluno('André Victor', 18,'D');
//   print(aluno.getIdade());
//   print(aluno.getNome());
//   print(aluno.getCurso());

//   aluno.setIdade(28);
//   aluno.exibir();

// } 