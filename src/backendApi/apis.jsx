import axios from 'axios'



    


export async function ApplyLoan(formData) {
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    
    // 1. Return zaroori hai taake handleSubmit ko promise mile
    // 2. await use karein taake error handling sahi ho
    try {
        const res = await axios.post(`${baseUrl}/User/loan_inserted`, formData, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });

        return res.data; 
    } catch (error) {
        // Agar 400 error aaye toh yahan detail mil jayegi
        console.error("API Error Details:", error.response?.data);
        throw error; // Isse handleSubmit ka catch block chal jayega
    }
}


export async function GetProfile(userId){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.get(`${baseUrl}/User/user_prof/${userId}`, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }
}

// for fetch the loan details of user
export async function GetLoanDetails(userId){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.get(`${baseUrl}/User/userLoans_details?user_id=${userId}`, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }


}
// for cancel the loan application by user
export async function CancelLoanApplication(loanId){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.delete(`${baseUrl}/User/userLoans_delete/${loanId}`, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }



}
// for account Application by user
export async function AccountApplicationsumbit(formData) {
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
 try {
        const res = await axios.post(`${baseUrl}/User/acc_user`, formData, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }



}


export async function getAccountDetailsByUser(userId){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.get(`${baseUrl}/User/account_data/${userId}`, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }
}

export async function addTranscationRecord(fromData){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.post(`${baseUrl}/User/TranscationRecord`,fromData, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
       
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }
}

export async function GetTranscationHistory(userId){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.get(`${baseUrl}/User/transcationHistory/${userId}`, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }
}


export async function deletehistory(transId){
    const baseUrl = import.meta.env.VITE_BackendAPI_URL;
    try {
        const res = await axios.delete(`${baseUrl}/User/transcationdelete/${transId}`, {
            headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("API Error Details:", error.response?.data);
        throw error; 
    }



}