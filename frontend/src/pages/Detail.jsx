export default function Detail() {
  return(
    <>
      <h1>게시글 상세</h1>
      <div className="postDetail">
        <h3>제목</h3>
        <p>내용</p>
        <div className="infoWrapper">
          <p>작성자</p>
          <p>날짜</p>
        </div>
      </div>
    </>
  )
}