import React from 'react';


const UserForm = (props) => {
    return(
    <form onSubmit={props.retrieveInfo}>

        <input style= {{margin:"30px" }} type="text" name="username"/>
        <button id="Search"> Search </button>
    </form>
    );
}

export default UserForm;

