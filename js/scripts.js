function Telefon(marka, cena, kolor, pamięć, bateria) { 
this.marka = marka; //dzięki użyciu this, właściwość "marka" obiektu, który stworzymy, przyjmie wartość argumentu marka 
this.cena = cena; 
this.kolor = kolor;
this.pamięć = pamięć;
this.bateria = bateria;
};

Telefon.prototype = { 
	printInfo: function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Pamięci RAM ma " + this.pamięć + ". Bateria wystarcza na " + this.bateria + " godzin czuwania. Koszt przedłużonej gwarancji to " + this.getWarrantyCost() + " PLN.");
 	},
 	getWarrantyCost: function() {
 		return (this.cena * 10) / 100;
	}
};

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "2GB", 740);
var GalaxyS6 = new Telefon("Samsung", 1797, "czarny", "4GB", "brak danych");
var One  = new Telefon("OnePlus", 1299, "czerwony", "3GB", "brak danych");
iPhone6S.printInfo();
GalaxyS6.printInfo();
One.printInfo(); 