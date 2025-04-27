
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert('Wallet Connected: ' + accounts[0]);
        } catch (err) {
            console.error(err);
            alert('Wallet connection failed');
        }
    } else {
        alert('MetaMask not detected!');
    }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);
