using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Interfaces.Repositorios;

namespace WebNfe.Domain.Services
{
    public class ServiceBase<TEntity> : IDisposable, IRepositorioBase<TEntity> where TEntity : class
    {
        private readonly IRepositorioBase<TEntity> _repositorioBase;
        public ServiceBase(IRepositorioBase<TEntity> repositorio)
        {
            _repositorioBase = repositorio;
        }
        public void Alterar(TEntity entidade)
        {
            _repositorioBase.Alterar(entidade);
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public void Excluir(int Codigo)
        {
            _repositorioBase.Excluir(Codigo);
        }

        public void Excluir(int[] Codigos)
        {
            _repositorioBase.Excluir(Codigos);
        }

        public void Excluir(Expression<Func<TEntity, bool>> condicao)
        {
            _repositorioBase.Excluir(condicao);
        }

        public void Inserir(TEntity entidade)
        {
            _repositorioBase.Inserir(entidade);
        }

        public void Inserir(TEntity entidade, Expression<Func<TEntity, bool>> condicao)
        {
            _repositorioBase.Inserir(entidade, condicao);
        }

        public IEnumerable<TEntity> Listar()
        {
            return _repositorioBase.Listar();
        }

        public IEnumerable<TEntity> Listar(Expression<Func<TEntity, bool>> condicao)
        {
            return _repositorioBase.Listar(condicao);
        }

        public TEntity Obter(int Codigo)
        {
            return _repositorioBase.Obter(Codigo);
        }

        public TEntity Obter(Expression<Func<TEntity, bool>> condicao)
        {
            return _repositorioBase.Obter(condicao);
        }
    }
}
