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
    public class PessoaBo : IPessoaBo<Pessoa>
    {
        PessoaRepositorio pessoaRepositorio;
        public PessoaBo()
        {
            pessoaRepositorio = new PessoaRepositorio();
        }
        public void Alterar(Pessoa entidade)
        {
            pessoaRepositorio.Alterar(entidade);
        }

        public void Dispose()
        {
            
        }

        public void Excluir(int Codigo)
        {
            pessoaRepositorio.Excluir(Codigo);   
        }

        public void Excluir(int[] Codigos)
        {
            pessoaRepositorio.Excluir(Codigos);
        }

        public void Excluir(Expression<Func<Pessoa, bool>> condicao)
        {
            pessoaRepositorio.Excluir(condicao);
        }

        public void Inserir(Pessoa entidade)
        {
            pessoaRepositorio.Inserir(entidade);
        }

        public void Inserir(Pessoa entidade, Expression<Func<Pessoa, bool>> condicao)
        {
            pessoaRepositorio.Inserir(entidade, condicao);
        }

        public IEnumerable<Pessoa> Listar()
        {
            return pessoaRepositorio.Listar();
        }

        public IEnumerable<Pessoa> Listar(Expression<Func<Pessoa, bool>> condicao)
        {
            return pessoaRepositorio.Listar(condicao);
        }

        public Pessoa Obter(int Codigo)
        {
            return pessoaRepositorio.Obter(Codigo);
        }

        public Pessoa Obter(Expression<Func<Pessoa, bool>> condicao)
        {
            return pessoaRepositorio.Obter(condicao);
        }
    }
}
