document.addEventListener('DOMContentLoaded', function() {
    // 创建切换模式按钮
    var toggleButton = document.createElement('button');
    toggleButton.id = 'mode-toggle';
    toggleButton.title = '切换模式';
    toggleButton.textContent = '暗'; // 使用单个中文字

    // 创建缩小字体按钮
    var decreaseButton = document.createElement('button');
    decreaseButton.id = 'font-decrease';
    decreaseButton.title = '缩小字体';
    decreaseButton.textContent = '小'; // 使用单个中文字

    // 创建放大字体按钮
    var increaseButton = document.createElement('button');
    increaseButton.id = 'font-increase';
    increaseButton.title = '放大字体';
    increaseButton.textContent = '大'; // 使用单个中文字

    // 创建按钮容器
    var buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.marginBottom = '20px';
    buttonContainer.style.marginRight = '6px'; // 右边距为6px

    // 将按钮添加到容器中，顺序为“暗”、“小”、“大”
    buttonContainer.appendChild(toggleButton);
    buttonContainer.appendChild(decreaseButton);
    buttonContainer.appendChild(increaseButton);

    // 将按钮容器插入到 .container 前面
    var container = document.querySelector('.container');
    container.parentNode.insertBefore(buttonContainer, container);

    // 添加点击事件
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '亮'; // 切换为“亮”
        } else {
            toggleButton.textContent = '暗'; // 切换为“暗”
        }
    });

    increaseButton.addEventListener('click', function() {
        var currentFontSize = parseFloat(document.body.style.fontSize) || 16; // 默认字体大小为 16px
        document.body.style.fontSize = (currentFontSize + 2) + 'px';
    });

    decreaseButton.addEventListener('click', function() {
        var currentFontSize = parseFloat(document.body.style.fontSize) || 16; // 默认字体大小为 16px
        document.body.style.fontSize = (currentFontSize - 1) + 'px';
    });
});