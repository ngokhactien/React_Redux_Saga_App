import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../contants';
import TaskList from './../../components/TaskList';
import TaskForm from './../TaskForm';
import SearchBox from './../../components/SearchBox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as taskActions from './../../actions/task' ;
import * as modalActions from '../../actions/modal' ;

class TaskBoard extends Component {

  constructor (props){
    super(props);
    this.state = {
      open : false
    }
  };

  componentDidMount(){
    const { taskActionCreators } = this.props ;
    const { fetchListTask , fetchListTaskSuccess ,fetchListTaskFail } = taskActionCreators ;
    fetchListTaskSuccess();
    fetchListTaskFail();
    fetchListTask();
  }

	handleClose = () =>{
    this.setState({
      open : false
    });
	};

	openForm = () => {
    const { modalActionCreators } = this.props ;
    const { showModal , changeModalTitle , changeModalContent} = modalActionCreators ;
    showModal() ;
    changeModalTitle('Thêm mới công việc ');
    changeModalContent(<TaskForm/>)
	}

	renderBoard = () =>{
    const { listTask } = this.props ;
		let xhtml = null;
					xhtml = (
            <Grid container spacing={2}>
							{
								STATUSES.map(status =>{
									const taskFiltered = listTask.filter(task => task.status === status.value);
									return <TaskList key={status.value} tasks ={taskFiltered} status={ status}/>
								})
							}
					</Grid>
			)
		return xhtml;
	};

  loadData = () => {
    const {taskActionCreators} = this.props ;
    const { fetchListTask } = taskActionCreators ;
    fetchListTask();
  }

  handlefilter = e =>{
    const {value} = e.target ;
    const {taskActionCreators} = this.props ;
    const { filterTask } = taskActionCreators ;
    filterTask(value);
  }

  renderSearchBox = ()=>{
    let xhtml = null ;
    xhtml = (
      <SearchBox handleChange={this.handlefilter} />
    )
    return xhtml ;
  }

  render(){
    const { classes } = this.props ;
    return (
      <div className={classes.TaskBoard}>
        <Button
          style = {{  marginRight :10 }}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.loadData}
        >
          Load Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={ this.openForm }
        >
          <AddIcon /> Thêm mới công việc
        </Button>
      {this.renderSearchBox()}
      {this.renderBoard()}
    </div>
    );
  }
}

TaskBoard.propTypes = {
  classes :PropTypes.object,
  taskActionCreators :PropTypes.shape({
    fetchListTask :PropTypes.func ,
    filterTask : PropTypes.func
  }),
  modalActionCreators :PropTypes.shape({
    showModal :PropTypes.func ,
    hideModal :PropTypes.func ,
    changeModalTitle : PropTypes.func ,
    changeModalContent : PropTypes.func
  })
};

const mapStateToProps = state =>{
  return {
    listTask : state.task.listTask
  }
} ;

const mapDispatchToProps = dispath =>{
  return {
    taskActionCreators : bindActionCreators(taskActions , dispath),
    modalActionCreators : bindActionCreators(modalActions , dispath)
  }
} ;
const withConnect = connect(mapStateToProps , mapDispatchToProps) ;

export default compose(
  withStyles(styles),
  withConnect
)(TaskBoard);
