export default function Edit() {
  return(
    <>
      <h1>게시글 수정 페이지</h1>
      <form action="/api/edit/:id" method="post">
        <input type="text" name="title" placeholder="제목을 입력하세요" />
        <input type="text" name="detail" placeholder="내용을 입력하세요"/>
        <button type="submit">수정하기</button>
      </form>
    </>
  )
}