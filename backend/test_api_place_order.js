import axios from 'axios';

async function testApiCall() {
    try {
        console.log("Testing POST to http://localhost:4000/api/order/place...");
        const response = await axios.post('http://localhost:4000/api/order/place', {
            userId: "650000000000000000000000",
            items: [
                {
                    _id: "test123",
                    name: "Men Round Neck Pure Cotton T-shirt",
                    price: 150,
                    size: "M",
                    quantity: 1
                }
            ],
            amount: 155,
            paymentMethod: "COD",
            address: {
                firstName: "Ramesh",
                lastName: "Kumar",
                email: "rameshkumar.test12345@gmail.com",
                street: "123 Green Avenue",
                city: "Delhi",
                state: "Delhi",
                zipcode: "110001",
                country: "India",
                phone: "9876543210"
            }
        }, {
            headers: {
                token: "mocktoken"
            }
        });

        console.log("Response from server:", response.data);
    } catch (err) {
        console.error("API Call Error:", err.response ? err.response.data : err.message);
    }
}

testApiCall();
