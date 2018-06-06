using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Entidades;
using WebNfe.Domain.Interfaces.Repositorios;
using WebNfe.Domain.Interfaces.Services;

namespace WebNfe.Domain.Services
{
    public class EmpresaService : ServiceBase<Empresa>, IEmpresaService
    {
        private readonly IEmpresaRepositorio _empresaRepositorio;
        public EmpresaService(IEmpresaRepositorio repositorio) : base(repositorio)
        {
            _empresaRepositorio = repositorio;
        }
    }
}
