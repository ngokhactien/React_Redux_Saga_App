import React ,{ Component} from 'react';


class TaskItem extends Component {

    onUpdataStatus = () => {
        this.props.onUpdataStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }
    render(){
        var  { task ,index } =  this.props;
        return (
            <tr>
                <td> {index +1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={ task.status === true ? 'label label-success' :'label label-danger' }
                        onClick = { this.onUpdataStatus}
                    >
                        { task.status === true ? 'kích hoạt' : 'ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick = { this.onUpdate }
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick ={ this.onDelete}
                    >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
