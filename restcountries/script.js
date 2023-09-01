var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true);
request.send();

request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
   for(var obj of result){

    // 2. All Country Flags
    console.log(obj.flags.png);
    
    // // 3. All Country Name,region,sub-region & populations
     console.log(obj.name.common,obj.region,obj.subregion,obj.population);

    
 

    
  }
    
};
