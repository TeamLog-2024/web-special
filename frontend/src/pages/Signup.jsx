export default function SignUp() {
  return(
    <>
      <h1>회원가입 페이지</h1>
      <form action="/signup" method="post">
        <label htmlFor="username">사용자이름</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" id="password" />
        <button type="submit">회원가입</button>
      </form>
    </>
  )
}