window.onload = function() {
    if (navigator.language == "en" || navigator.language == "it")
    select_language(navigator.language)
    else if (navigator.language == "pt-PT" || navigator.language == "pt-BR")
    select_language("pt")
    else
    select_language("en")
};
