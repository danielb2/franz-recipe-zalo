module.exports = (Franz) => {
        console.log('test');
    const getMessages = function getMessages() {
        console.log('foo');
        let count = 0;
        const messageCounts = document.querySelectorAll('.z-noti-badge');
        if (messageCounts.length > 0) {
            count = messageCounts.length / 2;
        }
        Franz.setBadge(parseInt(count));
    };

    Franz.loop(getMessages);
};
