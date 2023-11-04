import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddBookmark}) => {
    // console.log(blog)

    const{title,cover,author,author_image,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mt-10 mb-15'>
            <img className='mt-5' src={cover} alt={`cover picture of the ${title}`} />
            <div className='mt-2 flex justify-between'>
                <div className='flex'>
                <img className='w-14' src={author_image} alt="" />
                <div className='ml-4'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>

                </div>

                <div>
                    <span className=''>{reading_time} min read</span>
                    <button onClick={handleAddBookmark} className='ml-2'><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map(hash=><span key={blog.id}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;