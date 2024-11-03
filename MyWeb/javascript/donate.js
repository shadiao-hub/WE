function showImage(wechatId, alipayId) {
    // 获取当前点击的按钮对应的容器
    const currentContainer = document.getElementById(wechatId).closest('.qr-container');
    
    // 先关闭所有其他打开的容器
    document.querySelectorAll('.qr-container.active').forEach(container => {
        if (container !== currentContainer) {
            container.classList.remove('active');
            container.querySelectorAll('img, .pay-text').forEach(el => {
                el.style.display = 'none';
            });
        }
    });

    // 如果当前容器已经是激活状态，就折叠它
    if (currentContainer.classList.contains('active')) {
        currentContainer.classList.remove('active');
        currentContainer.querySelectorAll('img, .pay-text').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        // 否则展开当前容器并显示图片
        currentContainer.classList.add('active');
        
        // 显示对应的图片和文字
        const wechatImg = document.getElementById(wechatId);
        const alipayImg = document.getElementById(alipayId);
        
        if (wechatImg) {
            wechatImg.style.display = 'block';
            wechatImg.nextElementSibling.style.display = 'block';
        }
        if (alipayImg) {
            alipayImg.style.display = 'block';
            alipayImg.nextElementSibling.style.display = 'block';
        }
    }
}