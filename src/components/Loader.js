import React from 'react';

class Loader extends React.Component{
    render(){
        return this.props.isLoading ? (
            <p className="loader">Tu tarjeta se esta creando...</p>
        )
        :('')
    }
}
export default Loader;