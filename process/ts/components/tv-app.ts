import { Component } from "angular2/core";

interface Artist {
    name: string;
    shortName: string;
    reknown: string;
    bio: string;
}

const ARTISTS: Artist[] = [
    {
        name: "test",
        shortName: "test",
        reknown: "test",
        bio: "test"
    }
];

// Decorator: Info about the Component
@Component({
    selector: "tv-app",
    templateUrl: "templates/app.html",
    styleUrls: ["css/components/app.css"]
})
export class AppComponent {
    name: string = "begin";
    artists: Artist[] = ARTISTS;

    onClick(name: string, nameContainer: HTMLUListElement) {
       this.name = name;

       nameContainer.style.backgroundColor = "#FECE4E";
    }

    addArtist(artist: string) {
        this.artists.push(<Artist>{
            name: artist
        });
    }
}