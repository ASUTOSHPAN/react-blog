import { Class28 } from "./class28";

function Nested() {
    let collegeData = [
        {
            name: "GIET",
            city: "Bhubaneswar",
            website: "www.giet.com",
            student: [
                {
                    name: "Asutosh",
                    age: 23,
                    email: "asu@gmail.com"
                },
                {
                    name: "Anjali",
                    age: 21,
                    email: "anju@gmail.com"
                },
                {
                    name: "Yaser",
                    age: 23,
                    email: "yaser@gmail.com"
                },
                {
                    name: "Peter",
                    age: 23,
                    email: "peter@gmail.com"
                }

            ]
        },
        {
            name: "GITAM",
            city: "Bhubaneswar",
            website: "www.gitam.com",
            student: [
                {
                    name: "Peter",
                    age: 20,
                    email: "peter@gmail.com"
                },
                {
                    name: "Sonalika",
                    age: 20,
                    email: "sonalika@gmail.com"
                },
                {
                    name: "Sujata",
                    age: 20,
                    email: "sujata@gmail.com"
                },
            ]
        },
        {
            name: "GIFT",
            city: "Bhubaneswar",
            website: "www.gift.com",
            student: [
                {
                    name: "Ashutosh",
                    age: 25,
                    email: "ashutosh@gmail.com"
                },
                {
                    name: "Anajali",
                    age: 20,
                    email: "anju@gmail.com"
                },
                {
                    name: "Sujata",
                    age: 20,
                    email: "sujata@gmail.com"
                }
            ]
        }
    ]
    return (
        <div>
            <h1>Array Nested looping</h1>
            {
                collegeData.map((college, index) => (
                    <div key={index} style={{backgroundColor:"grey",borderBottom:"4px solid red",borderRadius:"20px",padding:"5px",margin:"10px"}}>
                        
                        <h1>CollegeName:{college.name}</h1>
                        <ul>
                            <li>
                                <h2>City:{college.city}</h2>
                            </li>
                            <li>
                                <h2>Website:{college.website}</h2>
                            </li>
                           <li>
                            <h2>Students</h2>
                            {
                                college.student.map((student)=>(
                                    <ul>
                                        <li>Name:{student.name}</li>
                                    </ul>
                                ))
                            }
                           </li>
                        </ul>

                    </div>
                ))
            }
        </div>
    )
}
export default Nested;
