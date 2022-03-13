export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-4651428b.js","js":["start-4651428b.js","chunks/vendor-94fb85a0.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
};
