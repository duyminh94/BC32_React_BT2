
export const Glasses = ({ product }) => {
    if (!product) {
        return null
    }
    return (
        <div className="container">
            <div className='row mt-5'>
                <div className="col-sm-6 d-flex justify-content-center">
                    <div className="card justify-content-center w-50">
                        <img className="card-img-top" src='./glassesImage/model.jpg' alt="Model" />
                        <img className="card-glasses img-fluid w-50" src="./glassesImage/v1.png" alt="" />
                        <div className="card-body vg-glasses">
                            <h2 className="card-branch">GUCCi G8850U</h2>
                            <p className="card-text">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-center">
                    <div className="card card-model justify-content-center w-50">
                        <img className="card-img-top " src="./glassesImage/model.jpg" alt="Model" />
                        <img className="card-glasses img-fluid w-50" src={product.url} alt="" />
                        <div className="card-body vg-glasses">
                            <h2 className="card-branch">{product.name}</h2>
                            <h6 className="card-text">{product.desc}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
