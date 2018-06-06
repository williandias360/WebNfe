using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebNfe.Negocios;

namespace WebNfe.Mvc.Controllers.Areas.Pessoas
{
    public class CidadesController : Controller
    {
        // GET: Cidades
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ListarCidades(string nome)
        {
            var cidadesBo = new CidadeBo();
            var cidades = cidadesBo.ListarPorNome(nome)
                                .ToList()
                                .OrderBy(c => c.Uf)
                                .Select(c => new
                                {
                                    id = c.CodigoCidade,
                                    text = c.Nome
                                });
            var results = new
            {
                results = cidades
            };
            return Json(results, JsonRequestBehavior.AllowGet);

        }
        [HttpPost]
        public JsonResult ListarPorEstado(string uf)
        {
            using (var cidadesBo = new CidadeBo())
            {
                return Json(cidadesBo
                            .ListarPorEstado(uf).
                            ToList()
                            .Select(c => new
                            {
                                id = c.CodigoCidade,
                                text = c.Nome
                            }));


            }
        }
    }
}