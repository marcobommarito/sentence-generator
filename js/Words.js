function Adj(){
	this.list = [
		"small",
		"large",
		"green",
		"handsome",
		"repugnant",
		"silly",
		"fascinating",
		"horrific",
		"repulsive",
		"gregarious",
		"furtive",
		"laborious",
		"fastidious",
		"compelling",
		"ignoble",
		"complacent",
		"sickening",
		"disquieting",
		"disruptive",
		"Vietnamese",
		"crusty",
		"rejected",
		"dissheveled",
		"average",
		"tall",
		"disgusting",
		"beautiful",
		"sexual",
		"attractive",
		"sensual",
		"repulsive",
		"lanky",
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"black",
		"white",
		"beige",
		"plaid",
		"fun",
		"entertaining",
		"relaxing",
		"jarring",
		"terrifying",
		"disgruntled",
		"violent",
		"intriguing",
		"smooth",
		"rough",
		"bumpy",
		"stinky",
		"pleasant",
		"unpleasant",
		"malodorous",
		"appreciable",
		"respectable",
		"damp",
		"moist",
		"dusty",
		"frenetic",
		"racist",
		"hygenic",
		"convenient",
		"repressed",
		"unbelieving",
		"bite-sized",
		"chivalrous",
		"sour",
		"bitter",
		"salty",
		"discharged",
		"voluptuous",
		"sweet",
		"savory",
		"spicy",
		"squealing",
		"envious",
		"jealous",
		"drafty",
		"quarrelsome",
		"rambunctious",
		"sassy",
		"peaceful",
		"troubled",
		"angsty",
		"dull",
		"unoriginal",
		"boring",
		"tidy",
		"unsightly",
		"disbelieving",
		"deceptive",
		"messy",
		"naughty",
		"excitable",
		"modern",
		"frightened",
		"stereotypical",
		"embarrassed",
		"threatening",
		"omniscient",
		"honorable",
		"disoriented",
		"stalwart",
		"obnoxious",
		"sad",
		"exhilarating",
		"pint-sized",
		"slippery",
		"esoteric",
		"vitriolic",
		"illegal",
		"nasty",
		"gritty",
		"blunt",
		"inflammatory",
		"voracious",
		"debilitating",
		"jolly",
		"gassy",
		"runny",
		"infamous",
		"inundated",
		"flabby",
		"floppy",
		"outrageous",
		"rippled",
		"grooved",
		"knurled",
		"grubby",
		"rank",
		"ungodly",
		"flabbergasted",
	];
	this.value = pickFromArray(this.list);
}

function Adverb(){
	this.list = [
		"slowly",
		"quickly",
		"rapidly",
		"fervently",
		"vehemently",
		"strongly",
		"portentiously",
		"invasively",
		"intelligently",
		"belatedly",
		"hesitantly",
		"eagerly",
		"astoundingly",
		"barely",
		"haphazardly",
		"insistently",
		"gingerly",
		"delicately",
		"violently",
		"sloppily",
		"half-heartedly",
		"unbelievably",
		"undoubtedly",
		"lethargically",
		"reluctantly",
		"insubordinately",
		"still",
		"boastfully",
		"irritably",
		"cheerfully",
		"subtly",
		"quietly",
		"voluntarily",
		"oddly",
		"unnaturally",
		"briefly",
		"calmly",
		"conceitedly",
		"abnormally",
		"thoroughly",
		"steadily",
		"adroitly",
		"keenly",
		"officially",
		"hastily",
		"wonderfully",
		"easily",
		"playfully",
		"painfully",
		"repeatedly",
		"merrily",
		"offensively",
		"madly",
		"optimistically",
		"auspiciously",
		"wrongly",
		"lightly",
		"properly",
		"sternly",
		"merely",
		"hopefully",
		"never",
		"promptly",
		"diligently",
		"numbly",
		"distractedly",
		"fondly",
		"rudely",
		"only",
		"sexually",
		"adamantly",
		"utterly",
		"vivaciously",
		"graciously"
	];
	this.value = pickFromArray(this.list);
}

function Noun(){
	this.list = [
		"dog",
		"human",
		"table",
		"bookshelf",
		"oligarchy",
		"sock",
		"photograph",
		"grandmother",
		"father",
		"taxi",
		"utility",
		"pair of glasses",
		"glass",
		"piccolo",
		"accordion",
		"criminal",
		"salmon",
		"billboard",
		"uncle",
		"fingernail",
		"pillow",
		"addict",
		"baseball",
		"lampshade",
		"lightbulb",
		"lawyer",
		"doctor",
		"spatter",
		"philosopher",
		"cardiologist",
		"gynocologist",
		"detective",
		"pencil",
		"shirt",
		"black hole",
		"singularity",
		"discharge",
		"pastry",
		"manhole",
		"splat",
		"tongue",
		"bell",
		"bear",
		"vegetable",
		"instrument",
		"musket",
		"camera",
		"television",
		"stag beetle",
		"website",
		"cable",
		"hook",
		"fish",
		"toenail",
		"disease",
		"ambulance",
		"toy",
		"gymnast",
		"dietician",
		"Republican",
		"Democrat",
		"upholstery",
		"locomotive",
		"plaything",
		"oatmeal",
		"applesauce",
		"periodical",
		"newspaper",
		"novella",
		"chihuahua",
		"deodorant",
		"sponge",
		"gorilla",
		"inner mechanism",
		"benefactor",
		"head executive",
		"Creationist",
		"feminist",
		"racist",
		"policeman",
		"nudist",
		"rapper",
		"dancer",
		"gallbladder",
		"teacher",
		"professor",
		"pacifist",
		"vegetarian",
		"grandfather",
		"sister",
		"mother",
		"umbrella",
		"appliance",
		"frog",
		"substance",
		"curtain",
		"soap",
		"pig",
		"oven",
		"strudel",
		"toaster",
		"cat",
		"brother",
		"brothel",
		"turkey",
		"stew",
		"soup",
		"cheesesteak",
		"cheese",
		"church",
		"man",
		"woman",
		"boy",
		"girl",
		"goat",
		"sheep",
		"berry",
		"glove",
		"stain",
		"governor",
		"cook",
		"infant",
		"hummingbird",
		"moose",
		"goose",
		"pediatrician",
		"congressman",
		"inner thigh",
		"tooth",
		"nipple",
		"nose",
		"roll",
		"muffin",
		"whale",
		"upper lip",
		"pope",
		"Italian",
		"airplane",
		"airbus",
		"cheek",
		"cavity",
		"lavatory",
		"worker",
		"facility",
		"politician",
		"neighbor",
		"immigrant",
		
	];
	this.value = pickFromArray(this.list);
}

function VerbIntrans(){
	this.list = [
		"ran",
		"flew",
		"pondered",
		"ate",
		"walked",
		"vomited",
		"slept",
		"napped",
		"danced",
		"disrobed",
		"sat",
		"worked",
		"mourned",
		"tiptoed",
		"deflated",
		"oscillated",
		"somersaulted",
		"sang",
		"pretended",
		"ruptured",
		"gave birth",
		"collapsed",
		"squatted",
		"exercised",
		"spattered",
		"overflowed",
		"overturned",
		"squirted",
		"rehearsed",
		"did push-ups",
		"gargled",
		"showered",
		"retreated",
	];
	this.value = pickFromArray(this.list);
}

function VerbTrans(){
	this.list = [
		"ate",
		"pushed",
		"kicked",
		"donned",
		"retrieved",
		"pet",
		"stimulated",
		"shot",
		"painted",
		"rode",
		"elevated",
		"summoned",
		"murdered",
		"gave",
		"saw",
		"consumed",
		"caught",
		"kidnapped",
		"assaulted",
		"presented",
		"took",
		"swapped",
		"created",
		"built",
		"dismantled",
		"vindicated",
		"injested",
		"dislodged",
		"regurgitated",
		"stroked",
		"yanked",
		"believed in",
		"broke",
		"produced",
		"brushed",
		"approved of",
		"purchased"
	];
	this.value = pickFromArray(this.list);
}

function Interj(){
	this.list = [
		"Hark!",
		"Whoa!",
		"Oh, no!",
		"Oh, God!",
		"Oh, my God!",
		"No way!",
		"Yikes!",
		"Ouch!",
		"Eww!",
		"Aaah!",
		"Aaagh!",
		"Help!",
		"Yes!",
		"Noooo!",
		"Damn!",
		"Look!",
		"Hey!",
		"Stop!"
	];	
	this.value = pickFromArray(this.list);
}

function Article(){
	this.list = [
		"the",
		"a",
		"my",
		"your",
		"his",
		"our",
	];
	this.value = pickFromArray(this.list);
}

function ConjCoor(){
	this.list = [
		"for",
		"and",
		"but",
		"yet",
		"so",
		"then",
	];
	this.value = pickFromArray(this.list);
}

function ConjSub(){
	this.list = [
		"while",
		"after",
		"since",
		"because",
		"although",
		"until",
		"even though",
		"given that",
	];
	this.value = pickFromArray(this.list);
}



function Prep(){
	this.list = [
		"under",
		"after",
		"with",
		"before",
		"regarding",
		"around",
		"within",
		"inside",
	];
	this.value = pickFromArray(this.list);
}

function RelObjPronoun(){
	this.list = [
		"that",
	];
	this.value = pickFromArray(this.list);
}

function RelSubjPronoun(){
	this.list = [
		"whoever",
		"whatever",
	];
	this.value = pickFromArray(this.list);
}

function Trigger(){
	this.list = [
		"after",
		"without",
		"through",
		"beside",
		"with",
		"because of",
		"in opposition to",
		"in front of",
		"inside",
		"within",
	];
	this.value = pickFromArray(this.list);
}

function pickFromArray(array){
	return array[Math.floor(Math.random()*(array.length))];
}
