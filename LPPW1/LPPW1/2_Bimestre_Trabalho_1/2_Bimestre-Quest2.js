/*            Marco Antônio Ventura Silva - 202010084 - 3ºPeríodo

    2. Crie uma classe chamada “funcionário” com os atributos matricula, nome e salario. 
    Crie os getters e setters. Crie o método inss para retornar o valor do desconto 
    de acordo com as condições abaixo.

        •	Se o salário for menor que 1000, o desconto será de 5% sobre o salário;
        •	Se o desconto for maior ou igual a 1000 e menor que 3000 o desconto será 
        de 7% sobre o salário;
        •	Se o salário for maior ou igual a 3000 o desconto será de 9% sobre o salário.

    2.1 Crie o método if para retornar o valor do desconto de acordo com as condições 
    abaixo.

        •	Se o salário for menor que 2000 o desconto será zero;
        •	Se o salário for maior ou igual a 2000 e menor que 4000 o desconto 
        será 10% do salário menos 50;
        •	Se o salário for maior ou igual a 4000 e menor que 7000 o desconto 
        será de 12% sobre o salário menos 70;
        •	Se o salário for maior ou igual a 7000 o desconto será de 14% sobre 
        o salário menos 90.

    2.2 Crie o método para retornar o salário líquido.

    2.3 Crie uma variável para instanciar a classe funcionarios passando a matricula, 
    nome e salário e o sistema exiba as seguintes informações. O seu nome é ____, 
    sua função é ____, o seu salário bruto é ____, o desconto do inss foi de ____ e o 
    de IRF de ____, portanto o seu salário líquido foi de _____.
*/

class Funcionario
{
    constructor (matricula, nome, salario)
    {
        this._matricula = matricula;
        this._nome = nome;
        this._salario = salario;
    }

    get matricula ()
    {
        return this._matricula;
    }
    get nome ()
    {
        return this._nome;
    }
    get salario ()
    {
        return this._salario;
    }

    set matricula(matricula)
    {
        this._matricula = matricula
    }
    set nome(nome)
    {
        this._nome = nome
    }
    set salario(salario)
    {
        this._salario = salario
    }
}

class inss extends Funcionario
{
    constructor(matricula, nome, salario, desconto)
    {
        super(matricula, nome, salario)
        this._desconto
    }

    get desconto ()
    {
        return this._desconto;
    }

    set desconto(desconto)
    {
        this._desconto = desconto
    }

    reajuste
}

let func = new Funcionario ("001", "Pedro", 1200)
console.log(func.matricula, func.nome, func.salario)






if (salario < 1000)
{
    return this._salario * 0.05
}
else 
    if(salario >= 1000 && salario < 3000)
    {
        return this._salario * 0.07
    }
    else (salario>= 3000)
    {
        return this._salario * 0.09
    }


if (salario < 2000)
{
    return `Sem desconto!!!`
}
else 
    if(salario >= 2000 && salario < 4000)
    {
        return (this._salario * 0.10) -50
    }
    else 
        if(salario >= 4000 && salario < 7000)
        {
            return (this._salario * 0.12) -70
        }
        else (salario>= 7000)
        {
            return (this._salario * 0.14) - 90
        }
