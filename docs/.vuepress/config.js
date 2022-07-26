module.exports = {
	title: '资料库', //标题
    description: '10点读书',
    base:"/weixian/",
	head: [
    
		[
			'script',
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
			},
		],
		[
			'script',
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				type: 'text/css',
				href:
					'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				href: `/favicon.ico`,
			},
		],
	],
	themeConfig: {
		nav: [
			{
				text: 'HTML',
				link: '/html/',
			},
			{
				text: 'CSS',
				link: '/css/',
			},
			// {
			// 	text: 'language',
			// 	link: '/language/',
			// },
			{
				text: 'JS',
				link: '/js/',
				// items: [
				//     { text: 'JS基础', link: '/' },
				//     { text: 'ES6', link: '/' }
				// ],
			},
		],
		sidebar: [
           
			{
				path: '/html/',
				title: '1. HTML',
				children: [
					{
						title: '基础',
						children: [
							{
								path: '/html/Html/1', // 以docs为根目录来查找文件
								title: '基础1',
							},
							{
								path: '/html/Html/2', // 以docs为根目录来查找文件
								title: '基础2',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/html/Interview/text1', // 以docs为根目录来查找文件
                                title: '简单',
                                children:[]
							},
							{
								path: '/html/Interview/text2', // 以docs为根目录来查找文件
								title: '详细',
							},
						],
					},
				],
			},
			{
				path: '/css/',
                title: '2. CSS',
				children: [
					{
                        title: 'css基础',
						children: [
							{
                                path: '/css/Css/1', // 以docs为根目录来查找文件
                                title: 'css基础(1)'
							},
							{
								path: '/css/Css/2', // 以docs为根目录来查找文件
								title: 'css基础(2)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					// {
					// 	title: '面试',
					// 	children: [
					// 		{
					// 			path: '/css/Interview/1',
					// 			title: '简单',
					// 		},
					// 		{
					// 			path: '/css/Interview/2',
					// 			title: '详细',
					// 		},
					// 	],
					// },
				],
			},
			// docs文件夹下面的js文件夹 文档中md文件 书写的位置(命名随意)
			{
				path: '/js/',
				title: '3. JS',
				children: [
					// '/js/', // js文件夹的README.md 不是下拉框形式
					{
						title: '基础',
						children: [
							{
								path: '/js/JS/1', // 以docs为根目录来查找文件
								title: '基础1',
							},
							{
								path: '/js/JS/2', // 以docs为根目录来查找文件
								title: '基础2',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: 'ES6',
						children: [
							{
								path: '/js/ES6/ES61', // 以docs为根目录来查找文件
								title: 'ES6(1)',
							},
							{
								path: '/js/ES6/ES62', // 以docs为根目录来查找文件
								title: 'ES6(2)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: '手写函数',
						children: [
							{
								path: '/js/Function/text1', // 以docs为根目录来查找文件
								title: '手写函数(简单)',
							},
							{
								path: '/js/Function/text2', // 以docs为根目录来查找文件
								title: '手写函数(复杂)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: '正则',
						children: [
							{
								path: '/js/reg/text1', // 以docs为根目录来查找文件
								title: '正则-1',
							},
							{
								path: '/js/reg/text2', // 以docs为根目录来查找文件
								title: '手写函数(复杂)',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
                    },
                    {
                        title: 'ast',
                        path: '/js/ast',
					
					},
                    {
                        title: '数组和对象',
                        path: '/js/arry',
					
					},
				],
			},
			{
				path: '/vue/',
				title: '4. Vue',
				children: [
					{
						title: 'vue基础',
						children: [
							{
								path: '/vue/vue/1',
								title: 'vue基础(1)',
							},
							{
								path: '/vue/vue/2',
								title: 'vue基础(2)',
							}
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/vue/Interview/1',
								title: '简单',
							},
							{
								path: '/vue/Interview/2',
								title: '详细',
							},
						],
					},
					{
						title: '源码分析',
						children: [
							{
								path: '/vue/SourceCode/1',
								title: '数据渲染-初始化',
							},
							{
								path: '/vue/SourceCode/2',
								title: 'new Vue',
							},
						],
					},
					{
						title: 'VUE3.0',
						children: [
							{
								path: '/vue/vue3/1',
								title: 'VUE3.0指南',
							},
						],
					},
					{
						title: 'Vuex',
						children: [
                            {
								path: '/vue/vuex/1copy',
								title: 'vuex使用指南',
							},
							{
								path: '/vue/vuex/2',
								title: 'vuex问答',
							},
						],
					},
				],
            },
			{
				path: '/react/',
				title: '4. react',
				children: [
					{
						title: 'react基础',
						children: [
							{
								path: '/react/react/1',
								title: 'react基础(1)',
							},
							{
								path: '/react/react/2',
								title: 'react基础(2)',
							}
						],
					},
				],
            },
            
			
			{
				path: '/ts/',
				title: '5. TS',
				children: [
					{
						title: '基础',
						children: [
							{
								path: '/ts/base/1',
								title: '基础1',
							},
							{
								path: '/ts/base/2',
								title: '基础2',
							},
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/ts/Interview/1',
								title: '简单',
							},
							{
								path: '/ts/Interview/2',
								title: '详细',
							},
						],
					},
				],
			},
			{
				path: '/node/',
				title: '6. Node',
				children: [
					{
						title: 'node基础',
						children: [
							{
								path: '/node/base/1',
								title: 'node基础(1)',
							},
							{
								path: '/node/base/2',
								title: 'node基础(2)',
							},
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/node/Interview/1',
								title: '简单',
							},
							{
								path: '/node/Interview/2',
								title: '详细',
							},
						],
					},
				],
            },
    
            {
				path: '/tools/',
				title: '8. 工具',
				children: [
					{
						title: 'vscode',
						children: [
							{
								path: '/tools/vscode/1', // 以docs为根目录来查找文件
								title: 'vscode常用功能',
							},
							{
								path: '/tools/vscode/2', // 以docs为根目录来查找文件
								title: 'vscode插件',
							},
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
					},
					{
						title: 'Git',
						children: [
							{
								path: '/tools/git/1',
								title: '常用操作',
							}
						],
					},
                    {
						title: 'chrome插件',
						children: [
							{
								path: '/tools/chajian/1',
								title: '插件--chrome',
							}
						],
					},
					{
						title: 'webpack',
						children: [
							{
								path: '/tools/webpack/1',
								title: 'webpack 提高构建速度的方式',
							},
							{
								path: '/tools/webpack/2', 
								title: '什么是loader',
							},
							{
								path: '/tools/webpack/3', 
								title: 'webpack原理',
							},
							{
								path: '/tools/webpack/4', 
								title: 'webpack 动态加载的原理',
							},
							{
								path: '/tools/webpack/5', 
								title: 'webpack 热更新',
							},
							{
								path: '/tools/webpack/6', 
								title: '如何写一个 webpack plugin 热更新',
							},
						],
					},
					
				],
            },
            {
				path: '/browser/',
				title: '9. 浏览器',
				children: [
					{
						title: 'Http',
						children: [
							{
								path: '/browser/Http/1',
								title: '基础1',
							},
							{
								path: '/browser/Http/2',
								title: '基础2',
							},
						],
					},
					{
						title: '面试',
						children: [
							{
								path: '/browser/Interview/1',
								title: '简单',
							},
							{
								path: '/browser/Interview/2',
								title: '详细',
							},
						],
					},
					{
						title: '浏览器调试',
						children: [
							{
								path: '/browser/Console/1',
								title: '浏览器调试(1)',
							},
						],
					},
				],
			},
            {
				path: '/vuePress/',
				title: '10. vuePress',
				children: [
					{
                        title: 'vuePress坑',
                        path: '/vuePress/pit'
					},
					{
                        title: '使用指南',
                        path: '/vuePress/guide'
					},
				
				],
            },
            {
				path: '/xcx/',
				title: '11. 小程序',
				children: [
		
					{
						title: '兼容性',
						children: [
							{
								path: '/xcx/JS/1', 
								title: '文章-黑-1',
							},
							{
								path: '/xcx/JS/2', 
								title: '文章-彩-1',
							},
					
						],
					},
					{
						title: '功能',
						children: [
							{
								path: '/xcx/ES6/ES61',
								title: '文章-黑-1',
							},
							{
								path: '/xcx/ES6/ES62', 
								title: '文章-彩-1',
							},
				
						],
					},
					{
						title: '手写函数',
						children: [
							{
								path: '/xcx/Function/text1',
								title: '手写函数(简单)',
							},
							{
								path: '/xcx/Function/text2', 
								title: '手写函数(复杂)',
							},
							
						],
					},
				],
            },
            {
				path: '/Photography/',
				title: '12. 摄影',
				children: [
		
					{
						title: '前期',
						children: [
							{
								path: '/Photography/front/1', 
								title: '文章-黑-1',
							},
							{
								path: '/Photography/front/2', 
								title: '文章-彩-1',
							},
					
						],
					},
					{
						title: '后期',
						children: [
							{
								path: '/Photography/back/1',
								title: '文章-黑-1',
							},
							{
								path: '/Photography/back/2', 
								title: '文章-彩-1',
							},
				
						],
					},
					{
						title: '手写函数',
						children: [
							{
								path: '/xcx/Function/text1',
								title: '手写函数(简单)',
							},
							{
								path: '/xcx/Function/text2', 
								title: '手写函数(复杂)',
							},
							
						],
					},
				],
            },
            {
				path: '/note/',
				title: '12. 总结',
				children: [
					{
                        title: '总结--2021/02/22',
                        path: '/note/pit'
					},
					{
                        title: '使用指南',
                        path: '/note/guide'
					},
					{
                        title: '怎么开发react项目',
                        path: '/note/react'
					},
					{
                        title: '开发笔记',
                        path: '/note/react1'
					},
				
				],
            },
        ],
		sidebarDepth: 4,
	},
	dest: './docs/.vuepress/dist',
	ga: '',
	evergreen: true,
}
