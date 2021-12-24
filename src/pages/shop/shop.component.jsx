import React from 'react';
import { Outlet } from 'react-router';

import { connect } from 'react-redux';

// import { createStructuredSelector } from 'reselect';

// import { selectIsCollectionsFetching, selectCollectionsLoaded } from '../../redux/shop/shop.selectors';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';



//const ShopContainerWithSpinner = WithSpinner(Outlet);

class ShopPage extends React.Component{
    componentDidMount(){
        this.props.fetchCollectionAsync()
    }
    
    render() {
        return (
            // <div className='shop-page'>
            //     <ShopContainerWithSpinner isLoading={!this.props.isLoaded} />
            // </div>   
            <Outlet />
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     isFetching: selectIsCollectionsFetching,
//     isLoaded: selectCollectionsLoaded

// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);