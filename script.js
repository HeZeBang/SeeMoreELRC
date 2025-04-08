// ==UserScript==
// @name         拦截 script 标签插入
// @match        *://elrc.shanghaitech.edu.cn/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    setInterval(() => {
        const app = document.querySelector('#app');
        if (app && app.__vue__ && app.__vue__.reviewPermission) {
            console.log('🎯 找到 Vue 实例和权限对象');

            app.__vue__.reviewPermission.courseAuthority = true;
            app.__vue__.reviewPermission.reviewAuthority = true;

            console.log('✅ 权限已设置为 true');
            clearInterval(checkInterval);
        }
    }, 10);
})();

