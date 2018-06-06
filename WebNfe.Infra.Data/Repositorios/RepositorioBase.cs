using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Infra.Data.Contexto;

namespace WebNfe.Infra.Data.Repositorios
{
    public class RepositorioBase<TEntidade> : IDisposable where TEntidade : class
    {
        protected DadosContexto db = new DadosContexto();
        public void Alterar(TEntidade entidade)
        {
            db.Entry(entidade).State = EntityState.Modified;
            db.SaveChanges();
        }

        public void Dispose()
        {
            
        }

        public void Excluir(int Codigo)
        {
            var entidade = Obter(Codigo);
            db.Set<TEntidade>().Remove(entidade);
            db.SaveChanges();
        }

        public void Excluir(int[] Codigos)
        {
            foreach (var codigo in Codigos)
            {
                Excluir(codigo);
            }
        }

        public void Excluir(Expression<Func<TEntidade, bool>> condicao)
        {
            var entidade = Obter(condicao);
            db.Set<TEntidade>().Remove(entidade);
            db.SaveChanges();
        }

        public void Inserir(TEntidade entidade)
        {
            db.Set<TEntidade>().Add(entidade);
            db.SaveChanges();
        }

        public void Inserir(TEntidade entidade, Expression<Func<TEntidade, bool>> condicao)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntidade> Listar()
        {
            return db.Set<TEntidade>().ToList();
        }

        public IEnumerable<TEntidade> Listar(Expression<Func<TEntidade, bool>> condicao)
        {
            return db.Set<TEntidade>().Where(condicao);
        }

        public TEntidade Obter(int Codigo)
        {
            return db.Set<TEntidade>().Find(Codigo);
        }

        public TEntidade Obter(Expression<Func<TEntidade, bool>> condicao)
        {
            return db.Set<TEntidade>().Where(condicao).FirstOrDefault();
        }
    }
}
