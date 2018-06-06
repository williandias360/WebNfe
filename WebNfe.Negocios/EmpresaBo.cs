using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Entidades;
using WebNfe.Infra.Data.Repositorios;
using WebNfe.Negocios.Interfaces;

namespace WebNfe.Negocios
{
    public class EmpresaBo : IEmpresaBo<Empresa>
    {
        EmpresaRepositorio empresaRepositorio;
        public EmpresaBo()
        {
            empresaRepositorio = new EmpresaRepositorio();
        }
        public void Alterar(Empresa entidade)
        {
            empresaRepositorio.Alterar(entidade);
        }

        public void Dispose()
        {
            
        }

        public void Excluir(int Codigo)
        {
            empresaRepositorio.Excluir(Codigo);
        }

        public void Excluir(int[] Codigos)
        {
            empresaRepositorio.Excluir(Codigos);
        }

        public void Excluir(Expression<Func<Empresa, bool>> condicao)
        {
            empresaRepositorio.Excluir(condicao);
        }

        public void Inserir(Empresa entidade)
        {
            empresaRepositorio.Inserir(entidade);
        }

        public void Inserir(Empresa entidade, Expression<Func<Empresa, bool>> condicao)
        {
            empresaRepositorio.Inserir(entidade, condicao);
        }

        public IEnumerable<Empresa> Listar()
        {
            return empresaRepositorio.Listar();
        }

        public IEnumerable<Empresa> Listar(Expression<Func<Empresa, bool>> condicao)
        {
            return empresaRepositorio.Listar(condicao);
        }

        public Empresa Obter(int Codigo)
        {
            return empresaRepositorio.Obter(Codigo);
        }

        public Empresa Obter(Expression<Func<Empresa, bool>> condicao)
        {
            return empresaRepositorio.Obter(condicao);
        }
    }
}
