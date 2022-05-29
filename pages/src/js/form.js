

const inputs = document.querySelectorAll('.input__item')

inputs.forEach(input => {
    input.addEventListener('click',()=>{
        inputs.forEach(item => item.classList.remove('active'));
        input.classList.add('active')
    })
})

const sendMail = document.querySelector('.btn__submit')
var data = {
    service_id: 'service_vana9k5',
    template_id: 'template_k1x61zj',
    user_id: 'LBvNwED9UpHl2SMkm',
    
};



// sendMail.addEventListener('submit',()=>{
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//         type: 'POST',
//         data: JSON.stringify(data),
//         contentType: 'application/json'
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// })

$('#myform').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_vana9k5');
    formData.append('template_id', 'template_k1x61zj');
    formData.append('user_id', 'LBvNwED9UpHl2SMkm');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});