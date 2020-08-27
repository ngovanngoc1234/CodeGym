function Mobile(name,id){
    this.id=id;
    this.name=name;
    this.battery=100;
    this.status=false;
    this.message="";
    this.inbox=[];
    this.sentMess=[];
    this.changeStatus=function (){
        this.status=!this.status;
    }
    this.changeBattery=function (){

    }
}