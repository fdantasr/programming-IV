/*Funções passadas como parâmetro para outras funções
 Permitem delegar a invocação de uma função a outra função
 */

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
    }
    function returnsThree() {
    return 3;
    }
    let result = callAndAdd(2, returnsThree);
    console.log(result);
    // 5