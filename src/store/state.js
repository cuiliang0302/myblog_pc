const state = {
	// markdown目录(sessionStorage)
	outline: {},
	// markdown目录是否显示
	outlineShow: true,
	// 登录后跳转页
	nextPath: '/personal/myIndex',
	// 是否保持登录
	keepLogin: false,
	// 保持登录用户信息(localStorage)
	userLocal: {},
	// 临时登录用户信息(sessionStorage)
	userSession: {},
	// 当前激活的个人中心导航栏ID
	asideMenuIndex: '1'
}
export default state

