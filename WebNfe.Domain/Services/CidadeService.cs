using WebNfe.Domain.Entidades;
using WebNfe.Domain.Interfaces.Repositorios;
using WebNfe.Domain.Interfaces.Services;

namespace WebNfe.Domain.Services
{
    public class CidadeService : ServiceBase<Cidade>, ICidadeService
    {
        private readonly ICidadeRepositorio _cidadeRepositorio;
        public CidadeService(ICidadeRepositorio repositorio) : base(repositorio)
        {
            _cidadeRepositorio = repositorio;
        }
    }
}
