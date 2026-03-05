class UAT{
   id=400
   get location(){//get method is used to retreive values
    return "testing"
   }
   constructor(firstname,lastname){
    this.firstname=firstname
    this.lastname=lastname
   }
   fullname(){
    console.log(this.firstname+this.lastname)
   }

}
let obj=new UAT("sriram","v")
obj.fullname()
console.log(obj.location)
console.log(obj.id)
