    // Install PWA
    let deferredPrompt;
    const installButton = document.querySelector('#install-button');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;

      // Show install button
      installButton.style.display = 'block';
    });

    installButton.addEventListener('click', () => {
      // Show install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt.');
        } else {
          console.log('User dismissed the install prompt.');
        }

        // Reset deferred prompt
        deferredPrompt = null;

        // Hide install button
        installButton.style.display = 'none';
      });
    });
