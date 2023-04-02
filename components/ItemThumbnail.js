import React from 'react';

const ItemThumbnail = (props) =>{
    const itemVals = props.itemDetails;
    return(
        <div className="thumbnail">
            <h2 className="thumbnailTitle">{itemVals.title}</h2>
            <img src={itemVals.image} className="thumbnailImage" alt="shoppingImage"></img>
            <h3 className="thumbnailPrice">{itemVals.price.toFixed(2)}</h3>
        </div>
    )
}
export default ItemThumbnail;