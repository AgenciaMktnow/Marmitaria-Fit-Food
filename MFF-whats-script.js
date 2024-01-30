window.addEventListener('load', function () {

	// botão Whatsapp do Formulário Fale Conosco Header
        var btnWhatsFaleconoscoHeader = document.querySelector("#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.inferior.row-fluid > div.span4.hidden-phone > ul > li.header-actions__item.help > a");

        btnWhatsFaleconoscoHeader.addEventListener("click", function () {
            setTimeout(() => {
                var btnWhatsNumero = document.querySelector("#modalContato > form > div > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > span > a");
                btnWhatsNumero.setAttribute("href", "#");
                btnWhatsNumero.setAttribute("target", "");
                var floatBtnWhats = document.querySelector(".floatWhatsBtn img");
                var fecharForm = document.querySelector("button i.icon-remove");

                btnWhatsNumero.addEventListener("click", function () {
                    fecharForm.click();
                    floatBtnWhats.click();
                })

              }, 1000);
        })
        // botão Whatsapp do Formulário Fale Conosco Header

        // botão Whatsapp do Formulário Fale Conosco Footer
        var btnWhatsFaleconoscoFooter = document.querySelector("#liRodape_faleconosco > a");

        btnWhatsFaleconoscoFooter.addEventListener("click", function () {
            setTimeout(() => {
                var btnWhatsNumero = document.querySelector("#modalContato > form > div > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > span > a");
                btnWhatsNumero.setAttribute("href", "#");
                btnWhatsNumero.setAttribute("target", "");
                var floatBtnWhats = document.querySelector(".floatWhatsBtn img");
                var fecharForm = document.querySelector("button i.icon-remove");

                btnWhatsNumero.addEventListener("click", function () {
                    fecharForm.click();
                    floatBtnWhats.click();
                })

              }, 1000);
        })
        // botão Whatsapp do Formulário Fale Conosco Footer

	var whatsBtn = document.querySelector("#BtnEnvFrmModWhatsApp");
	whatsBtn.addEventListener('click', function(){
   		window.open('https://api.whatsapp.com/send?phone=11989072112', '_blank').focus();
 	})


	// retorna valor de parametro na querystring
	function qs(key) {
	    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
	    var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
	    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
	}


	document.getElementById("gclidWhatsApp").value = qs("gclid");
	document.getElementById("fbclidWhatsApp").value = qs("fbclid");


	var whatsappPhone = "11989072112";

	var links = document.querySelectorAll('a[href*="'+whatsappPhone+'"]');
	for (var i = 0; i < links.length; i++) {
	    // links[i].href = "#WhatsappModalForm";
	    links[i].setAttribute("rel", "modal:open");
	}


	var WhatsAppUrlRedirect = "https://api.whatsapp.com/send?phone="+whatsappPhone;

	$('#frm-whatsapp-modal').submit(function(e){
	    e.preventDefault(); 
	    var dadosDoForm = $(this).serialize(); 
	    console.log(dadosDoForm);
	    $.post('https://formsquash.io/f/qfxZDn75XC3s5Z4OTNcV', dadosDoForm, function(retorno){
	        //console.log(retorno); 
			dataLayer.push({'WhatsappContatoNome': $('#WhatsAppNome').val()}); 
			dataLayer.push({'WhatsappContatoFone': $('#WhatsAppNumero').val()}); 

			setTimeout(function(){ 
				$('#WhatsAppNome').val('');
				$('#WhatsAppNumero').val('');
                // window.open(WhatsAppUrlRedirect, '_blank').focus();
			}, 3000);
	       	$.modal.close();
			// window.open(WhatsAppUrlRedirect, '_blank').focus();
            // var link = document.createElement("a");
            // link.href = "https://api.whatsapp.com/send?phone=11989072112";
            // link.target = "_blank";
            // link.style.display = "none";
            // document.body.appendChild(link);
            // link.click();
            // link.remove();


	    });

	});

})//fecha addEventListener load
