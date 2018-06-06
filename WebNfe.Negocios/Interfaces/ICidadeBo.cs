using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Negocios.Interfaces
{
    public interface ICidadeBo<TEntidade> : IBaseCrudBo<TEntidade> where TEntidade : class
    {
        IEnumerable<TEntidade> ListarPorEstado(string uf);
        IEnumerable<TEntidade> ListarPorNome(string nome);
    }
}
