function Sentence(){
	this.value = buildSentence();
}

function buildSentence(){
	var raw = createRaw();
	return cleanUp(raw);
}

//Logic

function createRaw(){
	var line = "";
	var cur  = "";
	if (Math.round(Math.random()*5) == 0){
		cur = new ClauseDep();
	}else{
		cur = new ClauseInd();
		if (Math.round(Math.random()) == 0){
			line += cur.value;
			return line;
		}
	}
	line += cur.value + " ";

	do{
		if (Math.round(Math.random()*4) == 0){
			if (cur instanceof ClauseDep){
				line += "," + new ConjCoor().value + " ";
			}else{
				cur = new ClauseDep();
				line += cur.value + " ";
				return line;
			}
			cur = new ClauseDep();
		}else{
			line += ",";
			if (cur instanceof ClauseInd){
				line += new ConjCoor().value + " ";
			}
			cur = new ClauseInd();
		}
		line += cur.value + " ";
	}
	while (Math.round(Math.random()*4) == 0 || cur instanceof ClauseDep);
	return line;
}

//Miscellaneous utilities

function cleanUp(line){
	line = addPeriod (line);
	line = equalizeSpaces(line);
	line = normalizeCommas(line);
	line = capitalizeFirstLetter(line);
	line = fixAnAndA(line);

	return line;
}

function equalizeSpaces(line){
	while (line.includes("  ")){
		line = replaceAll(line, "  ", " ");
	}
	return line;
}

function normalizeCommas(line){
	while (line.indexOf(", ") > -1 || line.indexOf(" ,") > -1){
		line = replaceAll(line, ", ", ",");
		line = replaceAll(line, " ,", ",");
	}
	line = replaceAll(line, ",", ", ");
	return line;
}

function addPeriod(line){
	line += ".";
	while (line.indexOf(" .") > -1){
		line = line.replace(" .", ".");
	}
	return line;
}

function fixAnAndA(line){
	line = replaceAll(line, " a a", " an a");
	line = replaceAll(line, " a e", " an e");
	line = replaceAll(line, " a i", " an i");
	line = replaceAll(line, " a o", " an o");
	line = replaceAll(line, "A a", " An a");
	line = replaceAll(line, "A e", " An e");
	line = replaceAll(line, "A i", " An i");
	line = replaceAll(line, "A o", " An o");

	return line;
}

function capitalizeFirstLetter(line){
	return line.charAt(0).toUpperCase() + line.slice(1);
}

function replaceAll(target, search, replacement){
	return target.replace(new RegExp(search, 'g'), replacement);
}



