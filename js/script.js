 window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "bc6dd210-d899-4c39-a828-c565769ee5da",
      safari_web_id: "web.onesignal.auto.14469d21-a548-446f-9323-a0e21fc14d38",
      notifyButton: {
        enable: true,
      },
    });
  });
        // ServiceWorkerを読み込ませる
        window.addEventListener('load', function () {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                    .then(function (registration) {
                        return registration.pushManager.getSubscription().then(function (subscription) {
                            console.log("subscription", subscription)
                            if (subscription) {
                                return subscription
                            }
                            return registration.pushManager.subscribe({
                                userVisibleOnly: true
                            })
                        })
                    }).then(function (subscription) {
                        var endpoint = subscription.endpoint
                        console.log("pushManager endpoint:", endpoint)
                    }).catch(function (error) {
                        console.log("serviceWorker error:", error)
                    })
            }
        })

