
function start() {

	// https://jsonformatter.curiousconcept.com/
	var jsonData		= {"missionTags":[{"id":"male","displayName":"Male","image":"male.png"},{"id":"female","displayName":"Female","image":"female.png"},{"id":"human","displayName":"Human","image":"human.png"},{"id":"animal","displayName":"Animal","image":"animal.png"},{"id":"robot","displayName":"Robot","image":"robot.png"},{"id":"angel","displayName":"Angel","image":"angel.png"},{"id":"demon","displayName":"Demon","image":"demon.png"},{"id":"leprechaun","displayName":"Leprechaun","image":"leprechaun.png"},{"id":"orc","displayName":"Orc","image":"orc.png"},{"id":"elf","displayName":"Elf","image":"elf.png"},{"id":"dwarf","displayName":"Dwarf","image":"dwarf.png"},{"id":"dragon","displayName":"Dragon","image":"dragon.png"},{"id":"magic","displayName":"Magical","image":"magical.png"},{"id":"supernatural","displayName":"Supernatural","image":"supernatural.png"},{"id":"dps","displayName":"DPS","image":"dps.png"},{"id":"tank","displayName":"Tank","image":"tank.png"},{"id":"healer","displayName":"Healer","image":"healer.png"},{"id":"support","displayName":"Support","image":"support.png"},{"id":"gold","displayName":"Gold Finder","image":"gold.png"},{"id":"royal","displayName":"Royal","image":"royal.png"},{"id":"event","displayName":"Event","image":"event.png"}],"crusaders":[{"displayName":"The Bush Whacker","image":"Bushwacker.png","slot":1,"tags":["clicker","human","male"]},{"displayName":"RoboRabbit","image":"RoboRabbit.png","slot":1,"tags":["clicker","event","male","robot","support"]},{"displayName":"Jim the Lumberjack","image":"Jim.png","slot":2,"tags":["human","male","dps","support"]},{"displayName":"Pilot Pam","image":"Pam.png","slot":2,"tags":["human","female","dps","support","event"]},{"displayName":"Emo Werewolf","image":"Emo.png","slot":3,"tags":["animal","male","dps","supernatural"]},{"displayName":"Sally the Succubus","image":"Sally.png","slot":3,"tags":["demon","female","dps","supernatural","event"]},{"displayName":"Sasha the Fierce Warrior","image":"Sasha.png","slot":4,"tags":["human","female","support"]},{"displayName":"Groklok the Orc","image":"Groklok.png","slot":4,"tags":["orc","male","support","dps","tank","event"]},{"displayName":"The Washed Up Hermit","image":"Hermit.png","slot":5,"tags":["human","male","dps"]},{"displayName":"Kyle the Party Bro","image":"Kyle.png","slot":5,"tags":["human","male","dps","event"]},{"displayName":"Detective Kaine","image":"Kaine.png","slot":6,"tags":["human","male","gold"]},{"displayName":"Mister the Monkey","image":"Mister.png","slot":6,"tags":["animal","male","gold","event"]},{"displayName":"Larry the Leprechaun","image":"Larry.png","slot":6,"tags":["leprechaun","male","gold","magic","support","event"]},{"displayName":"The Princess","image":"Princess.png","slot":7,"tags":["female","human","support","royal"]},{"displayName":"RoboTurkey","image":"RoboTurkey.png","slot":7,"tags":["male","robot","support","event"]},{"displayName":"Natalie Dragon","image":"Natalie.png","slot":8,"tags":["female","human","gold","dps"]},{"displayName":"Jack O'Lantern","image":"Jack.png","slot":8,"tags":["male","animal","gold","tank","supernatural","event"]},{"displayName":"Jason, Master of Shadows","image":"Jason.png","slot":9,"tags":["male","human","gold","dps"]},{"displayName":"Pete the Carney","image":"Pete.png","slot":9,"tags":["male","human","support","gold","event"]},{"displayName":"Broot","image":"Broot.png","slot":9,"tags":["male","female","support","gold","tank","supernatural","event"]},{"displayName":"Artaxes, the Lion","image":"Artaxes.png","slot":10,"tags":["male","animal","support","supernatural"]},{"displayName":"Drizzle the Dark Elf","image":"Drizzle.png","slot":10,"tags":["female","elf","support","event"]},{"displayName":"Khouri, the Witch Doctor","image":"Khouri.png","slot":11,"tags":["male","human","magic","healer","support"]},{"displayName":"Momma Kaine","image":"Momma.png","slot":11,"tags":["female","human","healer","support","event"]},{"displayName":"Brogon, Prince of Dragons","image":"Brogon.png","slot":11,"tags":["male","animal","dragon","healer","support","royal","event"]},{"displayName":"Dark Gryphon","image":"Gryphon.png","slot":12,"tags":["female","animal","support","supernatural"]},{"displayName":"Rocky the Rockstar","image":"Rocky.png","slot":12,"tags":["male","human","dps","event"]},{"displayName":"Sarah, the Collector","image":"Sarah.png","slot":13,"tags":["female","human","dps"]},{"displayName":"The Metal Soldierette","image":"Soldierette.png","slot":13,"tags":["female","human","robot","dps","tank","event"]},{"displayName":"Gold Panda","image":"Panda.png","slot":14,"tags":["female","animal","gold","supernatural"]},{"displayName":"RoboSanta","image":"RoboSanta.png","slot":14,"tags":["male","robot","gold","event"]},{"displayName":"Leerion, the Royal Dwarf","image":"Leerion.png","slot":14,"tags":["male","human","dwarf","royal","gold","event"]},{"displayName":"Prince Sal, the Merman","image":"Sal.png","slot":15,"tags":["male","animal","dps","royal"]},{"displayName":"Wendy the Witch","image":"Wendy.png","slot":15,"tags":["female","human","magic","dps","event"]},{"displayName":"Robbie Raccoon","image":"Robbie.png","slot":15,"tags":["male","animal","dps","support","event"]},{"displayName":"Fire Phoenix","image":"Phoenix.png","slot":16,"tags":["female","animal","support","supernatural"]},{"displayName":"Alan the ArchAngel","image":"Alan.png","slot":16,"tags":["male","angel","support","supernatural","event"]},{"displayName":"King Reginald IV","image":"Reginald.png","slot":17,"tags":["male","human","support","royal"]},{"displayName":"Queen Siri","image":"Siri.png","slot":17,"tags":["female","human","support","gold","royal","event"]},{"displayName":"Thalia, the Thunder King","image":"Thalia.png","slot":18,"tags":["male","human","support","tank","magic","royal"]},{"displayName":"Frosty the Snowman","image":"Frosty.png","slot":18,"tags":["male","animal","dps","supernatural","event"]},{"displayName":"Merci, the Mad Wizard","image":"Merci.png","slot":19,"tags":["male","human","magic","support"]},{"displayName":"The Bat Billionaire","image":"Bat.png","slot":19,"tags":["male","human","support","event"]},{"displayName":"Nate Dragon","image":"Nate.png","slot":20,"tags":["male","human","dps","support"]}]};
	var pchCrusaders 	= document.getElementById("crusaders_holder");
	var htmlResult		= "";
	
	
	/*
	for (var i = 0; i < jsonData.missionTags.length; i++) {
		htmlResult 		+= "<img src='media/tags/" + jsonData.missionTags[i].image + "' title='" + jsonData.missionTags[i].displayName + "' class='img_tag' />";
	}
	*/

	htmlResult = "<table id='tab'>";
	htmlResult += "<thead>";
	htmlResult += "<tr>";
	htmlResult += "<th>Slot</th>";
	htmlResult += "<th colspan='2'>Crusader</th>";
	htmlResult += "<th>Tags</th>";
	htmlResult += "</tr>";
	htmlResult += "</thead>";
	
	for (var i = 0; i < jsonData.crusaders.length; i++) {
		var crusaderHolder = jsonData.crusaders[i];
		
		htmlResult += "<tr>";
		
		htmlResult += "<td>" + crusaderHolder.slot + "</td>";
		htmlResult += "<td><img src='media/portraits/" + crusaderHolder.image + "' class='img_portrait' /></td>";
		htmlResult += "<td>" + crusaderHolder.displayName + "</td>";

		htmlResult += "<td>"
		for (var j = 0; j < jsonData.missionTags.length; j++) {
			var tagHolder = jsonData.missionTags[j];
			var tagCssClass = (crusaderHolder.tags.indexOf(tagHolder.id) != -1) ? "img_tag" : "img_tag_off";
			
			htmlResult 		+= "<img src='media/tags/" + tagHolder.image + "' title='" + tagHolder.displayName + "' class='" + tagCssClass + "' />";
		}
		htmlResult += "</td>";

		htmlResult += "</tr>";
	}
	
	htmlResult += "</table>";
	
	pchCrusaders.innerHTML = htmlResult;
}






window.onload = start();

