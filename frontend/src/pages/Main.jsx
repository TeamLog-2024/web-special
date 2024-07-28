import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api')
        .then(response => setLists(response.data))
        .catch(error => console.error('Error fetching list data : ', error));
  }, [])

  return(
    <>
      <h1>메인 페이지</h1>
      <a href="/signup"><button>회원가입</button></a>
      <a href="/login"><button>로그인</button></a>
      <h3>게시글 목록</h3>
      <ul>
        {lists.map(list => (
          <a href={`/detail/${list.id}`} key={list.id}><li>{list.title}</li></a>
        ))}
      </ul>
      <a href='/write'><button>글 쓰러 가기</button></a>
    </>
  )
}