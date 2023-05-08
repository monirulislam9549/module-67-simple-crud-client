import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData()
    // console.log(loadedUsers);

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value
        const updatedUser = { email, name }
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                }
            })
    }

    return (
        <div>
            <h2>Update information data {loadedUsers.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="name" name="name" defaultValue={loadedUsers?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Update;