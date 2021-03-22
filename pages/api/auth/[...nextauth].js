import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "931789859352-q2hqr3403g80i7tnplpo33ptrkprvk52.apps.googleusercontent.com",
      clientSecret: "sjiBLA8QHr4kS8EMMIGxMgzC"
    }),
  ],

})