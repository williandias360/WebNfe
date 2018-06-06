using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Application.Interfaces;
using WebNfe.Domain.Entidades;
using WebNfe.Domain.Interfaces.Services;

namespace WebNfe.Application
{
    public class PessoaAppService : AppServiceBase<Pessoa>, IPessoaAppService
    {
        private readonly IPessoaService _pessoaService;
        public PessoaAppService(IPessoaService serviceBase) : base(serviceBase)
        {
            _pessoaService = serviceBase;
        }
    }
}
