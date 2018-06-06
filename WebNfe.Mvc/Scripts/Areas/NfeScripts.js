function isEmpty(value, type) {
    if (value == null || typeof (value) == "undefined") {
        return true;
    }
    switch (type) {
        case "string":
            if (typeof value != "string" || value == "") {
                return true;
            }
            break;
        case "number":
            if (typeof value != "number" || value == 0) {
                return true;
            }
            break;
        case "object":
            if (typeof value != "object" || value == {}) {
                return true;
            }
            break;
        case "boolean":
            if (typeof value != "boolean") {
                return true;
            }
            break;
    }
    if (typeof value == "string" && value == "") {
        return true;
    }
    return false;
}
$(document).ready(function () {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    }
    $("#Cidades").select2({
        id: "Cidades",
        theme: "classic",
        ajax: {
            url: "Cidades/ListarCidades",
            dataType: "json",
            delay: 500,
            data: function (params) {
                var query = {
                    nome: params.term
                }
                return query;
            }
        }
    });
});
