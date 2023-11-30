import React, { useCallback, useMemo, useState } from "react";
import Controls from "./components/controls";
import Head from "./components/head";
import List from "./components/list";
import Modal from "./components/modal";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [modalActive, setModalActive] = useState(false);

  const list = store.getState().list;
  const basketList = store.getState().basketList;
  const basketQuantity = useMemo(() => {
    return basketList.reduce((total, item) => total + item.quantity, 0);
  }, [basketList]);

  const getTotalPrice = () => {
    return basketList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const callbacks = {
    onAddItemInBasket: useCallback(
      (item) => {
        store.addItemInBasket(item);
      },
      [store]
    ),
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),
    onUpdateTotalPrice: useCallback(() => {
      store.updateTotalPrice();
    }, [store]),
  };

  return (
    <PageLayout>
      <Head title="Магазин" active={modalActive} setActive={setModalActive} />
      <Controls
        active={modalActive}
        setActive={setModalActive}
        basketQuantity={basketQuantity}
        totalPrice={getTotalPrice}
      />
      <List list={list} onAddItemInBasket={callbacks.onAddItemInBasket} />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        basketList={basketList}
        onDeleteItem={callbacks.onDeleteItem}
        totalPrice={getTotalPrice}
      />
    </PageLayout>
  );
}

export default App;
