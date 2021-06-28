// Creating a list of pokemon
let pokemonList = [
{
    name: "Pikachu", 
    height: 1.4, 
    type: 'Electric', 
    abilities: ["Static", "Lightninggrod"]
},

{
    name: "Butterfree", 
    height: 3.7, 
    type: ['Bug', 'Flying'], 
    abilities: ["Compoundeyes", "Tinted-Lens"]
},

{
    name: "Nidoking", 
    height: 4.7, 
    type: ['Ground','Poison'], 
    abilities: ["Poison-Point", "Rivalry"]
},

{
    name: "Keldeo", 
    height: 5.9, 
    type: ['Water','Fighting'], 
    abilities: "Justified"
},

{
    name: "Lapras", 
    height: 8.2, 
    type: ['Water','Ice'], 
    abilities: ["Hydration","Shell-Armor"]
}];


// for loop to iterate over pokemon's list
for (let i =0; i < pokemonList.length; i++){
    document.write("|Name: " + pokemonList[i].name + " |Height: " + pokemonList[i].height+ " |Type: " + pokemonList[i].type + " |Abilities: "+ pokemonList[i].abilities +"|</br>");
    if (pokemonList[i].height > 7){
        document.write("|" +pokemonList[i].name+ " is a huge pokemon!" + "|</br>");
    }
        else if (pokemonList[i].height > 4 && pokemonList[i].height < 6.9) {
            document.write("|"+pokemonList[i].name + " is average in its size" + "|</br>");
        }
        else {
            document.write("|"+pokemonList[i].name+" is small but powerful" + "|</br>");
        }
    }


                   
                