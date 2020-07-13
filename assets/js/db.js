
const DB=idb.open('fotball',1,function(upgradegDb) {
	const FotballObjectStore=upgradegDb.createObjectStore('Teams',{
		keyPath:"id"
	})
	FotballObjectStore.createIndex('detailTeams','detailTeams',{
		unique:false
	})

})


// untuk save team favorite
function saveTeams(saveTeam)
{

	DB.then(function(db){
const tx= db.transaction('Teams','readwrite')
let store=tx.objectStore('Teams')
store.put(saveTeam);
return tx.complete;

	})
	.then(function(){
		console.log('success save')
	})
}

// untuk tampilkan semua team favorite

function GetAllTeam()
{
	return new Promise(function(resolve, reject) {
    DB
      .then(function(db) {
        var tx = db.transaction("Teams", "readonly");
        var store = tx.objectStore("Teams");
        return store.getAll();
      })
      .then(function(articles) {
        resolve(articles);
      });
  });
}
// function untuk menyimpan team favorite
function GetById(id)
{
	return new Promise(function(resolve,reject){

	let idTeam=parseInt(id);
	DB.then(function(db){
		 var tx = db.transaction("Teams", "readonly");
        var store = tx.objectStore("Teams");
        return store.get(idTeam);
	})
	.then(function(data){
 resolve(data)
	})
	.catch(function(){
		return console.log(false)
	})
	}) 

}

// function untuk menghapus team favorite
function deleteFavorite(id)
{
	return new Promise(function(resolve,reject){
  DB.then(function(db) {
  var tx = db.transaction('Teams', 'readwrite');
  var store = tx.objectStore('Teams');
  store.delete(id);
  return tx.complete;
}).then(function() {
  console.log('Item deleted');
});
	})

}

