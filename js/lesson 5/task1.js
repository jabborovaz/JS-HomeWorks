let gen = {
	"-3": ["great grandfather",	"great grandmother"],
	"-2": ["grandfather","grandmother"],
	"-1":["father",	"mother"],
	"0": ["me!", "me!"],
	"1":["son",	"daughter"],
	"2"	:["grandson","granddaughter"],
	"3" :["great grandson","great granddaughter"]
}
function generation(x, y) {
	if(y=="m"){
        console.log(gen[x][0])
    }
    else if(y=="f"){
        console.log(gen[x][1])
    }
    else{
        console.log("choose m or f")
    }
    
    
}
generation(-3, "m");


// function generation(x, y) {
//     let gen = {
//         "-3": {"m": "great grandfather",	"f":"great grandmother"},
//         "-2": {"m": "grandfather",	"f":"grandmother"},
//         "-1":{"m": "father", "f":"mother"},
//         "0": {"m": "me", "f":"me"},
//         "1": {"m": "son", "f":"daughter"},
//         "2"	:{"m": "grandson", "f":"grand-daughter"},
//         "3" :{"m": "great grandson", "f":"great grand-daughter"},
//     }
	
//     console.log(gen[x][y]);
    
// }
// generation(-3, "m");