using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebNfe.Domain.Entidades;
using WebNfe.Entidades;
using WebNfe.Negocios;

namespace WebNfe.Mvc.Controllers.Areas.Pessoas
{
    public class ClientesController : Controller
    {
        // GET: Clientes
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Inserir(ClienteViewModel cliente)
        {
            var pessoa = new Pessoa();
            pessoa.Nome = cliente.Nome;
            pessoa.Bairro = cliente.Bairro;
            pessoa.CodigoCidade = cliente.CodigoCidade;
            pessoa.Complemento = cliente.Complemento;
            pessoa.Observacao = cliente.Observacao;
            pessoa.Endereco = cliente.Endereco;
            pessoa.CodigoEmpresa = 1;
            using(var pessoaBo = new PessoaBo())
            {
                pessoaBo.Inserir(pessoa);
            }

            return Content("");
        }

        [HttpGet]
        public JsonResult Listar(GridOptions gridOptions)
        {
            using(var pessoaBo = new PessoaBo())
            {
                return Json(pessoaBo
                            .Listar()
                            .ToList()
                            .OrderBy(c => c.Nome)
                            .Select
                            (
                                c => new
                                {
                                    c.CodigoPessoa,
                                    c.Nome,
                                    DataCadastro = c.DataCadastro.ToString("dd/MM/yyyy HH:mm:ss"),
                                    c.Endereco,
                                    c.Bairro,
                                    Complemento = c.Complemento ?? "",
                                    Observacao =  c.Observacao ?? "",
                                    c.CodigoCidade,
                                    Cidade = c.Cidade.Nome
                                }
                             ), JsonRequestBehavior.AllowGet);
            }
        }
    }
}