 window.addEventListener('load', function () {
  // Add botão Whatsapp (Dieta Personalizada) no menu
    function addWhatsapp(){
    const whatsapp=` <li class="header-actions__item account"><a class="open-modal-btn" onclick="openModal()"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/icons8-delivery-50.png" />Entrega Aqui?</a>

     <!-- Overlay e Modal -->
     <div class="overlayy" id="overlayy">
         <div class="modall" id="modall">
             <div class="container-cep">
                 <div class="titulo-cep">
                     <h1>Consultar área de entrega</h1>
                     <p>
                         Insira o CEP de entrega no formulário abaixo e confirme se a região está em nossa área de cobertura.
                     </p>
                 </div>
                 <form class="form-cep">
                     <div class="caixa-cep">
                         <label>CEP:</label>
                         <input type="text" id="cep" size="20">
                         <input type="button" onclick="verificarFaixaCEP(document.getElementById('cep').value)" id="validar" value="Verificar">
                     </div>
                 </form>
                 <div class="info-cep">
                     <h1 id="sim" class="sim">Sim! Entregamos na sua região.</h1>
                     <h1 id="nao" class="nao">Pedimos desculpas, mas no momento ainda não realizamos entregas na sua região. Estamos empenhados em expandir nossa cobertura e em breve estaremos levando todo o nosso sabor até a sua casa. Enquanto isso, você pode entrar em contato conosco através do nosso WhatsApp para agendar a retirada dos seus pedidos em nossa loja física.</h1>
                     <h1 id="info" class="info">Informe um CEP.</h1>
                 </div>
                 
             </div>
     
             <button class="btn-cep" onclick="closeModal()">×</button>
         </div>
     </div>
    </li>`
    $(".header-actions__item.account").after(whatsapp);
    }
      addWhatsapp();

  // Add botão Consultar Entrega (Entrega aqui?) no menu
  // function addEntregaAqui(){
  //   const entregaAqui=` <li class="header-actions__item account"><!-- Botão que abre o modal -->
  //    <a class="open-modal-btn" onclick="openModal()"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/icons8-delivery-50.png" />Entrega Aqui?</a>

  //    <!-- Overlay e Modal -->
  //    <div class="overlayy" id="overlayy">
  //        <div class="modall" id="modall">
  //            <div class="container-cep">
  //                <div class="titulo-cep">
  //                    <h1>Consultar área de entrega</h1>
  //                    <p>
  //                        Insira o CEP de entrega no formulário abaixo e confirme se a região está em nossa área de cobertura.
  //                    </p>
  //                </div>
  //                <form class="form-cep">
  //                    <div class="caixa-cep">
  //                        <label>CEP:</label>
  //                        <input type="text" id="cep" size="20">
  //                        <input type="button" onclick="verificarFaixaCEP(document.getElementById('cep').value)" id="validar" value="Verificar">
  //                    </div>
  //                </form>
  //                <div class="info-cep">
  //                    <h1 id="sim" class="sim">Sim! Entregamos na sua região.</h1>
  //                    <h1 id="nao" class="nao">Pedimos desculpas, mas no momento ainda não realizamos entregas na sua região. Estamos empenhados em expandir nossa cobertura e em breve estaremos levando todo o nosso sabor até a sua casa. Enquanto isso, você pode entrar em contato conosco através do nosso WhatsApp para agendar a retirada dos seus pedidos em nossa loja física.</h1>
  //                    <h1 id="info" class="info">Informe um CEP.</h1>
  //                </div>
                 
  //            </div>
     
  //            <button class="btn-cep" onclick="closeModal()">×</button>
  //        </div>
  //    </div>
  //    </li>`
  //        $(".header-actions__item.account").after(entregaAqui);
  //        }
  //    addEntregaAqui();
  
  // Adicionar endereço no rodapé da página
function addEndereco() {
    const endereco=`<p class="title">                            
                        Rua Pedroso 258 – Box 2 - Bela Vista - São Paulo - SP - CEP: 01322-010
                    </p>`
    $("#rodape > div.institucional.fundo-secundario > div > div > div > div > div.links-rodape.links-rodape-atendimento.span3 > div > p:nth-child(2)").after(endereco);
}
    addEndereco();

  // Remove os logos nativos da Loja Integrada e Alpha Theme
  function removeLogoRodape() {
    document.getElementById("cr-li").remove(); // remove Logo Loja Integrada
    document.getElementById("cr-alpha-theme").remove(); // remove Logo Alpha Theme
  }
    removeLogoRodape();

   // Adiciona mini banner na página home
  function criaIMiniBanner(){
    const image = ` 
    <a href="https://marmitaria-fit-food.lojaintegrada.com.br/kits-fitness">
        <img class="mini_desktop" src="https://cdn.awsli.com.br/2674/2674396/arquivos/mini-banner---kits-1.png"/>
        <img class="mini_mobile" src="https://cdn.awsli.com.br/2674/2674396/arquivos/mini-banner---kits-mobile-1.png"/>
    </a>`
    $("#listagemProdutos > ul:nth-child(4)").after(image)
}
criaIMiniBanner();

 // Adiciona mini banner na página home
function miniBanner() {
    const image = ` 
    <ul style="display: flex; justify-content: center; flex-wrap: wrap; gap: 40px;">
        <a href="https://marmitaria-fit-food.lojaintegrada.com.br/sobremesas">
            <li style="max-width: 550px"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/mini---banner-sobremesa.png"/></li>
        </a>
        <a href="https://marmitaria-fit-food.lojaintegrada.com.br/snacks">
            <li style="max-width: 550px"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/mini---banner-snacks.png"/></li>
        </a>
    </ul>`
    $("#listagemProdutos > ul:nth-child(10)").after(image)
}
miniBanner();

  // Adiciona o logo da Mktnow no rodapé como Desenvolvedor
function rodapeMktnow () {
    const image = ` 
    <div style="display: flex; justify-content: center">
        <a href="https://www.mktnow.com.br/" target="_blank">
            <img src="https://cdn.awsli.com.br/1228/1228284/arquivos/mktnow-logo.png" alt="" style="margin: 10px; transform: scale(0.7);">
        </a>
    </div>`
    $("#rodape").after(image)
}
rodapeMktnow();



  
     // Função para abrir o modal
function openModal() {
    document.getElementById('overlayy').style.display = 'flex';
    document.getElementById('modall').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('overlayy').style.display = 'none';
    document.getElementById('modall').style.display = 'none';
}



// Código de Atendimento de Região via CEP
function verificarFaixaCEP(cep) {
    // Defina as faixas de CEP para a região desejada
    var ceps = [
        { inicial: '10000000', final: '15000000' },
        { inicial: '20000000', final: '25000000' },
        { inicial: '30000000', final: '35000000' }
    ];

    console.log("botão funcionou!")
    // Remova qualquer caracter não numérico do CEP
    cep = cep.replace(/\D/g, '');

    // Verifique se o CEP está dentro de alguma das faixas
    if (cep == '') {

        document.getElementById("sim").style.display = "none";
        document.getElementById("nao").style.display = "none";
        document.getElementById("info").style.display = "block";

    } else {
        document.getElementById("info").style.display = "none";

        var dentroDaFaixa = false;
        for (var i = 0; i < ceps.length; i++) {
            if (cep >= ceps[i].inicial && cep <= ceps[i].final) {
                dentroDaFaixa = true;

                document.getElementById("sim").style.display = "block";
                document.getElementById("nao").style.display = "none";

                break;
            } else {
                document.getElementById("sim").style.display = "none";
                document.getElementById("nao").style.display = "block";
            }
        }
    }

}

// Adicionar botão no menu mobile
     function addEntregaAqui(){
         const entregaAqui=`<a onclick="openModal()"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/icons8-delivery-50.png" />Entrega Aqui?</a>`
         $("#cabecalho > div.conteiner > div.menu.superior.visible-phone.open > div.barra-tracking-mobile").after(entregaAqui);
         }
         addEntregaAqui();
        

 }); // fechar addEvent
