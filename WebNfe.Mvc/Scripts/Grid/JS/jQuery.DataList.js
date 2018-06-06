/* 
 Arquivo javascript: jQuery.DataList
 
 Criado em : 24/09/2014, 14:16:53
 Autor     : MarceL AimaR (marcel_aimar@hotmail.com)    
 Arquivo   : jQuery.MapRoute.js 
 Encoding  : ISO-8859-1   
 @documentation https://developers.google.com/maps/documentation/javascript/directions?hl=pt-br#TravelModes
 */

(function ($) {
    $.widget("ui.dataList", {
        options: {
            parameters: {},
            autoLoad: true,
            connectionAttempts: 2,
            page: 1,
            display: 15,
            orderBy: null,
            orderType: null,
            placeholderSearch: "Pesquisar",
            footerText: "Exibindo {display} de {total} itens encontrados",
            selectMultiple: false,
            searchColumn: true,
            searchFooter: false,
            url: null,
            data: [{
                    ProdutoID: 1,
                    Nome: "teste"
                }, {
                    ProdutoID: 2,
                    Nome: "teste2"
                }],
            buttons: [{
                    name: "Cadastrar",
                    class: "Cadastrar",
                    click: function () {
                    }
                }, {
                    name: "Editar",
                    class: "Editar",
                    click: function () {
                    }
                }, {
                    name: "Excluir",
                    class: "Excluir",
                    click: function () {
                    }
                }, {
                    name: "Inivisvel",
                    visible: true,
                    class: "MaisInformacoes",
                    click: function () {
                    }
                }],
            columns: [{
                    name: "ProdutoID",
                    display: "Código",
                    width: "50px",
                    search: false,
                    searchName: "ProdID",
                    orderName: "Ordem"
                }, {
                    name: "Nome",
                    display: "Nome",
                    width: "300px",
                    search: true
                }],
            beforeSend: function () {
            },
            complete: function () {
            },
            success: function () {
            },
            error: function () {
            },
            onSelect: function () {
            },
            onClick: function () {},
            onDblClick: function () {},
            onFill: function () {
            },
            onDraw: function () {
            }
        },
        _init: function () {
            var self = this;
            self.data = {};
            self.request = null;
            self.filters = {};
            self.pagination = {
                page: self.options.page,
                display: self.options.display,
                orderType: self.options.orderType,
                orderBy: self.options.orderBy,
                total: 0
            };
            self.draw();
        },
        draw: function () {
            var self = this;
            var colunas = [];
            var botoes = "";
            var search = "";

            if (self.options.buttons.length) {
                botoes = [];
                for (var i = 0; i < self.options.buttons.length; i++) {
                    if (self.options.buttons[i].visible || self.options.buttons[i].visible === undefined) {
                        botoes.push(
                                "\n<span data-id=\""+i+"\" class=\"" + (self.options.buttons[i].class) + "\">" +
                                (self.options.buttons[i].name) +
                                "</span>"
                                );
                    }
                }
                botoes = (botoes.length > 0) ? "\n<div class=\"Botoes\">" + botoes.join("\n") + "\n</div>" : "";
            }

            colunas.push("<th" + (self.options.selectMultiple ? "" : " style=\"display:none\"") + ">" +
                    "<span>" +
                    "<input type=\"checkbox\" />" +
                    "</span>" +
                    "</th>");

            for (var i = 0; i < self.options.columns.length; i++) {
                search = "";
                if (self.options.searchColumn && self.options.columns[i].search) {
                    if (self.options.columns[i].searchList) {
                        var list = [];
                        var searchList = self.options.columns[i].searchList;
                        if (typeof searchList == "function") {
                            searchList = searchList.call(self, self.data.list);
                        }

                        $.each(searchList, function (i, item) {
                            list.push("\n<option value=\"" + item.value + "\">" + item.name + "</option>");
                        });

                        search = "<select name=\"" + (self.options.columns[i].searchName || self.options.columns[i].name) + "\">" +
                                "\n<option value=\"\"></option>" +
                                list.join("\n") +
                                "\n</select>";
                    } else {
                        search = "<input type=\"text\" autocomplete=\"off\" name=\"" + (self.options.columns[i].searchName || self.options.columns[i].name) + "\" />";
                    }
                }

                colunas.push(
                        "\n<th" + (self.options.columns[i].visible !== false ? "" : " style=\"display:none\"") + ">" +
                        "<span itemid=\"" + (self.options.columns[i].orderName || self.options.columns[i].name) + "\"" +
                        "style=\"width:" + (self.options.columns[i].width) +
                        (self.options.columns[i].align ? ";text-align:" + self.options.columns[i].align : "") +
                        "\"" +
                        ">" + (self.options.columns[i].display) +
                        search +
                        "</span>" +
                        "</th>"
                        );
            }


            $(self.element).html(
                    "\n<div class=\"ListaDadosMASE\">"
                    + botoes
                    + "\n<div class=\"Cabecalho\">"
                    + "\n<div class=\"Conteudo\">"
                    + "\n<table>"
                    + "\n<thead>"
                    + "\n<tr>" + (colunas.join("\n")) + "\n</tr>"
                    + "\n</thead>"
                    + "\n</table>"
                    + "\n</div>"
                    + "\n</div>"
                    + "\n<div class=\"Conteudo" + (self.options.autoLoad ? " Carregando" : "") + "\">"
                    + "\n<div class=\"Mensagem\"><span>Carregando ...</span></div>"
                    + "\n<ul>\n</ul>"
                    + "\n<div class=\"Dados\">"
                    + "\n<table>"
                    + "\n<tbody>\n</tbody>"
                    + "\n</table>"
                    + "\n</div>"
                    + "\n</div>"
                    + "\n<div class=\"Rodape\">"
                    + "\n<div class=\"Paginacao\">"
                    + "\n<span title=\"Voltar para a primeira página\" class=\"Botao Primeira\">Primeira</span>"
                    + "\n<span title=\"Voltar uma página\" class=\"Botao Voltar\">Voltar</span>"
                    + "\n<span>Página</span>"
                    + "\n<input type=\"text\" name=\"Pagina\" value=\"" + self.options.page + "\" />"
                    + "\n<span class=\"Paginas\">de <strong>1</strong></span>"
                    + "\n<span title=\"Avançar uma página\" class=\"Botao Avancar\">Avancar</span>"
                    + "\n<span title=\"Avançar para a última página\" class=\"Botao Ultima\">Última</span>"
                    + "\n<span title=\"Atualizar\" class=\"Botao Atualizar\">Atualizar</span>"
                    + "\n</div>"
                    + (
                            self.options.searchFooter ?
                            "\n<div class=\"Pesquisa BlocoRodape\">" +
                            "\n<input type=\"search\" name=\"Pesquisar\" autocomplete=\"off\" value=\"\" placeholder=\"" + self.options.placeholderSearch + "\" />" +
                            "\n</div>" :
                            ""
                            )
                    + "\n<div class=\"Totalizador BlocoRodape\">"
                    + (self.options.autoLoad ? "\nCarregando ..." : "") +
                    +"\n</div>"
                    + "</div>"
                    + "\n</div>"
                    );

            self.data = {
                list: $(self.element).find(">.ListaDadosMASE"),
                buttons: $(self.element).find(">.ListaDadosMASE>.Botoes"),
                content: $(self.element).find(">.ListaDadosMASE>.Conteudo"),
                head: $(self.element).find(">.ListaDadosMASE>.Cabecalho>.Conteudo"),
                footer: $(self.element).find(">.ListaDadosMASE>.Rodape")
            };

            self.apply();
            if (self.options.url && self.options.autoLoad) {
                self.load();
            } else {
                self.fill();
            }

            self.options.onDraw.call(self, self.data.list);
        },
        apply: function () {
            var self = this;
            $(self.data.head)
                    .find(">table tr>th:not(:first)")
                    .click(function (e) {
                        if ($(this).find(">span").is(e.target) || $(this).is(e.target)) {
                            var ordemTipo = self.pagination.orderType;
                            var ordemPor = self.pagination.orderBy;

                            ordemPor = $(this).find(">span").attr("itemid");
                            ordemTipo = (ordemPor == self.pagination.orderBy && ordemTipo == "ASC") ? "DESC" : "ASC";

                            self.pagination.orderType = ordemTipo;
                            self.pagination.orderBy = ordemPor;

                            $(self.data.head).find(">table tr>th").removeAttr("class");
                            $(this).addClass("Ordenacao " + ordemTipo);

                            self.load();
                        }
                    });


            $(self.data.head)
                    .find(">table tr>th>span:not(:eq(0))")
                    .resizable({
                        handles: "e",
                        resize: function (event, ui) {
                            $(self.data.content).find("table").find("tr > td:nth-child(" +
                                    ($(this).parent("th").index() + 1) + ") span").width($(this).width());
                        }
                    })/*
                     .click(function (e) {
                     
                     
                     })*/;

            $(self.data.head).find(">table tr>th>span>input[type=checkbox]").change(function () {
                $(self.data.content)
                        .find(">.Dados input[type=checkbox]")
                        .prop("checked", !$(this).is(":checked"))
                        .trigger("click");
                
                 $(self.data.content)
                                .find(">.Dados tr.Selecionada")
                                .removeClass("Selecionada");
                
                 $(self.data.content)
                        .find(">.Dados input[type=checkbox]:checked")
                        .parents("tr")
                        .addClass("Selecionada");
                
                
            });

            $(self.data.buttons).find(">span").click(function () {
                self.options.buttons[$(this).data("id")].click.call(this, self.getSelectedItems(), self.getSelectedLines(), self);
            });

            $(self.data.content).find(">.Dados").scroll(function () {
                $(self.data.head).scrollLeft($(this).scrollLeft());
                $(self.data.content).find(">ul").scrollTop($(this).scrollTop());
            });

            $(self.data.content).find(">.Dados").on("mousedown", "tr", function (e) {
                var tr = $(this);
                var marker = $(e.target)[0].tagName === "INPUT";
                var select = tr.hasClass("Selecionada");
                var all = tr.parent().find("tr input[type=checkbox]");
                var checked = all.filter(":checked");
                var input = tr.find("input[type=checkbox]");
                tr.data("click-count", (tr.data("click-count") || 0) + 1);
                var clickCount = tr.data("click-count");

                window.setTimeout(function () {
                    tr.data("click-count", 0);
                }, 400);            

                if (e.ctrlKey && !marker) {
                    input.prop("checked", !input.is(":checked"));
                    $(this)[input.is(":checked") ? "addClass" : "removeClass"]("Selecionada");
                } else if (marker) {
                    $(this)[!$(e.target).is(":checked") ? "addClass" : "removeClass"]("Selecionada");
                } else {
                    if (clickCount == 1) {
                        $(self.data.content)
                                .find(">.Dados tr.Selecionada")
                                .removeClass("Selecionada")
                                .find("input[type=checkbox]")
                                .prop("checked", false);
                    }

                    if (!select || checked.length > 1 || clickCount > 1) {
                        $(this)
                                .addClass("Selecionada")
                                .find("input[type=checkbox]")
                                .prop("checked", true);
                    }

                    if (clickCount > 1) {
                        self.options.onDblClick.call(this, self.getSelectedItems(), self.getSelectedLines(), self);
                    }
                }

                $(self.data.head)
                        .find(">table tr>th>span>input[type=checkbox]")
                        .prop("checked", $(this).parent().find("tr input[type=checkbox]").length == $(this).parent().find("tr input[type=checkbox]:checked").length);

                self.options.onSelect.call(this, self.getSelectedItems(), self.getSelectedLines(), self);
            }).on("dblclick", "tr", function (e) {
//                self.options.onDblClick.call(this, self.getSelectedItems(), self.getSelectedLines(), self);
//                e.preventDefault();
//                e.stopPropagation();
//
//                $(self.data.content)
//                        .find(">.Dados tr.Selecionada")
//                        .removeClass("Selecionada")
//                        .find("input[type=checkbox]")
//                        .prop("checked", false);
//
//
//                $(this)
//                        .addClass("Selecionada")
//                        .find("input[type=checkbox]")
//                        .prop("checked", true);
//
//
//                return false;
            });



            $(self.data.footer).find(">.Pesquisa>input").delayEvent("keyup", function () {
                var columns = self.options.columns;
                var attr = [];
                for (var i = 0; i < columns.length; i++) {
                    if (columns[i].search) {
                        attr.push((columns[i].searchName || columns[i].name));
                    }
                }

                self.pagination.page = self.options.page;
                self.filters = {
                    BuscarTipo: attr.join(","),
                    BuscarPor: $.trim($(this).val().toUpperCase())
                };
                self.load();

            }, 500);

            //console.log($(self.data.head));
            $(self.data.head).find("span>input").delayEvent("keyup", function () {
                self.reset();
            }, 500);


            $(self.data.head).find("span>select").change(function () {
                self.reset();
            });

            $(self.data.footer).find(">.Paginacao>span").click(function () {
                var pagina = self.pagination.page;

                if ($(this).hasClass("Botao")) {
                    if ($(this).hasClass("Primeira")) {
                        pagina = 1;
                    } else if ($(this).hasClass("Voltar")) {
                        pagina = pagina - 1;
                    } else if ($(this).hasClass("Avancar")) {
                        pagina = pagina + 1;
                    } else if ($(this).hasClass("Ultima")) {
                        pagina = self.pagination.pages;
                    }

                    pagina = self.validatePage(pagina);

                    if (pagina !== self.pagination.page || $(this).hasClass("Atualizar")) {
                        self.pagination.page = pagina;
                        self.load();
                    }
                }
            });

            $(self.data.footer).find(">.Paginacao>input").keypress(function (e) {
                var key = e.which;

                if (key == 13) {
                    self.pagination.page = self.validatePage(parseInt($(this).val()));
                    self.load();
                } else if ((key > 47 && key < 58) || (key > 36 && key < 41) || key == 46 || key == 8) {
                    return true;
                } else {
                    return false;
                }
            });
        },
        getSelectedLines: function () {
            return $(this.data.content).find(">.Dados tr.Selecionada");
        },
        getSelectedItems: function () {
            var self = this;
            var items = [];
            $(self.getSelectedLines()).each(function () {
                items.push(self.options.data[$(this).attr("itemid")]);
            });
            return items;
        },
        validatePage: function (page) {
            page = (page < this.pagination.pages) ? page : this.pagination.pages;
            return (page < 1) ? 1 : page;
        },
        fill: function () {
            var self = this;
            var dados = [];
            var apontador = [];
            var colunas = [];
            var ordenacao;
            var coluna = null;
            var total = self.pagination.total;
            var exibir = self.options.display;
            var totalLinhas = self.options.data.length;

            for (var i = 0; i < self.options.columns.length; i++) {
                coluna = self.options.columns[i];

                colunas.push({
                    name: coluna.name,
                    visible: coluna.visible,
                    format: coluna.formatData,
                    align: coluna.align,
                    width: $(self.data.head).find("th>span[itemid='" + (coluna.orderName ? coluna.orderName : coluna.name) + "']").css("width")
                });

            }


            if (totalLinhas) {
                var valor = "";
                for (var i = 0; i < totalLinhas; i++) {
                    apontador.push("<li title=\"" + (i + 1) + "\">" + (i + 1) + "</li>");
                    dados.push("<tr itemid=\"" + i + "\">");

                    dados.push("<td" + (self.options.selectMultiple ? "" : " style=\"display:none\"") + ">" +
                            "<span>" +
                            "<input type=\"checkbox\" />" +
                            "</span>" +
                            "</td>");

                    for (var a = 0; a < colunas.length; a++) {
                        ordenacao = (self.pagination.orderBy == colunas[a].name) ? " class=\"Ordenacao\"" : "";

                        valor = self.options.data[i][colunas[a].name];
                        valor = (valor == "" || valor == undefined || valor == null) ? "&nbsp;" : valor;
                        valor = (typeof colunas[a].format == "function") ? colunas[a].format.call(self, self.options.data[i][colunas[a].name], self.options.data[i], self.fullReturn) : valor;

                        dados.push("<td" + (colunas[a].visible !== false ? "" : " style=\"display:none\"") +
                                " itemid=\"" + colunas[a].name + "\"><span" +
                                ordenacao
                                + " style=\"width:" +
                                (colunas[a].width) +
                                (colunas[a].align ? ";text-align:" + colunas[a].align : "") +
                                "\">" +
                                valor
                                + "</span></td>");
                    }
                    dados.push("</tr>");
                }
            }

            $(self.data.content).find(">.Dados table tbody").html(dados.join("\n"));
            $(self.data.content).find(">ul").html(apontador.join("\n"));
            $(self.data.footer).find("input[name=Pagina]").val(self.pagination.page);
            $(self.data.footer).find(".Paginacao span.Paginas strong").html(self.pagination.pages);

            self.options.onFill.call(self, self.data.list);


            var footerText = self.options.footerText;
            footerText = footerText.replace("{display}", (totalLinhas < exibir) ? totalLinhas : exibir).replace("{total}", total);

            $(self.data.footer).find(".Totalizador").html(total > 0 ? footerText : "Nenhum item encontrado");

            $(self.data.head).find(">table tr>th>span>input[type=checkbox]").prop("checked", false);
        },
        loading: function (text) {

            $(this.data.content).addClass("Carregando")
                    .find(".Mensagem>span")
                    .html(text ? text : "Carregando ...");
        },
        unloading: function () {
            $(this.data.content).removeClass("Carregando");
        },
        setParameters: function (parameters) {
            this.options.parameters = parameters;
        },
        reset: function () {
            this.pagination.page = this.options.page;
            this.pagination.display = this.options.display;
            this.pagination.total = this.options.total;
            this.load();

        },
        getPaginationData() {
            return this.pagination;
        },
        getFilters: function () {
            var self = this;
            var search = {};
            var param = self.options.parameters;


            $(self.data.head).find("span>input:not([type=checkbox]), span>select").each(function () {
                if ($.trim($(this).val()) !== "") {
                    search[$(this).attr("name")] = $(this).tagName() === "input" ? $.trim($(this).val().toUpperCase()) : $(this).val();
                }
            });

            self.filters = {
                Buscar: JSON.stringify(search)
            };

            var data = $.extend({
                Exibir: self.options.display,
                Pagina: self.pagination.page,
                OrdenarTipo: self.pagination.orderType,
                OrdenarPor: self.pagination.orderBy
            }, self.filters);

            return $.extend(data, typeof param == "function" ? param.call(self, self.data.list) : param);
        },
        load: function (attempt) {
            var self = this;
            var connectionAttempts = attempt > 0 ? attempt : 1;

            if (!self.request) {
                self.request = $.ajax({
                    url: self.options.url,
                    data: self.getFilters(),
                    abortID: "DataList" + self.uuid,
                    beforeSend: function (jqXHR, settings, data) {
                        if (connectionAttempts == 1) {
                            self.loading();
                        }
                        return self.options.beforeSend.call(self, self.data.list, data);
                    },
                    error: function () {
                        if (connectionAttempts < self.options.connectionAttempts) {
                            self.loading("Conexão perdida, tentando restabelecer ...");
                            window.setTimeout(function () {
                                self.load(connectionAttempts + 1);
                            }, 2000);
                        } else {
                            self.unloading();
                            self.options.error.call(self);
                        }

                    },
                    complete: function (jqXHR, textStatus) {
                        self.options.complete.call(self, self.data.list);
                        self.request = null;
                    },
                    success: function (data, textStatus, jqXHR) {
                        self.unloading();
                        self.fullReturn = data;
                        self.options.data = data.list;
                        self.pagination.pages = data.pages;
                        self.pagination.total = data.total;
                        self.fill();
                        //$(self.data.footer).find("input[name=Pagina]").val(self.pagination.page);
                    }
                });
            }
        },
        destroy: function () {

        }
    });
})(jQuery);





