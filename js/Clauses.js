function ClauseInd(){
	this.value = new ComplxSubj().value + " " 
				+ new ComplxPred().value + " ";
}

function ClauseDep(){
	this.value = new ConjSub().value + " "
				+ new ComplxSubj().value + " "
				+ new ComplxPred().value + " ";
}

function ClauseNoun(){
	this.value = new RelSubjPronoun().value + " "
				+ new ComplxPred().value + " ";
}

function ClauseAdj(){
	this.value = new RelObjPronoun().value + " "
				+ new ComplxPred().value + " ";
}

function ClauseAdv(){
	this.value = new Trigger().value + " "
				+ new ComplxSubj().value + " ";
}