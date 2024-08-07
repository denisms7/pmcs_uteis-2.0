window.onload = function () {
    formatarTelefone("input", "id_numero_externo");

};





// FORMATAR TELEFONE
function formatarTelefone(event, inputId) {
    var valor = document.getElementById(inputId).value;
    var retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");
    if (retorno.length > 10) {
        retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 5) {
        if (retorno.length === 6 && event.code === "Backspace") {
            // Necessário pois, senão o "-" fica sempre voltando ao dar backspace
            return;
        }
        retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
        retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        if (retorno.length !== 0) {
            retorno = retorno.replace(/^(\d*)/, "($1");
        }
    }
    document.getElementById(inputId).value = retorno;
}

document.getElementById("id_numero_externo").addEventListener("input", function (event) {
    formatarTelefone(event, "id_numero_externo");
});
