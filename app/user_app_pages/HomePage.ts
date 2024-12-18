import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { env } from "../../playwright.config";

export class HomePage extends AppPage {
  public pagePath = `${env.FRONTEND_URL}/`;
  private homePageLocator = this.page.getByRole('heading', { name: 'Example Domain' });
  private homePageTitle = 'Example Domain';

  async expectLoaded() {
    await this.page.goto(this.pagePath);
    await expect(this.page).toHaveTitle(this.homePageTitle);
    await expect(this.homePageLocator).toBeVisible();
  }
}

