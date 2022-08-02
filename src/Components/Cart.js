import { useSelector } from 'react-redux';

const Cart = () => {

    const cartData = useSelector((item) => item.cartData)
    let amount = cartData.length && cartData.map(item => item.Price).reduce((prev, next)=>prev + next)
    console.warn("Amount form Cart",amount);

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '30px', color: 'red' }}>CART PAGE</h1>

            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>Category</td>
                    </tr>


                    {
                        cartData.map((item) => <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.Color}</td>
                            <td>{item.Price}</td>
                            <td>{item.Brand}</td>
                            <td>{item.Category}</td>
                        </tr>)
                    }

                </table>

                <div className='price-detail'>
                    <div className='cart-detail'><span>Amount :</span><span>{amount}-/rs</span></div>
                    <div className='cart-detail'><span>Discount :</span><span>{amount/10}-/rs</span></div>
                    <div className='cart-detail'><span>Tax :</span><span>00</span></div>
                    <div className='cart-detail'><span>Total :</span><span>{amount-(amount/10)}-/rs</span></div>
                </div>

            </div>
        </div>
    )
}

export default Cart;