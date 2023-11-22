/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.counter = this.calculateInitialCounter();
  }

  calculateInitialCounter() {
    const maxCode = this.state.list
      ? Math.max(...this.state.list.map((item) => item.code), 0)
      : 0;
    return maxCode + 1;
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   *
   */
  addItem() {
    const newItem = {
      code: this.counter,
      title: "Новая запись",
      views: 0,
    };

    this.setState({
      list: [...this.state.list, newItem],
    });

    this.counter++;
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => {
        if (item.code === code) {
          item.selected = !item.selected;
          if (item.selected && item.code === code) {
            item.views++;
          }
        } else {
          item.selected = "";
          item.views = item.views + 0;
        }
        return item;
      }),
    });
  }
}

export default Store;
