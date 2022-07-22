module.exports = {
	title: '资料库', //标题
	description: '10点读书',
	base: "/longweixia/",
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
				text: 'JS',
				link: '/js/',

			},
		],
		sidebar: [


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
							// 上面地址查找的是：docs>js>JS>test.md 文件
							// 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
						],
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
