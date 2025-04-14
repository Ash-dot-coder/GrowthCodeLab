const UserList = () => {
    const users = [
        { id: 1, name: "Tejas", age: 22 },
        { id: 2, name: "Junaid", age: 23 },
        { id: 3, name: "Kashyap", age: 21 },
    ];

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                </div>
            ))}
        </div>
    );
};

export default UserList;