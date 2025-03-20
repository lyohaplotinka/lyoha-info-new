import.meta.hot.accept();

function calculateAge(fromDate: Date): string {
  const msDiff = Date.now() - fromDate.getTime();
  return String(Math.abs(new Date(msDiff).getUTCFullYear() - 1970));
}

window.addEventListener("load", () => {
  window.age.innerText = calculateAge(new Date(1996, 9, 9));
  window.workExp.innerText = calculateAge(new Date(2017, 8, 13));
});

declare global {
  interface Window {
    age: HTMLSpanElement;
    workExp: HTMLSpanElement;
  }
}
