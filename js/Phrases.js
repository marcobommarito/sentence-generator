function ComplxSubj(){
	this.value = buildComplxSubj();
}

function buildComplxSubj(){
	var line = "";

	line += new Article().value + " ";

	if (Math.round(Math.random()*3) == 0){
		if (Math.round(Math.random()*5) == 0){
			line += new Adverb().value + " ";
		}
		line += new Adj().value + " ";

		while (Math.round(Math.random()*3) == 0){
			line += ",";
			if (Math.round(Math.random()*5) == 0){
				line += new Adverb().value + " ";
			}
			line += new Adj().value + " ";
		}
	}

	line += new Noun().value + " ";

	if (Math.round(Math.random()*6) == 0){
		value += new ClauseAdj().value + " ";
	}
	return line;

}


function ComplxPred(){
	this.value = buildComplxPred();
}

function buildComplxPred(){
	var line = "";

	if (Math.round(Math.random()) == 0){
		line += new Adverb().value + " ";
	}

	if (Math.round(Math.random()) == 0){
		line += new VerbIntrans().value + " ";
	}else{
		line += new VerbTrans().value + " ";
		line += new ComplxSubj().value + " ";
	}

	if (Math.round(Math.random()*3) == 0){
		line += new ClauseAdv().value + " ";
	}
	return line;
}
