// Commmon API functions  get/post/patch/update/delete
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const URL = process.env.NEXT_PUBLIC_API_URL

export async function postData(api: string, data: any, token?: string) {


    const APIURL = URL + api;
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json', // You can adjust the content type as needed
        };

        if (token) {
            
            headers['Authorization'] = `Bearer ${token}`;
        }



        const response = await fetch(APIURL, {
            method: 'POST',
            headers,
            body: JSON.stringify(data), // Convert data to JSON string
        });

        if (!response.ok) {
            console.warn(`not OK`, response)
            const responseData = await response.json();
            // Show Error Codes;
            console.log(responseData)
            const match = responseData.error.match(/"([^"]+)"/);
            if (match) {
                toast.error(`${match[1]}`);
            } else if (responseData.error) {
                toast.error(`${responseData.error}`);
            }



            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json(); // Parse the response JSON
        console.warn('OK Data', responseData)

        return responseData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function getData(api: string, token: string) {
    const APIURL = URL + api;
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json', // You can adjust the content type as needed
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }


        const response = await fetch(APIURL, {
            method: 'GET', // Use the GET method
            headers,
        });

        if (!response.ok) {
            const responseData = await response.json();

            // Show Error Codes;
            const match = responseData?.message?.match(/"([^"]+)"/);
            if (match) {
                toast.error(`${match[1]}`);
            } else if (responseData.message) {
                toast.error(`${responseData.message}`);
            }

            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response?.json();

        return responseData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function deleteData(api: string, token: string) {
    const APIURL = URL + api;
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json', // You can adjust the content type as needed
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(APIURL, {
            method: 'DELETE', // Use the GET method
            headers,
        });

        if (!response.ok) {
            const responseData = await response.json();

            // Show Error Codes;
            const match = responseData.message.match(/"([^"]+)"/);
            if (match) {
                toast.error(`${match[1]}`);
            } else if (responseData.message) {
                toast.error(`${responseData.message}`);
            }

            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // const responseData = await response?.json();

        return response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function updateData(api: string, data: any, token: string) {


    const APIURL = URL + api;
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json', // You can adjust the content type as needed
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }


        const response = await fetch(APIURL, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(data), // Convert data to JSON string
        });

        if (!response.ok) {
            console.warn(`not OK`, response)
            const responseData = await response.json();
            // Show Error Codes;
            const match = responseData.message.match(/"([^"]+)"/);
            if (match) {
                toast.error(`${match[1]}`);
            } else if (responseData.message) {
                toast.error(`${responseData.message}`);
            }



            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json(); // Parse the response JSON
        console.warn('OK Data', responseData)

        return responseData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function putData(api: string, data: any, token: string) {


    const APIURL = URL + api;
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json', // You can adjust the content type as needed
        };


        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(APIURL, {
            method: 'PUT',
            headers,
            body: JSON.stringify(data), // Convert data to JSON string
        });

        if (!response.ok) {
            console.warn(`not OK`, response)



            const responseData = await response.json();

            // Show Error Codes;
            const match = responseData.message.match(/"([^"]+)"/);
            if (match) {
                toast.error(`${match[1]}`);
            } else if (responseData.message) {
                toast.error(`${responseData.message}`);
            }



            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json(); // Parse the response JSON
        console.warn('OK Data', responseData)

        return responseData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

