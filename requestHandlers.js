// function for handling index.html the business logic 
function index (data, callback){
  const fileData = fs.readFileSync('index.html');
  callback(200, fileData.toString());
  console.log("Request handler for index was called.")
}

// function for handling portfolio.html the business logic
function portfolio(){
  console.log("Request for handler for portfolio was called.")
}

