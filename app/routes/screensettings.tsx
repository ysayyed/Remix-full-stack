import type {  ActionFunctionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { useSubmit } from "@remix-run/react"
import {TextInput} from '../styled/components'
export const action = async ({request}:ActionFunctionArgs)=>{
    const body = await request.formData();
    const todo = {
        email : body.get("email"),
        password: body.get("password")
    }
    console.log(todo)
    return redirect(`/screensettings`);
} 

export default function Screen(){
    return(<>
        <h1>Simple Login Form</h1>
        <hr />
        <Form method="post" >

            <TextInput type="email" name="email" placeholder="Email" /> <br />
            <TextInput type="text" name="password" placeholder="password"/> <br />
            <button type="submit" >Submit</button>
        </Form>

    </>)
}