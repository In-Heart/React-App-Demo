
export default {
  namespace: 'user',
  state: {
    name: 'user',
    user: {}
  },
  reducers: {
    emptyUser (state, playload) {
      return {
        ...state,
        user: {}
      }
    },
    setUser (state, { user }) {
      return {
        ...state,
        user: user || {}
      }
    }
  },
}
