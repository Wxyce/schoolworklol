document.addEventListener('DOMContentLoaded', () => {

    const profile_page = document.querySelector('.posts')

    let position = 0

    const right_button = document.querySelector('.buttonright')
    const left_button = document.querySelector('.buttonleft')

    left_button.style.visibility = 'hidden'

    right_button.addEventListener('click', () => {
        console.log(position)
        if (position > -600)
            position -= 200
            profile_page.style.transform = `translate(${position}px)`

            left_button.style.visibility = 'visible'

            if (position <= -600) {
                right_button.style.visibility = 'hidden'
            }
    })
    left_button.addEventListener('click', () => {
        console.log(position)
        if (position < 0) {
            position += 200
            profile_page.style.transform = `translate(${position}px)`

            right_button.style.visibility = 'visible'

            if (position >= 0) {
                left_button.style.visibility = 'hidden'
            }
        }

    })




})
