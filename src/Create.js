import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
            // console.log(blog)

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("NEw Blog")
            history.push('/');
        })
    }


    return ( <
        div className = 'create' >
        <
        h2 > Add a New Blogs < /h2>

        <
        form onSubmit = { handleSubmit } >
        <
        label > Blog Title < /label>

        <
        input type = 'text'
        required value = { title }
        onChange = {
            (e) => setTitle(e.target.value) }
        />

        <
        label > Blog Body < /label>

        <
        textarea required value = { body }
        onChange = {
            (e) => setBody(e.target.value) } >
        <
        /textarea>

        <
        label > Blog Author < /label>   <
        select value = { author }
        onChange = {
            (e) => setAuthor(e.target.value) } >

        <
        option value = "gyan" > Gyan < /option>     <
        option value = "Akash" > akash < /option>    <
        /select>

        <
        button > Add Blog < /button>

        <
        /form>

        <
        /div> 

    )
}

export default Create;