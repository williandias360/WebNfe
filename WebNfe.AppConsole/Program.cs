using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Entidades;
using WebNfe.Negocios;

namespace WebNfe.AppConsole
{
    class Program
    {
        
        static void Main(string[] args)
        {
            var cidadeBo = new CidadeBo();
            var cidade = cidadeBo.Obter(5107);
            var empresa = new Empresa()
            {
                RazaoSocial = "Teste de empresa",
                Fantasia = "Nome Fantasia",
                Cnpj = "123456789",
                InscricaoEstadual = "12345689",
                Bairro = "Teste de bairro",
                CodigoCidade = cidade.CodigoCidade,
                Endereco = "Endereço de teste",
                Complemento = "Teste de complemento",
                InscricaoMunicipal = ""
            };
            var empresaBo = new EmpresaBo();
            empresaBo.Inserir(empresa);

            var pessoa = new Pessoa()
            {
                Nome = "Willian Dias Brito",
                CodigoEmpresa = empresa.CodigoEmpresa,
                CodigoCidade = cidade.CodigoCidade,
                Bairro = "Teste de bairro",
                Endereco = "Teste de endereco"
            };

            var pessoaBo = new PessoaBo();
            pessoaBo.Inserir(pessoa);

        }
    }
}
