export class SettingsService {
  private altBackground = false;

  setBackGroud(isAlt: boolean){
    this.altBackground = isAlt;
  }

  isAltBackground(){
    return this.altBackground;
  }
}
