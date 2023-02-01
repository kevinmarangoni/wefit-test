import { CartContext } from "/src/context/Cart.jsx";
import styled from "styled-components";
import { useContext } from "react";

import CartItemCard from "/src/components/common/layout/cards/CartItemCard.jsx";

const Body = () => {
  const {
    cart,
    setCart,
    totalItems,
    setTotalItems,
    subTotals,
    setSubTotals,
    total,
    setTotal,
    sumAllItems,
    updateCart,
    calculateCartTotal,
    handleItemQuantityChange,
    handleDeleteItem,
    clearLocalStorage,
  } = useContext(CartContext);

  return (
    <Container>
      <Content
        customHeight={
          typeof items == "object" && items.length > 0 ? "fit-content" : "630px"
        }
      >
        {typeof items == "object" && items.length > 0 ? (
          <>
            <CartItemCard />
          </>
        ) : (
          <>Nao ha nada aqui...</>
        )}
      </Content>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.color.secondary.main};
  border-radius: 4px;
`;

const Content = styled.div`
  height: ${(props) => props.customHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 11px;
`;

// const CartContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   h3 {

//     margin-bottom: 20px;
//   }
//   table {
//     width: 100%;
//     border-collapse: collapse;
//     th,
//     td {
//       border: 1px solid #ddd;
//       padding: 8px;
//       text-align: left;
//     }
//     th {
//       background-color: #ddd;
//     }
//   }
//   h4 {
//     margin-top: 20px;
//   }
// `;

// <CartContainer>
// <h3>Carrinho de Compras</h3>
// <table>
//   <thead>
//     <tr>
//       <th>Item</th>
//       <th>Quantidade</th>
//       <th>Subtotal</th>
//       <th>Ações</th>
//     </tr>
//   </thead>
//   <tbody>
//     {typeof items == "object" && items.length > 0 ? (
//       items.map((item) => (
//         <tr key={item.id}>
//           <td>{item.name}</td>
//           <td>{item.quantity}</td>
//           <td>{item.subtotal}</td>
//           <td>
//             <button onClick={() => increment(item.id)}>+</button>
//             <button onClick={() => decrement(item.id)}>-</button>
//             <button onClick={() => removeItem(item.id)}>
//               Remover
//             </button>
//           </td>
//         </tr>
//       ))
//     ) : (
//       <div>Carregando...</div>
//     )}
//   </tbody>
// </table>
// <h4>Total: {total}</h4>
// </CartContainer>
