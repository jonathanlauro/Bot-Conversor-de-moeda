const puppeteer = require("puppeteer");
const readlineSync = require('readline-sync');
console.log("Bem-vindo ao conversor de moeda 💰");

 async function robot(){
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  const valor = readlineSync.question('Qual o valor: ') ||1;
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dola';
  const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') ||'real';
  // const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C5CHFA_enBR887BR887&oq=${moedaBase}+para+re&aqs=chrome.0.0j69i57j0l6.4063j1j7&sourceid=chrome&ie=UTF-8`;
  const qualquerUrl2 =`https://www.google.com/search?rlz=1C5CHFA_enBR887BR887&sxsrf=ALeKk00nas3w4GK80WVttIxy8PJrj4ahvQ%3A1592354547443&ei=82bpXoWzGsW5ggfSypnIBw&q=${valor}+${moedaFinal}+em+${moedaBase}&oq=${valor}+rea&gs_lcp=CgZwc3ktYWIQAxgAMgkIABBDEEYQggIyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BQgAEIMBOgUIABCxAzoECAAQQzoGCAAQChBDUOSMAViLmQFg-qMBaABwAXgAgAGZAogB9A2SAQMyLTeYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab`;
  await page.goto(qualquerUrl2);
  const resultado = await page.evaluate(() => {
    return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value
  });

  console.log(`O Valor de ${valor} em ${moedaFinal} em ${moedaBase} é de  ${resultado}`);
  await browser.close();
}

robot();
