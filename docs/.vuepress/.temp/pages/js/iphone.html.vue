<template><h1 id="尺寸相关" tabindex="-1"><a class="header-anchor" href="#尺寸相关" aria-hidden="true">#</a> 尺寸相关</h1>
<h2 id="在网页设计css中-经常用到字体-而字体大小的设置单位-常用的有2种-px、pt。这两个有什么区别呢" tabindex="-1"><a class="header-anchor" href="#在网页设计css中-经常用到字体-而字体大小的设置单位-常用的有2种-px、pt。这两个有什么区别呢" aria-hidden="true">#</a> 在网页设计css中，经常用到字体，而字体大小的设置单位，常用的有2种：px、pt。这两个有什么区别呢？</h2>
<p>先搞清基本概念：</p>
<ul>
<li>px就是表示pixel，</li>
<li>像素，是屏幕上显示数据的最基本的点；</li>
<li>pt就是point，英文音译为“磅因”，中文读作“点”，是排版印刷中常用的文字大小单位。
这样很明白，</li>
<li>px是一个点，它不是自然界的长度单位，谁能说出一个“点”有多长多大么？可以画的很小，也可以很大。如果点很小，那画面就清晰，我们称它为“分辨率高”，反之，就是“分辨率低”。所以，“像素”的大小是会“变”的，也称为“相对长度”。</li>
<li>pt全称为point，但中文不叫“磅”，正确的说法是一个专用的印刷单位“点”，1点=0.376毫米=1.07英美点=0.0148英尺=0.1776英寸。</li>
</ul>
<h2 id="iphone-手机屏幕相关资料" tabindex="-1"><a class="header-anchor" href="#iphone-手机屏幕相关资料" aria-hidden="true">#</a> iphone 手机屏幕相关资料</h2>
<ul>
<li>iPhoneX 的分辨率：2436 * 1125 || pt: 812 * 375</li>
<li>iPhoneXr的分辨率：1792 * 828 || pt: 896 * 414</li>
<li>iPhoneXs 的分辨率： 2436 * 1125 || pt: 812 * 375</li>
<li>iPhoneXs Max 的分辨率：2688 * 1242 || pt: 896 * 414</li>
</ul>
<h3 id="状态栏高度" tabindex="-1"><a class="header-anchor" href="#状态栏高度" aria-hidden="true">#</a> 状态栏高度</h3>
<ul>
<li>iPhoneX 之前 其他版本状态栏高度是 20pt</li>
<li>iPhoneX iPhoneXr iPhoneXs iPhoneXs 都是 44pt</li>
</ul>
<h3 id="底部危险区域高度" tabindex="-1"><a class="header-anchor" href="#底部危险区域高度" aria-hidden="true">#</a> 底部危险区域高度</h3>
<ul>
<li>iPhoneX底部的危险区域高度为34pt</li>
</ul>
<p>app 内嵌网页 需要自己适配的时候需要获取手机屏幕宽高去区分</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isIphoneX</span> <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>height <span class="token operator">==</span> <span class="token number">812</span> <span class="token operator">&amp;&amp;</span> screen<span class="token punctuation">.</span>width <span class="token operator">==</span> <span class="token number">375</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>height <span class="token operator">==</span> <span class="token number">896</span> <span class="token operator">&amp;&amp;</span> screen<span class="token punctuation">.</span>width <span class="token operator">==</span> <span class="token number">414</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// document.documentElement.dataset.dpr 需要自己去设置</span>
cosnt dpr <span class="token operator">=</span>  window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>dpr <span class="token punctuation">,</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>  <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ height: `${(isIphoneX ? 44 : 20) * dpr}px` }<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isIOS &amp;&amp; isAppEnv<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="关于-dpr" tabindex="-1"><a class="header-anchor" href="#关于-dpr" aria-hidden="true">#</a> <a href="https://www.cnblogs.com/liujn0829/p/7909218.html" target="_blank" rel="noopener noreferrer">关于 dpr <ExternalLinkIcon/></a></h2>
<p>做手机端项目，不可避免要寻找一个手机端页面与手机屏幕适配最佳方案。在这之前，我觉得还是要去理解一下dpr（设备像素比）。</p>
<p>我们还要了解一些与dpr相关的概念：</p>
<p>(1)物理像素(physical pixel)
一个物理像素是显示器(手机屏幕)上最小的物理显示单元（像素颗粒），在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值。</p>
<p>如：iPhone6上就有750*1334个物理像素颗粒。</p>
<p>(2)设备独立像素(density-independent pixel)
设备独立像素(也叫密度无关像素)，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，有时我们也说成是逻辑像素。</p>
<p>(3)设备像素比(device pixel ratio )简称dpr
设备像素比(简称dpr)定义了物理像素和设备独立像素的对应关系。</p>
<p>(4)公式：
设备像素比 = 物理像素 / 逻辑像素(px)  Ps:在某一方向上，x方向或者y方向
如：iPhone6的dpr为2，物理像素750（x轴）,则它的逻辑像素为375。
也就是说，1个逻辑像素，在x轴和y轴方向，需要2个物理像素来显示，如下图：</p>
<p>问题：为什么以iPhone6为标准的设计稿的尺寸是以750px宽度来设计的呢？
iPhone6的满屏宽度是375px（Viewport’s device-width (in CSS pixels)：375px），而iPhone6采用的视网膜屏的物理像素是满屏宽度的2倍，并且设计师所用的PS设计软件分辨率和像素关系是1:1。所以为了做出的清晰的页面，设计师一般给出750px的设计图，我们再根据需求对元素的尺寸设计和压缩。</p>
</template>
