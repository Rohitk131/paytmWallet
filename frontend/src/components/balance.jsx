import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Balance() {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("No token found");
                    return;
                }

                const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setBalance(response.data.balance);
                localStorage.setItem('balance', response.data.balance); 
            } catch (error) {
                console.error("There was an error fetching the balance:", error);
            }
        };

        fetchBalance();
    }, []);  // Empty dependency array to run the effect only on mount

    return (
        <div className="container mx-auto px-4 pt-8">
            <div className="bg-slate-600 p-6 sm:p-10 rounded-2xl shadow-lg">
                {balance !== null ? (
                    <>
                    <h1 className="text-2xl sm:text-3xl font-medium text-white">Balance: </h1>
                    <h1 className="text-2xl sm:text-3xl font-medium text-blue-300"> ₹{balance}</h1>
                    </>
                ) : (
                    <p className="text-lg sm:text-xl text-white">Loading balance...</p>
                )}
            </div>
        </div>
    );
}
