var input = document.getElementById('files');
var filer = input.files;
for (var i = 0; i < filer.length; i++) { 
	var cur = filer[0];
	var reader = new FileReader;
	reader.onloadend = function(){
		var exifdata = EXIF.readFromBinaryFile(new BinaryFile(this.result));
		var latitude = exifdata.GPSLatitude;
		var longitude = exifdata.GPSLongitude;
		/** Credit to Daniel Hindrikes for the following conversion menthod. */ 
		var latituderef = exifdata.GPSLatitudeRef || "N";
		var longituderef = exifdata.GPSLongitudeRef || "W";
		latitude = (latitude[0] + latitude[1]/60 + latitude[2]/3600) * (latituderef == "N" ? 1 : -1);  
		longitude = (longitude[0] + longitude[1]/60 + longitude[2]/3600) * (longituderef == "W" ? -1 : 1); 
	}                 
	               
    // Need to add lat and long to something.
    reader.readAsBinaryString(cur);   
}



