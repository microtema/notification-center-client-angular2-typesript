import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {MessageService} from "./message.service";

export class Message {
    constructor(public id:number, public title:string, public description:string) {
    }
}

@Component({
    selector: 'messages',
    templateUrl: 'app/template/messages.html',
    directives: [],
    providers: [MessageService]
})
export class MessageListComponent {

    messages:Message[];

    constructor(private router:Router, private service:MessageService) {
        service.query().then(message => this.messages = message);
    }

    viewMessage(message:Message) {
        this.router.navigate(['Message', {id: message.id}]);
    }
}