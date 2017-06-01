function logProductInfo() {
  var myData = {}
  //var sheet = SpreadsheetApp.getActiveSheet();
  var url = 'https://docs.google.com/spreadsheets/d/1kZUKOvzBTt9qpfu-up3FxVywbXn8wfIo-xQs0ptXX9s/edit#gid=197898061';
  var sheet = SpreadsheetApp.openByUrl(url);
  
 
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var key = data[i][0]
    var tester = data[i][1]
    if(!myData[key]){
      myData[key] = [tester]
    }
    else if(myData[key].every(function(){
        return myData[key] != tester
      }))
    {
      myData[key].push(tester)
    }    
  }
  for(var key in myData){
    Logger.log(key +": " + myData[key])
  }
}

/*
tarefas que chegam
tareas que retoarnam com erros
erros no happy path
tarefas por testador
*/
