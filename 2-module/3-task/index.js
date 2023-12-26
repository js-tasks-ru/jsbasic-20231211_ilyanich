let calculator = {
  read(a, b) {
    return (this.a = a), (this.b = b);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
// let calculator = {
//   read(a, b) {
//     (calculator.a = a), (calculator.b = b);
//   },
//   sum() {
//     return calculator.a + calculator.b;
//   },
//   mul() {
//     return calculator.a * calculator.b;
//   },
// };

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
