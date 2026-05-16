import { Fragment, Component } from 'react';

import Users from './Users';
import ErrorBoundry from './ErrorBoundry.js';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {

    static contextType = UsersContext;

    constructor(){
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        }
    };

    componentDidMount(){
        // http request...
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    searchChangeHandler(event){
        this.setState({ searchTerm: event.target.value });
    }

    render(){
        return (
            <Fragment>            
            <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
            </div>
            <ErrorBoundry>
                <Users users={this.state.filteredUsers} />
            </ErrorBoundry>
            </Fragment>
        );
    };
    
};

export default UserFinder;