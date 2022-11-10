const JWT = (user) => {
    const currentUser = {
        email: user.email
    }
    console.log(currentUser);
    fetch('https://animator-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("animator-user-token", data.token);

        })
}

export default JWT;