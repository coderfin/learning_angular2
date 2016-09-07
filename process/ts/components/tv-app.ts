import { Component } from "angular2/core";

// Decorator: Info about the Component
@Component({
    selector: "tv-app",
    templateUrl: "templates/app.html",
    styleUrls: ["css/components/app.css"]
})
export class AppComponent {
    name: string = "begin";
    artists: string[] = [];

    onClick(name: string, nameContainer: HTMLUListElement) {
       this.name = name;

       nameContainer.style.backgroundColor = "#FECE4E";
    }

    addArtist(artist: string) {
        this.artists.push(artist);
    }
}