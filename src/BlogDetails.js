import { useParams } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {

        const { id } = useParams();
        const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

        return ( <
                div className = "blog-details" >
                <
                h2 > Blog details - { id } < /h2>   {
                    isPending && < div > Loading..... < /div>}   {
                        error && < div > { error } < /div>}  {
                                blog && ( <
                                    article >
                                    <
                                    h3 > { blog.title.id } < /h3>  <
                                    p > { blog.body } < /p>    <
                                    h4 > { author } < /h4>   <
                                    /article>
                                )
                            } <
                            /div>
                    )
                };

                export default BlogDetails;