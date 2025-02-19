import { ICardInfo } from '../interfaces/ICardInfo';
import styles from '../LibraryInfoWebPart.module.scss';

export class CardRenderer {
    public static renderCards(data: ICardInfo[]): string {
        return data.map((item, index) => `
            <div class="${styles.cardContainer}">
                <input type="radio" id="card-${index}" name="cards" class="${styles.radioButton}">
                <div class="${styles.card}">
                    <label for="card-${index}" class="${styles.cardHeader}">
                        <h3 class="${styles.title}">${item.title}</h3>
                    </label>
                    <div class="${styles.cardContent}">
                        <div class="${styles.cardDetails}">
                            ${item.location ? `
                                <div class="${styles.locationInfo}">
                                    <span>Standort:</span>
                                    <span>${item.location}</span>
                                </div>` : ''}
                            ${item.openingHours ? `
                                <div class="${styles.hoursInfo}">
                                    <span>Öffnungszeiten:</span><br>
                                    <span>${item.openingHours.split('\n').join('<br>')}</span>
                                </div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}