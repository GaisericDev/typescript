import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate{
    constructor(private container: HTMLUListElement){}

    //render the template
    render(item:HasFormatter, heading:string, pos: "start"|"end"){
        //create list element
        const li = document.createElement("li");
        //add header
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        //add paragraph
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        //add li to container
        if(pos == "start"){
            this.container.prepend(li);
        }
        else{
            this.container.append(li);
        }
    }
}