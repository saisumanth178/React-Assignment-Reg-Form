import React,{useState} from 'react'

// import Validation from '../Validation';

function MultipleInputs() {
    const [userRegistration, setuserRegistration] = useState({
        username:"",
        email:"",
        Phone:"",
        Password:""
    });
    const [formErrors, setFormErrors] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [Records, setRecords] = useState([]);

    const HandleInput=(e)=>{        
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setuserRegistration({...userRegistration, [name] : value})
    }

    const HandleSubmit= (e) =>{
        e.preventDefault(); 
        console.log("handle form Submit func called");
        // console.log("e.target ??", e.target)
        const uname = document.getElementById("uname").value
        const NewRecord = {...userRegistration, id:new Date().getTime().toString()}
        const usernameInp = e.target.username
        if (usernameInp === '') {
            formErrors.username = 'Uname is required field!'
        }

        console.log(Records)
        setRecords([...Records, NewRecord])
        console.log(Records)

        setuserRegistration({username:"",email:"",  Phone:"", Password:""})
        // setRecords(Validation(userRegistration))
    }
    return (
        <>
        <form className='Form text-center' onSubmit={HandleSubmit}>
            <div className='formInput m-2'>
                <label className='Form-label m-2' htmlFor='username'>Username</label>
                <input type="text" autoComplete='off' name="username" id="username"
                       value={userRegistration.username} onChange= {HandleInput} required/>
                    {formErrors.username}
                    {/* {Records.username && <p>{Records.username}</p>} */}
            </div>
            <div className='formInput m-2'>
                <label className='Form-label m-2' htmlFor='email'>Email</label>
                <input type="email" autoComplete='off' name="email" id="email" 
                       value={userRegistration.email} onChange= {HandleInput}/>

                    {/* {Records.email && <p>{Records.email}</p>} */}
            </div>
            <div className='formInput m-2'>
                <label className='Form-label m-2' htmlFor='Phone'>Phone</label>
                <input type="number" autoComplete='off' name="Phone" id="Phone"
                        value={userRegistration.phone} onChange= {HandleInput}/>

                     {/* {Records.Phone && <p>{Records.Phone}</p>} */}
            </div>
            <div className='formInput m-2'>
                <label className='Form-label m-2' htmlFor='Password'>Password</label>
                <input type="password" autoComplete='off' name="Password" id="Password" 
                        value={userRegistration.password} onChange= {HandleInput}/>
                    
                    {/* {Records.Password && <p>{Records.Password}</p>} */}
            </div>
            <button type="submit">Regisration</button>
        </form>
        <div className='data m-2 p-2'>
            {
                Records.map((curEle, idx)=>{
                    return(
                        <div className='ShowRecord d-flex text-center' key={idx}>
                            <p className='p-1'>{curEle.username}</p>
                            <p className='p-1'>{curEle.email}</p>
                            <p className='p-1'>{curEle.Phone}</p>
                            <p className='p-1'>{curEle.password}</p>
                        </div>
                    )
                })
            }
        </div>

        {/* <Validation/> */}
        </>
    )
}

export default MultipleInputs
