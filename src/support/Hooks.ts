import { After, Before } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./CustomWorld";

Before(async function (this:CustomWorld) {
this.browser= await chromium.launch({channel:'msedge',headless:true})
 this.page = await this.browser.newPage();
     
})



After(async function (this:CustomWorld) {

  await  this.browser.close()
    
})