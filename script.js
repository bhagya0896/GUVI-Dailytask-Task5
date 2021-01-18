var request = new XMLHttpRequest();
request.open("get",'https://restcountries.eu/rest/v2/all',true);
request.send();
try
{
request.onload = function()
{
    var countrydata = JSON.parse(this.response)
    let newarray=[];
    var lat,lon;
    function weatherdetails()
    {
    for( var i in countrydata)
       {
           newarray.push(countrydata[i].latlng);
       }
    
       
    }
    weatherdetails();
    function countriesweather()
    {
       var key = "2dac2accd645cd083fc1af64ebffaaa5";
       for(var i in newarray)
        {
                lat= newarray[i][0];;
                lon= newarray[i][1];;
                var request = new XMLHttpRequest();
                request.open("get",'https://api.openweathermap.org/data/2.5/weather?lat='+lat+"&lon="+lon+'&apikey='+key,true);
                request.send();
                request.onload = function(){
                var weatherdata=JSON.parse(this.response)
                console.log(weatherdata);
                }
        } 
     }
     countriesweather();
    };
      throw new SyntaxError('Insuffient data');
}
    catch(error)
     {
          alert('stack' + error.stack);
     }








    
    

