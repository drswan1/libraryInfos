import { ICardInfo } from '../interfaces/ICardInfo';
import styles from '../LibraryInfoWebPart.module.scss';

export class CardRenderer {
    /**
     * Creates a Google Maps URL from an address string
     */
    private static createGoogleMapsLink(address: string): string {
        const encodedAddress = encodeURIComponent(address);
        return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }

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
                                    <span class="${styles.label}">Standort:</span>
                                    <a href="${this.createGoogleMapsLink(item.location)}" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="${styles.locationLink}">
                                        ${item.location}
                                    </a>
                                </div>` : ''}
                            ${item.openingHours ? `
                                <div class="${styles.hoursInfo}">
                                    <span class="${styles.label}">Öffnungszeiten:</span><br>
                                    <span>${item.openingHours.split('\n').join('<br>')}</span>
                                </div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}