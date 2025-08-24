import { Given, Then, When, } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";


Given('When user clicks on the Bank application {string}', async function (this: CustomWorld, url: string)  {
   //   await this.page.goto(url)
      await this.page.goto(url, { timeout: 30000 });
      await this.page.waitForLoadState('networkidle');
})
When("Then give the username as {string} and password as {string}", async function (this: CustomWorld,userName: string, password:string) {
    

    await this.page.locator("#username").fill(userName)
    await this.page.locator("#password").fill(password)

    await this.page.waitForTimeout(5000)
}
)
Then ("Click Login to the application", async function (this: CustomWorld) {
   await this.page.locator("//button[@type='submit']").click() 
 //   await this.page.locator(`//button[text()='Login']`).click();

     await this.page.waitForTimeout(5000)

})





