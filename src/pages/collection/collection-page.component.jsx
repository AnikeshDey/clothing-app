import React from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { selectSingleCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection-page.styles.scss"

const CollectionPage = () => {
    const { id } = useParams();
    const collection = useSelector(state => selectSingleCollection(id)(state));    
    const { title, items } = collection;
    return(
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}




export default CollectionPage;