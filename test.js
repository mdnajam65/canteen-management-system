fetch('https://api.countapi.xyz/update/canteenJMI.com/counter?amount=1')
            .then((res)=>res.json())
            .then((res)=> {

                console.log(res.value);

            })