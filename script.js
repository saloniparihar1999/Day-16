function count(num, cb) {
    setTimeout(() => {
        document.body.innerText = num;
        cb();
    }, 1000);
}

count(10, () => {
    count(9, () => {
        count(8, () => {
            count(7, () => {
                count(6, () => {
                    count(5, () => {
                        count(4, () => {
                            count(3, () => {
                                count(2, () => {
                                    count(1, () => {
                                        setTimeout(() => {
                                            document.body.innerText = "Happy Independence Day!";
                                        }, 1000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
