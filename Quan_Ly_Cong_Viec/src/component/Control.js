import React ,{ Component} from 'react';
import Search from './Search';
import Sort  from './Sort';

class Control extends Component {
    render(){
        return (
            <div className="row mt-15">
                {/* tìm kiếm  */}
                <Search onSearch = { this.props.onSearch }/>                
                {/* sắp xếp */}
                <Sort 
                    onSort= {this.props.onSort} 
                    sortBy ={this.props.sortBy}
                    sortValue ={this.props.sortValue}
                />
            </div>
        );
    }
}

export default Control;
