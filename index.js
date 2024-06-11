// template_s3chdi9
// service_6mszv7l
// xeNy6f_m8FyMq1rcu

function contact(event) {
    event.preventDefualt();
    // emailjs
    //     .sendform(
    //         'service_6mszv7l',
    //         'template_s3chdi9',
    //         event.target,
    //         'xeNy6f_m8FyMq1rcu'
    //     ).then(() => {
    //         console.log('this worked')
    //     })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);
}