import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function Main() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(productList())
  }, [])
  
  const data = useSelector((state) => state.productData)
  console.warn("Product DATA form saga ", data);



  // const products = {
  //   name: 'IPhone',
  //   type: 'Mobile',
  //   price: '200000-/Rs',
  //   pta: 'Approve'
  // }

  return (
    <>
      <div className='main-btn'>
        <button className='btn btn-danger btn-abc' onClick={() => dispatch(emptyCart())}>EMPTY_CART</button>
        {/* <button className='btn btn-danger btn-abc' onClick={() => dispatch(productList())}>Product list</button> */}
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div key={item.id} className='product-item'>
            <img src={item.Picture} alt="" />
            <div>Name : {item.name}</div>
            <div>Color : {item.Color}</div>
            <div>Price : {item.Price}</div>
            <div>Category : {item.Category}</div>
            <div>Brand : {item.Brand}</div>
            <div>
              <button className='btn btn-outline-danger' onClick={() => dispatch(addToCart(item))}>Add TO Cart</button>
              <button className='btn btn-outline-danger' onClick={() => dispatch(removeToCart(item.id))}> Remove TO Cart</button>
            </div>
          </div>)
        }


      </div>

    </>
  );
}

export default Main;
