function startResearch() {
    alert("开始科研导航！");
}



function navigateToPage(page) {
                window.location.href = page;
}



function updateContent(content) {
    document.getElementById('content-area').value = content || "内容已更新！";
}
