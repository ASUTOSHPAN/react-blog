import Reuse2 from "./Reuse";

function Loop() {
    const userData = [
        {
            name: 'Asutosh',
            age: 23,
            email: "asu@gmail.com",
            id: 1
        },
        {
            name: 'Anjali',
            age: 21,
            email: "anju@gmail.com",
            id: 2
        },
        {
            name: 'yaser',
            age: 22,
            email: "yaser@gmail.com",
            id: 3
        },
        {
            name: 'peter',
            age: 20,
            email: "peter@gmail.com",
            id: 4
        }
    ]
    return (
        <div>
            <h1>loop in JSX with Map function #24</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td>Id</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.id}</td>
                            </tr>
                        )

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export function Reuse() {
    let userData = [
        {
            name: "Anjali",
            id: 1,
            age: 23,
            email: "anju@gamil.com"
        },
        {
            name: "Asutosh",
            id: 1,
            age: 23,
            email: "asu@gamil.com"
        },
        {
            name: "Yaser",
            id: 1,
            age: 23,
            email: "yaser@gamil.com"
        },
        {
            name: "Spandan",
            id: 1,
            age: 23,
            email: "spandan@gamil.com"
        }
    ]
    return (
        <div>
            <h1>Reuse Component in JS #25</h1>
            {
                userData.map((user) => (
                    <div key={user.id1}>                      
                        <Reuse2 data={user}/>
                    </div>
                ))
            }
        </div>
    )
}
export default Loop;