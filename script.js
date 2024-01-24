 window.addEventListener('load', function () {
  // Add botão Whatsapp (Dieta Personalizada) no menu
    function addWhatsapp(){
    const whatsapp=` <li class="header-actions__item account"><a href="https://api.whatsapp.com/send?phone=11989072112" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0,0,256,256">
            <g fill="#9dcd29" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.7,0 -23,10.3 -23,23c0,4.1 1.1,7.89922 3,11.19922l-3,10.5c-0.1,0.3 -0.00078,0.7 0.19922,1c0.3,0.3 0.7,0.30078 1,0.30078l11,-2.69922c3.2,1.7 6.90078,2.69922 10.80078,2.69922c12.7,0 23,-10.3 23,-23c0,-12.7 -10.3,-23 -23,-23zM25,4c11.6,0 21,9.4 21,21c0,11.6 -9.4,21 -21,21c-3.7,0 -7.19922,-0.99922 -10.19922,-2.69922c-0.2,-0.1 -0.50117,-0.20156 -0.70117,-0.10156l-9.59961,2.40039l2.5,-9.19922c0.1,-0.3 0.00039,-0.50078 -0.09961,-0.80078c-1.8,-3.1 -2.90039,-6.69961 -2.90039,-10.59961c0,-11.6 9.4,-21 21,-21zM18.11328,12.98828c-0.1875,-0.0125 -0.3125,0.01172 -0.3125,0.01172h-1.20117c-0.6,0 -1.49883,0.2 -2.29883,1c-0.5,0.5 -2.30078,2.3 -2.30078,5.5c0,3.4 2.29961,6.29961 2.59961,6.59961c0,0 0.40039,0.50117 0.90039,1.20117c0.5,0.7 1.19961,1.5 2.09961,2.5c1.8,1.9 4.3,4.09844 7.5,5.39844c1.4,0.6 2.6,1.00078 3.5,1.30078c1.6,0.5 3.10117,0.40078 4.20117,0.30078c0.8,-0.1 1.69961,-0.50156 2.59961,-1.10156c0.9,-0.6 1.79922,-1.29883 2.19922,-2.29883c0.3,-0.8 0.4,-1.49961 0.5,-2.09961v-0.80078c0,-0.3 -0.09883,-0.29922 -0.29883,-0.69922c-0.5,-0.8 -1.00156,-0.8 -1.60156,-1c-0.3,-0.2 -1.2,-0.6 -2,-1c-0.9,-0.4 -1.59961,-0.8 -2.09961,-1c-0.3,-0.1 -0.69922,-0.30117 -1.19922,-0.20117c-0.5,0.1 -1.00078,0.40039 -1.30078,0.90039c-0.3,0.4 -1.39883,1.79922 -1.79883,2.19922l-0.10156,-0.09961c-0.4,-0.2 -0.99922,-0.39883 -1.69922,-0.79883c-0.8,-0.4 -1.70078,-1 -2.80078,-2c-1.6,-1.4 -2.7,-3.10117 -3,-3.70117c0.3,-0.4 0.70039,-0.79961 0.90039,-1.09961c0.1,-0.1 0.18125,-0.20078 0.25,-0.30078c0.06875,-0.1 0.12578,-0.19883 0.17578,-0.29883c0.1,-0.2 0.17539,-0.39961 0.27539,-0.59961c0.4,-0.7 0.2,-1.50039 0,-1.90039c0,0 -0.10078,-0.29961 -0.30078,-0.59961c-0.1,-0.3 -0.3,-0.80117 -0.5,-1.20117c-0.4,-0.9 -0.8,-1.9 -1,-2.5c-0.3,-0.7 -0.69922,-1.20039 -1.19922,-1.40039c-0.25,-0.15 -0.5,-0.19844 -0.6875,-0.21094zM16.59961,15h1.09961h0.20117c0,0 0.09922,0.10039 0.19922,0.40039c0.2,0.6 0.7,1.6 1,2.5c0.2,0.4 0.4,0.89922 0.5,1.19922c0.1,0.3 0.20078,0.50117 0.30078,0.70117c0,0.1 0.09961,0.09961 0.09961,0.09961c-0.2,0.4 -0.2,0.49883 -0.5,0.79883c-0.3,0.4 -0.70078,0.8 -0.80078,1c-0.1,0.2 -0.39961,0.40078 -0.59961,0.80078c-0.2,0.4 -0.09883,1.09961 0.20117,1.59961c0.4,0.6 1.6,2.60078 3.5,4.30078c1.2,1.1 2.29922,1.79922 3.19922,2.19922c0.9,0.5 1.60078,0.70078 1.80078,0.80078c0.4,0.2 0.79883,0.29883 1.29883,0.29883c0.5,0 0.90117,-0.39922 1.20117,-0.69922c0.4,-0.4 1.39844,-1.60039 1.89844,-2.40039l0.20117,0.09961c0,0 0.29922,0.10078 0.69922,0.30078c0.4,0.2 0.80078,0.39961 1.30078,0.59961c0.9,0.4 1.7,0.8 2,1l0.59961,0.30078v0.29883c0,0.4 -0.10078,1.00156 -0.30078,1.60156c-0.1,0.3 -0.69883,0.89883 -1.29883,1.29883c-0.7,0.4 -1.50078,0.70078 -1.80078,0.80078c-0.9,0.1 -1.99883,0.19883 -3.29883,-0.20117c-0.8,-0.3 -1.90078,-0.59922 -3.30078,-1.19922c-2.8,-1.2 -5.10078,-3.2 -6.80078,-5c-0.8,-0.9 -1.5,-1.70078 -2,-2.30078c-0.5,-0.6 -0.69844,-0.99922 -0.89844,-1.19922c-0.4,-0.4 -2.30078,-3.00039 -2.30078,-5.40039c0,-2.5 1.20078,-3.49922 1.80078,-4.19922c0.3,-0.4 0.69883,-0.40039 0.79883,-0.40039z"></path></g></g>
        </svg>
        <div class="content" style="padding-left: 5px;"><strong class="content__title">Dieta Personalizada</strong></div>
    </a>
    </li>`
    $(".header-actions__item.account").after(whatsapp);
    }
      addWhatsapp();
  
  // Add botão Consultar Entrega (Entrega aqui?) no menu
  function addEntregaAqui(){
    const entregaAqui=` <li class="header-actions__item account"><!-- Botão que abre o modal -->
     <a class="open-modal-btn" onclick="openModal()"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/icons8-delivery-50.png" />Entrega Aqui?</a>

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
                     <h1 id="info" class="info">Por favor, informe um CEP.</h1>
                 </div>
                 
             </div>
     
             <button class="btn-cep" onclick="closeModal()">×</button>
         </div>
     </div>
     </li>`
         $(".header-actions__item.help").before(entregaAqui);
         }
     addEntregaAqui();
  
  // Adicionar endereço no rodapé da página
function addEndereco() {
    const endereco=`<p class="title">                            
                        Rua Pedroso 258 – Box 2 - Bela Vista - São Paulo - SP - CEP: 01322-010
                    </p>`
    $("#rodape > div.institucional.fundo-secundario > div > div > div > div > div.links-rodape.links-rodape-atendimento.span3 > div > p:nth-child(2)").after(endereco);
}
    addEndereco();

  // // Remove os logos nativos da Loja Integrada e Alpha Theme
  // function removeLogoRodape() {
  //   document.getElementById("cr-li").remove(); // remove Logo Loja Integrada
  //   document.getElementById("cr-alpha-theme").remove(); // remove Logo Alpha Theme
  //   document.getElementsByClassName(".cr.conteiner").remove(); // Remove os dois
  // }
  //   removeLogoRodape();

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
// function rodapeMktnow() {
//     const image = ` 
//     <div style="display: flex; justify-content: center">
//         <a href="https://www.mktnow.com.br/" target="_blank">
//             <img src="https://cdn.awsli.com.br/1228/1228284/arquivos/mktnow-logo.png" alt="" style="margin: 10px; transform: scale(0.7);">
//         </a>
//     </div>`
//     $("#rodape").after(image)
// }
// rodapeMktnow();

// Adicionar botão no menu mobile
     function addEntregaAquiMobile(){
         const entregaAquiMobile=`<a onclick="openModal()"><img src="https://cdn.awsli.com.br/2674/2674396/arquivos/icons8-delivery-50.png" />Entrega Aqui?</a>`
         $("#cabecalho > div.conteiner > div.menu.superior.visible-phone.open > div.barra-tracking-mobile").after(entregaAquiMobile);
         }
         addEntregaAquiMobile();
        

 }); // fechar addEventListener

  // Remove os logos nativos da Loja Integrada e Alpha Theme
  function removeLogoRodape() {
    document.getElementById("cr-li").remove(); // remove Logo Loja Integrada
    document.getElementById("cr-alpha-theme").remove(); // remove Logo Alpha Theme
    // document.getElementsByClassName(".cr.conteiner").remove(); // Remove os dois
  }
    removeLogoRodape();

  // Adiciona o logo da Mktnow no rodapé como Desenvolvedor
function rodapeMktnow() {
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
        { inicial: '01000000', final: '19999999' },
        // { inicial: '20000000', final: '25000000' },
        // { inicial: '30000000', final: '35000000' }
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
