import React from 'react'
import FooterComponent from '../Component/Footer/FooterComponent'
import Navbarcomponent from '../Component/Navbar/Navbarcomponent'
import Mainbox from '../Component/ProductDetail/Mainbox/Mainbox'
import ProductContainer from '../Component/ProductDetail/ProductContainer/ProductContainer'

const Homepage = () => {
    return (
        <div>
            <Navbarcomponent />
            <Mainbox />
            <ProductContainer />
            <FooterComponent />
        </div>
    )
}

export default Homepage
