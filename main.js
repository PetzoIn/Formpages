
var routingpage = angular.module("routingpage",["ngRoute","ngAnimate","rzModule"]);
routingpage.run(["$rootScope","$http",function($rootScope,$http){
		$rootScope.mainfile = {email : "",dogname : "",catname : "",OneBreed : "",CrossBreed1 : "",CrossBreed2 : "",OneBreedc : "",CrossBreed1c : "",CrossBreed2c : "",otherbreed : "",date : "",month1 : "",year : "",ageyear : "",agemonth : "",genderanimal : "",neuteredtruebool : "",neuteredfalsebool : "",femalestage : "",pupnum : "",dogwt : "",catwt : "",dogwtslider : "",catwtslider : "",slideactdog : "",slideactcat : "",stool: "",furdog : "",furcat : "",noissues2 : "",jandm2 : "",sandc2 : "",gastro2 : "",diabetes2 : "",liver2 : "",kidney2 : "",cardiac2 : "",other2 : "",nounusual : "",mud2 : "",grass2 : "",litter2 : "",stool2 : "",cloth2 : "",licks2 : "",otherunusual : "",foodbrands : "",homemade : "",noallergies : "",egg2 : "",chicken2 : "",lamb2 : "",fish2 : "",otherallergies : "",treats: ""};
			
			/*$http
			({
				method : 'POST',
				url : '/app/'
				
			}).then(function(resp){
				console.log("Success");
			}),function(resp){
				$log.log("Error");
			};
			*/
		
		var othbrdsdr = '';
		$rootScope.otherbreedslider = '';
		$rootScope.weightslider = '';
		var wtsldr = '';
		$rootScope.weightslidercat = '';
		var wtsldrcat = '';
		$rootScope.getslider = function()
		{
			$rootScope.otherbreedslider = $rootScope.slider.value;
		}
		$rootScope.getslider2 = function()
		{
			$rootScope.weightslider = $rootScope.sliderdog.value;
		}
		$rootScope.getslider3 = function()
		{
			$rootScope.weightslidercat = $rootScope.slidercat.value;
		}
			
			$rootScope.postslider = function()
		{
		    if($rootScope.otherbreedslider == 0)
			{
			othbrdsdr = "Small";
			}
			else if($rootScope.otherbreedslider == 1)
			{
			othbrdsdr = "Medium";
			}
			else if($rootScope.otherbreedslider == 2)
			{
			othbrdsdr = "Large";
			}
			console.log(othbrdsdr);
			$rootScope.mainfile.otherbreed = othbrdsdr;
			console.log($rootScope.mainfile.otherbreed);
		}
		
			$rootScope.postslider2 = function()
		{
		    if($rootScope.weightslider == 0)
			{
			wtsldr = "Severly Underweight";
			}
			else if($rootScope.weightslider == 1)
			{
			wtsldr = "Underweight";
			}
			else if($rootScope.weightslider == 2)
			{
			wtsldr = "Ideal";
			}
			else if($rootScope.weightslider == 3)
			{
			wtsldr = "Severly Overweight";	
			}
			else if($rootScope.weightslider == 4)
			{
			wtsldr = "Obese";	
			}
			console.log(wtsldr);
			$rootScope.mainfile.dogwtslider = wtsldr;
			console.log($rootScope.mainfile.dogwtslider);
		}
		$rootScope.postslider3 = function()
		{
		    if($rootScope.weightslidercat == 0)
			{
			wtsldrcat = "Severly Underweight";
			}
			else if($rootScope.weightslidercat == 1)
			{
			wtsldrcat = "Underweight";
			}
			else if($rootScope.weightslidercat == 2)
			{
			wtsldrcat = "Ideal";
			}
			else if($rootScope.weightslidercat == 3)
			{
			wtsldrcat = "Severly Overweight";	
			}
			else if($rootScope.weightslidercat == 4)
			{
			wtsldrcat = "Obese";	
			}
			console.log(wtsldrcat);
			$rootScope.mainfile.catwtslider = wtsldrcat;
			console.log($rootScope.mainfile.catwtslider);
		}
	$rootScope.slider = {
			value: 10,
			
			
			options: {
				showSelectionBar: true,
				showTicks: true,
				id : 'sliderA',
				onEnd : $rootScope.getslider,
				stepsArray: 
				[
				{value:'<b>Small</b>',legend : 'Small'},
				{value:'<b>Medium</b>',legend : 'Medium'},
				{value:'<b>Large</b>', legend : 'Large'}
				]
				
			}   
				
	};
	
	$rootScope.sliderdog = {
    value: 10,
	options: {
		showSelectionBar: true,
		showTicks: true,
		id : 'sliderB',
		onEnd : $rootScope.getslider2,
		stepsArray: 
		[
		{value:'<b>Severly Underweight</b>',legend : 'Severly Underweight'},
		{value:'<b>Underweight</b>', legend : 'Underweight'},
		{value: '<b>Ideal</b>', legend : 'Ideal'},
		{value: '<b>Overweight</b>', legend : 'Overweight'},
		{value: '<b>Obese</b>', legend : 'Obese'}
		]
    }
	};
	$rootScope.slidercat = {
    value: 10,
	
    
    options: {
		showSelectionBar: true,
		showTicks: true,
		id : 'sliderC',
		onEnd : $rootScope.getslider3,
		stepsArray: 
		[
		{value:'<b>Severly Underweight</b>',legend : 'Severly Underweight'},
		{value:'<b>Underweight</b>', legend : 'Underweight'},
		{value: '<b>Ideal</b>', legend : 'Ideal'},
		{value: '<b>Overweight</b>', legend : 'Overweight'},
		{value: '<b>Obese</b>', legend : 'Obese'}
		]
    }
	};
	
var catactivity = '';
$rootScope.catact = '';
var dogactivity = '';
$rootScope.dogact = '';
$rootScope.getslider4 = function()
{
	$rootScope.dogact = $rootScope.slideractivitydog.value;
	$rootScope.catact = $rootScope.slideractivitycat.value;
}
$rootScope.postslider4 = function()
{
		    if($rootScope.dogact == 0)
			{
			dogactivity = "Less Active";
			}
			else if($rootScope.dogact == 1)
			{
			dogactivity = "Regular";
			}
			else if($rootScope.dogact == 2)
			{
			dogactivity = "Active";
			}
			else if($rootScope.dogact == 3)
			{
			dogactivity = "HyperActive";	
			}
			console.log(dogactivity);
			$rootScope.mainfile.slideactdog = dogactivity;
			console.log($rootScope.mainfile.slideactdog);
}
$rootScope.postslider5 = function()
{
		    if($rootScope.catact == 0)
			{
			catactivity = "Less Active";
			}
			else if($rootScope.catact == 1)
			{
			catactivity = "Regular";
			}
			else if($rootScope.catact == 2)
			{
			catactivity = "Active";
			}
			else if($rootScope.catact == 3)
			{
			catactivity = "HyperActive";	
			}
			console.log(catactivity);
			$rootScope.mainfile.slideactcat = catactivity;
			console.log($rootScope.mainfile.slideactcat);
}
$rootScope.slideractivitycat = {
    value: 10,
	
    
    options: {
		showSelectionBar: true,
		showTicks: true,
		id : 'sliderD',
		onEnd : $rootScope.getslider4,
		stepsArray: 
		[
		{value:'<b>Less Active</b>',legend : 'Less Active(30 min)'},
		{value:'<b>Regular</b>', legend : 'Regular(30-60 min)'},
		{value: '<b>Active</b>', legend : 'Active (1-2 hrs)'},
		{value: '<b>HyperActive</b>', legend : 'HyperActive (2+ hrs)'}
		]
    }
	};	

$rootScope.slideractivitydog = {
    value: 10,
	
    
    options: {
		showSelectionBar: true,
		showTicks: true,
		id : 'sliderE',
		onEnd : $rootScope.getslider4,
		stepsArray: 
		[
		{value:'<b>Less Active</b>',legend : 'Less Active(30 min)'},
		{value:'<b>Regular</b>', legend : 'Regular(30-60 min)'},
		{value: '<b>Active</b>', legend : 'Active (1-2 hrs)'},
		{value: '<b>HyperActive</b>', legend : 'HyperActive (2+ hrs)'}
		]
    }
	};	
	
var catfurtype = '';
$rootScope.catfur = '';
var dogfurtype = '';
$rootScope.dogfur = '';
$rootScope.getslider5 = function()
{
	$rootScope.dogfur = $rootScope.sliderfurtypedog.value;
	$rootScope.catfur = $rootScope.sliderfurtypecat.value;
}
$rootScope.postslider6 = function()
{
		    if($rootScope.dogfur == 0)
			{
			dogfurtype = "Shiny";
			}
			else if($rootScope.dogfur == 1)
			{
			dogfurtype = "Fair";
			}
			else if($rootScope.dogfur == 2)
			{
			dogfurtype = "Rough";
			}
			console.log(dogfurtype);
			$rootScope.mainfile.furdog = dogfurtype;
			console.log($rootScope.mainfile.furdog);
}
$rootScope.postslider7 = function()
{
		    if($rootScope.catfur == 0)
			{
			catfurtype = "Rough";
			}
			else if($rootScope.catfur == 1)
			{
			catfurtype = "Fair";
			}
			else if($rootScope.catfur == 2)
			{
			catfurtype = "Shiny";
			}
			console.log(catfurtype);
			$rootScope.mainfile.furcat = catfurtype;
			console.log($rootScope.mainfile.furcat);
}
	$rootScope.sliderfurtypedog = {
    value: 3,
	
    
    options: {
		showSelectionBar: true,
		showTicks: true,
		id : 'slideF',
		onEnd : $rootScope.getslider5,
		stepsArray: 
		[
		{value:'<b>Rough</b>',legend : 'Rough'},
		{value:'<b>Fair</b>', legend : 'Fair'},
		{value: '<b>Shiny</b>', legend : 'Shiny'}
		]
    }
	};

$rootScope.sliderfurtypecat = {
    value: 3,
	
    
    options: {
		showSelectionBar: true,
		showTicks: true,
		id : 'slideG',
		onEnd : $rootScope.getslider5,
		stepsArray: 
		[
		{value:'<b>Rough</b>',legend : 'Rough'},
		{value:'<b>Fair</b>', legend : 'Fair'},
		{value: '<b>Shiny</b>', legend : 'Shiny'}
		]
    }
	};	
		
		
		$rootScope.post = function()
		{
		console.log("The Main File is : ",$rootScope.mainfile);
		}
		
}]);

routingpage.controller("strtctrl1",["$scope","$log",function($scope,$log){

$log.log("Angular JS Initialized...")
$scope.dogclickedaction = "btn btn-primary active";
$scope.catclickedaction = "btn btn-primary";
$scope.showmedog = true;

$scope.dogclicked = function(){
$scope.dogclickedaction = "btn btn-primary active";
$scope.catclickedaction = "btn btn-primary";
$scope.showmedog = true;
$scope.showmecat = false;
};


$scope.catclicked = function(){
$scope.catclickedaction = "btn btn-primary active";
$scope.dogclickedaction = "btn btn-primary";
$scope.showmecat = true;
$scope.showmedog = false;
};
}]);

routingpage.controller("strtctrl2",["$scope","$log",function($scope,$log){
$scope.breedclickedaction = "btn btn-primary active";
$scope.crossbreedclickedaction = "btn btn-primary";
$scope.showmebreed = true;

$scope.breedclicked = function(){
$scope.breedclickedaction = "btn btn-primary active";
$scope.crossbreedclickedaction = "btn btn-primary";
$scope.showmebreed = true;
$scope.showmecrossbreed = false;
};


$scope.crossbreedclicked = function(){
$scope.crossbreedclickedaction = "btn btn-primary active";
$scope.breedclickedaction = "btn btn-primary";
$scope.showmecrossbreed = true;
$scope.showmebreed = false;
};

$scope.breeds = [{name:"Affenpinscher"},{name:"Afghan Hound"},{name:"Airedale Terrier"},{"name":"Akita"},{"name":"Alaskan Malamute"},{"name":"Australian Cattle Dog"},{"name":"Australian Kelpie"},{"name":"Australian Silky Terrier"},{"name":"Australian Terrier"},{"name":"Basenji"},{"name":"Basset Hound"},{"name":"Beagle"},{"name":"Bearded Collie"},{"name":"Bedlington Terrier"},{"name":"Bichon Frise"},{"name":"Bloodhound"},{"name":"Border Collie"},{"name":"Border Terrier"},{"name":"Borzoi"},{"name":"Boston Terrier"},{"name":"Bouvier Des Flandres"},{"name":"Boxer"},{"name":"Briard"},{"name":"British Bulldog"},{"name":"Brittany Spaniel"},{"name":"Bullmastiff"},{"name":"Bull Terrier (Miniature)"},{"name":"Bull Terrier"},{"name":"Cairn Terrier"},{"name":"Cavalier King Charles Spaniel"},{"name":"Chesapeake Bay Retriever"},{"name":"Chihuahua"},{"name":"Chinese Crested Dog"},{"name":"Chow Chow"},{"name":"Collie"},{"name":"Dachshund"},{"name":"Dachshund Miniature"},{"name":"Dalmation"},{"name":"Dandie Dinmont Terrier"},{"name":"Deerhound"},{"name":"Doberman"},{"name":"Elkhound"},{"name":"English Toy Terrier (Black & Tan)"},{"name":"Finnish Spitz"},{"name":"Fox Terrier (Smooth)"},{"name":"Fox Terrier (Wire)"},{"name":"Foxhound"},{"name":"French Bulldog"},{"name":"German Shepherd Dog"},{"name":"German Shorthaird Pointer"},{"name":"German Wirehaird Pointer"},{"name":"Great Dane"},{"name":"Greyhound"},{"name":"Griffon Bruxellois"},{"name":"Hungarian Puli"},{"name":"Hungarian Vizsla26"},{"name":"Irish Terrier"},{"name":"Irish Wolfhound"},{"name":"Italian Greyhound"},{"name":"Japanese Chin"},{"name":"Keeshond"},{"name":"Kerry Blue Terrier"},{"name":"King Charles Spaniel"},{"name":"Lakeland Terrier"},{"name":"Large Munsterlander"},{"name":"Lhasa Apso"},{"name":"Lowchen"},{"name":"Maltese"},{"name":"Manchester Terrier"},{"name":"Mastiff"},{"name":"Miniature Pinscher"},{"name":"Newfoundland"},{"name":"Norfolk Terrier"},{"name":"Norwegian Buhund"},{"name":"Norwich Terrier"},{"name":"Old English Sheepdog"},{"name":"Pekingese"},{"name":"Papillon"},{"name":"Pharoah Hound"},{"name":"Pointer"},{"name":"Pomeranian"},{"name":"Poodle (Miniature)"},{"name":"Poodle (Standard)"},{"name":"Poodle (Toy)"},{"name":"Pug"},{"name":"Pyrenean Mountain Dog"},{"name":"Retriever (Curly Coated)"},{"name":"Retriever (Flat Coated)"},{"name":"Golden Retriever"},{"name":"Labrador Retriever"},{"name":"Rhodesian Ridgeback"},{"name":"Rottweiler"},{"name":"Saluki"},{"name":"Samoyed"},{"name":"Schipperke"},{"name":"Schnauzer (Giant)"},{"name":"Schnauzer (Miniature)"},{"name":"Schnauzer"},{"name":"Scottish Terrier"},{"name":"Sealeyham Terrier"},{"name":"Setter (English)"},{"name":"Setter (Gordon)"},{"name":"Setter (Irish)"},{"name":"Shetland Sheepdog"},{"name":"Shih Tzu"},{"name":"Siberian Husky"},{"name":"Skye Terrier"},{"name":"Soft Coated Wheaten"},{"name":"Clumber Spaniel"},{"name":"Cocker Spaniel"},{"name":"American Cocker Spaniel"},{"name":"Spaniel (Field)"},{"name":"Spaniel (Irish Water)"},{"name":"Spaniel (Springer, Welsh)"},{"name":"Spaniel (Springer, English, Sussex)"},{"name":"St Bernard"},{"name":"Staffordshire Bull Terrier"},{"name":"Stumpy Tail Cattle Dog"},{"name":"Tibetan Terrier"},{"name":"Weimeraner"},{"name":"Welsh Corgi (Cardigan)"},{"name":"Welsh Corgi (Pembroke)"},{"name":"Welsh Terrier"},{"name":"West Highland White Terrier"},{"name":"Whippet"},{"name":"Yorkshire Terrier"},{"name":"Indian Spitz"},{"name":"Indian Pariah (Desi)"},{"name":"Beagle (Small)"},{"name":"Tibeatan Mastiff"},{"name":"Pitbull"},{"name":"Glen of Imaal Terrier"},{"name":"Belgian Malinois"},{"name":"Jack Russel Terrier"},{"name":"Pekingese"},{"name":"Japanese Chin"}];

}]);

routingpage.controller("strtctrl3",["$rootScope","$scope","$log",function($rootScope,$scope,$log){
$scope.breedclickedaction2 = "btn btn-primary active";
$scope.crossbreedclickedaction2 = "btn btn-primary";
$scope.otherclickedaction = "btn btn-primary";
$scope.showmebreed2 = true;
$scope.breedclicked2 = function(){
$scope.breedclickedaction2 = "btn btn-primary active";
$scope.crossbreedclickedaction2 = "btn btn-primary";
$scope.otherclickedaction = "btn btn-primary";
$scope.showmebreed2 = true;
$scope.showmecrossbreed2 = false;
$scope.showmeotherbreed = false;
};


$scope.crossbreedclicked2 = function(){
$scope.crossbreedclickedaction2 = "btn btn-primary active";
$scope.breedclickedaction2 = "btn btn-primary";
$scope.otherclickedaction = "btn btn-primary";
$scope.showmecrossbreed2 = true;
$scope.showmebreed2 = false;
$scope.showmeotherbreed = false;
};

$scope.otherclicked = function(){
$scope.crossbreedclickedaction2 = "btn btn-primary";
$scope.breedclickedaction2 = "btn btn-primary";
$scope.otherclickedaction = "btn btn-primary active";
$scope.showmecrossbreed2 = false;
$scope.showmebreed2 = false;
$scope.showmeotherbreed = true;
};

$scope.catbreeds = [{"name":"Abyssinian"},{"name":"American Bobtail"},{"name":"American Curl"},{"name":"American Shorthair"},{"name":"American Wirehair"},{"name":"Balinese"},{"name":"Bengal"},{"name":"Birman"},{"name":"Chartreux"},{"name":"Bombay"},{"name":"British Shorthair"},{"name":"Burmese"},{"name":"Burmilla"},{"name":"Chinese Li Hua"},{"name":"Colorpoint Shorthair"},{"name":"Cornish Rex"},{"name":"Cymric"},{"name":"Devon Rex"},{"name":"Domestic"},{"name":"Egyptian Mau"},{"name":"European Shorthair"},{"name":"Exotic Shorthair"},{"name":"Havana Brown"},{"name":"Himalayan"},{"name":"Japanese Bobtail"},{"name":"Javanese"},{"name":"Korat"},{"name":"LaPerm"},{"name":"Maine Coon"},{"name":"Manx"},{"name":"Nebelung"},{"name":"Norwegian Forest"},{"name":"Ocicat"},{"name":"Oriental"},{"name":"Persian"},{"name":"Ragdoll"},{"name":"Russian Blue"},{"name":"Ragamuffin"},{"name":"Savannah"},{"name":"Scottish Fold"},{"name":"Selkirk Rex"},{"name":"Siamese"},{"name":"Siberian"},{"name":"Singapura"},{"name":"Snowshoe"},{"name":"Somali"},{"name":"Sphynx"},{"name":"Tonkinese"},{"name":"Turkish Angora"},{"name":"Turkish Van"}]

var year = new Array();
var yearcount = 1992;
var ycount = 100;
$scope.years = [];
for(var j=0;j< ycount;j++)
{
	year[ycount] = yearcount;
	yearcount++;
	$scope.years.push(year[ycount])
}
var day = new Array();
var daycount = 1;
var count = 31;
$scope.days = [];
for(var i=0;i<count;i++)
{
	day[count] = daycount;
	daycount++;
	$scope.days.push(day[count]);
}
$scope.months = [{month:"January"},{month:"February"},{month:"March"},{month:"April"},{month:"May"},{month:"June"},{month:"July"},{month:"August"},{month:"September"},{month:"October"},{month:"November"},{month:"December"}];

var yearage = new Array();
var yrcount = 1;
var county = 25;
$scope.yearage = [];
for(var m=0;m<county;m++)
{
	yearage[county] = yrcount;
	yrcount++;
	$scope.yearage.push(yearage[county]);
}

var monthage = new Array();
var mthcount = 0;
var countm = 12;
$scope.monthage = [];
for(var n=0;n<countm;n++)
{
	monthage[countm] = mthcount;
	mthcount++;
	$scope.monthage.push(monthage[countm]);
}
}]);
routingpage.controller("strtctrl4",["$scope","$log",function($scope,$log){
$scope.gender = [{"sex":"M"},{"sex":"F"}];
$scope.stage = ["Normal","Pregnancy(1st Month)","Pregnancy(2nd Month)","Lactation"];
$scope.neuteredtrue = "btn btn-primary active";
$scope.neuteredfalse = "btn btn-primary";
$scope.neuteredtrueclicked = function()
{
$scope.neuteredtrue = "btn btn-primary active";
$scope.neuteredfalse = "btn btn-primary";
};
$scope.neuteredfalseclicked = function()
{
$scope.neuteredtrue = "btn btn-primary";
$scope.neuteredfalse = "btn btn-primary active";
};
}]);

routingpage.controller("strtctrl5",["$scope","$log",function($scope,$log){
$scope.gender = [{"sex":"M"},{"sex":"F"}];
$scope.stage = ["Normal","Pregnancy(1st Month)","Pregnancy(2nd Month)","Lactation"];
$scope.neuteredtrue = "btn btn-primary active";
$scope.neuteredfalse = "btn btn-primary";
$scope.neuteredtrueclicked = function()
{
$scope.neuteredtrue = "btn btn-primary active";
$scope.neuteredfalse = "btn btn-primary";
};
$scope.neuteredfalseclicked = function()
{
$scope.neuteredtrue = "btn btn-primary";
$scope.neuteredfalse = "btn btn-primary active";
};
}]);

routingpage.controller("strtctrl7",["$rootScope","$scope","$log",function($rootScope,$scope,$log){
	
	$scope.looseclickedaction = "btn btn-primary active";
	$scope.normalclickedaction = "btn btn-primary";
	$scope.hardclickedaction = "btn btn-primary";
	$scope.lse = "Loose";
	$scope.nrml = "Normal";
	$scope.hrd = "Hard";
	$scope.looseclicked = function()
	{
		$scope.looseclickedaction = "btn btn-primary active";
		$scope.normalclickedaction = "btn btn-primary";
		$scope.hardclickedaction = "btn btn-primary";
		$rootScope.mainfile.stool = $scope.lse;
	};
	
	$scope.normalclicked = function()
	{
	$scope.looseclickedaction = "btn btn-primary";
	$scope.normalclickedaction = "btn btn-primary active";
	$scope.hardclickedaction = "btn btn-primary";
	$rootScope.mainfile.stool = $scope.nrml;
	};
	
	$scope.hardclicked = function()
	{
		$scope.looseclickedaction = "btn btn-primary";
		$scope.normalclickedaction = "btn btn-primary";
		$scope.hardclickedaction = "btn btn-primary active";
		$rootScope.mainfile.stool = $scope.hrd;
	};
	
	
	

}]);

routingpage.controller("strtctrl8", ["$rootScope","$scope","$log",function($rootScope,$scope,$log){
$scope.commercialclicked = "btn btn-primary active";
$scope.homemadeclicked = "btn btn-primary";
$scope.bothclicked = "btn btn-primary";
$scope.commbool = true;
$scope.homemadebool = false;
$scope.bothbool = false;

$scope.commercialclickedaction = function(){
$scope.commercialclicked = "btn btn-primary active";
$scope.homemadeclicked = "btn btn-primary";
$scope.bothclicked = "btn btn-primary";
$scope.commbool = true;
$scope.homemadebool = false;
$scope.bothbool = false;
$rootScope.mainfile.homemade = false;
};
$scope.homemadeclickedaction = function(){
$scope.commercialclicked = "btn btn-primary";
$scope.homemadeclicked = "btn btn-primary active";
$scope.bothclicked = "btn btn-primary";
$scope.commbool = false;
$scope.homemadebool = true;
$scope.bothbool = false;
};
$scope.bothclickedaction = function(){
$scope.commercialclicked = "btn btn-primary";
$scope.homemadeclicked = "btn btn-primary";
$scope.bothclicked = "btn btn-primary active";
$scope.commbool = false;
$scope.homemadebool = false;
$scope.bothbool = true;
};

if($scope.commercialclicked == "btn btn-primary active")
{
	$rootScope.mainfile.homemade = false;
}
else
{
	$rootScope.mainfile.homemade = true;
}

$scope.brands = [{name:"A-Pro"},{name:"Aatu"},{name:"Acana"},{name:"Activa"},{name:"Addiction"},{name:"Affinity Advance"},{name:"Affinity Brekkies"},{name:"Affinity Ultima"},{name:"Aiken Genki"},{name:"Aime"},{name:"Alpha"},{name:"Alpo"},{name:"Almo Nature"},{name:"Ancestral Canine"},{name:"ANF Pet"},{name:"Annamaet"},{name:"Applaws"},{name:"Arden Grange"},{name:"Arkwrights"},{name:"AvoDerm Natural"},{name:"AvoCat"},{name:"Bairo"},{name:"Back to Basics"},{name:"Bearing"},{name:"Benevo Aistra"},{name:"Big Boss"},{name:"BilJac"},{name:"Biophive"},{name:"Blue Buffalo"},{name:"Boreal"},{name:"Butch"},{name:"Buzz"},{name:"By Nature"},{name:"Calibra"},{name:"Canine Creek"},{name:"Canidae"},{name:"Canigou"},{name:"Cannet"},{name:"Care Pet"},{name:"Castor & Pollux"},{name:"Carat"},{name:"Cat Chow"},{name:"Cesar"},{name:"Chappi"},{name:"Chicopee"},{name:"Chunky"},{name:"Compliments"},{name:"CP"},{name:"D-Dox"},{name:"Delmonte Foods"},{name:"Diamond Naturals"},{name:"DogKin"},{name:"DoggyMan"},{name:"Dog'njoy"},{name:"Dogswell Nutrisca"},{name:"Dog Chow"},{name:"Dog Pit"},{name:"Drools"},{name:"Dr.LuvCare"},{name:"Dr. Harvey's"},{name:"Earthborn Holistic"},{name:"Eagle Pack"},{name:"Essential Pet Food"},{name:"Eukanuba"},{name:"Euro Premium"},{name:"Evanger's"},{name:"Ever More Pet"},{name:"Farmina"},{name:"Fancy Feast"},{name:"Felix"},{name:"Fidele"},{name:"Fido"},{name:"Fishh4Dogs"},{name:"Friskies"},{name:"Fromm"},{name:"Frolic"},{name:"Gaines"},{name:"Gimpet"},{name:"Gimborn"},{name:"Goodness"},{name:"Gemon"},{name:"Gonta"},{name:"Gourmet"},{name:"Gusto"},{name:"Grandma Lucy’s"},{name:"Gran"},{name:"Health Extension"},{name:"Heristo"},{name:"Hills"},{name:"Hi-Tek"},{name:"Holistic Select"},{name:"Holistic Blend"},{name:"Horizon"},{name:"Happy Dogs"},{name:"Halo"},{name:"H. Von Gimborn"},{name:"Iams"},{name:"Interquell"},{name:"Inukshuk"},{name:"JBL"},{name:"Jimbo's"},{name:"Josera"},{name:"Kal Kan"},{name:"Katz"},{name:"Kibbles 'n Bits"},{name:"Kennel Kitchen"},{name:"K9 Natural"},{name:"LetsBite"},{name:"Lotuz"},{name:"Marp"},{name:"Maranui"},{name:"Matzinger"},{name:"Matisse"},{name:"Member's Mark"},{name:"Meradog"},{name:"MeowMix"},{name:"Merrick"},{name:"Me-O"},{name:"Mio"},{name:"Monge"},{name:"Natural Balance"},{name:"Nature Bridge"},{name:"Nature's Logic"},{name:"Nature's Recipe"},{name:"Nature's Variety"},{name:"Natural Planet"},{name:"Neko-Saya"},{name:"Nisshin"},{name:"Neko Genki"},{name:"Newman's Own"},{name:"Now"},{name:"Nutram"},{name:"Nutri Source"},{name:"Nutrience"},{name:"Nutro"},{name:"Oki"},{name:"Ol' Roy"},{name:"OmniPro"},{name:"Orijen"},{name:"Organix"},{name:"Pal"},{name:"Pedigree"},{name:"Perfect Fit"},{name:"Petcurean"},{name:"Petio"},{name:"Petto"},{name:"Petsetgo"},{name:"Pinnacle"},{name:"Pitti"},{name:"Primal"},{name:"Precise"},{name:"President's Choice"},{name:"Purina"},{name:"Purepet"},{name:"Rachael Ray"},{name:"Ralstone"},{name:"Riga"},{name:"Rongxi"},{name:"Royal Canin"},{name:"Sanpo Pet"},{name:"Sheba"},{name:"Smart Heart"},{name:"Solid Gold"},{name:"Special Dog"},{name:"Special Kitty"},{name:"Stella & Chewy’s"},{name:"Stewart"},{name:"Spot Farms"},{name:"Taste of the Wild"},{name:"Tetra"},{name:"Temptations"},{name:"The Honest Kitchen"},{name:"The Real Meat Company"},{name:"Top Dog"},{name:"Top Cat"},{name:"Tresor"},{name:"Trudog"},{name:"Trusty"},{name:"Tyrol"},{name:"Twins"},{name:"Unicharm"},{name:"Victor Dog Food"},{name:"Vitakraft"},{name:"Vita-One"},{name:"Venky's"},{name:"Wanpy"},{name:"Wellness Natural"},{name:"Whiskas"},{name:"Whole Earth Farms"},{name:"Wysong"},{name:"Xaver Scheule"},{name:"Zignature"},{name:"ZiwiPeak"},{name:"9Lives"}];

}]);

routingpage.controller("strtctrl9", ["$rootScope","$scope","$log",function($rootScope,$scope,$log){
$scope.smallamtclicked = "btn btn-primary active";
$scope.largeamtclicked = "btn btn-primary";
$scope.perweekclicked = "btn btn-primary";
$rootScope.mainfile.treats = "Some Amount of Treats in a Day";
$scope.smallamtclickedaction = function()
{
	$scope.smallamtclicked = "btn btn-primary active";
	$scope.largeamtclicked = "btn btn-primary";
	$scope.perweekclicked = "btn btn-primary";
	$rootScope.mainfile.treats = "Some Amount of Treats in a Day";
}
$scope.largeamtclickedaction = function()
{
	$scope.smallamtclicked = "btn btn-primary";
	$scope.largeamtclicked = "btn btn-primary active";
	$scope.perweekclicked = "btn btn-primary";
	$rootScope.mainfile.treats = "Lots of Treats in a Day";
}
$scope.perweekclickedaction = function()
{
	$scope.smallamtclicked = "btn btn-primary";
	$scope.largeamtclicked = "btn btn-primary";
	$scope.perweekclicked = "btn btn-primary active";
	$rootScope.mainfile.treats = "A Couple Times per Week";
}
$scope.finaljson = JSON.stringify($rootScope.mainfile);
$scope.postjson = function()
{
	console.log("MainFileMotherFuckaa : ",$scope.finaljson);
}
}]);

routingpage.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
$routeProvider
	.when('/', {
        templateUrl : 'emailpage.html'
	})
	.when('/dogbutton', {
        templateUrl : 'breeddog.html',
		controller : 'strtctrl2'
	})
	.when('/catbutton', {
        templateUrl : 'breedcat.html',
		controller : 'strtctrl3'
	})
	.when('/petname',{
		templateUrl : 'petname.html',
		controller  : 'strtctrl1'
	})
	.when('/birthdatescat',{
		templateUrl : 'birthdatescat.html',
		controller: 'strtctrl3'
	})
	.when('/birthdatesdog',{
		templateUrl : 'birthdatesdog.html',
		controller: 'strtctrl3'
	})
	.when('/neuteredcats',
	{
		templateUrl : 'neuteredcats.html',
		controller : 'strtctrl4'
	})
	.when('/neutereddogs',{
		templateUrl : 'neutereddogs.html',
		controller : 'strtctrl5'
	})
	.when('/weightdogs',{
		templateUrl : 'weightdogs.html'
	})
	.when('/weightcats',{
		templateUrl: 'weightcats.html'
	})
	.when('/activityleveldogs',{
		templateUrl : 'activityleveldogs.html'
	})
	.when('/activitylevelcats', {
		templateUrl : 'activitylevelcats.html'
	})
	.when('/furtypedogs',{
		templateUrl : 'furtypedogs.html',
		controller : 'strtctrl7'
	})
	.when('/furtypecats',{
		templateUrl : 'furtypecats.html',
		controller : 'strtctrl7'
	})
	.when('/healthcondcats',{
		templateUrl : 'healthcondcats.html'
	})
	.when('/unusualcats',{
		templateUrl : 'unusualcats.html'
	})
	.when('/healthconddogs',{
		templateUrl : 'healthconddogs.html'
	})
	.when('/unusualdogs',{
		templateUrl : 'unusualdogs.html'
	})
	.when('/curfoodcats',{
		templateUrl : 'curfoodcats.html',
		controller : 'strtctrl8'
	})
	.when('/curfooddogs',{
		templateUrl : 'curfooddogs.html',
		controller : 'strtctrl8'
	})
	.when('/allergyfoodscats',{
		templateUrl : 'allergyfoodscats.html'
	})
	.when('/allergyfoodsdogs',{
		templateUrl : 'allergyfoodsdogs.html'
	})
	.when('/treatscats',{
		templateUrl : 'treatscats.html',
		controller : 'strtctrl9'
	})
	.when('/treatsdogs',{
		templateUrl : 'treatsdogs.html',
		controller : 'strtctrl9'
	});
}]);