<template><p>adb 积累</p>
<ul>
<li>adb</li>
<li>覆盖安装 apk<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> adb <span class="token function">install</span> -r test-app.apk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>卸载 apk<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> adb uninstall test-app.apk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
</template>
