using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Domain.Interfaces.Services
{
    public interface IServiceBase<TEntidade> where TEntidade : class
    {
        void Inserir(TEntidade entidade);
        void Inserir(TEntidade entidade, Expression<Func<TEntidade, bool>> condicao);
        void Alterar(TEntidade entidade);
        void Excluir(int Codigo);
        void Excluir(int[] Codigos);
        void Excluir(Expression<Func<TEntidade, bool>> condicao);
        TEntidade Obter(int Codigo);
        TEntidade Obter(Expression<Func<TEntidade, bool>> condicao);
        IEnumerable<TEntidade> Listar();
        IEnumerable<TEntidade> Listar(Expression<Func<TEntidade, bool>> condicao);
        void Dispose();
    }
}
