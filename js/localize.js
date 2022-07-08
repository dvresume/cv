/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(
 function localize (language)
 {
   if (['de'].includes(language)) {
     let lang = ':lang(' + language + ')';
     let hide = '[lang]:not(' + lang + ')';
     document.querySelectorAll(hide).forEach(function (node) {
       node.style.display = 'none';
     });
     let show = '[lang]' + lang;
     document.querySelectorAll(show).forEach(function (node) {
       node.style.display = 'unset';
     });
   }
 }
 );
