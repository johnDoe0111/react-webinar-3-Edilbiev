import React, { useCallback, useState } from "react";
import BasketModal from "./components/basket-modal";
import Controls from "./components/controls";
import Head from "./components/head";
import List from "./components/list";
import ModalLayout from "./components/modal-layout";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [modalActive, setModalActive] = useState(false);
  const [basketInfo, setBasketInfo] = useState({
    totalQuantity: 0,
    totalPrice: 0,
  });

  const list = store.getState().list;
  const basketList = store.getState().basketList;

  const callbacks = {
    onAddItemInBasket: useCallback(
      (item) => {
        const { totalQuantity, totalPrice } = store.addItemInBasket(item);
        setBasketInfo({ totalQuantity, totalPrice });
      },
      [store]
    ),
    onDeleteItem: useCallback(
      (code) => {
        const { totalQuantity, totalPrice } = store.deleteItem(code);
        setBasketInfo({ totalQuantity, totalPrice });
      },
      [store]
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" active={modalActive} setActive={setModalActive} />
      <Controls setActive={setModalActive} basketInfo={basketInfo} />
      <List list={list} onAddItemInBasket={callbacks.onAddItemInBasket} />

      {modalActive ? (
        <ModalLayout setActive={setModalActive}>
          <BasketModal
            active={modalActive}
            setActive={setModalActive}
            basketList={basketList}
            onDeleteItem={callbacks.onDeleteItem}
            totalPrice={basketInfo.totalPrice}
          />
        </ModalLayout>
      ) : null}
    </PageLayout>
  );
}

export default App;
