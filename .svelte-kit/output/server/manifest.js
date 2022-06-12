export const manifest = {
	appDir: "_app",
	assets: new Set(["appicon.png","bg.jpg","favicon.png","manifest.json","oldfavicon.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".json":"application/json"},
	_: {
		entry: {"file":"start-e42564a2.js","js":["start-e42564a2.js","chunks/index-61b7a329.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "oldindex",
				pattern: /^\/oldindex\/?$/,
				names: [],
				types: [],
				path: "/oldindex",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "room/database",
				pattern: /^\/room\/database\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/room/database.js')
			},
			{
				type: 'page',
				id: "room/invalidId",
				pattern: /^\/room\/invalidId\/?$/,
				names: [],
				types: [],
				path: "/room/invalidId",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "room/[roomId]",
				pattern: /^\/room\/([^/]+?)\/?$/,
				names: ["roomId"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
