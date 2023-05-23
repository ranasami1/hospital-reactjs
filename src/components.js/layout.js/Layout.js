import React, {Fragment} from "react";
import {Outlet} from "react-router-dom";
import Nav from '../nav/Nav';
import Footer from "../footer.js/Footer";
const Layout = () =>{
    return(
        <Fragment>
            <Nav/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    )
}
export default Layout;