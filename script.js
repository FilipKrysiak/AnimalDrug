alert('Witaj w szybkim kalkulatorze obliczania dat podawania leków zwierzętom.\n\rProgram obliczy datę podania 3-ech najbliższych dawek.');
let drugDate = 0;
let drugTab = [];
let dateCount = new Date();
pobierzDate();

function pobierzDate(){
drugDate = prompt('Podaj datę poprzedniej dawki leku','dzień-miesiąc-rok');
if (drugDate != null){
drugTab = drugDate.split("-");
for (let i =0; i < drugTab.length; i++){
  drugTab[i] = parseInt(drugTab[i], 10);
};
dateCount.setYear(drugTab[2]);
dateCount.setMonth(drugTab[1]-1);
dateCount.setDate(drugTab[0]);
if (dateCount.getYear() + 1900 === drugTab[2] && dateCount.getMonth() + 1 === drugTab[1] && dateCount.getDate() === drugTab[0]){
  pobierzInterwal();
}
else {
  alert('Nieprawidłowa data, spróbuj ponownie.');
  pobierzDate();
}}
else {alert('Dziękuję za skorzystanie z programu.')}
};

function pobierzInterwal(){
  let interwal = prompt('Podaj interwał dla dawki leku w tygodniach');
  interwal = interwal * 7;
  let dateResult = [];

  dateCount.setDate(dateCount.getDate() + interwal);
  for(let i = 0; i<3; i++){
  dateResult[i] = String(dateCount.getDate()) + '-' + String(dateCount.getMonth() + 1) + '-' + String(dateCount.getYear() + 1900);
  dateCount.setDate(dateCount.getDate() + interwal);
  }
  if (confirm('Kolejne daty podania leku to:\n\r\n\r' + dateResult[0] + '\n\r' + dateResult[1] + '\n\r' + dateResult[2] + '\n\r\n\rCzy chcesz sprawdzic kolejny lek?')){
    pobierzDate();
  }
  else { alert('Dziękuję za skorzystanie z programu.')}
};
