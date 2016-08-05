function ComplxSubj(){
	this.value = buildComplxSubj();
}

function buildComplxSubj(){
	var line = "";
	
	if (Math.round(Math.random()*10) == 0){
		line += new ClauseNoun().value + " ";
		return line;
	}
	
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
	

	if (Math.round(Math.random()*10) == 0){
		line += new ClauseAdj().value + " ";
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

	if (Math.round(Math.random()*6) == 0){
		line += new VerbTrans().value + " ";
		line += new ComplxSubj().value + " ";
	}else{
		line += new VerbIntrans().value + " ";
	}

	if (Math.round(Math.random()*3) == 0){
		line += new ClauseAdv().value + " ";
	}
	return line;
}
