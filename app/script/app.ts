import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MessageListComponent} from "./messages";
import {MessageComponent} from "./message";

@Component({
    selector: 'app',
    templateUrl: 'app/template/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS
    ]
})
@RouteConfig([
    {path: '/messages', name: 'Messages', component: MessageListComponent, useAsDefault: true},
    {path: '/message/:id', name: 'Message', component: MessageComponent, useAsDefault: false}
])
export class AppComponent {
    title = 'Notification Message Center';
}