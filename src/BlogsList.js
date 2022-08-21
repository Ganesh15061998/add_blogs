const BlogsList = (Props) => {
    let blogs = Props.blogs;
    // let data = props.data;
    // console.log(props)

    return ( <
        div classNmae = "blogslist" > {
            blogs.map(blog => ( < div classNmae = 'blog-preview'
                key = { blog.id } >

                <
                a href = { `/blogs/${blog.id}` } >
                <
                h3 > { blog.title } < /h3>     <
                /a>   <
                p > { blog.body } < /p>     { /* <h4 > { author } </h4>   */ }

                <
                /div>
            ))
        } <
        /div>
    )
}

export default BlogsList;