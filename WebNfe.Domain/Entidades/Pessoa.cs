using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Domain.Entidades
{
    public class Pessoa
    {
        public int CodigoPessoa { get; set; }
        public string Nome { get; set; }
        public DateTime DataCadastro { get; set; }
        public string Endereco { get; set; }
        public string Bairro { get; set; }
        public string Complemento { get; set; }
        public string Observacao { get; set; }
        public virtual Empresa Empresa { get; set; }
        public int CodigoEmpresa { get; set; }
        public virtual Cidade Cidade { get; set; }
        public int CodigoCidade { get; set; }
    }
}
