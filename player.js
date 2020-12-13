class Player{
    constructor(){
        this.index = null
        this.name = null
        this.distance = 0
        this.rank = 0
    }

    //Read the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value", function(data){
        playerCount = data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    updateInfo(){
        database.ref("players/player"+ this.index).set({
            name : this.name,
            distance : this.distance
        })
    }  
    //sepeately; anounoumus;  => arrow function
    static getPlayersInfo(){
        database.ref("players").on("value", (data)=>{
        players = data.val()
        })
    }

    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value", (data)=>{
        this.rank = data.val()
        })
    }

   static updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd : rank
        })
    }
    
}