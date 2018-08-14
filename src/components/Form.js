import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}
export default Form

// const Form = props => (
// <aside className='app__aside'>
//     <h1 className='app__title'>All countries</h1>
//     {props.show && <input autoFocus type='text' placeholder='City...' className='app__input' />}
//     {props.show && <input autoFocus type='text' placeholder='Country...' className='app__input' />}
//     <button>Get Weather</button>
// </aside>


    // <form onSubmit={props.getWeather}>
    //     <input type="text" name="city" placeholder="City..." />
    //     <input type="text" name="country" placeholder="Country..." />
    //     <button>Get Weather</button>
    // </form>
// );

// export default Form;