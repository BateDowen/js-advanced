class footballTeam{
    constructor(clubName,country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.invitedPlayers2 = {};

    }
    newAdditions(footballPlayers){
        let playersName = []

        for(let playerInfo of footballPlayers){

            let[name,age,value] = playerInfo.split('/');
            
            if (!this.invitedPlayers.hasOwnProperty(name)) {
                this.invitedPlayers[name] = {};
                this.invitedPlayers[name] = {name: name, age: Number(age), playerValue: Number(value)};
                this.invitedPlayers2[name] = {name: name, playerValue: Number(value)}
                playersName.push(name)

            } else {
                if (this.invitedPlayers[name].playerValue < Number(value)) {
                    this.invitedPlayers[name].playerValue = Number(value)
                };
            };
        };
        return `You successfully invite ${playersName.join(', ')}.`
    };
    signContract(selectedPlayer){
        let [theName,playerOffer] = selectedPlayer.split('/');
        if (!this.invitedPlayers.hasOwnProperty(theName)) {
            throw Error `${theName} is not invited to the selection list!`
        };
        if (this.invitedPlayers[theName].playerValue > Number(playerOffer)) {
            throw Error `The manager's offer is not enough to sign a contract with ${theName}, ${Number(this.invitedPlayers[theName].playerValue) - Number(playerOffer)} million more are needed to sign the contract!`
        };
        this.invitedPlayers[theName].playerValue = 'Bought';
        this.invitedPlayers2[theName].playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${theName} for ${playerOffer} million dollars.`
    };
    ageLimit(name, age){
        let theName = name
        if (!this.invitedPlayers.hasOwnProperty(name)) {
            throw Error `${theName} is not invited to the selection list!`
        };
        if (this.invitedPlayers[name].age < Number(age)) {
            let differece = Number(age) - this.invitedPlayers[name].age;
            if (differece < 5) {
                return `${name} will sign a contract for ${differece} years with ${this.clubName} in ${this.country}!"`
            };
            if (differece > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            };
            return `${name} is above age limit!"`
        }
    };
    transferWindowResult(){
     let names = []
    for(let name in this.invitedPlayers2){

    names.push(`
Player ${this.invitedPlayers2[name].name}-${this.invitedPlayers[name].playerValue}`)
    }
        
        return `Players list:${names.join(' ')}`
        
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
 console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Kylian Mbappé/23/162","Lionel Messi/35/50", "Pau Torres/25/52"]));
 let gTeam = new footballTeam("Barcelona", "Spain");
 console.log(gTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
 console.log(gTeam.signContract("Lionel Messi/60"));
 console.log(gTeam.signContract("Kylian Mbappé/240"));

 console.log(fTeam.transferWindowResult());
 console.log(gTeam.signContract("Barbukov/10"));
 