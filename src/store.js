/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
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
   * Добавление товара в корзину
   */
  addItemInBasket(item) {
    const existingItem = this.state.basketList.find(
      (basketItem) => basketItem.code === item.code
    );

    if (existingItem) {
      const updatedBasket = this.state.basketList.map((basketItem) => {
        if (basketItem.code === item.code) {
          return {
            ...basketItem,
            quantity: basketItem.quantity === 1 ? 1 : basketItem.quantity + 1,
            totalPrice: basketItem.totalPrice + item.price,
          };
        }
        return basketItem;
      });

      this.setState({
        ...this.state,
        basketList: updatedBasket,
      });
    } else {
      this.setState({
        ...this.state,
        basketList: [
          ...this.state.basketList,
          { ...item, quantity: 1, totalPrice: item.price },
        ],
      });
    }

    const totalQuantity = this.state.basketList.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = this.state.basketList.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    return { totalQuantity, totalPrice };
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    // На случай, если я неправильно понял правку про удаление(здесь удаление одного товара, а не всего его кол-ва)

    // const itemIndex = this.state.basketList.findIndex(
    //   (item) => item.code === code
    // );

    // if (itemIndex !== -1) {
    //   const updatedBasket = [...this.state.basketList];
    //   const itemToDelete = updatedBasket[itemIndex];

    //   if (itemToDelete.quantity > 1) {
    //     updatedBasket[itemIndex] = {
    //       ...itemToDelete,
    //       quantity: itemToDelete.quantity - 1,
    //     };
    //   } else {
    //     updatedBasket.splice(itemIndex, 1);
    //   }
    // }

    this.setState({
      ...this.state,
      basketList: this.state.basketList.filter((item) => item.code !== code),
    });

    const totalQuantity = this.state.basketList.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = this.state.basketList.reduce(
      (total, item) => total + item.price,
      0
    );

    return { totalQuantity, totalPrice };
  }
}

export default Store;
