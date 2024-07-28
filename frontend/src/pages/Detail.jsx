import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/detail/${id}`)
    .then(response => setPost(response.data))
    .catch(error => console.error('Error fetching post Value : ', error));
  }, [id])

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/detail/${id}`)
    .then(() => alert('게시글이 삭제되었습니다.'))
    .catch(error => console.error('Error deleting post : ', error));
  }

  if (!post) {
    return(
      <p>Loading...</p>
    );
  }

  return(
    <>
      <h1>게시글 상세</h1>
      <div className="postDetail">
        <h3>{post.title}</h3>
        <p>{post.detail}</p>
        <div className="infoWrapper">
          <p>{post.author}</p>
          <p>{new Date(post.create_time).toLocaleDateString()}</p>
        </div>
      </div>
      <a href={`/edit/${id}`}></a><button>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </>
  )
}