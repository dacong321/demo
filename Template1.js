function newObj(name, action){
    this.name = name;
    this.action = action
}

let Obj = new newObj('ll', function test(){console.log("my name is " + this.name)});

Obj.action();