self.addEventListener('install', pEvent => {
    console.log('서비스워커 설치완');
});

self.addEventListener('activate', pEvent => {
    console.log('서비스워커 동작 시작 고고');
});

self.addEventListener('fetch', pEvent => {
    console.log("data 요청 ", pEvent);
});
 