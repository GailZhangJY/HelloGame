/* 弹窗一：say hello baby */
$(document).ready(function () {
    // 检查是否是 Chromium 内核且版本小于 100
    function isOldChromium() {
        try {
            const userAgent = navigator.userAgent;
            const chromeMatch = userAgent.match(/Chrome\/(\d+)/);
            if (chromeMatch && chromeMatch[1]) {
                const chromeVersion = parseInt(chromeMatch[1], 10);
                return chromeVersion < 100;
            }
            return false;
        } catch (error) {
            console.error("Error detecting Chromium version:", error);
            // 出现异常时默认不弹出弹窗
            return true;
        }
    }

    if (isOldChromium()) {
        return;
    }

    // 检查本地存储中的标志位，如果标志位为 true，则不再弹出弹窗
    let lastPopupTime = localStorage.getItem("HelloGame");
    lastPopupTime = new Date(lastPopupTime).getTime();
    const currentTime = new Date().getTime();
    const timeDifferenceInDays = Math.floor((currentTime - lastPopupTime) / (1000 * 60 * 60 * 24));
    if (!lastPopupTime || timeDifferenceInDays >= 10) {
        Swal.fire({
            // width: 300,
            title: "欢迎",
            // text: "欢迎扫码关注站长公众号：AI异想录",
            html: `
            <!-- <font style="font-weight:bold; color:red;">HelloGame 仍处于初期建设当中</font>-->
            <!-- <br>-->
            欢迎扫码关注站长公众号：AI异想录   
            `,
            showCancelButton: true,
            confirmButtonText: "知道了",
            cancelButtonText: "烦死了，近期不再弹出！",
            confirmButtonColor: "#0084ff",
            imageUrl: "https://img.hellogame.one/web/wechat.jpg",
            // imageUrl: "https://spiderapi.cn/img/qrcode/gzh.png",
            // imageWidth: 300,
            // imageHeight: 300,
            imageAlt: "公众号：AI异想录",
            showClass: {
                popup: "swal2-show"
            },
            hideClass: {
                popup: "swal2-hide"
            }
        }).then((result) => {
            if (result.isConfirmed) {

            } else {
                localStorage.setItem("FUCK_GIZAWORKS", new Date().toISOString());
            }
        });
        const popupContainer = document.querySelector('.swal2-container');
        popupContainer.style.zIndex = '9999';
    }
});

/* 弹窗二：免责声明 */
$(document).ready(function () {
    let popupWidth = "55%"; // 默认宽度
    if (window.innerWidth < 768) {
        popupWidth = "95%";
    } else {
        popupWidth = "55%";
    }

    const showDisclaimerElement = document.getElementById("show-disclaimer");
    showDisclaimerElement.addEventListener("click", function () {
        Swal.fire({
            html: `
            <div class="custom-swal-container">
                <h3>免责声明</h3>
                <p style="text-align: left;">欢迎使用我们的导航站 [HelloGame 游知]！请在使用本站点之前仔细阅读以下免责声明，要访问和使用本站点，您必须接受以下条款和条件！如果您不同意这些条款和条件，请勿使用本站点！</p>
                <ol class="custom-swal-ol">
                    <li>
                        <span>信息准确性</span>
                        <p>本站点提供的导航链接和信息仅供参考，尽管我们努力确保信息的准确性和完整性，但我们不对信息的准确性、完整性、实时性或适用性作出任何明示或暗示的陈述或担保，您应该自行核实和验证您所获得的信息！</p>
                    </li>
                    <li>
                        <span>使用风险</span>
                        <p>使用本站点提供的导航链接和信息是基于您自己的判断和风险，我们不对您使用本站点导航链接导致的任何损失、损害或不便负责，在使用导航链接之前，请确保您已经充分了解所涉及的风险！</p>
                    </li>
                    <li>
                        <span>第三方链接</span>
                        <p>本站点包含的所有指向第三方网站的链接仅供您的方便提供，不代表我们对这些第三方网站的认可或担保，我们对这些第三方网站的内容、隐私政策和行为不承担任何责任，您在访问这些链接时需谨慎自负风险！</p>
                    </li>
                    <li>
                        <span>知识产权和版权</span>
                        <p>本站点为非营利性网站，尊重知识产权和版权，基于互联网之分享精神，如果您认为本站点包含侵犯您的知识产权或版权的内容，请与我们联系，我们会尽快删除或更正相关内容！</p>
                    </li>
                    <li>
                        <span>法律合规</span>
                        <p>您使用本站点的行为应遵守适用的法律法规，您对任何违反法律法规的行为负有全部责任，我们不对您的任何违法行为负责！</p>
                    </li>
                    <li>
                        <span>免责声明的变更</span>
                        <p>我们保留随时修改或更新本免责声明的权利，请您定期查阅本页面以获取最新信息！</p>
                    </li>
                    <li>
                        <span>开源说明</span>
                        <p>本项目由开源项目SpiderBOX而来, 在此表示感谢。并且依旧使用原项目AGPL-3.0和Apache-2.0开源协议</p>
                        <p>SpiderBOX: <a href="https://github.com/WuKongSecurity/SpiderBOX" target="_blank">https://github.com/WuKongSecurity/SpiderBOX</a></p>
                        <p>HelloGame: <a href="https://github.com/GailZhangJY/HelloGame" target="_blank">https://github.com/GailZhangJY/HelloGame</a></p>
                    </li>
                  </ol>
    
                  <h3>联系方式</h3>
                  <ol class="custom-swal-ol">
                    <li>
                        <span>站长邮箱:</span>
                        <button style="display: inline;margin: 0;" id="show-email">点击获取</button>
                    </li>
                    <li>
                        <span>站长公众号:</span>AI异想录
                    </li>
                  </ol>
                  <p class="custom-swal-date">2025年01月21日</p>
            </div
            `,
            width: popupWidth,
            showCancelButton: true,
            confirmButtonText: "同意",
            cancelButtonText: "不同意",
            confirmButtonColor: "#0084ff",
            showClass: {
                popup: "swal2-show"
            },
            hideClass: {
                popup: "swal2-hide"
            },
            allowOutsideClick: false,
            customClass: {
                // popup: "custom-swal-popup"
                container: "custom-swal-container"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.close();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.close();
            }
        });
        const popupContainer = document.querySelector(".swal2-container");
        popupContainer.style.zIndex = "9999";

        let showEmailElement = document.getElementById("show-email");
        showEmailElement.addEventListener("click", function () {
            showEmailElement.innerHTML = atob("aGVsbG9nYW1lQHpoYW5nankubWU=");
        });
    });
});

/* 夜间(日间)模式 */
(function () {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '') {
        if (new Date().getHours() > 22 || new Date().getHours() < 6) {
            document.body.classList.remove('io-black-mode');
            document.body.classList.add('io-grey-mode');
            document.cookie = "night=1;path=/";
            console.log('夜间模式开启');
        } else {
            document.body.classList.remove('night');
            document.cookie = "night=0;path=/";
            console.log('夜间模式关闭');
        }
    } else {
        let night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if (night === '0') {
            document.body.classList.remove('night');
        } else if (night === '1') {
            document.body.classList.add('night');
        }
    }
})();

/* 夜间(日间)模式切换 */

// $("#search-bg").css("background-image", "url({{ with $.Site.Params.cdnURL }}{{ . }}{{ end }}{{ $.Site.Params.images.searchImageL }})");   //默认浅色背景
function switchNightMode() {
    let night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if (night === '0') {
        // $("#search-bg").css("background-image", "url({{ with $.Site.Params.cdnURL }}{{ . }}{{ end }}{{ $.Site.Params.images.searchImageL }})");
        document.body.classList.remove('io-grey-mode');
        document.body.classList.add('io-black-mode');
        document.cookie = "night=1;path=/"
        console.log(' ');
        $(".switch-dark-mode").attr("data-original-title", "日间模式");
        $(".mode-ico").removeClass("icon-night");
        $(".mode-ico").addClass("icon-light");
    } else {
        // $("#search-bg").css("background-image", "url({{ with $.Site.Params.cdnURL }}{{ . }}{{ end }}{{ $.Site.Params.images.searchImageD }})")
        document.body.classList.remove('io-black-mode');
        document.body.classList.add('io-grey-mode');
        document.cookie = "night=0;path=/"
        console.log(' ');
        $(".switch-dark-mode").attr("data-original-title", "夜间模式");
        $(".mode-ico").removeClass("icon-light");
        $(".mode-ico").addClass("icon-night");
    }
}

/* 图片懒加载 */
$(document).ready(function () {
    let observer = new IntersectionObserver((entries, observe) => {
        entries.forEach(item => {
            // 获取当前正在观察的元素
            let target = item.target
            if (item.isIntersecting && target.dataset.src) {
                target.src = target.dataset.src
                // 删除data-src属性
                target.removeAttribute("data-src")
                // 取消观察
                observe.unobserve(item.target)
            }
        })
    })
    //   let allLazyImgs = document.querySelectorAll(".lazy")
    //   allLazyImgs.forEach(item => {
    //       // 遍历观察元素
    //       observer.observe(item)
    //   })
    let allLazyImgs = document.querySelectorAll(".lazy")
    let isScrolling = false;

    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                allLazyImgs.forEach(item => {
                    if (isElementInViewport(item) && item.dataset.src) {
                        observer.observe(item);
                    }
                });
                isScrolling = false;
            });
        }
        isScrolling = true;
    });

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    allLazyImgs.forEach(item => {
        if (isElementInViewport(item) && item.dataset.src) {
            observer.observe(item);
        }
    });
});

/* 初始化检查侧边栏是否需要展开 */
window.addEventListener('DOMContentLoaded', (event) => {
    // 检查 localStorage 中的 mini_sidebar 是否为 true，默认 true
    const isMiniSidebar = localStorage.getItem('mini_sidebar') === 'true' || localStorage.getItem('mini_sidebar') === null;
    const sidebarElement = document.getElementById('sidebar');

    if (isMiniSidebar) {
        sidebarElement.classList.add('mini-sidebar');
        sidebarElement.classList.remove('animate-nav');
        sidebarElement.style.width = '60px';
        $('.header-mini-btn input[type="checkbox"]').prop("checked", true);
    } else {
        sidebarElement.classList.add('animate-nav');
        sidebarElement.classList.remove('mini-sidebar');
        sidebarElement.style.width = '170px';
        $('.header-mini-btn input[type="checkbox"]').prop("checked", false);
    }
});

// 最近文章/视频，右键复制标题链接作者
document.addEventListener("contextmenu", (event) => {
    // 检查是否右键点击了 .hot-list 项
    const hotListItem = event.target.closest(".hot-list");
    if (hotListItem) {
        // 阻止默认右键菜单
        event.preventDefault();
        // 获取标题、链接和作者信息
        const title = hotListItem.querySelector("a").textContent;
        const link = hotListItem.querySelector("a").href;
        const author = hotListItem.querySelector(".hot-rank").getAttribute("title");
        // 拼接内容
        const content = `• 标题: ${title}\n• 链接: ${link}\n• 作者: ${author}\n• 来源: 由 hellogame.one 提供搜集聚合服务`;
        // 将内容复制到剪贴板
        navigator.clipboard.writeText(content).then(() => {
            // https://alertifyjs.com/ 弹窗
            alertify.set('notifier', 'position', 'top-center');
            alertify.set('notifier', 'delay', 3);
            alertify.success('链接已复制到剪贴板');
        }).catch((err) => {
            console.error("链接复制失败:", err);
        });
    }
});


/* 新弹窗：say hello baby */
/*
$(document).ready(function () {
    // 检查是否是 Chromium 内核且版本小于 100
    function isOldChromium() {
        try {
            const userAgent = navigator.userAgent;
            const chromeMatch = userAgent.match(/Chrome\/(\d+)/);
            if (chromeMatch && chromeMatch[1]) {
                const chromeVersion = parseInt(chromeMatch[1], 10);
                return chromeVersion < 100;
            }
            return false;
        } catch (error) {
            console.error("Error detecting Chromium version:", error);
            // 出现异常时默认不弹出弹窗
            return true;
        }
    }

    if (isOldChromium()) {
        return;
    }

    // 检查本地存储中的标志位，如果标志位为 true，则不再弹出弹窗
    let lastPopupTime = localStorage.getItem("FUCK_GIZAWORKS");
    lastPopupTime = new Date(lastPopupTime).getTime();
    const currentTime = new Date().getTime();
    const timeDifferenceInDays = Math.floor((currentTime - lastPopupTime) / (1000 * 60 * 60 * 24));
    if (!lastPopupTime || timeDifferenceInDays >= 10) {
        alertify.confirm("欢迎访问", "Message1<br>Message2", function(){ alertify.success("俺知道了") }
                , function(){ alertify.error("烦死了，近期不再弹出！")});
    }
});
*/
