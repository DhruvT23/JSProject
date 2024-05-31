/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const tokens = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_singerName,_gender,_genre,_attirbute) {
  const token = {
    "Name": _singerName,
    "Gender": _gender,
    "Genre": _genre,
    "Attribute": _attirbute
  }
  tokens.push(token);
  console.log("NFT Minted successfully!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i = 0; i < tokens.length; i++){
    console.log("\nID: "+(i+1));
    console.log("Singer Name: "+ tokens[i].Name);
    console.log("Gender: "+ tokens[i].Gender);
    console.log("Genre: "+ tokens[i].Genre);
    console.log("Attribute: "+ tokens[i].Attribute);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal Supply: "+ tokens.length);
}

// call your functions below this line
mintNFT("Arijit","Male","Soul Music","Gold Watch");
mintNFT("Shreya","Female","Traditional","Blonde Hair");
mintNFT("Atif","Male","Rhythm and blues","Bracelet");
mintNFT("Badshah","Male","Hip Hop","Baggy Clothes");
listNFTs();
getTotalSupply();
