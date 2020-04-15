export class Model{
    user;
    items;

    constructor(){
        this.user = "turkmenoglu";
        this.items = [
            new TodoItem("Kahvaltı.", false),
            new TodoItem("Sinema.", true),
            new TodoItem("Spor.", false),
            new TodoItem("Ders Çalışma.", true)
          ];
    }
}


export class TodoItem{
    description;
    action;

    constructor(description, action){
        this.description = description;
        this.action = action;

    }
}