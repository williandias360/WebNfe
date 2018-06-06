using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using WebNfe.Application.Interfaces;
using WebNfe.Domain.Interfaces.Services;

namespace WebNfe.Application
{
    public class AppServiceBase<TEntidade> : IDisposable, IAppServiceBase<TEntidade> where TEntidade : class
    {
        private readonly IServiceBase<TEntidade> _serviceBase;
        public AppServiceBase()
        {

        }
        public AppServiceBase(IServiceBase<TEntidade> serviceBase)
        {
            _serviceBase = serviceBase;
        }
        public void Alterar(TEntidade entidade)
        {
            _serviceBase.Alterar(entidade);
        }

        public void Dispose()
        {
            _serviceBase.Dispose();
        }

        public void Excluir(int Codigo)
        {
            _serviceBase.Excluir(Codigo);
        }

        public void Excluir(int[] Codigos)
        {
            _serviceBase.Excluir(Codigos);
        }

        public void Excluir(Expression<Func<TEntidade, bool>> condicao)
        {
            _serviceBase.Excluir(condicao);
        }

        public void Inserir(TEntidade entidade)
        {
            _serviceBase.Inserir(entidade);
        }

        public void Inserir(TEntidade entidade, Expression<Func<TEntidade, bool>> condicao)
        {
            _serviceBase.Inserir(entidade, condicao);
        }

        public IEnumerable<TEntidade> Listar()
        {
            return _serviceBase.Listar();
        }

        public IEnumerable<TEntidade> Listar(Expression<Func<TEntidade, bool>> condicao)
        {
            return _serviceBase.Listar(condicao);
        }

        public TEntidade Obter(int Codigo)
        {
            return _serviceBase.Obter(Codigo);
        }

        public TEntidade Obter(Expression<Func<TEntidade, bool>> condicao)
        {
            return _serviceBase.Obter(condicao);
        }
    }
}
