using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Domain.Entidades
{
    public class Empresa
    {
        public int CodigoEmpresa { get; set; }
        public string RazaoSocial { get; set; }
        public string Fantasia { get; set; }
        public string Cnpj { get; set; }
        public string InscricaoEstadual { get; set; }
        public string InscricaoMunicipal { get; set; }
        public string Endereco { get; set; }
        public string Bairro { get; set; }
        public string Complemento { get; set; }
        public virtual Cidade Cidade { get; set; }
        public int CodigoCidade { get; set; }
        public DateTime DataCadastro { get; set; }
    }
}
