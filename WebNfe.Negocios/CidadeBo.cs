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
    public class CidadeBo : IDisposable, ICidadeBo<Cidade>
    {
        CidadeRepositorio cidadeRepositorio;
        public CidadeBo()
        {
            cidadeRepositorio = new CidadeRepositorio();
        }
        public void Alterar(Cidade entidade)
        {
            cidadeRepositorio.Alterar(entidade);
        }

        public void Excluir(int Codigo)
        {
            cidadeRepositorio.Excluir(Codigo);
        }

        public void Excluir(int[] Codigos)
        {
            cidadeRepositorio.Excluir(Codigos);
        }

        public void Excluir(Expression<Func<Cidade, bool>> condicao)
        {
            cidadeRepositorio.Excluir(condicao);
        }

        public void Inserir(Cidade entidade)
        {
            cidadeRepositorio.Inserir(entidade);
        }

        public void Inserir(Cidade entidade, Expression<Func<Cidade, bool>> condicao)
        {
            cidadeRepositorio.Inserir(entidade, condicao);
        }

        public IEnumerable<Cidade> Listar()
        {
            return cidadeRepositorio.Listar();
        }

        public IEnumerable<Cidade> Listar(Expression<Func<Cidade, bool>> condicao)
        {
            return cidadeRepositorio.Listar(condicao);
        }

        public Cidade Obter(int Codigo)
        {
            return cidadeRepositorio.Obter(Codigo);
        }

        public Cidade Obter(Expression<Func<Cidade, bool>> condicao)
        {
            return cidadeRepositorio.Obter(condicao);
        }

        public void Dispose()
        {

        }

        public IEnumerable<Cidade> ListarPorEstado(string uf)
        {
            return Listar(c => c.Uf == uf);
        }

        public IEnumerable<Cidade> ListarPorNome(string nome)
        {
            return Listar(c => c.Nome.Contains(nome));
        }
    }
}
