import { Component } from "angular2/core";

// Decorator - Tells about the component
@Component({
    selector: "tv-app",
    templateUrl: "templates/tv-app.html",
    styleUrls: ["css/components/tv-app.css"]
})
export class TvApp {
    languages: string[] = ["PHP", "C#", "JavaScript"];
    selectedLanguage: string;

    click(language: string, languageEl: HTMLElement) {
        this.selectedLanguage = language;

        languageEl.classList.toggle("selected");
    }

    addLanguage(addLanguageEl: HTMLInputElement) {
        this.languages.push(addLanguageEl.value);
        addLanguageEl.value = "";
    }
}