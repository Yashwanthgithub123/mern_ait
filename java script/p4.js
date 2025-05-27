const trainer = {
    name :'nithin',
     tech1(){
          console.log("ÄIML JAVAFS tariner")
          return 100
    },
    tech2(){
        console.log("C++ MERN Trainer")
        return 'python'//main thing when the functioon is called is that it searches for the return value
    }
}

console.log(trainer) // printing the object itself
console.log(trainer.tech1()) // call to the function
console.log(trainer.tech2())
console.log(trainer.tech1) // printing the method as an object
console.log(trainer.tech2)