import { PageHolder } from "./abstractClasses";
import { HomePage } from "./user_app_pages/HomePage";



export class App extends PageHolder {
  public homePage = new HomePage(this.page);
}
