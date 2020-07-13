const base_url = 'https://api.football-data.org/v2';
const fetchApi=function(){
  return  fetch(base_url + "/competitions/2021/standings", {
               method: "GET",
               withCredentials: true,

               headers: {
                   "X-Auth-Token": "c01310c91c4d4b61889a61122b3641e7"
               }

             })
}

function parseHttps(text){
  return  text.replace(/^http:\/\//i, 'https://');
}
function Team() {
     const loaderRemoveTeam=document.querySelector('.content-loader');
          loaderRemoveTeam.classList.remove('hidden');
   if ('caches' in window) {
    caches.match(base_url + "/competitions/2021/standings").then(function(response) {
      if (response) {
        response.json().then(function (data) {
  const teamoff = data.standings[0].table;
            const card2off = document.querySelector('#team-only')
            let elToff = '';
            teamoff.forEach(function (e) {
            let gambar2=parseHttps(e.team.crestUrl)

                elToff += `<div class="col l3 m4 s12">
        <div class="card " id="team">
            <div class="img-team">
        <a href="DetailTeam.html?id=${e.team.id}"><img src="${gambar2}" class="center-text" width="150px" height="150px"></a>
            </div>
                <div class="nama-club">
         <a href= "DetailTeam.html?id=${e.team.id}" style="text-decaration:none;color:black;"> <h6>${e.team.name}</h6></a>
            </div>
        
        </div>
       </div>`;
                card2off.innerHTML = elToff;


        })
             const loaderAddTeam=document.querySelector('.content-loader');
          loaderAddTeam.classList.add('hidden');
    
})
    }
})
}
  fetchApi().then(res=>res.json()).then(function(data){
  const teamoff = data.standings[0].table;
            const card2on = document.querySelector('#team-only')
            let elTon = '';
            teamoff.forEach(function (e) {
                elTon += `<div class="col l3 m4 s12">
        <div class="card " id="team">
            <div class="img-team">
        <a href="DetailTeam.html?id=${e.team.id}"><img src="${e.team.crestUrl}" alt="team" class="center-text" width="150px" height="150px"></a>
            </div>
                <div class="nama-club">
         <a href= "DetailTeam.html?id=${e.team.id}" style="text-decaration:none;color:black;"> <h6>${e.team.name}</h6></a>
            </div>
        
        </div>
       </div>`;
                card2on.innerHTML = elTon;


        })
             const loaderAddTeam=document.querySelector('.content-loader');
          loaderAddTeam.classList.add('hidden');
    
             })
 
}

// api klasemen
function Klasemen() {
     const loader=document.querySelector('.content-loader');
          loader.classList.remove('hidden');
      if ('caches' in window) {
    caches.match(base_url + "/competitions/2021/standings").then(function(response){
      if(response){
         response.json().then(function(data) { 
  const homeoff = data.standings[0].table;
            const cardoff = document.querySelector('.liga')
            let elemntoff = '';
            homeoff.forEach(e => {
                elemntoff += ` 
    <div class="col l6 m12 s12 ">
             <div class="card">
               <a href="Detail.html?id=${e.team.id}"> <img src="${e.team.crestUrl}" alt="bola" width="90px" height="90px"></a>
             <div class=" statistik-home ">
             <div class="name-club" >
             <p style="font-size:20px; "><a href="Detail.html?id=${e.team.id}"style="text-decaration:none;color:black;" > ${e.team.name}</a></p>
             </div>
             <div class="statistik ">
             <div class="detils-statistik" >
             <span>Matches </span><span>${e.playedGames}</span>
             </div>
             <div class="detils-statistik" >
             <span>Win </span><span>${e.won}</span>
             </div>
              <div class="detils-statistik" >
             <span>Draw </span><span>${e.draw}</span>
             </div>
              <div class="detils-statistik" >
             <span>Lose </span><span>${e.lost}</span>
             </div>
              <div class="detils-statistik" >
             <span>Goals </span><span>${e.goalsFor}</span>
             </div>
              <div class="detils-statistik" >
             <span>points </span><span>${e.points}</span>
             </div>
             </div>
             </div>
                </div>
         </div>
            `;
                cardoff.innerHTML = elemntoff;
           
            });
            const loaderAddLiga=document.querySelector('.content-loader');
          loaderAddLiga.classList.add('hidden');
         })
      }
    })

   fetchApi().then(res=> res.json())
    .then(function(data){
       const home = data.standings[0].table;
            const card = document.querySelector('.liga')
            let elemnt = '';
            home.forEach(e => {
            let gambar=parseHttps(e.team.crestUrl)

                elemnt += ` 
    <div class="col l6 m12 s12 ">
             <div class="card">
               <a href="Detail.html?id=${e.team.id}"> <img src="${gambar}" alt="bola" width="90px" height="90px"></a>
             <div class=" statistik-home ">
             <div class="name-club" >
             <p style="font-size:20px; "><a href="Detail.html?id=${e.team.id}"style="text-decaration:none;color:black;" > ${e.team.name}</a></p>
             </div>
             <div class="statistik ">
             <div class="detils-statistik" >
             <span>Matches </span><span>${e.playedGames}</span>
             </div>
             <div class="detils-statistik" >
             <span>Win </span><span>${e.won}</span>
             </div>
              <div class="detils-statistik" >
             <span>Draw </span><span>${e.draw}</span>
             </div>
              <div class="detils-statistik" >
             <span>Lose </span><span>${e.lost}</span>
             </div>
              <div class="detils-statistik" >
             <span>Goals </span><span>${e.goalsFor}</span>
             </div>
              <div class="detils-statistik" >
             <span>points </span><span>${e.points}</span>
             </div>
             </div>
             </div>
                </div>
         </div>
            `;
                card.innerHTML = elemnt;
           
            });
            const loaderAddLiga=document.querySelector('.content-loader');
          loaderAddLiga.classList.add('hidden');
    })
  }

  
}

function Favorite()
{
   const loaderRemoveFavorite=document.querySelector('.content-loader');
          loaderRemoveFavorite.classList.remove('hidden');
  GetAllTeam().then(function(data){
            const cardFavorite = document.querySelector('#Favorite')
            let elemntFavorite = '';
            if(data.length!==0){
            data.forEach(function(result){
elemntFavorite+=` <div class="col l3 m4 s12">
         <div class="card " id="team">
             <div class="img-team">
         <a href="DetailTeam.html?id=${result.id}"><img src="${result.crestUrl}" alt="team" class="center-text" width="150px" height="150px"></a>
             </div>
                 <div class="nama-club">
          <a href= "DetailTeam.html?id=${result.id}&saved=true style="text-decaration:none;"><h6 style="color:black;">Team Favorite</h6></a>
             </div></div></div>`
            })
            cardFavorite.innerHTML=elemntFavorite;
            }
            else
            {
              elemntFavorite+=` <div class="col l12 m12 s12"><h6>tidak ada tim favorite</h6></div>`;
              cardFavorite.innerHTML=elemntFavorite;
            }
  }).then(function(){
     const loaderAddFavorite=document.querySelector('.content-loader');
          loaderAddFavorite.classList.add('hidden');
  })
}


 