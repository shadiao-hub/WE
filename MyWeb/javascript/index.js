// 搜索功能
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    // 这里添加搜索逻辑
    if (searchTerm) {
        alert('搜索: ' + searchTerm);
        // 可以添加实际的搜索实现
    }
}

// 拖动相关变量
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let startTime;
let moveDistance = 0;

// 开始拖动
function dragStart(e) {
    const icon = document.getElementById("draggableIcon");
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    
    if (e.target === icon || icon.contains(e.target)) {
        isDragging = true;
        startTime = new Date().getTime();
        moveDistance = 0;
    }
}

// 拖动过程
function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        // 计算移动距离
        moveDistance = Math.sqrt(
            Math.pow(currentX - xOffset, 2) + 
            Math.pow(currentY - yOffset, 2)
        );

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, document.getElementById("draggableIcon"));
    }
}

// 设置元素位置
function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// 停止拖动
function dragEnd(e) {
    if (isDragging) {
        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        
        // 如果移动距离小于5像素且持续时间小于200毫秒，则认为是点击
        if (moveDistance < 5 && duration < 200) {
            scrollToTop();
        }
    }
    isDragging = false;
}

// 回到顶部函数
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 页面加载完成后添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 拖动功能事件监听器
    const draggableIcon = document.getElementById("draggableIcon");
    if (draggableIcon) {
        draggableIcon.addEventListener("mousedown", dragStart);
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", dragEnd);
    }

    // 搜索输入框回车事件监听
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// 防止拖动时选中文本
document.addEventListener('selectstart', function(e) {
    if (isDragging) {
        e.preventDefault();
    }
});