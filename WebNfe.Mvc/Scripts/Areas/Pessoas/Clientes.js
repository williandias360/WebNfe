$.clientes = {

    acao: {

        Salvar: function () {
            var pessoa = $.clientes.acao.ObterDados();
            if ($.clientes.acao.ValidarDados(pessoa)) {
                if (!isEmpty(pessoa.Codigo) && pessoa.Codigo > 0) {
                    $.clientes.acao.Alterar(pessoa);
                }
                else {
                    $.clientes.acao.Inserir(pessoa);
                }
            }
        },
        ObterDados: function () {
            return {
                Nome: $("#Nome").val(),
                Endereco: $("#Endereco").val(),
                Bairro: $("#Bairro").val(),
                Complemento: $("#Complemento").val(),
                Observacao: $("#Observacao").val(),
                Codigo: 0,
                CodigoCidade: $("#Cidades").val()
            };
        },
        ValidarDados: function (pessoa) {
            var msg = "";
            if (pessoa.Nome.trim() == "") {
                msg += "Nome precisa ser informado" + "\n";
            }
            if (pessoa.Endereco.trim() == "") {
                msg += "Endereço precisa ser preenchido" + "\n";
            }

            if (msg.trim() != "") {
                alert(msg);
                return false;
            }
            else return true;
        },
        Inserir: function (pessoa) {
            $.ajax({
                url: "Clientes/Inserir",
                method: "POST",
                data: {
                    cliente:pessoa
                }
            });
        },
        Alterar: function (pessoa) {

        },
        Excluir: function (codigo) {

        },
        Obter: function (codigo) {

        },
        Listar: function () {
            $("div#Lista").dataList({
                url: "Clientes/Listar",
                buttons: [{
                    name: "Excluir",
                    class: "Excluir",
                    visible: true,
                    click: function (items) {
                        if (items.length == 1 && confirm("Deseja mesmo excluir esta empresa?")) {
                            _lista.dataList("loading");

                            /*$.myAjax({
                                url: "Pessoa/Excluir",
                                data: {
                                    CodigoPessoa: items[0].CodigoPessoa
                                },
                                complete: function () {
                                    //_lista.dataList("unloading");
                                },
                                success: function (dadosUsuario) {
                                    _lista.dataList("reset");
                                }
                            });*/
                        }
                    }
                }, {
                    name: "Editar",
                    class: "Editar",
                    visible: true,
                    click: function (items) {
                        if (items.length == 1) {
                            _lista.dataList("loading", "Abrindo para edição ...");

                            /*$.myAjax({
                                url: "Pessoa/Obter",
                                data: {
                                    CodigoPessoa: items[0].CodigoPessoa
                                },
                                complete: function () {
                                    _lista.dataList("unloading");
                                },
                                success: function (dadosEmpresa) {
                                    if (dadosEmpresa) {
                                        _abrirCadastro(true);
    
                                        _formulario.find("input[name=Nome]").val(dadosEmpresa.Nome);
                                        _formulario.find("input[name=Documento]").val(dadosEmpresa.CNPJ);
                                        _formulario.find("input[name=CodigoPessoa]").val(items[0].CodigoPessoa);
                                        _formulario.find("input[name=TamanhoPacote]").val(dadosEmpresa.TamanhoPacote);
                                        _formulario.find("select[name=CodigoEscritorio]").val(dadosEmpresa.CodigoEscritorio).trigger("change");
                                    } else {
                                        alert("Erro ao buscar dados da pessoa");
                                    }
                                }
                            });*/
                        }
                    }
                }],
                //selectMultiple: true,
                beforeSend: function (list, data) {
                    //            var buscar = $.stringToJSON(data.Buscar);
                    //
                    //            buscar.DataInicial = _filtros.find("input[name=DataInicial]").val() || undefined;
                    //            buscar.DataFinal = _filtros.find("input[name=DataFinal]").val() || undefined;
                    //
                    //            data.Buscar = $.jsonToString(buscar);

                    //  return _self.getFiltros();
                },
                columns: [{
                    name: "CodigoPessoa",
                    display: "Código",
                    width: "100px",
                    align: "center",
                    search: true
                }, {
                    name: "Nome",
                    display: "Nome",
                    width: "265px",
                    search: true
                }],
                autoLoad: true,
                orderBy: "CodigoPessoa",
                orderType: "DESC"
            });
        }
    }
}

$("#btnSalvar").click(function () {
    $.clientes.acao.Salvar();
})

$(document).ready(function () {
    $.clientes.acao.Listar();
});