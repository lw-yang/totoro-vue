const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,

  transitionName: state => state.transition.transitionName
}
export default getters
