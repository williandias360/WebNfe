using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Application.Interfaces;
using WebNfe.Domain.Entidades;
using WebNfe.Domain.Interfaces.Services;
using WebNfe.Domain.Services;

namespace WebNfe.Application
{
    public class CidadeAppService : AppServiceBase<Cidade>, ICidadeAppService
    {
        private readonly ICidadeService _cidadeService;

        public CidadeAppService(ICidadeService serviceBase) : base(serviceBase)
        {
            _cidadeService = serviceBase;
        }
    }
}
