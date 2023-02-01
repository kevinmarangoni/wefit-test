import {CartContext} from "/src/context/Cart.jsx"; 
import styled from "styled-components";
import {useContext} from 'react'

const Body = () => {
  const { items, total, increment, decrement, removeItem, addItem } = useContext(CartContext);
  
  return (
    <Container>
      <Content>
        <div>
          <h3>Carrinho de Compras</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {(typeof(items) == 'object' && items.length > 0) ?
              items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.subtotal}</td>
                  <td>
                    <button onClick={() => increment(item.id)}>+</button>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <button onClick={() => removeItem(item.id)}>Remover</button>
                  </td>
                </tr>
              ))
              :
                <div>
                  Carregando...
                </div>
              }
            </tbody>
          </table>
          <h4>Total: {total}</h4>
        </div>
      </Content>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  padding: 10px;
  //background-color: ${props=> props.theme.color.secondary.main};
  border-radius: 4px;
`;

const Content = styled.div`
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 11px;
`;
