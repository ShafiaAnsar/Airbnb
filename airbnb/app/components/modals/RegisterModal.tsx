'use client'
 import axios from "axios"
 import {AiFillGithub} from "react-icons/ai" 
 import {FcGoogle} from 'react-icons/fc'
 import { useCallback,useState } from "react"
 import Heading from "../Heading"
 import Input from "../inputs/Input"
 import useRegisterModal from "@/app/hooks/useRegisterModal"
 import{
    SubmitHandler,
    useForm,
    FieldValues

 } from 'react-hook-form'
import Modal from "./Modal"
 const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading,setIsLoading] = useState(false)
    const {register ,handleSubmit , formState:{
        errors,}
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            password:'',
            email:''
        }
    })
    const onSubmit : SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true)
        axios.post('/api/register',data)
        .then(()=>{
            registerModal.onClose()
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setIsLoading(false)

        })
    }
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
            title='Welcome to Aibnb'
            subtitle="Create an account!"
            />
            <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />

        </div>
    )
   return (
     <Modal
     disabled={isLoading}
     isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      
     />
   )
 }
 
 export default RegisterModal