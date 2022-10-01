
export const GlassesList = ({ products, onSelect }) => {
  
  return (
    <div className='mt-4 bg-light'>
                <div className='row mt-2'>
                    {products.map((product => {
                        return (
                            <div key={product.id} className="col-sm-2 p-1">
                                <button onClick={() => onSelect(product)}>
                                    <img className='img-fluid' src={product.url} alt="#" />
                                </button>
                            </div>
                        )
                    }))}
                </div>
            </div>
  )
}
