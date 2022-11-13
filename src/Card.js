function Card(props) {
    return (
        <div className='col-lg-4'>
            <div class="card" style={{ width: '18rem' }}>
                <img src={`https://picsum.photos/200/150?random=${Math.floor(Math.random() * 100)}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.title}</h5>
                    <h6 class="card-title">{props.data.price}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <button disabled={props.cartitems.some(obj => obj.id === props.data.id)} onClick={() => props.handleAddToCart(props.data.id) } href="#" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card