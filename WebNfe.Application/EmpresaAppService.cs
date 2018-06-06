using WebNfe.Application.Interfaces;
using WebNfe.Domain.Entidades;
using WebNfe.Domain.Interfaces.Services;

namespace WebNfe.Application
{
    public class EmpresaAppService : AppServiceBase<Empresa>, IEmpresaAppService
    {
        private readonly IEmpresaService _empresaService;

        public EmpresaAppService()
        {
            
        }

        public EmpresaAppService(IEmpresaService serviceBase) : base(serviceBase)
        {
            _empresaService = serviceBase;
        }
    }
}
