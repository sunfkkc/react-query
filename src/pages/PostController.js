import React,{useState} from 'react'
import {useQuery} from 'react-query'


function PostController() {
    const [postId, setPostId] = useState(-1)

    const usePosts = function() {
        return{ useQuery("posts", )

        }
    }
  return (
    <div>PostController</div>
  )
}

export default PostController