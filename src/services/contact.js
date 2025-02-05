import { toast, Slide } from "react-toastify";

const BASE_URL = "http://localhost:3000/contacts"


export async function getContacts() {
    try {
        const resopone = await fetch(BASE_URL);
        if (!resopone.ok) {
            throw new Error("getting Data is Goes ")
        }
        const result = await resopone.json()
        return result;
    } catch (e) {
        toast.error(e.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    }

}


export async function getContact(id) {
    try {
        const resopone = await fetch(BASE_URL/id);
        if (!resopone.ok) {
            throw new Error("Your Contact Not Found")
        }
        const result = await resopone.json()
        return result;
    } catch (e) {
        toast.error(e.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    }
    
}

export async function storeContact(contact) {
    try {
        const resopone = await fetch(BASE_URL , {
            method : "POST",
            headers : {
                "contact-Type" : "application/son"
            },
            body : JSON.stringify(contact)
        });
        if (!resopone.ok) {
            throw new Error("Sorry Contact want Create . Please Try Again")
        }
        const result = await resopone.json()
        
        return result;
    } catch (e) {
        toast.error(e.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    }  
}
export async function updateContact(id,contact) {
    try {
        const resopone = await fetch(BASE_URL/id , {
            method : "PUT",
            headers : {
                "contact-Type" : "application/son"
            },
            body : JSON.stringify(contact)
        });
        if (!resopone.ok) {
            throw new Error("Sorry Contact want Update . Please Try Again")
        }
        const result = await resopone.json()
        return result;
    } catch (e) {
        toast.error(e.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    }  
}
export async function deleteContact(id) {
    try {
        const resopone = await fetch(BASE_URL/id , {
            method : "DELETE",
            headers : {
                "contact-Type" : "application/son"
            },
        });
        if (!resopone.ok) {
            throw new Error("Sorry Contact want Delete . Please Try Again")
        }
        const result = await resopone.json()
        return result;
    } catch (e) {
        toast.error(e.message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    }  
}

