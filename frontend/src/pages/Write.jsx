export default function Write() {
  return(
    <>
      <h1>글쓰기 페이지</h1>
      <form action="/write" method="post">
        <input type="text" placeholder="제목을 입력하세요" />
        <input type="text" placeholder="내용을 입력하세요" />
        <button type="submit">글쓰기</button>
      </form>
    </>
  )
}