const { Builder, By, Key, util } = require("selenium-webdriver");

async function googling() {
  //buka browser chrome
  let driver = await new Builder().forBrowser("chrome").build();
  // buka url google
  await driver.get("http://10.10.20.2/ac_portal/default/pc.html");
  //username isikan nim
  //password nya isikan th,bulan,tgl_lahir,huruf_besar_nama_depan
  await driver.findElement(By.name("une")).sendKeys("nim",Key.RETURN);
  await driver.findElement(By.name("pass")).sendKeys("password",Key.RETURN);
  await driver.findElement(By.name("btlogin")).click();

}

googling();