   const urlParams = new URLSearchParams(window.location.search);
   const idParam = urlParams.get("id");
const urlDetail='https://api.football-data.org/v2/';
function parseHttps2(text){
  return  text.replace(/^http:\/\//i, 'https://');
}
 function DetailTeam2() {
  return new Promise(function (resolve,reject){
        if ('caches' in window) {
        caches.match(`https://api.football-data.org/v2/teams/${idParam}`).then(response=>{
            if(response){
         response.json().then(function(data) { 
   const logooff = document.querySelector('#logo-detail-team');
               const nameCluboff = document.querySelector('#nama-club');
               const deleteOFF = document.querySelector('#delete');
               logooff.innerHTML = `<img src="${data.crestUrl}" alt="team" class="center-text responsive-img" width="150px"
                                    height="150px">`
               nameCluboff.innerHTML = data.name;
               deleteOFF.value=data.id;
               //    looping squad teams
               const ListPlayeroff = document.querySelector('#collect');
               ListPlayeroff.innerHTML = '<div><li class="collection-header"> <h4>Players</h4></li><div>';
               let elPlayeroff = '';
               data.squad.forEach(function (e) {
                if(e.position==null) e.position='COACH';
                   elPlayeroff += `<li class="collection-item"><i class="small material-icons">account_circle</i>
                        <div class="name-player">
                            <span>${e.name}</span><span>${e.position}</span>
                    </li>`;
               })

               ListPlayeroff.innerHTML = elPlayeroff;
   const loaderaddTeam=document.querySelector('.content-preloader-detail');
          loaderaddTeam.classList.add('hidden');
          resolve(data)

})
         }
        }).catch(function(){
          console.log('sedang online')
        })
      }
           fetch(`https://api.football-data.org/v2/teams/${idParam}`, { 
               method: "GET",
               withCredentials: true,
               headers: {
                   "X-Auth-Token": "c01310c91c4d4b61889a61122b3641e7"
               }
           })
           .then(resp => resp.json())
           .then(function (data) {
               const logo = document.querySelector('#logo-detail-team');
               const nameClub = document.querySelector('#nama-club');
                 const deleteOn = document.querySelector('#delete');
                 let logoTeam=parseHttps2(data.crestUrl);
               logo.innerHTML = `<img src="${logoTeam}"  alt="team"  class="center-text  responsive-img" width="150px"
                                    height="150px">`
               nameClub.innerHTML = data.name;
               deleteOn.setAttribute('value',data.id)
               //    looping squad
               const ListPlayer = document.querySelector('#collect');
               ListPlayer.innerHTML = '<div><li class="collection-header"> <h4>Players</h4></li><div>';
               let elPlayer = '';
               data.squad.forEach(function (e) {
                if(e.position==null) e.position='COACH';
                   elPlayer += `<li class="collection-item"><i class="small material-icons">account_circle</i>
                        <div class="name-player">
                            <span>${e.name}</span><span>${e.position}</span>
                    </li>`;
               })

               ListPlayer.innerHTML = elPlayer;
   const loaderaddTeam=document.querySelector('.content-preloader-detail');
          loaderaddTeam.classList.add('hidden');
          resolve(data)
           })
         })
   }
   function DetailMatchTeam() {
        if ('caches' in window) {
        caches.match(`${urlDetail}/teams/${idParam}`).then(function (data) {

        if(data){
          data.json().then(function(data){
                  const logoOffMatch = document.querySelector('#logo-detail-team');
               logoOffMatch.innerHTML = `<img src="${data.crestUrl}" class="center-text" width="150px"
                                    height="150px">`

                     })
        }
             
           })
         }
          fetch(`${urlDetail}/teams/${idParam}`, { //tampilkan 1 club
               method: "GET",
               withCredentials: true,

               headers: {
                   "X-Auth-Token": "c01310c91c4d4b61889a61122b3641e7"
               }

             })
           .then(resp => resp.json())
           .then(function (data) {
               const logo = document.querySelector('#logo-detail-team');
               let logoTeam2=parseHttps2(data.crestUrl)
               logo.innerHTML = `<img src="${logoTeam2}" class="center-text" width="150px"
                                    height="150px">`
           })
           .catch(function (error) {
               console.log(error);
           });
   }

  

   function DetailMatch() {
      // api detail macth club
         const loaderMatchTeam=document.querySelector('.content-preloader-detail');
          loaderMatchTeam.classList.remove('hidden');
        if ('caches' in window) {
    caches.match(`https://api.football-data.org/v2/teams/${idParam}/matches`)
    .then(function(response){
if(response){
  response.json().then(function(data){
 const elDetailOFF = document.querySelector('#matches')
            let elDetaOFF='';
            let score1='0';
               data.matches.forEach(function(e){
        if(e.score.fullTime.homeTeam==null) e.score.fullTime.homeTeam='-';
                  if(e.score.fullTime.awayTeam==null) e.score.fullTime.awayTeam='-';

elDetaOFF+=`

                 <div class="col l6 m6 s12">
                <div class="card">
                    <div class="card-content jadwal-tanding">
                        <div class="home1">
                            <div id="team-home">
                                <div class="club-home">
                                    <p>Home</p>
                                </div>
                              
                                <div class="nama-club-home">
                                    <h6>${e.homeTeam.name}</h6>
                                </div>
                            </div>
                        </div>


                        <div class="vs">
                            <div id="team-home">
                                <div class="nama-club-home">
                                    <h3><span>${e.score.fullTime.homeTeam}</span>:<span>${e.score.fullTime.awayTeam}</span></h3>
                                  
                                   
                                </div>
                            </div>
                        </div>


                        <div class="home2">
                            <div id="team-home">
                                <div class="club-home">
                                    <p>Away</p>
                                </div>
                              
                                <div class="nama-club-home">
                                    <h6>${e.awayTeam.name}</h6>
                                </div>

                            </div>
                        </div>


                       
                    </div>
                </div>

            </div>`;
               })
elDetailOFF.innerHTML=elDetaOFF;
   const LoaderDetailMatch = document.querySelector('.content-preloader-detail')
      LoaderDetailMatch.classList.add('hidden')
    })

}
    })
    }
     fetch(`https://api.football-data.org/v2/teams/${idParam}/matches`, { //tampilkan 1 club
               method: "GET",
               withCredentials: true,

               headers: {
                   "X-Auth-Token": "c01310c91c4d4b61889a61122b3641e7"
               }

             })

    .then(resp =>{return resp.json()})
           .then(function (data) {
           
           const elDetailOn = document.querySelector('#matches')
            let elDetaOn='';


               data.matches.forEach(function(e){
  
                  if(e.score.fullTime.homeTeam==null) e.score.fullTime.homeTeam='-';
                  if(e.score.fullTime.awayTeam==null) e.score.fullTime.awayTeam='-';
elDetaOn+=`
                 <div class="col l6 m6 s12">
                <div class="card">
                    <div class="card-content jadwal-tanding">
                        <div class="home1">
                            <div id="team-home">
                                <div class="club-home">
                                    <p>Home</p>
                                </div>
                              
                                <div class="nama-club-home">
                                    <h6>${e.homeTeam.name}</h6>
                                </div>
                            </div>
                        </div>


                        <div class="vs">
                            <div id="team-home">
                                <div class="nama-club-home">
                                    <h3><span>${e.score.fullTime.homeTeam}</span>:<span>${e.score.fullTime.awayTeam}</span></h3>
                                    
                                </div>
                            </div>
                        </div>


                        <div class="home2">
                            <div id="team-home">
                                <div class="club-home">
                                    <p>Away</p>
                                </div>
                              
                                <div class="nama-club-home">
                                    <h6>${e.awayTeam.name}</h6>
                                </div>

                            </div>
                        </div>


                       
                    </div>
                </div>

            </div>`;

               })
elDetailOn.innerHTML=elDetaOn;

           }).then(function(){
            const LoaderDetailMatch = document.querySelector('.content-preloader-detail')
      LoaderDetailMatch.classList.add('hidden')

           })
           .catch(function (error) {
               console.log(error);
           });
         
   }

 

function GetIdFavorite()
{

    const urlParams = new URLSearchParams(window.location.search);
   const idParam = urlParams.get("id");
GetById(idParam).then(function(data){
    const save=document.querySelector('#save');
    const hapus=document.querySelector('#delete');
  if(data){
  save.style.display='none';
  hapus.style.display='';

  }
})
}

function DeleteFavorite(id)
{
 deleteFavorite(id)
}


