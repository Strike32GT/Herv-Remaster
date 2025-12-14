const API_URL= "http://127.0.0.1:8000";

export async function registrarUsuario(datos) {
    const resp= await fetch(`${API_URL}/usuarios/registro/`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre_completo: datos.nombre_completo,
            correo: datos.correo,
            password: datos.password,
            rol: datos.rol ?? "usuario",
        }),
    });

    if(!resp.ok){
        const errorData = await resp.json();
        throw errorData;
    }

    return await resp.json();
}


export async function loginUsuario(datos) {
    const resp = await fetch( `${API_URL}/usuarios/login/`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            correo: datos.correo,
            password: datos.password,
        }),
    });

    if(!resp.ok){
        const errorData = await resp.json();
        throw errorData;
    }

    return await resp.json(); 
}