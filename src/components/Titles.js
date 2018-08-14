import React from 'react';

class Titles extends React.Component{
    render(){
        return(
            <div>

            <h1>Weather Finder</h1>
            <p>Find out temperature, condition and more...</p>

            </div>
        );
    }
};

export default Titles;


// const Titles = () => (        <header className='app__header'>
//             <button onClick={this.showInput} className='app__add'>
//                 <i class="fa fa-plus-circle" aria-hidden="true"></i>
//                 New city
//           </button>
//         </header>
// );

// export default Titles;