const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

passport.serializeUser((user, done) => {
  console.log('serializeUser', user)
  done(null, user.googleId)
})

passport.deserializeUser((id, done) => {
  console.log('deserializeUser', id)
  done(null, { id })
  // User.findById(id).then(user => {
  //   done(null, user)
  // })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
    // async (accessToken, refreshToken, profile, done) => {
      // const existingUser = await User.findOne({ googleId: profile.id })

      // if (existingUser) {
      //   return done(null, existingUser)
      // }

      // const user = await new User({ googleId: profile.id }).save()
      console.log('GoogleStrategy', profile)
      const user = { googleId: profile.id }
      done(null, user)
    }
  )
)
