var names=new Array();
names[0]="Shrey";
names[1]="Jaadu";
names[2]="Jen";
names[3]="jerry";
names[4]="yash";
names[5]="Sanchit";
names[6]="lovelleen";
names[7]="Jaspreet";
names[8]="akshatt";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}