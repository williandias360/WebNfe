using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Domain.Entidades
{
    public class Cidade
    {
        public int CodigoCidade { get; set; }
        public string Nome { get; set; }
        public string Uf { get; set; }
        public string Ibge { get; set; }
        public virtual IEnumerable<Pessoa> Pessoas { get; set; }
        public virtual IEnumerable<Empresa> Empresas { get; set; }
    }
}
