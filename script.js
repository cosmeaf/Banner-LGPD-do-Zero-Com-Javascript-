// Requisição sistema ou site
let lgpdUrl = 'https://jsonplaceholder.typicode.com/users';

// banner LGPD
let lgpdHtml = `<div class="lgpd">
<div class="lgpt--left">
    <p>Nós utilizamos cookie para melhor experência do usuário</p>
    <p>Para maiores informações, confira nossa <a href="#">Politica de Privacidade</a></p>
</div>
<div class="lgpt--right">
    <button>Aceitar</button>
</div>
</div>`

let lsContent = localStorage.getItem('lgpd');

if(!lsContent){
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async function(){
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if(json.error !== ''){
            localStorage.setItem('lgpd', json[0].name);
        }
        
    });
}



