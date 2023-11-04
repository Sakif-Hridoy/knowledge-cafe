import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    // console.log(blog)

    const{Title,Cover,Author,Author_img,Posted_date,Reading_time,Hashtags} = blog;
    return (
        <div>
            <img src={Cover} alt={`cover picture of the ${Title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                <img className='w-14' src={Author_img} alt="" />
                <div className='ml-4'>
                    <h3 className='text-2xl'>{Author}</h3>
                    <p>{Posted_date}</p>
                </div>

                </div>

                <div>
                    <span className=''>{Reading_time}12 min read</span>

                </div>
            </div>
            <h2 className='text-4xl'>{Title}</h2>
            <p>
                {
                    Hashtags.map(hash=><span key={blog.ID}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;