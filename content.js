const versionActuelle = "V2.8";


function newSettings(newLeLogo, newX_0, newY_0, newWidth, newHeight, newMessage, newVersion) {
    // Save the new values using browser.storage.local
    browser.storage.local.set({
        leLogo: newLeLogo,
        x_0: newX_0,
        y_0: newY_0,
        width: newWidth,
        height: newHeight,
        message: newMessage,
        version: newVersion
    }).then(() => {
        // Settings saved successfully, provide feedback to the user
        console.log('Paramètres enregistrés :', newLeLogo, newX_0, newY_0, newWidth, newHeight, newVersion);
        if (newMessage){
            console.log("Vous venez de changer l'image par défaut du Pixel War par :");
            console.log(newMessage);
        }
        // Optionally, perform any actions that depend on the new settings
        // ...
    }).catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Error saving new settings:', error);
    });
}

function applySettingsFromJson(jsonString) {
    try {
        // Parse the JSON string
        const parsedSettings = JSON.parse(jsonString);

        // Extract values from the parsed JSON
        const newLeLogo = parsedSettings.leLogo;
        const newX_0 = parsedSettings.x_0;
        const newY_0 = parsedSettings.y_0;
        const newWidth = parsedSettings.width;
        const newHeight = parsedSettings.height;
        const newMessage = parsedSettings.message;

        // Call the newSettings function with the extracted values
        newSettings(newLeLogo, newX_0, newY_0, newWidth, newHeight, newMessage, versionActuelle);
    } catch (error) {
        // Handle parsing errors
        console.error('Error parsing JSON:', error);
    }
}

if (window.location.href === "https://bde.telecom-paris.fr/pixelwar") {
    console.log("Yo, merci bcp pour avoir installé l'extension !");

    console.log("Le programme est lancé. "+versionActuelle);

    console.log("Si jamais tu rencontres des problèmes, prend un screen et met le sur le discord");

    console.log("Les pixels seront placés aléatoirement et ceux en dehors du cercle ne sont pas placés.");

    console.log("Logo par défaut : http://alex.martinezrivera.free.fr/Projets_Info/LogoDefinitif.png")

    // Retrieve user preferences or use default values
    let leLogo, x_0, y_0, width, height;

    // Load settings from storage
    browser.storage.local.get(['leLogo', 'x_0', 'y_0', 'width', 'height', 'version']).then((result) => {
        leLogo = result.leLogo;
        x_0 = result.x_0 || 40;
        y_0 = result.y_0 || 0;
        width = result.width || 45;
        height = result.height || 45;
        version = result.version || "V0";
        console.log('Paramètres téléchargés :', leLogo, x_0, y_0, width, height, version);
        // Call functions or perform actions that depend on the retrieved settings
        // Now you can use leLogo, x_0, y_0, width, and height in your code

        if ((versionActuelle != version)||(!(result.leLogo))){
            console.log("Nouvelle version "+ versionActuelle +" actualisée.");
            leLogo = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 14, 14, 14, 14, 14, 14, 14, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 14, 14, 14, 14, 14, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 2, 2, 14, 2, 2, 14, 14, 14, 14, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 2, 14, 14, 14, 2, 14, 14, 14, 14, 14, 14, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 2, 14, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 2, 2, 2, 14, 2, 2, 2, 14, 2, 2, 2, 14, 14, 14, 14, 14, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 6, 6, 6, 6, 6, 2, 6, 14, 2, 2, 14, 2, 14, 2, 2, 14, 6, 2, 6, 6, 6, 6, 6, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 6, 6, 6, 6, 1, 1, 1, 1, 1, 2, 6, 6, 14, 2, 14, 2, 14, 2, 14, 6, 6, 2, 1, 1, 1, 1, 1, 6, 6, 6, 6, 2, 4, 4, 4, 4, 4, 4, 4, 0, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 0, 4, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 4, 4, 0, 2, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 2, 2, 0, 4, 4, 4, 4, 0, 2, 2, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 0, 0, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 6, 6, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 0, 2, 2, 6, 6, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 6, 0, 2, 1, 2, 0, 1, 1, 2, 1, 1, 1, 1, 1, 6, 6, 2, 2, 0, 0, 4, 4, 4, 4, 4, 4, 4, 2, 0, 0, 2, 2, 6, 1, 6, 1, 1, 1, 2, 6, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 0, 2, 1, 1, 6, 1, 6, 2, 2, 0, 0, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 0, 0, 0, 0, 6, 6, 6, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 0, 0, 2, 6, 6, 6, 0, 0, 0, 0, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 0, 2, 2, 1, 1, 1, 2, 6, 6, 1, 1, 1, 1, 0, 0, 2, 6, 0, 0, 0, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 6, 2, 1, 1, 1, 0, 0, 6, 1, 1, 1, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 6, 6, 2, 1, 1, 0, 0, 0, 2, 1, 1, 1, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0, 6, 6, 6, 2, 2, 0, 0, 0, 2, 14, 1, 1, 1, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0, 6, 6, 6, 6, 0, 0, 6, 6, 6, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0, 6, 6, 2, 2, 2, 1, 1, 1, 6, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 2, 2, 1, 1, 1, 1, 1, 1, 6, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 1, 1, 1, 1, 1, 1, 6, 1, 6, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 1, 1, 1, 1, 6, 6, 1, 1, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 1, 1, 6, 6, 6, 6, 2, 1, 2, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 1, 1, 1, 2, 0, 0, 0, 2, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4, 4, 14, 14, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 1, 1, 6, 2, 0, 0, 0, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 14, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1, 1, 0, 0, 2, 0, 0, 0, 2, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 1, 1, 0, 14, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 1, 1, 14, 2, 2, 2, 2, 2, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 6, 1, 1, 14, 14, 2, 14, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 2, 2, 1, 14, 2, 14, 1, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 1, 1, 1, 1, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 2, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 14, 14, 14, 14, 14, 14, 14, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
            newSettings(leLogo, 40, 0, 45, 45, "", versionActuelle);
        }

    }).catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Error loading settings:', error);
    });

    var ca_lague = 0;

    const colorMapping = {
        "17,17,17": "#111111",
        "255,255,255": "#FFFFFF",
        "170,170,170": "#AAAAAA",
        "240,18,190": "#F012BE",
        "255,0,0": "#FF0000",
        "255,220,0": "#FFDC00",
        "221,221,221": "#DDDDDD",
        "255,133,27": "#FF851b",
        "1,255,112": "#01FF70",
        "46,204,64": "#2ECC40",
        "127,219,255": "#7FDBFF",
        "0,116,217": "#0074D9",
        "57,204,204": "#39CCCC",
        "177,13,201": "#B10DC9",
        "61,153,112": "#3D9970"
    };

    const idMapping = {
        0 : "#111111",
        1 : "#FFFFFF",
        2 : "#AAAAAA",
        3 : "#F012BE",
        4 : "#FF0000",
        5 : "#FFDC00",
        6 : "#DDDDDD",
        7 : "#FF851b",
        8 : "#01FF70",
        9 : "#2ECC40",
        10: "#7FDBFF",
        11: "#0074D9",
        12: "#39CCCC",
        13: "#B10DC9",
        14: "#3D9970"
    };

    function numberToCoordinates(number) {
        if (number < 0 || number > width*height) {
            throw new Error("Number must be between 0 and width");
        }

        // Calculate x and y coordinates
        const x = number % width;
        const y = Math.floor(number / width);

        return { x, y };
    }

    function coordinatesToNumber(x, y) {
        if (x < 0 || x >= 100 || y < 0 || y >= 100) {
            throw new Error("Coordinates must be within the 100x100 canvas");
        }

        // Calculate the corresponding number
        const number = y * 100 + x;

        return number;
    }

    function looped(){   // Check if the div has content using innerHTML
        var loop = true;
        const myDiv = document.getElementById('timer');
        counter = 0;
        while (loop){
            var timerMessage = myDiv.innerHTML.trim();
            if (ca_lague == 2){
                console.log("Ça a lagué ! ");
                clearInterval(intervalId);
                ca_lague = 0
                loop = false;
                location.reload(true);
            }else if (timerMessage == '') {
                var rdID = Math.floor(Math.random() * width*height);

                
                var parentElement = document.getElementById("board");

                var coordinates = numberToCoordinates(rdID);

                var resultNumber = coordinatesToNumber(x_0 + coordinates.x, y_0 + coordinates.y);


                var nthChild = parentElement.children[resultNumber]; 
                if (typeof(nthChild) == "undefined"){
                    loop = false;
                    return "Wait a little bit more"
                }
                var styleAttribute = nthChild.getAttribute("style");

                var rgbPattern = /rgb\((\d+), (\d+), (\d+)\)/;
                var rgbValues = styleAttribute.match(rgbPattern);
                var triplet = [parseInt(rgbValues[1]), parseInt(rgbValues[2]), parseInt(rgbValues[3])].join(',');

                /* triplet is a triplet of values */

                var couleurActuelle = colorMapping[triplet];
                var couleurSouhaitee = idMapping[leLogo[rdID]];

                if (!(typeof(couleurSouhaitee) == "undefined")&&((couleurActuelle != couleurSouhaitee)&&(couleurSouhaitee != "#FF0000"))){
                    var colorElement = document.getElementById(couleurSouhaitee);

                    console.log("La couleur souhaitée est", couleurSouhaitee)
                    colorElement.click();

                    nthChild.click();
                    console.log("Elément placé en ", x_0 + coordinates.x, y_0 + coordinates.y);
                    loop = false;
                    if (ca_lague == 0){
                        ca_lague = 1;
                    }else if (ca_lague == 1){
                        ca_lague = 2;
                        loop = true;
                    }
                }else{
                    counter += 1;
                    if (counter > 2000){
                        loop = false;
                        console.log("Le dessin est presque fini ! Changement de mode : on s'occupe maintenant de boucher les trous s'il y en a.");
                        clearInterval(intervalId);
                        counter = 0;
                        intervalId = setInterval(loopedMode2, 20000);
                    }
                }
            }else if (timerMessage[0] == '@') {
                jsonString = timerMessage.slice(1);
                applySettingsFromJson(jsonString);
                ca_lague = 2;
            }else if (timerMessage[0].includes('-')) {
                ca_lague = 2; // La page s'actualise
                loop = true;
            }else{
                ca_lague = 0;
                loop = false;
            }
            
        }
    }

    function loopedMode2(){   // Check if the div has content using innerHTML
        var loop = true;
        const myDiv = document.getElementById('timer');
        var rdID = 0;
        while (loop){
            var timerMessage = myDiv.innerHTML.trim();
            if (ca_lague == 2){
                console.log("Ça a lagué ! ");
                clearInterval(intervalId);
                ca_lague = 0
                loop = false;
                location.reload(true);
            }else if (timerMessage == '') {

                var parentElement = document.getElementById("board");

                var coordinates = numberToCoordinates(rdID);

                var resultNumber = coordinatesToNumber(x_0 + coordinates.x, y_0 + coordinates.y);


                var nthChild = parentElement.children[resultNumber]; 
                if (typeof(nthChild) == "undefined"){
                    loop = false;
                    return "Wait a little bit more"
                }
                var styleAttribute = nthChild.getAttribute("style");

                var rgbPattern = /rgb\((\d+), (\d+), (\d+)\)/;
                var rgbValues = styleAttribute.match(rgbPattern);
                var triplet = [parseInt(rgbValues[1]), parseInt(rgbValues[2]), parseInt(rgbValues[3])].join(',');

                /* triplet is a triplet of values */

                var couleurActuelle = colorMapping[triplet];
                var couleurSouhaitee = idMapping[leLogo[rdID]];

                if (!(typeof(couleurSouhaitee) == "undefined")&&((couleurActuelle != couleurSouhaitee)&&(couleurSouhaitee != "#FF0000"))){
                    var colorElement = document.getElementById(couleurSouhaitee);

                    console.log("La couleur souhaitée est", couleurSouhaitee)
                    colorElement.click();

                    nthChild.click();
                    console.log("Elément placé en ", x_0 + coordinates.x, y_0 + coordinates.y);
                    loop = false;
                    counter += 1;
                    if(counter >= 2){
                        console.log("On revient au mode précédent.");
                        clearInterval(intervalId);
                        intervalId = setInterval(looped, 20000);
                    }
                    if (ca_lague == 0){
                        ca_lague = 1;
                    }else if (ca_lague == 1){
                        ca_lague = 2;
                        loop = true;
                    }
                }
            }else if (timerMessage[0] == '@') {
                jsonString = timerMessage.slice(1);
                applySettingsFromJson(jsonString);
                ca_lague = 2;
            }else if (timerMessage[0].includes('-')) {
                ca_lague = 2; // La page s'actualise
                loop = true;
            }else{
                ca_lague = 0;
                loop = false;
            }
            rdID += 1;
            if (rdID == width*height){
                loop = false;
            }
        }
    }

    let counter = 0;
    let intervalId = setInterval(looped, 1000);
}