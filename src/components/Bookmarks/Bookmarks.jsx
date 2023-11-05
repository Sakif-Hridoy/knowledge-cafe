import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-20">
    <h2 className="text-3xl text-center p-4">Bookmarked Blogs:{bookmarks.length}</h2>
    {
        bookmarks.map(bookmark =><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
    }
</div>
  )
}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}

export default Bookmarks