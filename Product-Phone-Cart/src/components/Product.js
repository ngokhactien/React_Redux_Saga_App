
import *  as Massage from './../constants/Massage';

export default function Product(props) {
        
    var { product , onAddToCart , onChangeMassage} = props ;

    // set sao cho sản phẩn 
    const showRating = (rating) =>{
        var result = [];
        for(var i = 1 ; i <= rating ; i++ ){
            result.push(<i className="fa fa-star"></i>);
        };
        for(var j = 1 ; j <=( 5 - rating) ; j++ ){
            result.push(<i className="fa fa-star-o"></i>);
        }
        return result
    };

    var addToCart = (product ) => {
        onAddToCart(product) ;
        onChangeMassage(Massage.MSG_ADD_TO_CART_SUCCESS);
        
    };

    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img 
                        src={product.image}
                        className="img-fluid" alt="" />
                    <a href>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body"> 
                    <h4 className="card-title">
                        <strong>
                            <a href>{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            {showRating(product.rating)}
                        </li>
                        
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{ product.price }$</span>
                        <span className="right">
                            <a href 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="" 
                                data-original-title="Add to Cart"
                                onClick = { () =>  addToCart( product ) }
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
