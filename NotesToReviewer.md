# Notes To Reviewer

I'm a student in Télécom Paris and my School has organized a gient Pixel War (as Reddit did in 2023).

I've created an Firefox Plugin that anyone of my collegues could install, and so we could create a beautiful pixel drawing in the canvas.

## Version 1.5

The version I have just uploaded, is a new version without the hidden files (I don't want to get a warning).

## Version 2

Changelog :
 - Image changed
 - Better comments
 - Wait when undefined
 - 1 second wait instead of 10 or 5

## Version 2.1

Changelog :
 - Wrong max value
 - On touche pas à KFT !
 - No console.log("Deja colorié")
 - Mode slowed down when the piece is finished

## Version 2.2

Changelog :
 - Correction du mauvais découpage de KFT

## Version 2.3

Changelog :
 - Popup : Enlevage de la phrase inutile + Manifest disponible dans le popup

## Version 2.4
 - Rétablissement de KFT
 - Message qui indique lorsque rien n'a été placé car le dessin est fini
 - Super bouton de mise à jour dans le popup (j'ai enlevé le manifest)

## Version 2.5
 - Système de vérification de versions
 - Charger le bon logo la première fois que l'extension est sortie

## Version 2.6
 - Nombre de clicks
 - Bouton pour mettre facilement en pause l'extension
 - 

## Changement de version

À chaque changement de version, il faut :
 - Ajouter de Changelog ici
 - Changer versionActuelle dans content.js
 - Changer la version dans le manifeste
 - Changer la version dans popup.html à deux endroits différents
 - Changer le LogoDefinitif.png sur le site Alex
Uploader sur le site de Mozilla
 - Changer fichier à télécharger dans le index.html du site Alex (upload file)
 - Changer la version dans le site Alex à la fois dans le script et dans le href.

Voici le site en question : [Alex](http://alex.martinezrivera.free.fr/Projets_Info/ExtensionPixelWar/)

## How to test my plugin

My plugin is only lauched in a single website : "https://bde.telecom-paris.fr/pixelwar", but you can't access this website if you haven't a Telecom Paris Rezel account.

If you have any question, feel free to send me an email at : alex.martinezrivera@telecom-paris.fr

### Thank you !