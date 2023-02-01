import {useEffect, useState} from "react";
import ItemCard from "/src/components/common/layout/cards/Item";
import styled from "styled-components";

import Spinner from "/src/components/common/layout/Spinner";

import ApiRequests from "/src/utils/api.js"

const Body = () => {
  const [data, setData] = useState([])
  const [hasFetch, setHasFetch] = useState(false)

  const getInitialList = async () => {
    const response = await ApiRequests.getAllItems()
    setData(response)
    if(data){
      setHasFetch(true)
    }
  }

  useEffect(()=>{
    console.log(hasFetch, data)
  },[hasFetch, data])
  
  useEffect(()=>{
    if(!hasFetch){
      getInitialList()
    }
  },[hasFetch])

  return (
    <>
      <Container>
          <Content>
          {(hasFetch && data.length > 0) ?
          <>
            {data.length > 0 &&

              data.map((item, index)=>{
                return(
                  <ItemCard item={item} key={item.id} />
                )
              })
              
            }
          </>
          :
          <>
            <Spinner />
          </>
          }
        </Content>
      </Container>
    </>
  );
};

export default Body;

const Container = styled.div`
  padding: 10px;
`;

const Content = styled.div`
height: 630px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap:11px;
`