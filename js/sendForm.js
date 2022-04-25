const sendForm = () => {
    const form = document.querySelector('.modal')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value,
        }

        fetch('https://jsonplaceholder.typicode.com/posts/43123123', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (response.status === 404) {
                    alert('Not found!')
                }
                return response.json()
            })
            .finally(() => {
                form.reset();
            })
    })
}

sendForm()