console.log('hi');


$.ajax({
    method: 'get',
    url: 'http://localhost:3000/search/',
    success: res => {
        console.log(res);
    },
    error: ()=>{
        alert('failed')
    }
})