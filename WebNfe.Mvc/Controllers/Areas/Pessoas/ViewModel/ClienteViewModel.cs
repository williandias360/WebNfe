using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebNfe.Mvc.Controllers.Areas.Pessoas
{
    public class ClienteViewModel
    {
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Bairro { get; set; }
        public string Complemento { get; set; }
        public string Observacao { get; set; }
        public int CodigoCidade { get; set; }
    }
}