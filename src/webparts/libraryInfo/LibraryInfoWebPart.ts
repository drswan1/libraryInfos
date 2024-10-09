import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './LibraryInfoWebPart.module.scss';

export interface ILibraryInfoWebPartProps {
}

export default class LibraryInfoWebPart extends BaseClientSideWebPart<ILibraryInfoWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.libraryInfo }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
