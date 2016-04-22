import {Injectable} from "angular2/core";
import {Message} from "./messages";
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class MessageService {

    private messages:Message[] = [];

    constructor(private http:Http) {

    }

    query():Promise<Message[]> {

        return this.http.get('rest/messages.json').map(response => response.json()).toPromise();
    }

    get(id:number):Promise<Message> {

        return this.http.get('rest/messages.json').map((response) => {
            return response.json().find(message => message.id == id);
        }).toPromise();
    }
}