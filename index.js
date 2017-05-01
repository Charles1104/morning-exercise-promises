const data = ['first', 'second', 'third'];

function getData(index, cb) {
  let err = null;
  if (index < 0) { err = new Error('index out of bounds'); }
  return cb(err, data[index]);
}

// wrap getData in a promise and console log the output



// call getData three times and console log the output (use .then for the second and third call) using promises

var promise = getData(0);
promise.then(function(data){
  console.log(data);
  return getData(1);
}).then(function(data){
  console.log(data);
  return getData(2);
}).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log(error);
});


// create a promise within getData and use the promise to trigger the callback in getData

function getData(index) {
  return new Promise(function(resolve, reject){
    if(index >= 0 && index <= 2){
      resolve(data[index]);
    } else{
      reject(new Error('index out of bounds'));
    }
  });
}

// create a promisified version of getData



// call the promisified version of getData with -1, console log the error in a .catch

var promise = getData(-1);
promise.then(function(data){
  console.log(data);
}).catch(function(error){
  console.log(error);
});
