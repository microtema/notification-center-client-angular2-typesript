import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Message} from "./messages";
import {MessageService} from "./message.service";

@Component({
    selector: 'message',
    templateUrl: 'app/template/message.html',
    directives: [],
    providers: [MessageService]
})
export class MessageComponent {

    message:Message = new Message(0, "", "");

    constructor(private router:Router, routeParams:RouteParams, service:MessageService) {
        let id = parseInt(routeParams.get('id'));
        service.get(id).then(message => this.message = message);
    }

    viewMessages() {
        this.router.navigate(['Messages']);
    }
}