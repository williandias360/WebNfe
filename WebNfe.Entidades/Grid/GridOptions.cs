using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Entidades
{
    public class GridOptions
    {
        public int Exibir { get; set; }
        public int Pagina { get; set; }
        public string OrdenarTipo { get; set; }
        public string OrdenarPor { get; set; }
        public string Buscar { get; set; }
    }
}
