function showNewsContent(newsId) {
				// 获取所有新闻部分
				var sections = document.getElementsByTagName('section');
				
				// 隐藏所有新闻
				for(var i = 0; i < sections.length; i++) {
					sections[i].classList.remove('active');
				}
				
				// 显示目标新闻
				if (newsId) {
					var targetNews = document.getElementById(newsId);
					if (targetNews) {
						targetNews.classList.add('active');
					}
				}
			}

			// 处理 URL 变化
			function handleHashChange() {
				var hash = window.location.hash;
				var newsId = hash ? hash.substring(1) : 'news1';
				showNewsContent(newsId);
			}

			// 监听 URL hash 变化
			window.addEventListener('hashchange', handleHashChange);

			// 页面加载时处理
			window.addEventListener('load', handleHashChange);

			// 为所有新闻链接添加点击事件
			document.addEventListener('DOMContentLoaded', function() {
				var links = document.querySelectorAll('.index a');
				links.forEach(function(link) {
					link.addEventListener('click', function(e) {
						var newsId = this.getAttribute('href').substring(1);
						showNewsContent(newsId);
					});
				});
			});