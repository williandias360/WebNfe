using WebNfe.Domain.Entidades;
using WebNfe.Domain.Interfaces.Repositorios;
using WebNfe.Domain.Interfaces.Services;

namespace WebNfe.Domain.Services
{
    public class PessoaService : ServiceBase<Pessoa>, IPessoaService
    {
        private readonly IPessoaRepositorio _pessoaRepositorio;
        public PessoaService(IPessoaRepositorio repositorio) : base(repositorio)
        {
            _pessoaRepositorio = repositorio;
        }
    }
}
