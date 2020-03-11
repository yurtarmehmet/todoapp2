import React from 'react';
import {connect} from "react-redux";
import {removeUser} from "./actions";

const OtherPage = (props) => {
    console.log("Other Page Props", props);
    const {usersFromRedux, removeUserFromRedux} = props;
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    usersFromRedux.map((user, index) => {
                        return <li key={user.id}>{user.name}
                        <span style={{background: "red", color: "#fff"}}
                            onClick={() => {
                                removeUserFromRedux(user.id);
                            }}
                        >
                            Sil
                        </span>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};



const mapStateToProps = (state) => {
    return {
        usersFromRedux: state.users
    }
};

const mapDispatchToProps = dispatch => ({
    removeUserFromRedux: (id) => dispatch(removeUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(OtherPage);