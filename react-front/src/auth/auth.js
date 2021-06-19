export async function signIn({email, password}) {
    let user = undefined//users.find(user => user.email === email && user.password === password);""

    const response = await fetch(
        process.env.REACT_APP_FLASK_HOST + 'api/login',
        {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })

    if (response.ok) {
        let data = await response.json();
        user = data['user'];
        console.log(user)
    }
    if (user === undefined) throw new Error();
    else return user;
}
