export default function Login() {
  return(
    <>
      <h1>로그인 페이지</h1>
      <form action="/login" method="post">
        <label htmlFor="username">사용자이름</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" id="password" />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}