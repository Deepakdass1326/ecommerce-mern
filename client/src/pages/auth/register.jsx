import { registerFormControls } from "@/config"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import CommonForm from "@/components/common/form";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";
import { toast } from "sonner"



const initialState ={
    userName: '',
    email: '',
    password: ''
}

function AuthRegister (){

const [formData,setformData]=useState(initialState)
const dispatch = useDispatch()
const navigate =useNavigate()




function onSubmit(event){
    event.preventDefault()
    dispatch(registerUser(formData)).then((data) => {
        if (data?.payload?.success) {
            toast(
                `${data?.payload?.message}` 
              );
       navigate('/auth/login')
       }else{
        toast(
            `${data?.payload?.message}` ,
            {
                variant: 'destructive'
            }
          );
       }
        
    })

    
}
console.log(formData)


    return(
    
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
                <p className="mt-2">Already have an account</p>
                <Link className='font-medium ml-2 text-primary hover:underline'to='/auth/login'>Login</Link>

            </div>
            <CommonForm
            formControls={registerFormControls}
            buttonText={'Sign Up'}
            formData={formData}
            setformData={setformData}
            onSubmit={onSubmit}
            />
        </div>

    )
}

export default AuthRegister