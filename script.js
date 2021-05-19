var images = document.getElementById("images"); //This is the variable that refers to the image being inserted into the program
var text = document.getElementById("text"); //This is the variable that refers to the text below the image 
var buttonBox = document.getElementById('buttonBox'); //This is the variable that refers to the button box in the program 
var input = document.getElementById('input'); //This is the input of the program
var player; //This is the player 



input.onkeypress = function(event) { //This is the input on the splash screen for the video game 
  if (event.key == "Enter" || event.keyCode == 13) {
    player =  input.value;
    input.parentNode.removeChild(input);
    advanceTo(scenario.two);
  }
};


var changeText = function(words) { //This changes a certain phrase into the character name that the user has entered
  text.innerHTML = words.replace("NAME", player);
};

var changeImage = function(img) { //This transitions the images in the text adventure. 
  images.style.backgroundImage = ("url(" + img + ")");
};

var changeButtons = function(buttonList) { //This transitions the buttons in the text adventure. 
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

var advanceTo = function(s) {
  changeImage(s.image);
  changeText(s.text);
  changeButtons(s.buttons);
  
};

//We've created multiple story arces with multiple endings for this game. Please note this can be easily extended and changed if needed by other people. This is pratically a template for any text adventure made in HTML5 and JS. The current setup has 4 different endings completely!
scenario = {};
var scenario = {
  one: {
    image: 'platzhalter.png', // IntroFirst situation, picture of teacher
    text: "Bist du bereit dich einem Abenteuer zu stellen? Begib dich auf eine Reis zurück ins 14. Jahrhundert und stelle dein Wissen unter Beweis. Die Pest ist über dein Dorf herreingebrochen und du siehst dich mit diversen Entscheidungen konfrontiert um dich und deine Familie sicher durch diese Zeit zu bringen. Bevor wir die Zeitreise starten, verrätst du uns noch deinen Namen? Das Abenteuer beginnt, sobald du Enter drückst!",
  },
  two: {
    image: 'platzhalter.png', //This is the classroom. The first choice you will have to make in this game.
    text: "NAME, Stell’ dir vor, wir haben das Jahr 1348 und die Pest fängt gerade an, sich in Europa auszubreiten. Du kommst mit deiner Familie in Europa an, und versuchst deine Liebsten bestmöglich vor einer Infektion zu schützen. Ihr wollt euch hier sesshaft machen, doch es ist noch unklar, wo genau ihr eure neue Heimat wählt. Wo würdest du zur Zeit der Pest am liebsten leben?",
    buttons: [["In einer Hafenstadt", "advanceTo(scenario.twelve)"],["In einer Handelsstadt", "advanceTo(scenario.twenty)"],["Auf einem Schiff", "advanceTo(scenario.fourtytwo)"],["Abgelegen in den Bergen", "advanceTo(scenario.three)"]],
  },
  three: {
    image: 'platzhalter.png',
    text: "Abgelegen in den Bergen also? Das war eine kluge Wahl! Solange die Nahrungsmittel nicht ausgingen, war das sicher der Beste Ort, um zu Leben. Umso abgeschotteter der Wohnort, umso schwerer fand die Pest einen Weg dorthin. Bist du bereit weiter zu machen?",
    buttons: [["Ja", "advanceTo(scenario.four)"], ["Nein", "advanceTo(scenario.thirtynine)"]]
  },
  four: {
    image: 'platzhalter.png',
    text: "Du entscheidest dich, ein Haus in den Bergen, abseits von einem kleinen Dorf als neue Heimat zu wählen. Je abgelegener desto besser, hier wird die Pest hoffentlich nicht herfinden! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf!Welchen Beruf würdest du zur Zeit der Pest wählen?",
    buttons: [["Totengräber", "advanceTo(scenario.five)"],["Seemann", "advanceTo(scenario.thirteen)"],["Geistlicher", "advanceTo(scenario.twentyseven)"],["Fahrender Händler", "advanceTo(scenario.twentyeight)"]]
  },
  five: {
    image: 'abstand.png',
    text: "Totengräber, NAME! Das war wahrscheinlich einer der sichersten Berufe der Zeit. Flöhe kamen auf den Verstorbenen nicht mehr vor. Wenn die Körpertemperatur nach dem Tod sinkt, gefällt es auch dem Floh nicht mehr und er sucht sich einen neuen Wirt. Wenn man sich auch von den infizierten Körperflüssigkeiten ferngehalten hat, konnte eigentlich bei der Arbeit nichts passieren. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf, abgelegen in den Bergen, neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.Wie könntest du dich vor einer Ansteckung der Pest schützen?",
    buttons: [["Abstand halten", "advanceTo(scenario.fourteen)"],["Maske tragen", "advanceTo(scenario.six)"],["Tiere streicheln", "advanceTo(scenario.twentynine)"],["Gewand nicht wechseln", "advanceTo(scenario.thirtyone)"]]
  },
  six: { 
    image: 'platzhalter.png',
    text: "Du entscheidest dich eine Maske zu tragen. Gegen eine Infektion über den Floh, hilft eine Gesichtsmaske leider nicht. Gegen die Tröpfcheninfektion über einen anderen Menschen Hilft sie hingegen schon. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest?",
    buttons: [["Kirche", "advanceTo(scenario.thirty)"],["Marktplatz", "advanceTo(scenario.thirtytwo)"],["Krankenhaus", "advanceTo(scenario.fifthteen)"],["Wohnheim", "advanceTo(scenario.seven)"]]
  },
  seven: { 
    image: 'platzhalter.png',
    text: "Super! Das eigene Haus war üblicherweise der sicherste Ort, solange man keinen Besuch empfing und niemand in der Familie krank war. Jedoch treffen keine guten Neuigkeiten ein – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden?",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eight)"],["Das Familienmitglied pflegen", "advanceTo(scenario.thirtythree)"],["Einen Aderlass vornehmen", "advanceTo(scenario.thirtyfour)"],["Beten", "advanceTo(scenario.thirtyfive)"]]
  },
  eight: { 
    image: 'platzhalter.png',
    text: "Auch wenn es sicher schwerfällt, seine eigenen Familienmitglieder zurückzulassen, ist es die beste Möglichkeit um sich selbst und seine restliche Familie vor weiteren Infektionen zu schützen. Da die Familien auch schon im Mittelalter zusammengehalten haben, wurde diese Maßnahme nicht immer gesetzt und daraufhin war oft die ganze Familie von der Pest befallen. Du scheinst dich ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass als der örtliche Bischof alleine nicht mehr mit der Lage des Dorfes zurecht kommt, dich um Rat bittet, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof?",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.seventeen)"]]
  },
  nine: {
    image: 'platzhalter.png',
    text: "Super! Die Quarantäne ist bis heute die effektivste Möglichkeit, um die Ausbreitung ansteckender Krankheiten einzudämmen. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten?",
    buttons: [["Ratte", "advanceTo(scenario.nineteen)"],["Katze", "advanceTo(scenario.thirtyeight)"],["Kein Haustier", "advanceTo(scenario.ten)"],["Hund", "advanceTo(scenario.thirtyseven)"]]
  },
  ten: {
    image: 'platzhalter.png',
    text: "Du hörst nicht auf denen Bekannten, schließlich hat während der Pest an den Hafen gezogen. Er scheint dir also nicht so gut informiert zu sein. Sich kein Haustier zu zulegen ist wahrscheinlich die beste Wahl - Ein Flohteppich weniger im Haushalt. Du hast die Pest fast überstanden! Glaubst du, du hast dich mit der Pest infiziert?",
    buttons: [["Nein", "advanceTo(scenario.eleven)"],["Ja", "advanceTo(scenario.fourtysix)"]]
  },
  eleven: {
    image: 'platzhalter.png',
    text: "Herzlichen Glückwunsch! Du hast es geschafft dich nicht mit der Pest zu infizieren! Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  twelve: {
    image: 'platzhalter.png',
    text: "Mit einer Wohnung am Hafen hat man einen tollen Meerblick. Jedoch sind sie nicht der beste Wohnort zu Zeit der Pest. Du musst daher ab jetzt besonders auf der Hut sein, um dich nicht anzustecken! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf! Aber Achtung, nur weil deine Wohnung nah am Hafen liegt, solltest du nicht unbedingt einen maritinen Beruf ergreifen. Welchen Beruf würdest du zur Zeit der Pest wählen?",
    buttons: [["Totengräber", "advanceTo(scenario.five)"],["Seemann", "advanceTo(scenario.thirteen)"],["Geistlicher", "advanceTo(scenario.twentyseven)"],["Fahrender Händler", "advanceTo(scenario.twentyeight)"]]
  },
  thirteen: {
    image: 'abstand.png',
    text: "Da muss dir wohl etwas engangen sein. Seemann ist keine gute Wahl. Mit vielen anderen Männern unter schlechten Hygienebedingungen auf engem Raum zu leben, sowie unzählige Ratten machen das Arbeiten auf einem Schiff zu einer schlechten Wahl. Man lebte unter Bedingungen die optimal für eine Verbreitung der Pest ware. Nach einiger Zeit, bekommst du auch noch zu hören, dass sich die Pest mittlerweile weiter ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden. Wie könntest du dich vor einer Ansteckung der Pest schützen?", 
    buttons: [["Abstand halten", "advanceTo(scenario.fourteen)"],["Maske tragen", "advanceTo(scenario.six)"],["Tiere streicheln", "advanceTo(scenario.twentynine)"],["Gewand nicht wechseln", "advanceTo(scenario.thirtyone)"]]
  },
  fourteen: {
    image: 'platzhalter.png',
    text: "Sich von anderen Menschen fernhalten, wäre wahrscheinlich die beste Option gewesen,genau! So ging man Flöhen und kranken Personen aus dem Weg. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest?",
    buttons: [["Kirche", "advanceTo(scenario.thirty)"],["Marktplatz", "advanceTo(scenario.thirtytwo)"],["Krankenhaus", "advanceTo(scenario.fifthteen)"],["Wohnheim", "advanceTo(scenario.seven)"]]
  },
  fifthteen: {
    image: 'platzhalter.png',
    text: "Obwohl man sich Krankenhäuser heutzutage als sehr saubere und sichere Orte vorstellt, war die Situation im Mittelalter genau umgekehrt. Viele Infizierte wurden in Krankenhäusern behandelt und durch die schlechten Hygienebedingungen wurden sie zu einem Infektions-Hotspot. Es wäre also keine gute Idee, sich in ein Haus voll Pestkranker zu begeben. Daher ist es kaum verwunderlich, dass eines deiner Familienmitglieder Symptome einer Pesterkrankung zeigt. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden?",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eight)"],["Das Familienmitglied pflegen", "advanceTo(scenario.sixthteen)"],["Einen Aderlass vornehmen", "advanceTo(scenario.thirtyfour)"],["Beten", "advanceTo(scenario.thirtyfive)"]]
  },
  sixthteen: {
    image: 'platzhalter.png',
    text: "Ohje, bald geht deine ganze Familie zu Grunde! Obwohl das Pflegen die familienfreundlichste Möglichkeit ist, führt sie hier leider nicht zum Ziel. Im Mittelalter gibt es noch keine guten Behandlungsmöglichkeiten, und es ist wahrscheinlicher, sich selbst mit der Pest anzustecken, als das angesteckte Familienmitglied von der Krankheit zu befreien. Leider bist du nicht der einzige, der nicht weiß, wie man mit der Pest umzugehen hat. Dennoch bittet dich der örtliche Bischof, welcher alleine nicht mit der Lage des Dorfes zurecht kommt, um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof?",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.seventeen)"]]
  },
  seventeen: {
    image: 'platzhalter.png',
    text: "Die damaligen Bischöfe versuchten die Ansteckungen tatsächlich durch Bußprozessionen zu verringern, die großen Menschenmengen, bei denen sie stattfanden, kamen leider nicht zu Vorteil. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten?",
    buttons: [["Ratte", "advanceTo(scenario.nineteen)"],["Katze", "advanceTo(scenario.thirtyeight)"],["Kein Haustier", "advanceTo(scenario.eightteen)"],["Hund", "advanceTo(scenario.thirtyseven)"]]
  },
  eightteen: {
    image: 'platzhalter.png',
    text: "Da hast du noch einmal die Kurve bekommen! Gut, dass du dir keinen weiteren Flohteppich in den Haushalt geholt hast. Du scheinst dich jedoch irgendwo mit der Pest angsteckt haben. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das?",
    buttons: [["Kind", "advanceTo(scenario.fourtythree)"],["Jugendlicher", "advanceTo(scenario.fourtyfour)"],["Erwachsener", "advanceTo(scenario.fourtyfive)"]]
  },
  nineteen: {
    image: 'platzhalter.png',
    text: "Eine Ratte als Haustier zu nehmen wäre so, als würde man sich die Pest per Post nach Hause bestellen, deshalb lieber nicht! Leider ist es dazu gekommen, dass du dich mit der Pest infiziert hast. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das?",
    buttons: [["Kind", "advanceTo(scenario.fourtythree)"],["Jugendlicher", "advanceTo(scenario.fourtyfour)"],["Erwachsener", "advanceTo(scenario.fourtyfive)"]]
  },
  twenty: {
    image: 'platzhalter.png',
    text: "Da sich in Handelsstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest eingeschleppt wurde. Daher ist dies keine gute Wahl. Sei daher ab jetzt besonders vorsichtig! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf! Welchen Beruf würdest du zur Zeit der Pest wählen?",
    buttons: [["Totengräber", "advanceTo(scenario.five)"],["Seemann", "advanceTo(scenario.thirteen)"],["Geistlicher", "advanceTo(scenario.twentyone)"],["Fahrender Händler", "advanceTo(scenario.twentyeight)"]]
  },
  twentyone: {
    image: 'abstand.png',
    text: "Es schein, als hättest du nicht nur bei deinem Wohnort eine falsche Entscheidung getroffen. Geistliche hatten während der Zeit der Pest keine angenehme Arbeit. Menschenversammlungen in der Kirche waren Gang und Gebe. Kranken Menschen die Sterbesakramente zu geben stellte ebenfalls eine erhöhte Infektionsgefahr da. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden. Wie könntest du dich vor einer Ansteckung der Pest schützen?",
    buttons: [["Abstand halten", "advanceTo(scenario.fourteen)"],["Maske tragen", "advanceTo(scenario.twentytwo)"],["Tiere streicheln", "advanceTo(scenario.twentynine)"],["Gewand nicht wechseln", "advanceTo(scenario.thirtyone)"]]
  },
  twentytwo: {
    image: 'platzhalter.png',
    text: "Du entscheidest dich eine Maske zu tragen. Gegen eine Infektion über den Floh, hilft eine Gesichtsmaske leider nicht. Gegen die Tröpfcheninfektion über einen anderen Menschen Hilft sie hingegen schon. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest?",
    buttons: [["Kirche", "advanceTo(scenario.fourthy)"],["Marktplatz", "advanceTo(scenario.thirtytwo)"],["Krankenhaus", "advanceTo(scenario.fifthteen)"],["Wohnheim", "advanceTo(scenario.twentythree)"]]
  },
  twentythree: {
    image: 'platzhalter.png',
    text: "Super! Das eigene Haus war üblicherweise der sicherste Ort, solange man keinen Besuch empfing und niemand in der Familie krank war. Jedoch treffen keine guten Neuigkeiten ein – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.twentyfour)"],["Das Familienmitglied pflegen", "advanceTo(scenario.sixteen)"],["Einen Aderlass vornehmen", "advanceTo(scenario.thirtyfour)"],["Beten", "advanceTo(scenario.fourtyone)"]]
  },
  twentyfour: {
    image: 'platzhalter.png',
    text: "Auch wenn es sicher schwerfällt, seine eigenen Familienmitglieder zurückzulassen, ist es die beste Möglichkeit um sich selbst und seine restliche Familie vor weiteren Infektionen zu schützen. Da die Familien auch schon im Mittelalter zusammengehalten haben, wurde diese Maßnahme nicht immer gesetzt und daraufhin war oft die ganze Familie von der Pest befallen. Du scheinst dich inzwischen ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass dich die Menschen deines Dorfes um Rat bitten, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du den Bewohnern?",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.twentyfive)"]]
  },
  twentyfive: {
    image: 'platzhalter.png',
    text: "Die damaligen Bischöfe versuchten die Ansteckungen tatsächlich durch Bußprozessionen zu verringern, die großen Menschenmengen, bei denen sie stattfanden, kamen leider nicht zu Vorteil. Daher ist es kaum verwunderlich, dass du als Geistlicher auch diesen Weg wählen würdest. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten?",
    buttons: [["Ratte", "advanceTo(scenario.nineteen)"],["Katze", "advanceTo(scenario.thirtyeight)"],["Kein Haustier", "advanceTo(scenario.eightteen)"],["Hund", "advanceTo(scenario.thirtyseven)"]]
  },
  twentysix: {
    image: 'platzhalter.png',
    text: "Leider konnte man der Pest damals auch nicht entkommen. Gib nicht auf! Du entscheidest dich, ein Haus in den Bergen, abseits von einem kleinen Dorf als neue Heimat zu wählen. Je abgelegener desto besser, hier wird die Pest hoffentlich nicht herfinden! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf! Welchen Beruf würdest du zur Zeit der Pest wählen?",
    buttons: [["Totengräber", "advanceTo(scenario.five)"],["Seemann", "advanceTo(scenario.thirteen)"],["Geistlicher", "advanceTo(scenario.twentyseven)"],["Fahrender Händler", "advanceTo(scenario.twentyeight)"]]
  },
  twentyseven: {
    image:'abstand.png',
    text: "Geistliche hatten während der Zeit der Pest keine angenehme Arbeit. Menschenversammlungen in der Kirche waren Gang und Gebe. Kranken Menschen die Sterbesakramente zu geben stellte ebenfalls eine erhöhte Infektionsgefahr da. Sei daher auf der Hut, um dich nicht zu infizieren! Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden. Wie könntest du dich vor einer Ansteckung der Pest schützen?",
    buttons: [["Abstand halten", "advanceTo(scenario.fourteen)"],["Maske tragen", "advanceTo(scenario.twentytwo)"],["Tiere streicheln", "advanceTo(scenario.twentynine)"],["Gewand nicht wechseln", "advanceTo(scenario.thirtyone)"]]
  },
  twentyeight: {
    image:'abstand.png',
    text: "Fahrender Händler, NAME! Als Händler nicht an einen Ort gebunden zu sein, war sicher gut. Ob viele Händler überlebt haben, ist nicht bekannt. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf, abgelegen in den Bergen, neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden. Wie könntest du dich vor einer Ansteckung der Pest schützen?",
    buttons: [["Abstand halten", "advanceTo(scenario.fourteen)"],["Maske tragen", "advanceTo(scenario.six)"],["Tiere streicheln", "advanceTo(scenario.twentynine)"],["Gewand nicht wechseln", "advanceTo(scenario.thirtyone)"]]
  },
  twentynine: {
    image: 'platzhalter.png',
    text: "Während der Pest sollte man sich auch vom süßesten Kätzchen fernhalten. Die Pestflöhe kamen zwar von den Ratten, konnten aber auch auf andere Lebewesen überspringen. Einige Wochen vergehen und du hast hoffentlich aus deinen Fehlern gelernt - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest?",
    buttons: [["Kirche", "advanceTo(scenario.thirty)"],["Marktplatz", "advanceTo(scenario.thirtytwo)"],["Krankenhaus", "advanceTo(scenario.fifthteen)"],["Wohnheim", "advanceTo(scenario.seven)"]]
  },
  thirty: {
    image: 'platzhalter.png',
    text: "Die Kirche ist kein guter Ort sich während der Pestpandemie aufzuhalten, NAME. Das Risiko, das einer der anderen Kirchgänger die Pest hat und ansteckend ist, ist viel zu hoch. Generell gilt: Menschenmassen sollten bestmöglich gemieden werden. Du versuchst daher in Zukunft solche Orte zu meiden. Jedoch gibt es dennoch keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eight)"],["Das Familienmitglied pflegen", "advanceTo(scenario.thirtythree)"],["Einen Aderlass vornehmen", "advanceTo(scenario.thirtyfour)"],["Beten", "advanceTo(scenario.thirtyfive)"]]
  },
  thirtyone: {
    image: 'platzhalter.png',
    text: "Das eigene Gewand nicht zu wechseln, wäre eine fatale Entscheidung. Dann seid ihr ein Vergnügungspark für Flöhe. Und für die Pest. Einige Wochen vergehen und du hast hoffentlich aus deinen Fehlern gelernt - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten. Welcher Ort ist sicher zur Zeit der Pest?",
    buttons: [["Kirche", "advanceTo(scenario.thirty)"],["Marktplatz", "advanceTo(scenario.thirtytwo)"],["Krankenhaus", "advanceTo(scenario.fifthteen)"],["Wohnheim", "advanceTo(scenario.seven)"]]
  },
  thirtytwo: {
    image: 'platzhalter.png',
    text: "Der Marktplatz ist so wie alle anderen öffentlichen Plätze kein guter Ort, um sich währen der Pestpandemie aufzuhalten. Es besteht ein hohes Risiko, dass man von einem Passanten mit der Pest angesteckt wird. Du versuchst daher in Zukunft solche Orte zu meiden. Jedoch gibt es dennoch keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden?",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eight)"],["Das Familienmitglied pflegen", "advanceTo(scenario.thirtythree)"],["Einen Aderlass vornehmen", "advanceTo(scenario.thirtyfour)"],["Beten", "advanceTo(scenario.thirtyfive)"]]
  },
  thirtythree: {
    image: 'platzhalter.png',
    text: "Obwohl dies wohl die familienfreundlichste Möglichkeit ist, führt sie hier leider nicht zum Ziel. Im Mittelalter gibt es noch keine guten Behandlungsmöglichkeiten, und es ist wahrscheinlicher, sich selbst mit der Pest anzustecken, als das angesteckte Familienmitglied von der Krankheit zu befreien. Du scheinst dich inzwischen ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass als der örtliche Bischof alleine nicht mehr mit der Lage des Dorfes zurecht kommt, dich um Rat bittet, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.seventeen)"]]
  },
  thirtyfour: {
    image: 'platzhalter.png',
    text: "Der Aderlass ist eine Behandlungsmethode, die während der Pestpandemie oft von Medizinern vorgenommen wurde. Heute weiß man, dass dies dem Erkrankten mehr geschadet als geholfen hat, deswegen ist davon definitiv abzurate! Du scheinst dich noch nicht gut genug mit der Pest auszukennen. Du scheinst jedoch eine der wenigen Personen im Dorf zu sein, denen es noch gut geht. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof?",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.seventeen)"]]
  },
  thirtyfive: {
    image: 'platzhalter.png',
    text: "Viele hielten damals den Ausbruch der Pest für eine Strafe Gottes. Auch wenn die Krankheit dadurch nicht gelindert wurde, wendeten sich die Menschen in Zeiten der Not an den Gott. Da der Wissensstand über Infektionskrankheiten im Mittelalter noch sehr gering war, hat den Glauben der Bevölkerung an das Übersinnliche noch weiter verstärkt. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof?",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.seventeen)"]]
  },
  thirtysix: {
    image: 'platzhalter.png',
    text: "Das Ausräuchern von Häusern war eine Methode, die im Mittelalter oft praktiziert wurde. Ob sie tatsächlich etwas gebracht hat, ist nicht bekannt. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten?",
    buttons: [["Ratte", "advanceTo(scenario.nineteen)"],["Katze", "advanceTo(scenario.thirtyeight)"],["Kein Haustier", "advanceTo(scenario.eightteen)"],["Hund", "advanceTo(scenario.thirtyseven)"]]
  },
  thirtyseven: {
    image: 'platzhalter.png',
    text: "Hunde fangen leicht pestbefallene Flöhe auf, die widerum Menschen anstecken können. Keine gute Idee. Bleib weiterhin achtsam! Du hast die Pest fast überstanden! Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das?",
    buttons: [["Kind", "advanceTo(scenario.fourtythree)"],["Jugendlicher", "advanceTo(scenario.fourtyfour)"],["Erwachsener", "advanceTo(scenario.fourtyfive)"]]
  },
  thirtyeight: {
    image: 'platzhalter.png',
    text: "Katzen können zwar mit Flöhen befallene Ratten fangen, sie können aber auch selber Flöhe haben. Deshalb sollte man sich lieber keine Katze als Haustier nehmen. Bleib weiterhin achtsam! Du hast die Pest fast überstanden! Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das?",
    buttons: [["Kind", "advanceTo(scenario.fourtythree)"],["Jugendlicher", "advanceTo(scenario.fourtyfour)"],["Erwachsener", "advanceTo(scenario.fourtyfive)"]]
  },
  thirtynine: {
    image: 'platzhalter.png',
    text: "Leider konnte man der Pest damals auch nicht entkommen. Bleib weiterhin achtsam! Du hast die Pest fast überstanden! Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das?",
    buttons: [["Kind", "advanceTo(scenario.fourtythree)"],["Jugendlicher", "advanceTo(scenario.fourtyfour)"],["Erwachsener", "advanceTo(scenario.fourtyfive)"]]
  },
  fourty: {
    image: 'platzhalter.png',
    text: "Das Ausräuchern von Häusern war eine Methode, die im Mittelalter oft praktiziert wurde. Ob sie tatsächlich etwas gebracht hat, ist nicht bekannt. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. Welches Haustier wäre zur Zeit der Pest am besten?",
    buttons: [["Das infizierte Familienmitglied zurücklassen", "advanceTo(scenario.eight)"],["Das Familienmitglied pflegen", "advanceTo(scenario.thirtythree)"],["Einen Aderlass vornehmen", "advanceTo(scenario.thirtyfour)"],["Beten", "advanceTo(scenario.thirtyfive)"]]
  },
  fourtyone: {
    image: 'platzhalter.png',
    text: "Als Geistlicher würdest du vermutlich zum beten tendieren. Viele hielten damals den Ausbruch der Pest für eine Strafe Gottes. Auch wenn die Krankheit dadurch nicht gelindert wurde, wendeten sich die Menschen in Zeiten der Not an den Gott. Da der Wissensstand über Infektionskrankheiten im Mittelalter noch sehr gering war, hat den Glauben der Bevölkerung an das Übersinnliche noch weiter verstärkt. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern. Welche Maßnahmen empfiehlst du dem Bischof?",
    buttons: [["Häuser ausräuchern", "advanceTo(scenario.thirtysix)"],["Quarantäne", "advanceTo(scenario.nine)"],["Bußprozessionen", "advanceTo(scenario.seventeen)"]]
  },
  fourtytwo: {
    image: 'platzhalter.png',
    text: "Mit vielen anderen Männern unter schlechten Hygienebedingungen auf engem Raum zu leben, sowie unzählige Ratten machen das Leben auf einem Schiff zu einer schlechten Wahl. Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf!Welchen Beruf würdest du zur Zeit der Pest wählen?",
    buttons: [["Totengräber", "advanceTo(scenario.five)"],["Seemann", "advanceTo(scenario.thirteen)"],["Geistlicher", "advanceTo(scenario.twentyseven)"],["Fahrender Händler", "advanceTo(scenario.twentyeight)"]]
  },
  fourtythree: {
    image: 'platzhalter.png',
    text: "Das wegen des Alters noch schwache Immunsystem sowie die im Mittelalter übliche Unterernährung von Kindern sind beides Faktoren, die sich negativ auf die Überlebenschance von Kindern ausgewirkt hat. Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  fourtyfour: {
    image: 'platzhalter.png',
    text: "Das wegen des Alters noch schwache Immunsystem sowie die im Mittelalter übliche Unterernährung von Jugendlichen sind beides Faktoren, die sich negativ auf die Überlebenschance von Jugendlichen ausgewirkt hat. Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  fourtyfive: {
    image: 'platzhalter.png',
    text: "Richtig! Erwachsene hatten meistens ein stärkeres Immunsystem und bessere Abwehrkräfte als Kinder und Jugendlichen und haben die Pest daher eher überstanden. Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  fourtysix: {
    image: 'platzhalter.png',
    text: " Du hast es geschafft dich nicht mit der Pest zu infizieren! Herzlichen Glückwunsch! Wenn du möchtest kannst du noch einmal spiele, vielleicht nimmt die Geschichte diesmal einen anderen Verlauf...",
    buttons: [["Noch einmal spielen", "advanceTo(scenario.two)"]]
  },
  fourtyseven: {
    image: 'platzhalter.png',
    text: "Du scheinst dich irgendwo mit der Pest angsteckt haben. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Welche glaubst du ist das?",
    buttons: [["Kind", "advanceTo(scenario.fourtythree)"],["Jugendlicher", "advanceTo(scenario.fourtyfour)"],["Erwachsener", "advanceTo(scenario.fourtyfive)"]]
  },
};

advanceTo(scenario.one);


buttons: [["Click here to restart", "advanceTo(scenario.two)"]]
