import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './LibraryInfoWebPart.module.scss';
import { librariesData, studyRoomsData, buildingsData } from './data/cardData';
import { CardRenderer } from './services/CardRenderer';

export interface ILibraryInfoWebPartProps {}

export default class LibraryInfoWebPart extends BaseClientSideWebPart<ILibraryInfoWebPartProps> {
    public render(): void {
        this.domElement.innerHTML = `
            <div class="${styles.libraryInfo}">
                <div id="${styles.radioContainer}">
                    <input type="radio" id="libraries" name="option" value="libraries" checked>
                    <label for="libraries">
                        <h1 class="${styles.title}">Bibliotheken</h1>
                    </label>

                    <input type="radio" id="studyrooms" name="option" value="studyrooms">
                    <label for="studyrooms">
                        <h1 class="${styles.title}">Lernräume</h1>
                    </label>

                    <input type="radio" id="buildings" name="option" value="buildings">
                    <label for="buildings">
                        <h1 class="${styles.title}">Fakultätsgebäude</h1>
                    </label>
                </div>
                <div id="${styles.infoContainer}"></div>
            </div>`;

        this.attachEventListeners();
        this.displayCards('libraries');
    }

    private attachEventListeners(): void {
        const radioButtons = this.domElement.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e: Event) => {
                const target = e.target as HTMLInputElement;
                this.displayCards(target.value);
            });
        });
    }

    private displayCards(type: string): void {
        const infoContainer = this.domElement.querySelector(`#${styles.infoContainer}`);
        if (!infoContainer) return;

        switch(type) {
            case 'libraries':
                infoContainer.innerHTML = CardRenderer.renderCards(librariesData);
                break;
            case 'studyrooms':
                infoContainer.innerHTML = CardRenderer.renderCards(studyRoomsData);
                break;
            case 'buildings':
                infoContainer.innerHTML = CardRenderer.renderCards(buildingsData);
                break;
        }
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }
}
