import React, {Component} from 'react';
import './List.css';

class List extends Component {

    render () {
        console.log(this.props)
        return(            
            <ul>
                {this.props.characterList.map(char =>
                    <li>
                        <p>{char.name}</p>
                    </li>)}
            </ul>
        )
    }
}

export default List;