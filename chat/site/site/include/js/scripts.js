//On s'assure que le DOM a bien chargÃ©
$(function(){
    $("#choixDuChat").on("change", changementCouleurChat);
    $("#raisonAdoption").on("keyup", changementCouleurFormulaire);
    $("#validationButon").on("click", validationFormulaire);

}); //$function

/**
 * Fonction qui permet de revenir Ã  la couleur d'origine pour la selection du chat
 */
function changementCouleurChat(){
    $(this).css("borderColor","unset");
}

/**
 * Fonction qui permet de revenir Ã  la couleur d'origine du textarea
 */
function changementCouleurFormulaire() {
    $(this).css("borderColor","unset");
}

/**
 * Fonction qui vÃ©rifie la validitÃ© des informations du formulaire
 */
function validationFormulaire(){
    let choixChatOk, textOk;
    if($("#choixDuChat").val() === "--Selectionnez--"){
        $("#choixDuChat").css("borderColor", "red");
    } else {
        $("#choixDuChat").css("borderColor", "green");
        choixChatOk = true;
    }

    if($("#raisonAdoption").val().length <15){
        $("#raisonAdoption").css("borderColor", "red");
    } else {
        $("#raisonAdoption").css("borderColor", "green");
        textOk= true;
    }

    if(choixChatOk && textOk){
        $("#formulaire").html("<p>Votre demande d'adoption a bien Ã©tÃ© enregistrÃ©e.</p> <p>Nos Ã©quipes vous rappelleront au plus vite.</p>").css({
            backgroundColor: "#06d64442",
            borderColor: "green"
        });
        console.log($("#formulaire"))
    }

}