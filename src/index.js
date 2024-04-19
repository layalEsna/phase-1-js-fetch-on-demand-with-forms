const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        //console.log(e)
        const input = document.querySelector('input#searchByID')
        //console.log(input.value)

        fetch(`http://localhost:3000/movies/${input.value}`)

            .then(res => res.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4')
                title.textContent = data.title
                const summary = document.querySelector('section#movieDetails p')
                summary.textContent = data.summary

            })

    })

}

document.addEventListener('DOMContentLoaded', init);