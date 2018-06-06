/**
 * Remove algum atributo de estilo
 * @param {type} property
 * @returns {undefined}
 */
$.fn.removeStyle = function (property) {
    $(this).css(property, "");
    if (!$(this).attr("style")) {
        $(this).removeAttr("style");
    }

    return  $(this);
};
/**
 * Adiciona a propriedade "disabled" em um elemento
 * @returns {$.fn}
 */
$.fn.disabled = function () {
    return $(this).prop("disabled", true);
};
/**
 * Remove a propriedade "disabled" em um elemento
 * @returns {jQuery}
 */
$.fn.enabled = function () {
    return $(this).prop("disabled", false);
};
/**
 * Filtra todos os elementos que tiverem o atributo "data" 
 * @param {type} key
 * @returns {$.fn@call;filter}
 */
$.fn.filterData = function (key) {
    return this.filter(function () {
        return $(this).data(key);
    });
};
/**
 * Atribui foco para o input, dando um delay
 * @param int time      default:50
 * @param bool selected default:false
 * @returns {$.fn}
 */
$.fn.focusDelay = function (time, selected) {
    var element = this;
    selected = selected || false;

    $.delay(function () {
        $(element)[selected ? "select" : "focus"]();
    }, time = time || 50);

    return $(this);

};
/**
 * Adiciona a propriedade "checked" em um elemento
 * @returns {jQuery}
 */
$.fn.checked = function (trigger) {
    return  $(this).checking(true, trigger);
};
/**
 * Remove a propriedade "checked" em um elemento
 * @returns {jQuery}
 */
$.fn.unchecked = function (trigger) {
    return  $(this).checking(false, trigger);
};
/**
 * Marca ou desmarca input
 * @param {type} check
 * @param {type} trigger
 * @returns {jQuery|$.fn.checking.input}
 */
$.fn.checking = function (check, trigger) {
    var input = $(this).prop("checked", check);
    return (trigger !== false) ? input.trigger("change") : input;
};
/**
 * Alterar checked e unchecked input[type=radio]
 * @returns {undefined}
 */
$.fn.toggleChecked = function (trigger) {
    return $(this).checking(!$(this).is(":checked"), trigger);
};
/**
 * Faz uma condição para adicionar ou remover alguma classe ao elemento; Se TRUE add, se FALSE remove;
 * @param {type} condition
 * @returns {undefined}
 */
$.fn.addRemoveClass = function (condition, className) {
    return $(this)[(condition ? "add" : "remove") + "Class"](className);
};
/**
 * Controle de unica classe por elementos
 * @param {type} item
 * @param {type} className
 * @returns {undefined}
 * @example $("nav>a").singleClass($("a[href=Principal]"),"ativo"); //Desativa todos os outros "a", e ativa o principal
 */
$.fn.singleClass = function (item, className) {
    $(this).removeClass(className);
    $(item).addClass(className);

    return $(this);
};
/**
 * Recupera o elemento com a maior largura
 * @returns {unresolved}
 */
$.fn.maxWidth = function () {
    return Math.max.apply(null, $(this).map(function () {
        return $(this).outerWidth(true);
    }).get());
};
/**
 * Recupera o elemento com a menor largura
 * @returns {unresolved}
 */
$.fn.minWidth = function () {
    return Math.min.apply(null, $(this).map(function () {
        return $(this).outerWidth(true);
    }).get());
};
/**
 * Rolar página para baixo
 * @param {type} timer
 * @returns {jQuery}
 */
$.fn.scrollBottom = function (timer) {
    return $(this).animate({scrollTop: $(this)[0].scrollHeight}, (timer > 0 ? timer : 0));
};
/**
 * Rola o site para o topo, com animação
 * @param {type} position
 * @param {type} speed
 * @param {type} callback
 * @returns {undefined}
 */
$.scrollTop = function (position, speed, callback) {
    callback = typeof speed == "function" ? speed : callback;
    speed = typeof speed == "function" ? 0 : (speed ? speed : 0);

    ($.browser.mozilla ? $('html') : $('body')).animate({
        scrollTop: position
    }, (speed), callback);
};
/**
 * Detecta quando uma ou mais chaves são pressionadas
 * @param array|int key
 * @param function callback
 * @returns {$.fn@call;each}
 */
$.fn.keypressDetected = function (key, callback) {
    key = $.isArray(key) ? key : [key];
    return this.each(function () {
        $(this).bind("keypress.keypressDetected", function (e) {
            if (key.hasOwnProperty($.keyCode(e))) {
                callback.call(this, e, key);
            }
        });
    });
};
/**
 * Detecta ao pressionar a tela ENTER
 * @param {type} callback
 * @returns {$.fn@call;each}
 */
$.fn.enterKey = function (callback) {
    $(this).keypressDetected(13, callback);
};
/**
 * Retorna o nome da tag de um determinado objeto
 * @returns {$.fn@call;prop@call;toLowerCase}
 */
$.fn.tagName = function() {
  return this.prop("tagName").toLowerCase();
};

/**
 * Verifica se uma variável está vazia
 * @param {type} variable
 * @returns {String}
 */
$.isEmpty = function (variable) {
    return ($.trim(variable) === "");
};
/**
 * Verifica se uma variável é string
 * @param {type} variable
 * @returns {Boolean}
 */
$.isString = function (variable) {
    return (typeof variable === "string");
};
/**
 * Verifica se uma variável é um JSON
 * @param {type} object
 * @returns {Boolean}
 */
$.isJSON = function (object) {
    return $.isPlainObject(object);
};
/**
 * Verifica se uma variavel é uma funciona
 * @param {type} variable
 * @returns {Boolean}
 */
$.isFunction = function (variable) {
    return (typeof variable === "function");
};
/**
 * Verifica se a variavel é diferente de indefinido
 * @returns {undefined}
 */
$.isset = function (variable) {
    return typeof variable !== "undefined";
};

/**
 * Verifica se o valor é nulo ou indefinido e atribui um novo valor, caso seja
 * @param {type} value
 * @param {type} newValue
 * @returns {unresolved}
 */
$.caseEmpty = function (value, newValue) {
    return ($.isEmpty(value)) ? newValue : value;
};
/**
 * Recupera os dias da semana 
 * @returns {undefined}
 */
$.getDaysWeek = function () {
    return ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
};

/**
 * Nome do mês
 * @returns {undefined}
 */
$.nameMonth = function (mes) {
    var month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return month[parseInt(mes)-1];
};

/**
 * Clona um json com outro
 * @param {type} json
 * @returns {Object}
 */
$.cloneJSON = function () {
    var json = {};
    for (var i = 0; i < arguments.length; i++) {
        json = $.extend(true, json, arguments[i]);
    }
    return json;
};
/**
 * Clona um json com outro
 * @param {type} json
 * @returns {Object}
 */
$.cloneArrayJSON = function () {
    var json = [];
    for (var i = 0; i < arguments.length; i++) {
        json = $.extend(true, json, arguments[i]);
    }
    return json;
};
/**
 * Funde vários JSON's em um só
 * @returns {Object}
 */
$.mergeJSON = function () {
    return  $.cloneJSON.apply(this, arguments);
};
/**
 * Recupera um json que foi codificado em Base.64
 * @param string string
 * @returns {Array|Object}
 */
$.jsonBase64Decode = function (string) {
    return JSON.parse(Base64.decode(string));
};
/**
 * Codifica um json em Base.64
 * @param string string
 * @return string string codificada
 */
$.jsonBase64Encode = function (string) {
    return  Base64.encode($.jsonToString(string));
};
/**
 * Converte um json para string
 * @param object json
 * @return string
 */
$.jsonToString = function (json) {
    return JSON.stringify(json);
};
/**
 * Converte uma string para json
 * @param {type} string
 * @returns {Array|Object}
 */
$.stringToJSON = function (string) {
    try {
        return JSON.parse(string);
    } catch (a) {
        return null;
    }
};
/**
 * Verifica se uma certa função existe
 * @param {type} functionName
 * @returns {Boolean}
 */
$.functionExists = function (functionName) {
    return (typeof window[functionName] === "function");
};
/**
 * Retorna o código da tecla clicada
 * @param event e
 * @returns {unresolved}
 */
$.keyCode = function (e) {
    return e.keyCode || e.which;
};
/**
 * Simplifica a função setTimeOut
 * @param {type} functionName
 * @param {type} time
 * @returns {undefined}
 */
$.delay = function (functionName, time) {
    window.setTimeout(functionName, time);
};

/**
 * Altera uma data, adicionando ou acrescendo dias, meses ou anos
 * @param string date 01/01/2012 
 * @param string value "+1 , -1, +30"
 * @param string change "mes, dia ou ano"
 * @returns string
 */
$.changeDate = function (date, value, change) {
    if ($.trim(date.toLowerCase()) === "now") {
        date = new Date();
    } else {
        date = date.split("/");
        date = new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0]));
    }

    var addRemove = $.trim(value).substr(0, 1);
    value = parseInt($.trim(value).substr(1)) * (addRemove === "-" ? -1 : 1);
    change = $.trim(change.toLowerCase());

    if (change === "dia") {
        date.setDate(date.getDate() + value);
    } else if (change === "mes") {
        date.setMonth(date.getMonth() + value);
    } else if (change === "ano") {
        date.setYear(date.getYear() + value);
    }

    date = date.toISOString().slice(0, 10).split("-");
    return date[2] + "/" + date[1] + "/" + date[0];
};

/**
 * Adiciona arquivo CSS ao site
 * @param {type} stylesheet
 * @returns {undefined}
 */
$.addStyleSheet = function (stylesheet, id) {
    var resource = document.createElement('link');
    resource.setAttribute("rel", "stylesheet");
    resource.setAttribute("href", stylesheet);
    resource.setAttribute("type", "text/css");
    if (id) {
        resource.setAttribute("id", id);
    }
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(resource);
};
$.removeStyleSheet = function (id) {
    $("link[rel~='stylesheet']#" + id).remove();
};

/**
 * Transforma a primeira letra em maiusculo
 * @returns {String.prototype@call;toLowerCase@call;replace}
 */
String.prototype.ucwords = function () {
    return this.toLowerCase().replace(/\b[a-z]/g, function (i) {
        return i.toUpperCase();
    });
};
/**
 * Converte '10px' em 10
 * @returns {Number}
 */
String.prototype.pixelToInt = function () {
    try {
        return ($.inArray($.trim(this), ["auto", ""]) !== -1) ? 0 : parseInt($.trim(this).toLowerCase().replace("px", ""));
    } catch (err) {
        return 0;
    }
};
/**
 * Converte uma data para texto por extenso. 24/07/2015 -> Hoje
 * @returns {String.prototype@call;split@call;map}
 */
String.prototype.longDate = function (cleanData) {
    var self = this.split(" ");
    var time = self[1].split(":");
    var date = self[0].split("/");
    var currentDate = new Date();
    var diffDays = 0;
    var longDate = "às " + self[1];
    var stringDate = self[0];
    date = new Date(date[2], (parseInt(date[1]) - 1), date[0], time[0], time[1], time[2]);
    diffDays = diffDays = parseInt((currentDate - date) / (1000 * 60 * 60 * 24));
    cleanData = $.caseEmpty(cleanData, false);
    if (!diffDays) {
        stringDate = "Hoje";
    } else if (diffDays == 1) {
        stringDate = "Ontem";
    } else if (diffDays < 7) {
        stringDate = $.getDaysWeek()[date.getDay()];
    }

    if (cleanData) {
        return stringDate.replace("-Feira", "") + " " + longDate.substr(0, longDate.length - 3);
    } else {
        return stringDate + " " + longDate;
    }
};
/**
 * Substituir todas as expressões encontradas, ao contrario do .replace que substitui apenas a primeira
 * @param {type} search
 * @param {type} replace
 * @returns {String.prototype@call;replace}
 */
String.prototype.replaceAll = function (find, replace) {
    //var str = this;
    return this.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
/**
 * Converte a string R$ 100,00 para 100;
 * @returns {unresolved}
 */
String.prototype.moneyToDecimal = function () {
    var money = parseFloat(this.replace(/[\.R$]/g, "").replace(/[\,]/g, "."));
    return isNaN(money) ? 0 : money;
};
/*
 * Excluir espaços no começo e fim da string
 * @returns {String.prototype@call;replace}
 */
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
/**
 * Exclui espaços ou o caracter informado no inicio da string
 * @param {type} ltrim
 * @returns {String.prototype.ltrim.string|String@call;toString}
 */
String.prototype.ltrim = function (ltrim) {
    ltrim = ltrim || " ";
    var string = this.toString();
    while (string.substr(0, 1) == ltrim) {
        string = string.substr(1, string.length);
    }
    return string;
};
/**
 * Exclui espaços ou o caracter informado no fim da string
 * @param {type} rtrim
 * @returns {String.prototype.rtrim.string|String@call;toString}
 */
String.prototype.rtrim = function (rtrim) {
    rtrim = rtrim || " ";
    var string = this.toString();
    while (string.substr(-1) == rtrim) {
        string = string.substr(0, string.length - 1);
    }
    return string;
};
/**
 * Retorna somente os números de uma string
 * @returns {String.prototype@call;replace}
 */
String.prototype.onlyNumber = function () {
    return this.replace(/\D+/g, '');
};
/**
 * Converte campo decimal em dinheiro
 * @returns {String}
 */
Number.prototype.toMoney = function (prefix) {
    return (prefix === true ? "R$ " : "") + this.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};


String.prototype.replaceSpecialChars = function () {
    var str = this.replace(/[ÀÁÂÃÄÅ]/, "A");
    str = str.replace(/[àáâãäå]/, "a");
    str = str.replace(/[ÈÉÊË]/, "E");
    str = str.replace(/[Ç]/, "C");
    str = str.replace(/[ç]/, "c");
    return str.replace(/[^a-z0-9 ]/gi, '');
};


